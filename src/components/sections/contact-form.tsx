
"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
    Turnstile,
    type TurnstileInstance,
} from "@marsidev/react-turnstile";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/language-provider";
import translations from "@/lib/translations";

const createContactSchema = (validation: {
    name: string;
    email: string;
    service: string;
    budget: string;
    message: string;
}) =>
    z.object({
        name: z.string().trim().min(2, validation.name),
        email: z.string().trim().email(validation.email),
        service: z.string().min(1, validation.service),
        budget: z.string().min(1, validation.budget),
        message: z
            .string()
            .trim()
            .min(10, validation.message)
            .max(1000, "Message must not exceed 1000 characters."),
    });

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

const inputClass =
    "mt-2 w-full rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] px-4 py-3.5 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-violet-400";

export default function ContactForm() {
    const { language } = useLanguage();
    const t = translations[language].contact;
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const contactSchema = createContactSchema(t.validation);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [turnstileToken, setTurnstileToken] = useState("");
    const turnstileRef = useRef<TurnstileInstance | null>(null);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const messageLength = watch("message")?.length ?? 0;

    async function onSubmit(data: ContactFormData) {
        if (!turnstileToken) {
            setSubmitError("Please complete the verification first.");
            return;
        }

        setIsSubmitting(true);
        setSubmitError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    turnstileToken,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to send enquiry.");
            }

            setSubmitted(true);
        } catch (error) {
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
            setTurnstileToken("");
            turnstileRef.current?.reset();
        }
    }


    if (submitted) {
        return (
            <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={52} className="text-cyan-400" />
                <h3 className="mt-6 font-display text-2xl font-bold">
                    {t.successTitle}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">
                    {t.successDescription}
                </p>

                <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold transition hover:border-[var(--accent)]"
                >
                    {t.anotherSubmission}
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className="text-sm font-medium">
                        {t.nameLabel} *
                    </label>
                    <input
                        id="name"
                        {...register("name")}
                        placeholder={t.namePlaceholder}
                        className={inputClass}
                    />
                    {errors.name && (
                        <p className="mt-2 text-xs text-red-400">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="text-sm font-medium">
                        {t.emailLabel} *
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder={t.emailPlaceholder}
                        className={inputClass}
                    />
                    {errors.email && (
                        <p className="mt-2 text-xs text-red-400">{errors.email.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="service" className="text-sm font-medium">
                    {t.serviceLabel} *
                </label>
                <select id="service" {...register("service")} className={inputClass} defaultValue="">
                    <option value="" disabled>{t.servicePlaceholder}</option>
                    <option value="Web Development">{t.serviceOptions[0]}</option>
                    <option value="Mobile App Development">{t.serviceOptions[1]}</option>
                    <option value="UI/UX Design">{t.serviceOptions[2]}</option>
                    <option value="AI Solutions">{t.serviceOptions[3]}</option>
                    <option value="E-commerce Development">{t.serviceOptions[4]}</option>
                    <option value="Digital Marketing">{t.serviceOptions[5]}</option>
                    <option value="Other">{t.serviceOptions[6]}</option>
                </select>
                {errors.service && (
                    <p className="mt-2 text-xs text-red-400">{errors.service.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="budget" className="text-sm font-medium">
                    {t.budgetLabel} *
                </label>
                <select id="budget" {...register("budget")} className={inputClass} defaultValue="">
                    <option value="" disabled>{t.budgetPlaceholder}</option>
                    <option value="Not decided yet">{t.budgetOptions[0]}</option>
                    <option value="Under ₹10,000">{t.budgetOptions[1]}</option>
                    <option value="₹10,000 – ₹25,000">{t.budgetOptions[2]}</option>
                    <option value="₹25,000 – ₹50,000">{t.budgetOptions[3]}</option>
                    <option value="₹50,000 – ₹1,00,000">{t.budgetOptions[4]}</option>
                    <option value="Above ₹1,00,000">{t.budgetOptions[5]}</option>
                </select>
                {errors.budget && (
                    <p className="mt-2 text-xs text-red-400">{errors.budget.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="message" className="text-sm font-medium">
                    {t.messageLabel} *
                </label>
                <textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    maxLength={1000}
                    placeholder={t.messagePlaceholder}
                    className={`${inputClass} resize-y`}
                />
                <div className="mt-2 flex items-center justify-between gap-3">
                    {errors.message ? (
                        <p className="text-xs text-red-400">
                            {errors.message.message}
                        </p>
                    ) : (
                        <span />
                    )}

                    <p className="text-xs text-[var(--muted)]">
                        {messageLength}/1000 {t.characterCount}
                    </p>
                </div>
            </div>

            {submitError && (
                <p role="alert" className="text-sm text-red-400">
                    {submitError}
                </p>
            )}

            {siteKey && (
                <div className="flex justify-center">
                    <Turnstile
                        ref={turnstileRef}
                        siteKey={siteKey}
                        onSuccess={(token) => setTurnstileToken(token)}
                        onExpire={() => setTurnstileToken("")}
                        onError={() => setTurnstileToken("")}
                    />
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="group flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[var(--primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isSubmitting ? t.sendingButton : t.submitButton}
                {!isSubmitting && (
                    <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                )}
            </button>

            <p className="text-center text-xs leading-6 text-[var(--muted)]">
                {t.privacyNote}
            </p>
        </form>
    );
}
