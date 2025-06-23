import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/provider/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Karthik Kumar – Full Stack Developer",
  description:
    "Personal portfolio of Karthik Kumar, a passionate full-stack developer specializing in modern web technologies.",
  keywords: [
    "Karthik Kumar",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Karthik Kumar", url: "https://karthikkumar.vercel.app" }],
  creator: "Karthik Kumar",
  publisher: "Karthik Kumar",
  metadataBase: new URL("https://karthikkumar.vercel.app"),
  openGraph: {
    title: "Karthik Kumar – Full Stack Developer",
    description:
      "Explore the portfolio of Karthik Kumar, a developer who crafts scalable, user-centric web applications.",
    url: "https://karthikkumar.vercel.app",
    siteName: "Karthik Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Karthik Kumar – Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karthik Kumar – Full Stack Developer",
    description:
      "Showcasing the work and skills of Karthik Kumar, a modern web developer.",
    images: ["/og-image.png"],
    creator: "@yourtwitterhandle", // optional
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
