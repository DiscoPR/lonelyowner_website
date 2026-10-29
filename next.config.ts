import type { NextConfig } from "next";

// Fonts are self-hosted by next/font. Calendly is an outbound link, not an
// embed, and the free-audit form opens a mailto link. There is no analytics
// script. 'unsafe-inline' covers Next's bootstrap scripts, JSON-LD, and the
// font style tag. A nonce policy would force every page to render dynamically.
const isDev = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto: https://calendly.com",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },
];

function allowThisOrigin(host: string): {
  source: string;
  has: [{ type: "host"; value: string }];
  headers: [{ key: string; value: string }];
} {
  return {
    source: "/:path*",
    has: [{ type: "host", value: host }],
    headers: [
      { key: "Access-Control-Allow-Origin", value: `https://${host}` },
    ],
  };
}

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // Vercel adds Access-Control-Allow-Origin: * on static responses.
      // Nothing on this site is fetched cross-origin, so replace that
      // wildcard with the host that actually served the page. An empty
      // value does not remove the platform header.
      allowThisOrigin("lonelyowner.com"),
      allowThisOrigin("www.lonelyowner.com"),
    ];
  },
};

export default nextConfig;
