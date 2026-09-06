import { CtaLink } from "@/components/CtaLink";
import { site } from "@/lib/site";

export function Webinar() {
  return (
    <section id="webinar" className="border-y border-cream/10 bg-steel">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Weekly webinar
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
            {site.webinar.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-cream/75">
            {site.webinar.cadence}. Plain talk for owners who run a shop, not a
            software company. Same booking link as the audit call until a
            dedicated registration page is live. Say you are coming for the
            webinar when you book.
          </p>
        </div>
        <CtaLink>Save a Wednesday seat</CtaLink>
      </div>
    </section>
  );
}
