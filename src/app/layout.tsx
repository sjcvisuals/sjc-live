import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
    default: "SJC | Virtual Production Tools & Media Server Programming",
    template: "%s | SJC",
  },
  description:
    "Custom tool creation for virtual production. Media-server pre-programming and servicing. Client-side VP supervision. London-based specialist for LED ICVFX, Pixera, and Unreal workflows.",
  keywords: [
    "virtual production",
    "VP supervisor",
    "media server programming",
    "Pixera",
    "Unreal Engine",
    "LED ICVFX",
    "LED volume",
    "real-time graphics",
    "virtual production tools",
    "London",
    "UK",
  ],
  authors: [{ name: "Spencer Chase" }],
  creator: "SJCVisuals Ltd",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "SJC",
    title: "SJC | Virtual Production Tools & Media Server Programming",
    description:
      "Custom tool creation for virtual production. Media-server pre-programming and servicing. Client-side VP supervision.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SJC | Virtual Production Tools & Media Server Programming",
    description:
      "Custom tool creation for virtual production. Media-server pre-programming and servicing. Client-side VP supervision.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="visually-hidden focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
