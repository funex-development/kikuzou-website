This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Cloudflare Pages

The Vercel build (`npm run build`) continues to use the default Next.js runtime.
For a static Cloudflare build, run:

```bash
npm ci
npm test
npm run build:cloudflare
```

Publish `out/`. In Cloudflare Pages, use the repository root, build command
`npm run build:cloudflare`, output directory `out`, and Node.js `24.22.1`
(or a compatible available Node 24 version). The script enables static export
only for its build process and copies the existing security headers into the output.
No API keys or runtime secrets are required by the site.

Four reviewed, unused videos above the 25 MiB asset limit are excluded only
from generated output. Originals in `public/images/` remain. The build fails
if those videos become referenced or another oversized asset is added.
The active video `douga-04.mp4` is retained.

The canonical, sitemap, and structured-data domain is
`https://www.matsumoto-kikuzou.com`. The generated `_headers` applies `noindex`
to Pages-provided `*.pages.dev` URLs while leaving the custom domain indexable.
All six page routes and `404.html` are exported; do not enable SPA fallback.

Deploy and verify the Pages URL before changing DNS. Keep the existing
Vercel deployment and DNS settings available for rollback. Do not modify
custom domains, nameservers, or the Vercel subscription as part of staging.
