import type { Metadata } from "next";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { Founder } from "@/components/home/Founder";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";
import { Workshop } from "@/components/home/Workshop";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, hero, organizationJsonLd, site } from "@/lib/site";

const title = `${hero.title} | ${site.name}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description: hero.body,
  openGraph: {
    title,
    description: hero.body,
    url: site.url,
  },
  twitter: {
    title,
    description: hero.body,
  },
  alternates: { canonical: site.url },
};

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <Workshop />
      <HowItWorks />
      <Founder />
      <Pricing />
      <Faq />
      <FinalCta />
    </>
  );
}
