
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    service: z.string().min(1).max(100),
    budget: z.string().min(1).max(100),
    message: z.string().trim().min(10).max(1000),
    turnstileToken: z.string().min(1),
});

export async function POST(request: Request) {
    try {
        const gmailUser = process.env.GMAIL_USER;
        const gmailPassword = process.env.GMAIL_APP_PASSWORD;
        const recipient = process.env.CONTACT_EMAIL;
        const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

        if (
            !gmailUser ||
            !gmailPassword ||
            !recipient ||
            !turnstileSecret
        ) {
            console.error("Gmail environment variables are missing.");

            return NextResponse.json(
                { error: "Email service is not configured." },
                { status: 500 }
            );
        }

        const body: unknown = await request.json();
        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: "Please check your form details and try again." },
                { status: 400 }
            );
        }

        const {
            name,
            email,
            service,
            budget,
            message,
            turnstileToken,
        } = result.data;

        // Verify the Turnstile token with Cloudflare.
        const verificationResponse = await fetch(
            "https://challenges.cloudflare.com/turnstile/v0/siteverify",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    secret: turnstileSecret,
                    response: turnstileToken,
                }),
            }
        );

        const verification = await verificationResponse.json();

        if (!verification.success) {
            return NextResponse.json(
                {
                    error: "Bot verification failed. Please try again.",
                },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: gmailUser,
                pass: gmailPassword,
            },
        });

        // 1. Send the enquiry notification to MeiNova.
        await transporter.sendMail({
            from: `"MeiNova Website" <${gmailUser}>`,
            to: recipient,
            replyTo: email,
            subject: `New MeiNova Enquiry: ${service}`,
            text: `
New project enquiry received!

Name: ${name}
Email: ${email}
Service: ${service}
Budget: ${budget}

Project Details:
${message}
      `,
        });

        // 2. Send an automatic confirmation to the customer.
        try {
            await transporter.sendMail({
                from: `"MeiNova" <${gmailUser}>`,
                to: email,
                replyTo: gmailUser,
                subject: "We've received your enquiry – MeiNova",
                text: `
Hi ${name},

Thank you for reaching out to MeiNova!

We've successfully received your project enquiry.

Our team will review your requirements and get back to you as soon as possible.

We appreciate your interest in working with us and look forward to bringing your ideas to life.

From Ideas to Applications.

Warm regards,
Team MeiNova
hello.meinova@gmail.com

This is an automated confirmation email. Please feel free to reply if you have any additional information to share.
        `,
            });
        } catch (confirmationError) {
            // The enquiry has already reached MeiNova.
            // Log the confirmation failure without losing the enquiry.
            console.error(
                "Customer confirmation email failed:",
                confirmationError
            );
        }

        return NextResponse.json(
            {
                message: "Your enquiry has been received successfully.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            {
                error: "We couldn't send your enquiry. Please try again later.",
            },
            { status: 500 }
        );
    }
}
