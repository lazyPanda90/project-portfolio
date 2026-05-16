import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

import "./globals.css";

const headingFont = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"]
});

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "Håkon R. Billingstad | Developer Portfolio",
    template: "%s | Håkon R. Billingstad"
  },
  description: "An online resume showcasing coding projects, engineering decisions, and shipped results.",
  openGraph: {
    title: "Håkon R. Billingstad | Developer Portfolio",
    description: "A curated portfolio of software projects and technical work.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Håkon R. Billingstad | Developer Portfolio",
    description: "A curated portfolio of software projects and technical work."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <div className="bg-orb bg-orb-one" />
        <div className="bg-orb bg-orb-two" />
        <Navbar />
        <main className="site-shell main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
