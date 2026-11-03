import Link from "next/link";
import { freeAuditPath } from "@/lib/free-audit";
import { site } from "@/lib/site";

const links = [
  { href: site.calendly, label: site.primaryCtaLabel, external: true },
  { href: freeAuditPath, label: "Free 20 minute look", external: false },
  { href: "/privacy", label: "Privacy", external: false },
  { href: "/terms", label: "Terms", external: false },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-shop pb-24 lg:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="font-serif text-xl text-cream">
          {site.name} · {site.tagline}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  className="hover:text-copper-hot"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link className="hover:text-copper-hot" href={link.href}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted">© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
