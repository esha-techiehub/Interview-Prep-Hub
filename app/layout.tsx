import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { DocsShell } from "@/app/components/docs/DocsShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interview Prep Hub | DevOps, Cyber Security, Data Analytics",
  description:
    "One place to prepare interview questions and answers for DevOps, Cyber Security, and Data Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white">
        <DocsShell>{children}</DocsShell>
      </body>
    </html>
  );
}
