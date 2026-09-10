import { site } from "@/lib/site";

export function MobileStickyBar() {
  return (
    <div className="mobile-sticky fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-ink/95 p-3 backdrop-blur-md lg:hidden [[data-nav-open=true]_&]:hidden">
      <div className="mx-auto max-w-lg">
        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-primary w-full"
        >
          {site.primaryCtaLabel}
        </a>
      </div>
    </div>
  );
}
