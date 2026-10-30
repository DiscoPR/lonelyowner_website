"use client";

import { type FormEvent, useId, useState } from "react";
import { useRouter } from "next/navigation";
import {
  auditTrades,
  parseAuditLead,
  type AuditFieldErrors,
} from "@/lib/audit-lead";
import { site } from "@/lib/site";

export function OpsLeakForm() {
  const router = useRouter();
  const formId = useId();
  const websiteId = `${formId}-website`;
  const emailId = `${formId}-email`;
  const tradeId = `${formId}-trade`;
  const websiteErrorId = `${formId}-website-error`;
  const emailErrorId = `${formId}-email-error`;
  const tradeErrorId = `${formId}-trade-error`;
  const formErrorId = `${formId}-form-error`;

  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [trade, setTrade] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<AuditFieldErrors>({});
  const [sendFailed, setSendFailed] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;

    const phone = "";
    const parsed = parseAuditLead({ website, email, trade, phone, company });
    if (!parsed.ok) {
      setErrors(parsed.errors);
      setSendFailed(false);
      const focusId = parsed.errors.website
        ? websiteId
        : parsed.errors.email
          ? emailId
          : tradeId;
      queueMicrotask(() => document.getElementById(focusId)?.focus());
      return;
    }

    setErrors({});
    setSendFailed(false);
    setPending(true);

    try {
      const response = await fetch("/api/free-audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ website, email, trade, phone, company }),
      });
      const payload: unknown = await response.json().catch(() => null);
      const fieldErrors =
        payload &&
        typeof payload === "object" &&
        "errors" in payload &&
        payload.errors &&
        typeof payload.errors === "object"
          ? (payload.errors as AuditFieldErrors)
          : null;
      const failed =
        !response.ok ||
        !(
          payload &&
          typeof payload === "object" &&
          "ok" in payload &&
          payload.ok === true
        );

      if (failed) {
        if (fieldErrors && (fieldErrors.website || fieldErrors.email || fieldErrors.trade)) {
          setErrors(fieldErrors);
          setSendFailed(false);
        } else {
          setSendFailed(true);
        }
        return;
      }

      router.push("/thank-you");
    } catch {
      setSendFailed(true);
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="relative border border-cream/15 bg-shop p-6 sm:p-7"
      action="/api/free-audit"
      method="post"
      onSubmit={onSubmit}
      noValidate
      aria-busy={pending}
    >
      <h2 className="font-serif text-2xl text-cream">Get your Free Job Leak Audit</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        URL and email. We email the report after a look at public pages.
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
            Where should we send the report?
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
            aria-invalid={errors.trade ? true : undefined}
            aria-describedby={errors.trade ? tradeErrorId : undefined}
            onChange={(event) => setTrade(event.target.value)}
            className="mt-2 w-full min-h-12 rounded-sm border border-cream/20 bg-ink px-3 text-base text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
          >
            <option value="">Select if you want</option>
            {auditTrades.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.trade ? (
            <p id={tradeErrorId} className="mt-1 text-sm text-copper-hot" role="alert">
              {errors.trade}
            </p>
          ) : null}
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

      {sendFailed ? (
        <p id={formErrorId} className="mt-5 text-sm leading-6 text-copper-hot" role="alert">
          Something went wrong sending your request. Email Kevin at{" "}
          <a
            className="font-semibold underline decoration-copper/70 underline-offset-4"
            href={`mailto:${site.kevinEmail}`}
          >
            {site.kevinEmail}
          </a>{" "}
          or{" "}
          <a
            className="font-semibold underline decoration-copper/70 underline-offset-4"
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            book a call
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        className="cta-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
        disabled={pending}
        aria-describedby={sendFailed ? formErrorId : undefined}
      >
        {pending ? "Sending..." : "Check my ops leaks"}
      </button>
      <p className="mt-3 text-sm leading-6 text-muted">
        Free Job Leak Audit. We email the report after a look at public pages.
        Not a live scanner.
      </p>
      <p className="mt-2 text-xs leading-5 text-muted">
        We use your URL to review public pages only. We do not log into your
        systems. Unsubscribe anytime.
      </p>
    </form>
  );
}
