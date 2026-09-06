import Link from "next/link";
import { resourceJobs, resourcePreviewIds } from "@/lib/site";

export function ResourcesPreview() {
  const preview = resourcePreviewIds.map((index) => resourceJobs[index]);

  return (
    <section id="resources" className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
              Resources
            </p>
            <h2 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
              Jobs a one-owner shop should hand to a bot
            </h2>
            <p className="mt-4 leading-7 text-cream/72">
              Every bot drafts. The owner sends. Nothing goes to a customer
              until you say so.
            </p>
          </div>
          <Link
            href="/resources"
            className="cta-secondary shrink-0 text-sm"
          >
            See all shop jobs
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {preview.map((item) => (
            <article key={item.title} className="border border-cream/10 p-6">
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-3 leading-7 text-cream/72">{item.job}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
