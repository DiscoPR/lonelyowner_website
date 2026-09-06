import type { ReactNode } from "react";
import { site } from "@/lib/site";

type CtaLinkProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export function CtaLink({
  children,
  href = site.calendly,
  className = "",
  variant = "primary",
}: CtaLinkProps) {
  const style = variant === "primary" ? "cta-primary" : "cta-secondary";
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${style} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
