import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms for using ${site.domain} and booking work with ${site.name}.`,
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="October 30, 2026">
      <p>
        These terms cover the public website at {site.domain} and the way you
        book time with {site.name}. If you hire us for an audit or
        implementation, the statement of work or invoice for that job is the
        contract for that job. These pages do not replace that.
      </p>
      <h2 className="font-serif text-2xl text-ink">The site</h2>
      <p>
        Content on this site is for information. It describes how we work with
        owner-operated trades. It is not legal, tax, or accounting advice. It
        is not a guarantee that your shop will book more jobs.
      </p>
      <h2 className="font-serif text-2xl text-ink">Booking a call</h2>
      <p>
        The 15-minute call is a fit check. Booking it does not start paid work.
        Paid work is agreed on the call or in writing after it.
      </p>
      <h2 className="font-serif text-2xl text-ink">Free Job Leak Audit</h2>
      <p>
        The Free Job Leak Audit is a short report we email after a look at
        public website pages. It is not a live scanner. Asking for it does not
        start paid work. A paid setup is agreed on its own, at the flat setup
        price shown on the homepage.
      </p>
      <h2 className="font-serif text-2xl text-ink">Done-for-you support</h2>
      <p>
        Done-for-you support is $297 a month after you have seen the systems
        work in your shop. That monthly plan starts after the work is live and
        useful, not on a promise. Either side can end it as agreed in the
        written plan for that engagement.
      </p>
      <h2 className="font-serif text-2xl text-ink">Owner control</h2>
      <p>
        Unless you later ask for something different in writing, bots draft and
        the owner sends. You stay responsible for what goes to your customers,
        crew, and vendors. We do not take over your license, your insurance, or
        your relationship with the customer.
      </p>
      <h2 className="font-serif text-2xl text-ink">Acceptable use</h2>
      <p>
        Do not misuse this site. Do not scrape it in a way that knocks it over.
        Do not use it to send spam or to pretend you are {site.name}.
      </p>
      <h2 className="font-serif text-2xl text-ink">Third-party links</h2>
      <p>
        Calendly and any other outbound link is someone else&apos;s service.
        Their rules apply once you leave {site.domain}.
      </p>
      <h2 className="font-serif text-2xl text-ink">Limitation</h2>
      <p>
        To the extent the law allows, {site.name} is not liable for lost jobs,
        lost profits, or indirect damages that come from using this website or
        from decisions you make after reading it. Paid project work is handled
        under that project&apos;s terms.
      </p>
      <h2 className="font-serif text-2xl text-ink">Changes</h2>
      <p>
        We can update these terms by posting a new date on this page. If a
        change matters to a paid engagement already in motion, we will say so
        in writing.
      </p>
      <h2 className="font-serif text-2xl text-ink">Contact</h2>
      <p>
        Questions about these terms go through the{" "}
        <a
          className="underline"
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.primaryCtaLabel}
        </a>{" "}
        link on this site.
      </p>
    </LegalPage>
  );
}
