import Link from "next/link";
import { CtaLink } from "@/components/CtaLink";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="shop-grid mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight">
        That page is not on the board.
      </h1>
      <p className="mt-4 text-cream/72">
        The link is dead or the page moved. Head home or book the audit call.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link href="/" className="cta-secondary">
          Back to home
        </Link>
        <CtaLink>{site.primaryCtaLabel}</CtaLink>
      </div>
    </section>
  );
}
