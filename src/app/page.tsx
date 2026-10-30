import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { InsteadOf } from "@/components/home/InsteadOf";
import { Pain } from "@/components/home/Pain";
import { Pricing } from "@/components/home/Pricing";
import { SampleReport } from "@/components/home/SampleReport";
import { Trust } from "@/components/home/Trust";
import { Who } from "@/components/home/Who";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, organizationJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <SampleReport />
      <Pain />
      <InsteadOf />
      <Pricing />
      <Who />
      <Trust />
      <Faq />
      <FinalCta />
    </>
  );
}
