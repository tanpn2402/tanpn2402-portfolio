import type React from "react";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Labhesh - Full Stack Web Developer",
  description:
    "Full Stack Web Developer with 7+ years of experience in ReactJS, Java, and modern web technologies. Specialized in high-traffic applications and microservices architecture.",
  keywords:
    "Full Stack Developer, ReactJS, Java, Spring Boot, NestJS, GraphQL, WebSocket, Portfolio",
  authors: [{ name: "Labhesh" }],
  openGraph: {
    title: "Labhesh - Full Stack Web Developer",
    description:
      "Full Stack Web Developer with 7+ years of experience in ReactJS, Java, and modern web technologies.",
    type: "website",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable}`}>
        {children}
      </body>
    </html>
  );
}
