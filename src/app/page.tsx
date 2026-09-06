import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Offer } from "@/components/home/Offer";
import { Problem } from "@/components/home/Problem";
import { ResourcesPreview } from "@/components/home/ResourcesPreview";
import { Webinar } from "@/components/home/Webinar";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, organizationJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <Problem />
      <WhoWeHelp />
      <HowItWorks />
      <Offer />
      <Webinar />
      <ResourcesPreview />
      <Faq />
    </>
  );
}
