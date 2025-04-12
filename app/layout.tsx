import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yappy Hour Sydney",
    template: "%s | Yappy Hour Sydney",
  },
  description:
    "Connect, explore and enjoy Sydney's vibrant urban scene with fellow adventure seekers through our diverse social events and activities.",
  keywords: [
    "Sydney social events",
    "social activities Sydney",
    "meet new people Sydney",
    "social club Sydney",
    "urban adventures Sydney",
  ],
  authors: [{ name: "Yappy Hour Sydney" }],
  creator: "Yappy Hour Sydney",
  publisher: "Yappy Hour Sydney",
  metadataBase: new URL("https://yappyhour.com.au"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://yappyhour.com.au",
    title: "Yappy Hour Sydney",
    description:
      "Connect, explore and enjoy Sydney's vibrant urban scene with fellow adventure seekers",
    siteName: "Yappy Hour Sydney",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yappy Hour Sydney Social Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yappy Hour Sydney",
    description:
      "Connect, explore and enjoy Sydney's vibrant urban scene with fellow adventure seekers",
    images: ["/images/twitter-image.jpg"],
    creator: "@yappyhoursydney",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
