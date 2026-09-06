import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="paper-grid text-ink">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">
          Legal
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ink-soft">Last updated {updated}</p>
        <div className="legal-copy mt-10 space-y-6 text-base leading-7 text-ink-soft">
          {children}
        </div>
      </div>
    </article>
  );
}
