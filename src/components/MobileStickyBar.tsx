"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { hero } from "@/lib/site";

export function MobileStickyBar() {
  const pathname = usePathname();
  if (pathname === "/" || pathname === "/thank-you") return null;

  return (
    <div className="mobile-sticky fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-ink/95 p-3 backdrop-blur-md lg:hidden [[data-nav-open=true]_&]:hidden">
      <div className="mx-auto max-w-lg">
        <Link href="/#audit-form" className="cta-primary w-full">
          {hero.primaryCta}
        </Link>
      </div>
    </div>
  );
}
