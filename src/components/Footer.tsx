import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-shop">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-cream">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                className="hover:text-copper-hot"
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.primaryCtaLabel}
              </a>
            </li>
            <li>
              <Link className="hover:text-copper-hot" href="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <Link className="hover:text-copper-hot" href="/terms">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
            Social
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary !min-h-11 !px-4 !text-sm"
            >
              YouTube
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary !min-h-11 !px-4 !text-sm"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. {site.domain}
      </div>
    </footer>
  );
}
