import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lexci - AI-Powered Security Infrastructure",
  description: "Lexci is an AI-native platform integrating cybersecurity, intelligent systems, and engineering capabilities to power the next generation of digital infrastructure.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedDots from "@/components/AnimatedDots";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Gilda+Display&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased min-h-screen bg-background text-foreground flex flex-col`}
      >
        <AnimatedDots />
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
