"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { freeAuditBooking, freeAuditPath } from "@/lib/free-audit";
import { site } from "@/lib/site";

export function MobileStickyBar() {
  const pathname = usePathname();
  const label =
    pathname === freeAuditPath ? freeAuditBooking.label : site.primaryCtaLabel;
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="mobile-sticky fixed inset-x-0 bottom-0 z-40 border-t border-cream/10 bg-ink/95 p-3 backdrop-blur-md lg:hidden [[data-nav-open=true]_&]:hidden">
      <div className="mx-auto max-w-lg">
        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-primary w-full whitespace-normal text-center"
        >
          {label}
        </a>
      </div>
    </div>
  );
}
