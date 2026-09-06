"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { CtaLink } from "@/components/CtaLink";
import { navLinks, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.dataset.navOpen = open ? "true" : "false";
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      delete document.body.dataset.navOpen;
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-lg tracking-tight text-cream"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-sm bg-copper text-sm font-bold text-ink"
          >
            LO
          </span>
          <span>{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm text-cream/75 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="nav-link text-sm font-semibold text-cream/80 hover:text-cream"
          >
            {site.phoneDisplay}
          </a>
          <CtaLink className="!min-h-10 !px-4 !text-sm">
            {site.primaryCtaLabel}
          </CtaLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-cream/20 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-cream transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute top-1.5 left-0 block h-0.5 w-5 bg-cream transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-cream transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-cream/10 bg-ink lg:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm px-2 py-3 text-lg text-cream hover:bg-cream/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="rounded-sm px-2 py-3 text-lg text-cream hover:bg-cream/5"
            onClick={() => setOpen(false)}
          >
            Call {site.phoneDisplay}
          </a>
          <CtaLink className="mt-2 w-full" href={site.calendly}>
            {site.primaryCtaLabel}
          </CtaLink>
        </nav>
      </div>
    </header>
  );
}
