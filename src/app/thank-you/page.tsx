import type { Metadata } from "next";
import Link from "next/link";
import { site, whoItIsFor } from "@/lib/site";

export const metadata: Metadata = {
  title: "Audit request received",
  description: "We got your Free Job Leak Audit request.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${site.url}/thank-you` },
};

export default function ThankYouPage() {
  return (
    <section className="shop-grid">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          Free Job Leak Audit
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl">
          We got your Free Job Leak Audit request.
        </h1>
        <p className="mt-5 text-lg leading-8 text-cream/78">
          It is in. We will email the report to the address you used.
        </p>
        {/* TODO for Kevin: say when the report arrives. Do not render a number, and do not say that a time is missing. */}

        <h2 className="mt-12 font-serif text-3xl tracking-tight">Who it is for</h2>
        <p className="mt-4 text-lg leading-8 text-cream/75">{whoItIsFor}</p>

        <div className="mt-12 border border-cream/15 bg-shop p-6">
          <h2 className="font-serif text-2xl">One thing to do now</h2>
          <p className="mt-3 text-lg leading-8 text-cream/80">
            Call your own shop number tonight after hours and see what a
            customer hears.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 inline-flex text-sm font-semibold text-cream underline decoration-copper/70 underline-offset-4 hover:text-copper-hot"
        >
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
