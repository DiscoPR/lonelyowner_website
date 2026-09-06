import { site } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div className="mobile-sticky fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-ink/95 p-3 backdrop-blur-md lg:hidden [[data-nav-open=true]_&]:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        <a href={site.phoneHref} className="cta-secondary w-full">
          Call
        </a>
        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-primary w-full"
        >
          Book
        </a>
      </div>
    </div>
  );
}
