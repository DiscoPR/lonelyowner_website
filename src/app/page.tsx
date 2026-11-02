import type { Metadata } from "next";
import { Audits } from "@/components/home/Audits";
import { Calculator } from "@/components/home/Calculator";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { Guarantee } from "@/components/home/Guarantee";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pain } from "@/components/home/Pain";
import { Pricing } from "@/components/home/Pricing";
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
      <Pain />
      <Calculator />
      <Pricing />
      <Audits />
      <HowItWorks />
      <Guarantee />
      <Faq />
      <FinalCta />
    </>
  );
}
