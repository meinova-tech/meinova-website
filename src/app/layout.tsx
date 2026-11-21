
import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  Noto_Sans_Tamil,
} from "next/font/google";

import SmoothScroll from "@/components/providers/smooth-scroll";
import ThemeProvider from "@/components/providers/theme-provider";
import LanguageProvider from "@/components/providers/language-provider";

import "./globals.css";

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
  title: {
    default: "MeiNova | From Ideas to Applications",
    template: "%s | MeiNova",
  },
  description:
    "MeiNova transforms ideas into digital experiences through web development, mobile applications, UI/UX design, e-commerce development and AI solutions.",
  applicationName: "MeiNova",
  authors: [{ name: "MeiNova" }],
  creator: "MeiNova",
  publisher: "MeiNova",
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
    title: "MeiNova | From Ideas to Applications",
    description:
      "We design and develop digital experiences that help businesses grow, from websites and mobile apps to AI-powered solutions.",
    siteName: "MeiNova",
  },
  twitter: {
    card: "summary",
    title: "MeiNova | From Ideas to Applications",
    description:
      "Turning imagination into digital reality through web development, mobile apps, UI/UX and AI solutions.",
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
        <ThemeProvider>
          <LanguageProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
