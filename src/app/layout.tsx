import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { grokBots, hero, site } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${hero.headline} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: `${hero.subhead} Front Desk is 3 bots for ${grokBots.three.price} one time. Full Crew is 7 bots for ${grokBots.seven.price} one time.`,
  applicationName: site.name,
  authors: [{ name: site.founder, url: site.url }],
  keywords: [
    "Lonely Owner",
    "Free Job Leak Audit",
    "missed calls",
    "quote follow up",
    "HVAC",
    "plumbing",
    "owner operated trades",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${hero.headline} | ${site.name}`,
    description: `${hero.subhead} Front Desk is 3 bots for ${grokBots.three.price} one time. Full Crew is 7 bots for ${grokBots.seven.price} one time.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${hero.headline} | ${site.name}`,
    description: `${hero.subhead} Front Desk is 3 bots for ${grokBots.three.price} one time. Full Crew is 7 bots for ${grokBots.seven.price} one time.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full scroll-pt-20 antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-cream">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-copper focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
