
import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  Noto_Sans_Tamil,
} from "next/font/google";

import SmoothScroll from "@/components/providers/smooth-scroll";
import ThemeProvider from "@/components/providers/theme-provider";
import LanguageProvider from "@/components/providers/language-provider";
import Script from "next/script";

import "./globals.css";

const GA_ID = "G-39GW7MD3TM";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  subsets: ["tamil"],
  variable: "--font-noto-tamil",
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://meinova.vercel.app"),
  title: {
    default: "MeiNova | Web, App & AI Development Agency",
    template: "%s | MeiNova",
  },
  description:
    "MeiNova builds modern websites, mobile apps, e-commerce platforms and AI solutions for businesses worldwide. Transform your ideas into digital experiences.",
  applicationName: "MeiNova",
  authors: [{ name: "MeiNova" }],
  creator: "MeiNova",
  publisher: "MeiNova",
  alternates: {
    canonical: "https://meinova.vercel.app/",
  },
  verification: {
    google: "HocFgJdmJvfECxb9XXeUXbGrCMC6dpevAuyozuoa7t4",
  },
  keywords: [
    "MeiNova",
    "Web Development",
    "Website Development",
    "Mobile App Development",
    "UI UX Design",
    "AI Solutions",
    "E-commerce Development",
    "Digital Experiences",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "MeiNova | Web, App & AI Development Agency",
    description:
      "We design and develop digital experiences that help businesses grow, from websites and mobile apps to AI-powered solutions.",
    siteName: "MeiNova",
    images: [
      {
        url: "/images/og-image.jpg",
        alt: "MeiNova - Ideas Into Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeiNova | Web, App & AI Development Agency",
    description:
      "Turning imagination into digital reality through web development, mobile apps, UI/UX and AI solutions.",
    images: ["/images/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${notoTamil.variable} antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
        </Script>
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
