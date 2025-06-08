import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, SUSE } from "next/font/google";

import { pretendard } from "@/app/fonts";

// Script import might be unused now, will be removed if no other scripts use it.
// import Script from "next/script";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load SUSE font using next/font/google
const suse = SUSE({
  variable: "--font-suse", // CSS variable for SUSE font
  subsets: ["latin"], // Add subsets if applicable
});

export const metadata: Metadata = {
  title: "ROUND",
  description: "Elevate Your Data Pipeline With Intelligent Automation",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>{/* Manual Google Font links for SUSE are removed */}</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${suse.variable} ${pretendard.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
