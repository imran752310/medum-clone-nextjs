import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Global/Navbar";
import Footer from "@/Components/Global/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medium Clone — Publish, Read and Share Stories",
  description:
    "A modern Medium.com clone built with Next.js. Read, write, and share powerful stories across technology, AI, and life.",
  keywords: [
    "Medium clone",
    "Next.js blog",
    "developer blog",
    "write articles",
    "tech stories",
    "Next.js Medium",
    "open source blog platform",
    "personal blog"
  ],
  authors: [{ name: "Imran", url: "https://yourdomain.com" }],
  creator: "Imran",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://yourdomain.com",
    title: "Medium Clone — Publish, Read and Share Stories",
    description:
      "A powerful Next.js-based blogging platform inspired by Medium. Share your thoughts and connect with others.",
    siteName: "Medium Clone",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Medium Clone OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medium Clone — Publish, Read and Share Stories",
    description:
      "Write, read, and grow with this Medium-style Next.js platform for creators and developers.",
    creator: "@yourTwitterHandle", // Optional
    images: ["https://yourdomain.com/og-image.png"],
  },
  metadataBase: new URL("https://yourdomain.com"), // Replace with your domain
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
