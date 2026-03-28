# Creative Brains — Website

Next.js 15 static site with Tailwind CSS. Deployed to Vercel.

## Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Hosting:** Vercel (free tier)

## Pages

| Route | Page |
|---|---|
| `/` | Homepage — hero, proof points, services teaser, CTA |
| `/about` | About — story, values, team placeholders |
| `/services` | Services — full service list with descriptions |
| `/contact` | Contact — form, next steps, good-to-know |

## Content

Page copy lives in `content/*.mdx` as source of truth. The TSX pages consume this content directly — update MDX files and reflect in the components as needed.

## Development

```bash
npm install
npm run dev      # localhost:3000
npm run build    # static export → ./out
```

## Deploy to Vercel

1. Push to GitHub.
2. Import repo in [vercel.com](https://vercel.com).
3. Vercel auto-detects Next.js. Build command: `npm run build`. Output dir: `out`.
4. Deploy.

## Lighthouse target

All pages target ≥90 on Performance, Accessibility, Best Practices, SEO.
