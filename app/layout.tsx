import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liveicon.vercel.app"),
  title: {
    default: "LiveIcons — Animated React icons you copy & paste",
    template: "%s — LiveIcons",
  },
  description:
    "Open-source animated icon library built with SVG and Framer Motion. Copy the TSX, paste it in your React project, ship delightful interfaces.",
  icons: "/liveicon.ico",
  openGraph: {
    title: "LiveIcons — Animated React icons you copy & paste",
    description:
      "Open-source animated icon library built with SVG and Framer Motion. No package install — copy the TSX and ship.",
    url: "/",
    siteName: "LiveIcons",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveIcons — Animated React icons you copy & paste",
    description:
      "Open-source animated icon library built with SVG and Framer Motion. No package install — copy the TSX and ship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-zinc-200`}
      >
        <Navbar/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
