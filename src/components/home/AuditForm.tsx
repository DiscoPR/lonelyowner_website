"use client";

import { type FormEvent, useId, useState } from "react";
import { useRouter } from "next/navigation";
import {
  auditTrades,
  parseAuditLead,
  type AuditFieldErrors,
} from "@/lib/audit-lead";
import { hero, site } from "@/lib/site";

const fieldClass =
  "mt-1.5 w-full min-h-11 rounded-sm border border-cream/20 bg-ink px-3 text-base text-cream placeholder:text-cream/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper";

export function AuditForm() {
  const router = useRouter();
  const formId = useId();
  const websiteId = `${formId}-website`;
  const emailId = `${formId}-email`;
  const tradeId = `${formId}-trade`;
  const phoneId = `${formId}-phone`;
  const websiteErrorId = `${formId}-website-error`;
  const emailErrorId = `${formId}-email-error`;
  const phoneErrorId = `${formId}-phone-error`;
  const tradeErrorId = `${formId}-trade-error`;
  const formErrorId = `${formId}-form-error`;

  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [trade, setTrade] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [errors, setErrors] = useState<AuditFieldErrors>({});
  const [sendFailed, setSendFailed] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = parseAuditLead({ website, email, trade, phone, company });
    if (!parsed.ok) {
      setErrors(parsed.errors);
      setSendFailed(false);
      const focusId = parsed.errors.website
        ? websiteId
        : parsed.errors.email
          ? emailId
          : parsed.errors.phone
            ? phoneId
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
        !(payload && typeof payload === "object" && "ok" in payload && payload.ok === true);

      if (failed) {
        if (fieldErrors && (fieldErrors.website || fieldErrors.email || fieldErrors.phone || fieldErrors.trade)) {
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
      id="audit-form"
      className="relative border border-cream/15 bg-shop p-5 sm:p-6"
      action="/api/free-audit"
      method="post"
      onSubmit={onSubmit}
      noValidate
      aria-busy={pending}
    >
      <h2 className="font-serif text-2xl text-cream">Free Job Leak Audit</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        Website and email. We email the report. Not a live scanner.
      </p>

      <div className="mt-4 space-y-3">
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
            className={fieldClass}
          />
          {errors.website ? (
            <p id={websiteErrorId} className="mt-1 text-sm text-copper-hot" role="alert">
              {errors.website}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={emailId} className="block text-sm font-semibold text-cream">
            Email
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
            className={fieldClass}
          />
          {errors.email ? (
            <p id={emailErrorId} className="mt-1 text-sm text-copper-hot" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor={tradeId} className="block text-sm font-semibold text-cream">
            Trade <span className="font-normal text-muted">(optional)</span>
          </label>
          <select
            id={tradeId}
            name="trade"
            value={trade}
            aria-invalid={errors.trade ? true : undefined}
            aria-describedby={errors.trade ? tradeErrorId : undefined}
            onChange={(event) => setTrade(event.target.value)}
            className={fieldClass}
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

        {/* TODO for Kevin: do not claim the bots work with the shop's existing phone number until that is confirmed. */}
        <div>
          <label htmlFor={phoneId} className="block text-sm font-semibold text-cream">
            Phone <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id={phoneId}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Shop phone"
            value={phone}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? phoneErrorId : undefined}
            onChange={(event) => setPhone(event.target.value)}
            className={fieldClass}
          />
          {errors.phone ? (
            <p id={phoneErrorId} className="mt-1 text-sm text-copper-hot" role="alert">
              {errors.phone}
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
        <p id={formErrorId} className="mt-4 text-sm leading-6 text-copper-hot" role="alert">
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
        className="cta-primary mt-5 w-full"
        disabled={pending}
        aria-describedby={sendFailed ? formErrorId : undefined}
      >
        {pending ? "Sending..." : hero.formSubmit}
      </button>
      <p className="mt-3 text-xs leading-5 text-muted">
        We use your website to review public pages only. We do not sell your
        information.
      </p>
    </form>
  );
}
