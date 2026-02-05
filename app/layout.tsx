import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Indcode Technologies",
    template: "%s | Indcode Technologies",
  },
  description:
    "Indcode Technologies is a software and technology company building scalable, secure and future-ready digital products for startups and enterprises.",
  keywords: [
    "Indcode Technologies",
    "software company India",
    "web development",
    "app development",
    "SaaS development",
    "technology services",
  ],
  authors: [{ name: "Indcode Technologies" }],
  creator: "Indcode Technologies",
  openGraph: {
    title: "Indcode Technologies",
    description:
      "Code crafted in India, built for the world. We build scalable digital products.",
    url: "https://indcode.in",
    siteName: "Indcode Technologies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indcode Technologies",
    description:
      "Building scalable, secure and future-ready digital products.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}