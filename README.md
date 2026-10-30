# Lonely Owner

Marketing site for [lonelyowner.com](https://lonelyowner.com). Next.js App Router.

Founder: Kevin Andreosky  
Homepage offer: Free Job Leak Audit, then Front Desk (3 bots, $297 one time) or Full Crew (7 bots, $500 one time).  
Nav CTA: [Book a call](https://calendly.com/trainedbykevin/letsmeet)

## Environment variables

The site builds and runs with none set. The homepage form and the `/free-audit` form both `POST /api/free-audit`. That route emails the lead only when both of these are set:

- `RESEND_API_KEY`: API key from [Resend](https://resend.com)
- `AUDIT_FROM_EMAIL`: a verified Resend sender, such as `Lonely Owner <audits@your-verified-domain>`

Optional:

- `AUDIT_TO_EMAIL`: inbox that receives leads. Defaults to `kevin.andreosky@gmail.com`.

If the key or from-address is missing, the form does not send and does not open the visitor's email app. It shows an error and asks them to try again.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Import on Vercel

Kevin can import this repo as-is. Nothing extra to configure.

1. In Vercel, click **Add New** → **Project**.
2. Import `DiscoPR/lonelyowner_website`.
3. Confirm:
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./`
   - Build Command: `next build` (default)
   - Output: default Next.js (do not set it to a static folder)
   - **Environment Variables:** none are required for the build. To deliver audit requests from the homepage and `/free-audit`, set `RESEND_API_KEY` and `AUDIT_FROM_EMAIL` (see above). `AUDIT_TO_EMAIL` is optional.
4. Deploy from the `main` branch.

Production URLs after DNS:

- `https://lonelyowner.com`
- `https://www.lonelyowner.com`

## Domains and GoDaddy DNS

Add both hosts in Vercel under **Project → Settings → Domains**:

- `lonelyowner.com`
- `www.lonelyowner.com`

Then in GoDaddy DNS for `lonelyowner.com`, point traffic at Vercel. Remove parking, forwarding, or old A/CNAME records on `@` and `www` first so they do not fight the new ones.

Typical Vercel records (confirm the exact values in the Vercel domain screen):

| Type  | Name | Value                 | TTL |
| ----- | ---- | --------------------- | --- |
| A     | `@`  | `76.76.21.21`         | 600 |
| CNAME | `www`| `cname.vercel-dns.com`| 600 |

Notes:

- GoDaddy sometimes has a hidden forwarding rule that sends the root to `www` or to a parked page. Turn that off.
- If GoDaddy will not let you set an A record on `@` because of their parked records, delete the conflicting records, wait a few minutes, then add the Vercel A record.
- Apex `lonelyowner.com` uses an **A** record. `www` uses a **CNAME**. Do not put an A record on `www`.
- DNS can take from a few minutes up to 48 hours. Vercel will show a green check when the domain is valid.
- After both hosts are valid, set `lonelyowner.com` as the primary domain in Vercel so `www` redirects to it. The site canonical URL, Open Graph URL, and sitemap all use `https://lonelyowner.com`. A check on October 29, 2026 found the reverse: `https://lonelyowner.com` redirected to `https://www.lonelyowner.com`.
- HTTP to HTTPS is handled by Vercel (308) before this app runs. Leave GoDaddy domain forwarding off. A forwarding rule fights the A and CNAME records and can return an error page instead of that redirect.

You do not need Vercel nameservers unless you want Vercel to manage the whole DNS zone. The A + CNAME method above keeps DNS at GoDaddy.

## What is configurable

Edit `src/lib/site.ts` for:

- Calendly URL
- Tagline
- Audit and Grok bot prices
- FAQ and resource copy

There are no social profile links on the site.

## Routes

- `/` homepage (Free Job Leak Audit form, then Front Desk and Full Crew)
- `/thank-you` confirmation after a homepage audit request (not indexed)
- `/free-audit` Free Job Leak Audit page. The form posts to the same `/api/free-audit` route as the homepage. Not a live scanner.
- `/resources` shop jobs a bot should draft (owner still sends)
- `/privacy` privacy policy
- `/terms` terms of use

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Builds with zero required env vars. Lead email from the homepage and `/free-audit` needs `RESEND_API_KEY` and `AUDIT_FROM_EMAIL`.
