import { Audits } from "@/components/home/Audits";
import { Faq } from "@/components/home/Faq";
import { GrokBots } from "@/components/home/GrokBots";
import { Hero } from "@/components/home/Hero";
import { Start } from "@/components/home/Start";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd, organizationJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <Audits />
      <GrokBots />
      <Start />
      <Faq />
    </>
  );
}
