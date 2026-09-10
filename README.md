# Lonely Owner

Marketing site for [lonelyowner.com](https://lonelyowner.com). Next.js App Router. No environment variables required.

Founder: Kevin Andreosky  
Primary CTA: [Book a 15-minute audit call](https://calendly.com/trainedbykevin/letsmeet)

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
   - **Environment Variables: none.** Leave this empty.
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
- After both hosts are valid, set `lonelyowner.com` as the primary domain in Vercel and 301 `www` to it (or the reverse). Either is fine. Pick one and keep it.

You do not need Vercel nameservers unless you want Vercel to manage the whole DNS zone. The A + CNAME method above keeps DNS at GoDaddy.

## What is configurable

Edit `src/lib/site.ts` for:

- Calendly URL
- Tagline
- YouTube and Facebook footer buttons
- Webinar title and cadence
- Offer, FAQ, and resource copy

YouTube default: `https://www.youtube.com/@LonelyOwner`  
Facebook default: `https://www.facebook.com/LonelyOwner`

## Routes

- `/` homepage
- `/resources` shop jobs a bot should draft (owner still sends)
- `/privacy` privacy policy
- `/terms` terms of use

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Builds with zero required env vars
