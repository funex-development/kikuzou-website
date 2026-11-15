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

### Production deployment

- Project: `kikuzou-website` (Cloudflare Pages, Direct Upload)
- Preview URL: https://kikuzou-website.pages.dev/
- Production URL: https://www.matsumoto-kikuzou.com/
- Production branch label: `master` (this labels the uploaded deployment; it does not merge the Git branch)
- Current source branch: `chore/cloudflare-static`

To update this project after reviewing changes:

```bash
npm ci
npm test
npm run build:cloudflare
wrangler pages deploy out --project-name kikuzou-website --branch master
```

Use an existing authorized Cloudflare login and select the intended account.
No token should be stored in the repository. Do not pass `--force` to deploy
an existing project. Direct Upload uses the separate GitHub Actions workflow
below for Git-triggered updates. Pages cannot convert this project to native
Git integration without creating a new project.

The custom domains now serve Cloudflare Pages. Both apex and www use proxied
CNAME records pointing to `kikuzou-website.pages.dev`. The apex redirects to HTTPS
www with a permanent redirect that preserves the path and query string. Existing
TXT, CAA, wildcard, and `_domainconnect` records remain. Keep the Vercel project
and subscription available for rollback; do not change other sites or billing.

### GitHub Actions automatic updates

`.github/workflows/cloudflare-pages.yml` installs locked dependencies, runs
`npm test`, and builds the static output. Pull requests targeting `master` run
these checks without a Cloudflare token. Only pushes to `master` in
`funex-development/kikuzou-website`, or a manual run on that branch, deploy to the
existing production Pages project. Production runs are serialized.

Repository settings required before enabling deployment:

- Actions secret `CLOUDFLARE_API_TOKEN`: a dedicated API token limited to Pages
  editing in the intended Cloudflare account. Never put it in this repository,
  shell output, or logs, and never reuse a short-lived Wrangler OAuth token.
- Actions variable `CLOUDFLARE_ACCOUNT_ID`: the account that owns
  `kikuzou-website`.

The workflow pins third-party actions to full commit SHAs and uses Node.js
24.22.1 and Wrangler 4.160.1. GitHub token permissions are read-only, checkout
does not persist credentials, and Cloudflare authentication is passed only to
the deployment step. After deploying, the workflow checks the production pages,
robots, and sitemap over HTTPS. Check the Actions run and Pages deployment
commit before reporting a release as published.
