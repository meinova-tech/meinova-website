
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
    ArrowDown,
    ArrowUpRight,
    CalendarDays,
    Camera,
    Check,
    ChevronDown,
    Clock,
    Copy,
    Heart,
    MapPin,
    Music2,
    Send,
    Sparkles,
    Volume2,
    VolumeX,
    Utensils,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const weddingDate = new Date("2027-12-12T10:00:00+05:30");

const couple = {
    bride: "Diya",
    groom: "Arjun",
    fullNames: "Arjun & Diya",
    date: "12 December 2027",
    venue: "The Grand Palace",
    address: "ECR, Chennai, Tamil Nadu, India",
    story:
        "Some stories are written in the stars. Ours began with a simple hello, grew through countless conversations, and became a love we can't wait to celebrate with you.",
};

const events = [
    {
        title: "Mehendi",
        date: "11 December 2027",
        time: "4:00 PM onwards",
        venue: "Garden Courtyard",
        address: "ECR, Chennai, Tamil Nadu",
        dress: "Festive shades of green",
        description: "An afternoon of color, music, laughter and mehendi.",
        map: "https://maps.google.com/?q=East+Coast+Road+Chennai",
    },
    {
        title: "Wedding Ceremony",
        date: "12 December 2027",
        time: "10:00 AM – 11:30 AM",
        venue: "The Grand Palace",
        address: "ECR, Chennai, Tamil Nadu",
        dress: "Traditional attire",
        description: "Join us as we begin our forever.",
        map: "https://maps.google.com/?q=East+Coast+Road+Chennai",
    },
    {
        title: "Reception",
        date: "12 December 2027",
        time: "7:00 PM onwards",
        venue: "The Grand Palace",
        address: "ECR, Chennai, Tamil Nadu",
        dress: "Elegant festive wear",
        description: "Dinner, dancing and a celebration of love.",
        map: "https://maps.google.com/?q=East+Coast+Road+Chennai",
    },
];

const gallery = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1000&q=85",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1000&q=85",
];

const calendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" +
    encodeURIComponent("Arjun & Diya Wedding") +
    "&dates=20271212T043000Z/20271212T063000Z" +
    "&details=" +
    encodeURIComponent("Celebrate the wedding of Arjun and Diya!") +
    "&location=" +
    encodeURIComponent("The Grand Palace, ECR, Chennai");

function Countdown() {
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const update = () => {
            const difference = Math.max(
                0,
                weddingDate.getTime() - Date.now()
            );

            setTime({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (difference / (1000 * 60 * 60)) % 24
                ),
                minutes: Math.floor(
                    (difference / (1000 * 60)) % 60
                ),
                seconds: Math.floor(
                    (difference / 1000) % 60
                ),
            });
        };

        update();
        const interval = setInterval(update, 1000);

        return () => clearInterval(interval);
    }, []);

    const units = [
        { label: "Days", value: time.days },
        { label: "Hours", value: time.hours },
        { label: "Minutes", value: time.minutes },
        { label: "Seconds", value: time.seconds },
    ];

    return (
        <div className="grid grid-cols-4 gap-3 sm:gap-6">
            {units.map((unit) => (
                <div key={unit.label} className="text-center">
                    <div className="font-serif text-3xl text-[#8b6652] sm:text-5xl">
                        {String(unit.value).padStart(2, "0")}
                    </div>
                    <div className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#9d887b] sm:text-xs">
                        {unit.label}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function WeddingDemo() {
    const [invitationOpened, setInvitationOpened] = useState(false);
    const [musicOn, setMusicOn] = useState(false);
    const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
    const [guestName, setGuestName] = useState("");
    const [attendance, setAttendance] = useState("yes");
    const [guestCount, setGuestCount] = useState("2");
    const [meal, setMeal] = useState("Vegetarian");
    const [message, setMessage] = useState("");
    const [wishName, setWishName] = useState("");
    const [wishText, setWishText] = useState("");
    const [wishes, setWishes] = useState([
        {
            name: "A loving friend",
            text: "Wishing you both a lifetime of laughter, love and beautiful memories!",
        },
        {
            name: "Family",
            text: "May your home always be filled with happiness and blessings.",
        },
    ]);
    const [copied, setCopied] = useState(false);
    const [activePhoto, setActivePhoto] = useState<string | null>(null);

    const shareInvitation = async () => {
        const shareData = {
            title: "Arjun & Diya's Wedding",
            text: "You're invited to celebrate the wedding of Arjun & Diya on 12 December 2027!",
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch {
                // Sharing cancelled by guest.
            }
        } else {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
    };

    const copyAddress = async () => {
        await navigator.clipboard.writeText(couple.address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const submitWish = (e: React.FormEvent) => {
        e.preventDefault();

        if (!wishName.trim() || !wishText.trim()) return;

        setWishes((previous) => [
            { name: wishName.trim(), text: wishText.trim() },
            ...previous,
        ]);

        setWishName("");
        setWishText("");
    };

    const submitRsvp = (e: React.FormEvent) => {
        e.preventDefault();
        setRsvpSubmitted(true);
    };

    return (
        <main className="min-h-screen overflow-x-clip bg-[#faf7f1] text-[#514034]">

            {/* Top navigation */}
            <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-[#8b6652]/10 bg-[#faf7f1]/90 px-4 py-3 backdrop-blur-xl sm:px-8">
                <Link
                    href="/"
                    className="rounded-full border border-[#8b6652]/20 bg-white/60 px-3 py-2 text-xs text-[#745544] transition hover:bg-[#8b6652]/10 sm:px-4 sm:text-sm"
                >
                    ← MeiNova
                </Link>

                <span className="font-serif text-sm tracking-widest sm:text-lg">
                    {couple.bride} & {couple.groom}
                </span>

                <button
                    onClick={() => setMusicOn(!musicOn)}
                    className="flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[#8b6652]/20 bg-white/60 text-[#8b6652] transition hover:bg-[#8b6652]/10"
                    aria-label="Toggle music"
                    title="Music demo control"
                >
                    {musicOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
                </button>
            </nav>

            {/* Invitation opening */}
            {!invitationOpened && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#f3e9dd] px-6">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(180,130,100,0.12),_transparent_70%)]" />

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative w-full max-w-lg text-center"
                    >
                        <div className="mb-8 text-[#a17c62]">
                            <Sparkles className="mx-auto" size={24} />
                        </div>

                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17c62] sm:text-xs">
                            Together with their families
                        </p>

                        <h1 className="mt-8 font-serif text-5xl leading-tight text-[#735442] sm:text-7xl">
                            {couple.bride}
                            <span className="mx-3 font-light italic text-[#bd9879]">
                                &
                            </span>
                            <br />
                            {couple.groom}
                        </h1>

                        <div className="mx-auto my-8 h-px w-20 bg-[#b99a7f]" />

                        <p className="font-serif text-lg tracking-wide text-[#8c705b]">
                            12 · 12 · 2027
                        </p>

                        <p className="mt-4 text-xs leading-6 text-[#9a8471]">
                            A celebration of love, a beginning of forever.
                        </p>

                        <button
                            onClick={() => setInvitationOpened(true)}
                            className="mt-10 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#a17c62]/40 bg-[#a17c62] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#89684f]"
                        >
                            Open Invitation
                            <Heart size={15} />
                        </button>

                        <p className="mt-5 text-[10px] tracking-widest text-[#ad9682]">
                            WITH LOVE, ALWAYS
                        </p>
                    </motion.div>
                </div>
            )}

            {/* Hero */}
            <section className="relative flex min-h-[100svh] items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8">

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,157,125,0.14),_transparent_70%)]" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={invitationOpened ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="relative mx-auto max-w-5xl"
                >
                    <div className="mb-6 text-[#b28d70]">
                        <Sparkles className="mx-auto" size={21} />
                    </div>

                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17c62] sm:text-xs">
                        We&apos;re getting married
                    </p>

                    <h1 className="mt-8 font-serif text-5xl leading-tight text-[#765745] sm:text-7xl md:text-8xl">
                        {couple.bride}
                        <span className="block py-1 text-3xl font-light italic text-[#bc9879] sm:text-5xl">
                            &
                        </span>
                        {couple.groom}
                    </h1>

                    <p className="mx-auto mt-8 max-w-xl font-serif text-lg leading-8 text-[#907763] sm:text-xl">
                        With joyful hearts, we invite you to celebrate the beginning of our
                        forever.
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-2 text-[#a17c62]">
                        <CalendarDays size={18} />
                        <p className="font-serif text-lg tracking-widest">
                            {couple.date}
                        </p>
                        <p className="text-xs tracking-wider">
                            {couple.venue}
                        </p>
                    </div>

                    <div className="mx-auto mt-12 max-w-2xl">
                        <Countdown />
                    </div>

                    <a
                        href="#story"
                        className="mt-14 inline-flex items-center gap-2 text-xs tracking-widest text-[#a17c62] transition hover:text-[#735442]"
                    >
                        DISCOVER OUR STORY
                        <ArrowDown size={14} />
                    </a>
                </motion.div>

                {/* Decorative corners */}
                <div className="pointer-events-none absolute left-4 top-28 h-20 w-20 border-l border-t border-[#b28d70]/20 sm:left-10 sm:h-32 sm:w-32" />
                <div className="pointer-events-none absolute bottom-20 right-4 h-20 w-20 border-b border-r border-[#b28d70]/20 sm:right-10 sm:h-32 sm:w-32" />
            </section>

            {/* Couple */}
            <section className="px-5 py-20 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-6xl text-center">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17c62] sm:text-xs">
                        The happy couple
                    </p>

                    <h2 className="mt-4 font-serif text-4xl text-[#765745] sm:text-5xl">
                        Two hearts, one story.
                    </h2>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-12">
                        {/* Bride */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="group relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-t-[200px] border border-[#b28d70]/20 bg-[#eee1d3]">
                                <Image
                                    src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=85"
                                    alt="Bride portrait placeholder"
                                    fill
                                    sizes="(max-width: 640px) 90vw, 384px"
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4d382b]/30 to-transparent" />
                            </div>

                            <h3 className="mt-7 font-serif text-3xl text-[#765745]">
                                {couple.bride}
                            </h3>
                            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#a17c62]">
                                The Bride
                            </p>
                            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#9a8471]">
                                A heart full of dreams, a smile that lights up every room, and
                                a love for life&apos;s little beautiful moments.
                            </p>
                        </motion.div>

                        {/* Groom */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                        >
                            <div className="group relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-t-[200px] border border-[#b28d70]/20 bg-[#eee1d3]">
                                <Image
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85"
                                    alt="Groom portrait placeholder"
                                    fill
                                    sizes="(max-width: 640px) 90vw, 384px"
                                    className="object-cover transition duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4d382b]/30 to-transparent" />
                            </div>

                            <h3 className="mt-7 font-serif text-3xl text-[#765745]">
                                {couple.groom}
                            </h3>
                            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#a17c62]">
                                The Groom
                            </p>
                            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#9a8471]">
                                A kind soul, a steady heart, and someone who found his favorite
                                adventure in the person he loves.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section
                id="story"
                className="bg-[#f1e8dd] px-5 py-20 sm:px-8 sm:py-28"
            >
                <div className="mx-auto max-w-3xl text-center">
                    <Heart className="mx-auto text-[#b28d70]" size={22} />

                    <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-[#a17c62] sm:text-xs">
                        Our story
                    </p>

                    <h2 className="mt-4 font-serif text-4xl text-[#765745] sm:text-5xl">
                        Written in the stars.
                    </h2>

                    <p className="mt-8 font-serif text-lg leading-9 text-[#8c705b] sm:text-xl sm:leading-10">
                        {couple.story}
                    </p>

                    <div className="mx-auto mt-10 h-px w-20 bg-[#b99a7f]" />

                    <p className="mt-6 font-serif text-sm italic text-[#a17c62]">
                        And now, a new chapter begins...
                    </p>
                </div>
            </section>

            {/* Events */}
            <section id="events" className="px-5 py-20 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17c62] sm:text-xs">
                            Join the celebrations
                        </p>
                        <h2 className="mt-4 font-serif text-4xl text-[#765745] sm:text-5xl">
                            Wedding festivities
                        </h2>
                        <p className="mt-5 text-sm text-[#9a8471]">
                            Every moment is special. We would love to celebrate them all with you.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {events.map((event, index) => (
                            <motion.article
                                key={event.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.12 }}
                                className="border border-[#b28d70]/20 bg-white/50 p-6 sm:p-8"
                            >
                                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#eee1d3] text-[#a17c62]">
                                    <Heart size={18} />
                                </div>

                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#a17c62]">
                                    Celebration {index + 1}
                                </p>

                                <h3 className="mt-3 font-serif text-2xl text-[#765745]">
                                    {event.title}
                                </h3>

                                <p className="mt-4 text-sm leading-6 text-[#9a8471]">
                                    {event.description}
                                </p>

                                <div className="mt-6 space-y-3 border-t border-[#b28d70]/15 pt-5 text-xs text-[#8c705b]">
                                    <div className="flex items-start gap-2">
                                        <CalendarDays size={15} className="mt-0.5 shrink-0" />
                                        {event.date}
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Clock size={15} className="mt-0.5 shrink-0" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <MapPin size={15} className="mt-0.5 shrink-0" />
                                        <span>
                                            {event.venue}
                                            <br />
                                            {event.address}
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <Sparkles size={15} className="mt-0.5 shrink-0" />
                                        {event.dress}
                                    </div>
                                </div>

                                <a
                                    href={event.map}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 border border-[#b28d70]/30 px-4 py-3 text-xs text-[#8c705b] transition hover:bg-[#eee1d3]"
                                >
                                    View Directions
                                    <ArrowUpRight size={14} />
                                </a>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Venue & Map */}
            <section className="bg-[#f1e8dd] px-5 py-20 sm:px-8 sm:py-24">
                <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.35em] text-[#a17c62] sm:text-xs">
                            Find us
                        </p>

                        <h2 className="mt-4 font-serif text-4xl text-[#765745] sm:text-5xl">
                            The place where
                            <br />
                            forever begins.
                        </h2>

                        <div className="mt-8 flex items-start gap-3 text-[#8c705b]">
                            <MapPin size={20} className="mt-1 shrink-0" />
                            <div>
                                <p className="font-serif text-xl">{couple.venue}</p>
                                <p className="mt-2 text-sm leading-6">{couple.address}</p>
                            </div>
                        </div>

                        <button
                            onClick={copyAddress}
                            className="mt-5 inline-flex min-h-11 items-center gap-2 border border-[#b28d70]/30 px-4 py-3 text-xs text-[#8c705b] transition hover:bg-white/50"
                        >
                            {copied ? <Check size={15} /> : <Copy size={15} />}
                            {copied ? "Copied!" : "Copy address"}
                        </button>

                        <a
                            href="https://maps.google.com/?q=East+Coast+Road+Chennai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex min-h-11 items-center gap-2 bg-[#a17c62] px-5 py-3 text-xs text-white transition hover:bg-[#89684f]"
                        >
                            Open Google Maps
                            <ArrowUpRight size={15} />
                        </a>
                    </div>

                    <div className="overflow-hidden border border-[#b28d70]/20 bg-white p-2">
                        <iframe
                            title="Wedding venue map"
                            src="https://maps.google.com/maps?q=East%20Coast%20Road%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="380"
                            loading="lazy"
                            className="border-0"
                        />
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" className="px-5 py-20 sm:px-8 sm:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center">
                        <Camera className="mx-auto text-[#b28d70]" size={22} />
                        <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#a17c62] sm:text-xs">
                            Moments we treasure
                        </p>
                        <h2 className="mt-4 font-serif text-4xl text-[#765745] sm:text-5xl">
                            A little glimpse of us.
                        </h2>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
                        {gallery.map((photo, index) => (
                            <motion.button
                                key={photo}
                                onClick={() => setActivePhoto(photo)}
                                whileHover={{ scale: 1.02 }}
                                className={`group relative overflow-hidden bg-[#eee1d3] ${index === 0 || index === 5
                                    ? "aspect-[3/4]"
                                    : "aspect-square"
                                    }`}
                            >
                                <Image
                                    src={photo}
                                    alt={`Wedding gallery photo ${index + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                                    className="object-cover transition duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-[#4d382b]/0 transition group-hover:bg-[#4d382b]/10" />
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* RSVP */}
            <section
                id="rsvp"
                className="bg-[#f1e8dd] px-5 py-20 sm:px-8 sm:py-28"
            >
                <div className="mx-auto max-w-2xl">
                    <div className="text-center">
                        <Heart className="mx-auto text-[#b28d70]" size={22} />

                        <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#a17c62] sm:text-xs">
                            We hope you can join us
                        </p>

                        <h2 className="mt-4 font-serif text-4xl text-[#765745] sm:text-5xl">
                            Kindly RSVP
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-[#9a8471]">
                            Let us know if you can celebrate with us. Your presence means the
                            world to us.
                        </p>
                    </div>

                    {!rsvpSubmitted ? (
                        <form
                            onSubmit={submitRsvp}
                            className="mt-10 space-y-5 border border-[#b28d70]/20 bg-white/60 p-5 sm:p-8"
                        >
                            <div>
                                <label className="mb-2 block text-xs text-[#8c705b]">
                                    Your name *
                                </label>
                                <input
                                    required
                                    value={guestName}
                                    onChange={(e) => setGuestName(e.target.value)}
                                    placeholder="Full name"
                                    className="min-h-12 w-full border border-[#b28d70]/20 bg-white/70 px-4 text-sm text-[#514034] outline-none transition focus:border-[#a17c62]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-xs text-[#8c705b]">
                                    Will you be attending? *
                                </label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setAttendance("yes")}
                                        className={`min-h-12 border px-4 text-sm transition ${attendance === "yes"
                                            ? "border-[#a17c62] bg-[#a17c62] text-white"
                                            : "border-[#b28d70]/20 bg-white/70 text-[#8c705b]"
                                            }`}
                                    >
                                        Joyfully Accept
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setAttendance("no")}
                                        className={`min-h-12 border px-4 text-sm transition ${attendance === "no"
                                            ? "border-[#a17c62] bg-[#a17c62] text-white"
                                            : "border-[#b28d70]/20 bg-white/70 text-[#8c705b]"
                                            }`}
                                    >
                                        Regretfully Decline
                                    </button>
                                </div>
                            </div>

                            {attendance === "yes" && (
                                <>
                                    <div>
                                        <label className="mb-2 block text-xs text-[#8c705b]">
                                            Number of guests
                                        </label>
                                        <select
                                            value={guestCount}
                                            onChange={(e) => setGuestCount(e.target.value)}
                                            className="min-h-12 w-full border border-[#b28d70]/20 bg-white/70 px-4 text-sm text-[#514034] outline-none focus:border-[#a17c62]"
                                        >
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4">4 Guests</option>
                                            <option value="5">5 Guests</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-xs text-[#8c705b]">
                                            Meal preference
                                        </label>
                                        <select
                                            value={meal}
                                            onChange={(e) => setMeal(e.target.value)}
                                            className="min-h-12 w-full border border-[#b28d70]/20 bg-white/70 px-4 text-sm text-[#514034] outline-none focus:border-[#a17c62]"
                                        >
                                            <option>Vegetarian</option>
                                            <option>Non-vegetarian</option>
                                            <option>Vegan</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            <div>
                                <label className="mb-2 block text-xs text-[#8c705b]">
                                    A message for the couple (optional)
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={3}
                                    placeholder="Your wishes..."
                                    className="w-full resize-none border border-[#b28d70]/20 bg-white/70 px-4 py-3 text-sm text-[#514034] outline-none focus:border-[#a17c62]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#a17c62] px-5 py-3 text-sm text-white transition hover:bg-[#89684f]"
                            >
                                Submit RSVP
                                <Send size={15} />
                            </button>

                            <p className="text-center text-[10px] text-[#ad9682]">
                                Demo form — submissions are not sent or saved to a server.
                            </p>
                        </form>
                    ) : (
                        <div className="mt-10 border border-[#b28d70]/20 bg-white/60 p-8 text-center">
                            <Check className="mx-auto text-[#a17c62]" size={32} />

                            <h3 className="mt-4 font-serif text-2xl text-[#765745]">
                                Thank you, {guestName}!
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[#9a8471]">
                                {attendance === "yes"
                                    ? "We can't wait to celebrate with you!"
                                    : "Thank you for letting us know. You will be missed."}
                            </p>

                            <p className="mt-3 text-xs text-[#ad9682]">
                                Your response is a demo and has not been transmitted.
                            </p>

                            <button
                                onClick={() => setRsvpSubmitted(false)}
                                className="mt-6 border border-[#b28d70]/30 px-4 py-3 text-xs text-[#8c705b] transition hover:bg-white"
                            >
                                Edit response
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Guest wishes */}
            <section className="px-5 py-20 sm:px-8 sm:py-24">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center">
                        <Heart className="mx-auto text-[#b28d70]" size={22} />
                        <p className="mt-5 text-[10px] uppercase tracking-[0.35em] text-[#a17c62] sm:text-xs">
                            Leave a blessing
                        </p>
                        <h2 className="mt-4 font-serif text-4xl text-[#765745] sm:text-5xl">
                            Words from the heart.
                        </h2>
                    </div>

                    <form
                        onSubmit={submitWish}
                        className="mt-8 space-y-4 border border-[#b28d70]/20 bg-white/50 p-5 sm:p-7"
                    >
                        <input
                            required
                            value={wishName}
                            onChange={(e) => setWishName(e.target.value)}
                            placeholder="Your name"
                            className="min-h-12 w-full border border-[#b28d70]/20 bg-white/70 px-4 text-sm outline-none focus:border-[#a17c62]"
                        />

                        <textarea
                            required
                            value={wishText}
                            onChange={(e) => setWishText(e.target.value)}
                            rows={3}
                            placeholder="Write your wishes for the couple..."
                            className="w-full resize-none border border-[#b28d70]/20 bg-white/70 px-4 py-3 text-sm outline-none focus:border-[#a17c62]"
                        />

                        <button
                            type="submit"
                            className="flex min-h-11 items-center justify-center gap-2 bg-[#a17c62] px-5 py-3 text-xs text-white transition hover:bg-[#89684f]"
                        >
                            Send your wishes
                            <Send size={14} />
                        </button>

                        <p className="text-[10px] text-[#ad9682]">
                            Demo wishes appear only in this browser session.
                        </p>
                    </form>

                    <div className="mt-8 space-y-4">
                        {wishes.map((wish, index) => (
                            <div
                                key={`${wish.name}-${index}`}
                                className="border border-[#b28d70]/15 bg-white/40 p-5"
                            >
                                <Heart
                                    size={14}
                                    className="mb-3 text-[#b28d70]"
                                />
                                <p className="font-serif text-base leading-7 text-[#8c705b]">
                                    {wish.text}
                                </p>
                                <p className="mt-3 text-xs text-[#a17c62]">
                                    — {wish.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Practical details */}
            <section className="bg-[#f1e8dd] px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-center font-serif text-3xl text-[#765745] sm:text-4xl">
                        A few helpful details
                    </h2>

                    <div className="mt-10 grid gap-5 sm:grid-cols-3">
                        <div className="border border-[#b28d70]/20 bg-white/40 p-6 text-center">
                            <Utensils className="mx-auto text-[#a17c62]" size={21} />
                            <h3 className="mt-4 font-serif text-lg text-[#765745]">
                                Dining
                            </h3>
                            <p className="mt-3 text-xs leading-6 text-[#9a8471]">
                                Vegetarian and non-vegetarian options will be available.
                                Please share dietary needs through RSVP.
                            </p>
                        </div>

                        <div className="border border-[#b28d70]/20 bg-white/40 p-6 text-center">
                            <MapPin className="mx-auto text-[#a17c62]" size={21} />
                            <h3 className="mt-4 font-serif text-lg text-[#765745]">
                                Parking
                            </h3>
                            <p className="mt-3 text-xs leading-6 text-[#9a8471]">
                                Complimentary venue parking information will be shared with
                                guests.
                            </p>
                        </div>

                        <div className="border border-[#b28d70]/20 bg-white/40 p-6 text-center">
                            <Sparkles className="mx-auto text-[#a17c62]" size={21} />
                            <h3 className="mt-4 font-serif text-lg text-[#765745]">
                                Dress code
                            </h3>
                            <p className="mt-3 text-xs leading-6 text-[#9a8471]">
                                Traditional and festive attire. Wear something that makes you
                                feel wonderful!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendar & Share */}
            <section className="px-5 py-16 sm:px-8 sm:py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <CalendarDays className="mx-auto text-[#b28d70]" size={24} />

                    <h2 className="mt-5 font-serif text-3xl text-[#765745] sm:text-4xl">
                        Save the date
                    </h2>

                    <p className="mt-4 text-sm text-[#9a8471]">
                        We can&apos;t wait to celebrate this beautiful day with you.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <a
                            href={calendarUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-12 items-center gap-2 bg-[#a17c62] px-5 py-3 text-sm text-white transition hover:bg-[#89684f]"
                        >
                            <CalendarDays size={16} />
                            Add to Google Calendar
                        </a>

                        <button
                            onClick={shareInvitation}
                            className="inline-flex min-h-12 items-center gap-2 border border-[#b28d70]/30 bg-white/50 px-5 py-3 text-sm text-[#8c705b] transition hover:bg-[#eee1d3]"
                        >
                            <ArrowUpRight size={16} />
                            Share invitation
                        </button>
                    </div>

                    {copied && (
                        <p className="mt-4 text-xs text-[#a17c62]">
                            Copied successfully!
                        </p>
                    )}
                </div>
            </section>

            {/* Final invitation */}
            <section className="relative overflow-hidden bg-[#e9d9c9] px-5 py-24 text-center sm:px-8 sm:py-32">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5),_transparent_70%)]" />

                <div className="relative mx-auto max-w-3xl">
                    <Heart className="mx-auto text-[#a17c62]" size={24} />

                    <h2 className="mt-8 font-serif text-4xl leading-tight text-[#765745] sm:text-6xl">
                        Your presence is
                        <br />
                        our greatest gift.
                    </h2>

                    <p className="mt-6 font-serif text-lg italic text-[#9a8471]">
                        With love, {couple.bride} & {couple.groom}
                    </p>

                    <button
                        onClick={shareInvitation}
                        className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full border border-[#a17c62]/30 bg-[#a17c62] px-6 py-3 text-sm text-white transition hover:bg-[#89684f]"
                    >
                        Share our invitation
                        <ArrowUpRight size={16} />
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#faf7f1] px-5 py-8 text-center">
                <p className="font-serif text-xl text-[#765745]">
                    {couple.bride} & {couple.groom}
                </p>

                <p className="mt-3 text-[10px] tracking-[0.25em] text-[#a17c62]">
                    12 · 12 · 2027
                </p>

                <div className="mx-auto my-5 h-px w-12 bg-[#b99a7f]" />

                <p className="text-[10px] text-[#ad9682]">
                    A wedding invitation experience by
                </p>

                <Link
                    href="/"
                    className="mt-2 inline-block text-xs font-medium tracking-widest text-[#8c705b] transition hover:text-[#765745]"
                >
                    MEINOVA
                </Link>

                <p className="mt-5 text-[9px] text-[#b9a391]">
                    Sample invitation · Created for demonstration
                </p>
            </footer>

            {/* Photo lightbox */}
            {activePhoto && (
                <div
                    className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 p-4"
                    onClick={() => setActivePhoto(null)}
                >
                    <button
                        className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white"
                        onClick={() => setActivePhoto(null)}
                        aria-label="Close image"
                    >
                        ✕
                    </button>

                    <Image
                        src={activePhoto}
                        alt="Wedding gallery enlarged"
                        width={1600}
                        height={1200}
                        sizes="(max-width: 768px) 95vw, 80vw"
                        className="max-h-[85vh] max-w-full object-contain"
                    />
                </div>
            )}
        </main>
    );
}
