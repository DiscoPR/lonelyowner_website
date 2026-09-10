import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles contact information on ${site.domain}.`,
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="September 10, 2026">
      <p>
        This policy covers {site.name} ({site.domain}), operated by{" "}
        {site.founder}. It is a marketing site for an AI Opportunity Audit and
        related shop-system work. It is written in plain language on purpose.
      </p>
      <h2 className="font-serif text-2xl text-ink">What this site collects</h2>
      <p>
        This website does not require an account and does not run a customer
        portal. If you only read the pages, we do not ask you for a name,
        email, or payment card on this site.
      </p>
      <p>
        If you book a call, you leave {site.domain} and use Calendly. Calendly
        will collect the name, email, and other details you type there. If you
        contact us through that booking form, we receive whatever you send.
      </p>
      <h2 className="font-serif text-2xl text-ink">How we use contact details</h2>
      <p>
        We use your information to answer you, book or run an audit, and follow
        up on work you asked for. We do not sell your contact list. We do not
        rent it. We do not hand it to a random ad network so they can chase
        you around the internet.
      </p>
      <h2 className="font-serif text-2xl text-ink">Hosting and logs</h2>
      <p>
        The site is hosted on Vercel. Like most hosts, Vercel may keep basic
        server logs such as IP address, browser type, and the page you requested.
        Those logs are used to keep the site up and to debug problems, not to
        build a profile of your shop.
      </p>
      <h2 className="font-serif text-2xl text-ink">Third-party tools</h2>
      <p>
        Booking uses Calendly. YouTube and Facebook buttons send you to those
        companies if you click them. Each of those services has its own privacy
        policy. Read theirs if you use their forms or pages.
      </p>
      <h2 className="font-serif text-2xl text-ink">Cookies</h2>
      <p>
        This marketing site is not built around a tracking pixel or an email
        popup. Your browser may still store ordinary technical cookies from the
        host or from a page you click through to, such as Calendly.
      </p>
      <h2 className="font-serif text-2xl text-ink">How long we keep it</h2>
      <p>
        Emails, call notes, and booking details stay as long as we need them to
        do the work you asked for, keep ordinary business records, or meet the
        law. Ask us to delete what we can if you no longer want us to have it.
      </p>
      <h2 className="font-serif text-2xl text-ink">Your requests</h2>
      <p>
        If you want a copy of what we have, a correction, or a deletion, use the{" "}
        <a
          className="underline"
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.primaryCtaLabel}
        </a>{" "}
        link on this site. We will handle it as the law requires and as a shop
        should: promptly and without a maze.
      </p>
      <h2 className="font-serif text-2xl text-ink">Children</h2>
      <p>
        This site is for business owners. It is not directed at children under
        13, and we do not knowingly collect information from them.
      </p>
      <h2 className="font-serif text-2xl text-ink">Changes</h2>
      <p>
        If this policy changes, we will update the date at the top of this
        page. Keep using the site after a change means you have seen the new
        version.
      </p>
      <h2 className="font-serif text-2xl text-ink">Contact</h2>
      <p>
        {site.founder}
        <br />
        {site.name}
        <br />
        <a
          className="underline"
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.primaryCtaLabel}
        </a>
      </p>
    </LegalPage>
  );
}
