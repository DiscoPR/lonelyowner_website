"use client";

import { type FormEvent, useId, useRef, useState } from "react";
import { CtaLink } from "@/components/CtaLink";
import {
  opsLeakContact,
  opsLeakTrades,
  parseOpsLeakSubmission,
  type OpsLeakFieldErrors,
  type OpsLeakRequest,
} from "@/lib/ops-leak";
import { site } from "@/lib/site";

function calendlyFor(email: string) {
  const url = new URL(site.calendly);
  url.searchParams.set("email", email);
  return url.toString();
}

function openMailto(href: string) {
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export function OpsLeakForm() {
  const formId = useId();
  const websiteId = `${formId}-website`;
  const emailId = `${formId}-email`;
  const tradeId = `${formId}-trade`;
  const websiteErrorId = `${formId}-website-error`;
  const emailErrorId = `${formId}-email-error`;
  const thanksRef = useRef<HTMLHeadingElement>(null);

  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [trade, setTrade] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<OpsLeakFieldErrors>({});
  const [request, setRequest] = useState<OpsLeakRequest | null>(null);
  const [botThankYou, setBotThankYou] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = parseOpsLeakSubmission({ website, email, trade, company });
    if (!parsed.ok) {
      setErrors(parsed.errors);
      return;
    }
    setErrors({});
    if (parsed.bot) {
      setBotThankYou(true);
      queueMicrotask(() => thanksRef.current?.focus());
      return;
    }
    setRequest(parsed.request);
    queueMicrotask(() => {
      thanksRef.current?.focus();
      openMailto(parsed.request.mailto);
    });
  }

  if (botThankYou || request) {
    const summaryEmail = request?.email ?? email;
    const domain = request?.domain;
    const fitCall = request ? calendlyFor(request.email) : site.calendly;

    return (
      <div className="border border-cream/15 bg-shop p-6 sm:p-7" role="status">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          Score request
        </p>
        <h2
          ref={thanksRef}
          tabIndex={-1}
          className="mt-3 font-serif text-3xl tracking-tight text-cream outline-none"
        >
          Got it. Your Ops Leak Score PDF is being prepared.
        </h2>
        <p className="mt-4 leading-7 text-cream/78">
          {domain ? (
            <>
              We will email the 5-area summary for{" "}
              <span className="text-cream">{domain}</span> to{" "}
              <span className="text-cream">{summaryEmail}</span>.
            </>
          ) : (
            <>
              We will email the 5-area summary to{" "}
              <span className="text-cream">{summaryEmail}</span>.
            </>
          )}{" "}
          It flags the biggest leak. This page does not show a live score.
        </p>
        {request ? (
          <p className="mt-3 leading-7 text-cream/72">
            Send the note your mail app opened. That note is how we get the
            website. If it did not open, use the button below.
          </p>
        ) : null}

        <div className="mt-6 flex flex-col items-start gap-3">
          {request ? (
            <a className="cta-secondary w-full sm:w-auto" href={request.mailto}>
              Open the request email
            </a>
          ) : null}
          <CtaLink className="w-full sm:w-auto" href={fitCall}>
            Book the AI Opportunity Audit
          </CtaLink>
          <CtaLink
            className="w-full sm:w-auto"
            href={fitCall}
            variant="secondary"
          >
            Book a short fit call
          </CtaLink>
        </div>
        <p className="mt-4 text-sm leading-6 text-muted">
          The fit call is about 15 minutes. It is for the $999 AI Opportunity
          Audit. If the summary shows a clear money leak, book while it is
          top of mind.
        </p>
        <p className="mt-4 text-sm leading-6 text-cream/70">
          Didn&apos;t get the email? Check spam, then reply from the address
          you used so we can resend.{" "}
          <a className="underline decoration-copper/70 underline-offset-4 hover:text-cream" href={`mailto:${opsLeakContact.email}`}>
            {opsLeakContact.email}
          </a>
          {" · "}
          <a className="underline decoration-copper/70 underline-offset-4 hover:text-cream" href={opsLeakContact.phoneHref}>
            {opsLeakContact.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      className="relative border border-cream/15 bg-shop p-6 sm:p-7"
      onSubmit={onSubmit}
      noValidate
    >
      <h2 className="font-serif text-2xl text-cream">Get your free Ops Leak Score</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        URL and email. We email the summary after a look at public pages.
      </p>

      <div className="mt-5 space-y-4">
        <div>
          <label htmlFor={websiteId} className="block text-sm font-semibold text-cream">
            Your business website
          </label>
          <input
            id={websiteId}
            name="website"
            type="url"
            inputMode="url"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            autoComplete="url"
            required
            placeholder="https://yourshop.com"
            value={website}
            aria-invalid={errors.website ? true : undefined}
            aria-describedby={errors.website ? websiteErrorId : undefined}
            onChange={(event) => setWebsite(event.target.value)}
            className="mt-2 w-full min-h-12 rounded-sm border border-cream/20 bg-ink px-3 text-base text-cream placeholder:text-cream/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          />
          <p className="mt-1 text-xs text-muted">Homepage is fine.</p>
          {errors.website ? (
            <p id={websiteErrorId} className="mt-1 text-sm text-copper-hot" role="alert">
              {errors.website}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={emailId} className="block text-sm font-semibold text-cream">
            Where should we send the summary?
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            autoComplete="email"
            required
            placeholder="you@yourshop.com"
            value={email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? emailErrorId : undefined}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full min-h-12 rounded-sm border border-cream/20 bg-ink px-3 text-base text-cream placeholder:text-cream/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          />
          <p className="mt-1 text-xs text-muted">Use a real inbox.</p>
          {errors.email ? (
            <p id={emailErrorId} className="mt-1 text-sm text-copper-hot" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={tradeId} className="block text-sm font-semibold text-cream">
            What kind of shop? <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id={tradeId}
            name="trade"
            value={trade}
            onChange={(event) => setTrade(event.target.value)}
            className="mt-2 w-full min-h-12 rounded-sm border border-cream/20 bg-ink px-3 text-base text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          >
            <option value="">Select if you want</option>
            {opsLeakTrades.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </p>

      <button type="submit" className="cta-primary mt-6 w-full">
        Check my ops leaks
      </button>
      <p className="mt-3 text-sm leading-6 text-muted">
        Free summary. Your email app opens a note for you to send. We email
        the score back. Not a live scanner.
      </p>
      <p className="mt-2 text-xs leading-5 text-muted">
        We use your URL to review public pages only. We do not log into your
        systems. Unsubscribe anytime.
      </p>
    </form>
  );
}
