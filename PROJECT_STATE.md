# Project State

This file is the current source of truth for future Codex tasks in this repository.

Documentation priority:

1. The current user task overrides all repository documentation.
2. `PROJECT_STATE.md` overrides older briefs when they conflict.
3. Older context files remain historical references for the former Astro version.

## Project Summary

- Freelance consulting landing page for Badis Merakchi.
- Primary positioning: Cloud, DevOps and Platform Engineering consulting.
- Primary goal: generate qualified commercial leads.
- The current implementation was created with Lovable and replaces the former Astro site.

## Version History

- Git tag `1.0` points to commit `e5eae64`, the last version of the former Astro site.
- The Lovable replacement was committed as `1f4640c`. New changes require their own review before commit or deployment.

## Current Stack

- TanStack Start
- React 19
- TypeScript
- Vite 8.1.6
- Tailwind CSS 4
- Nitro Cloudflare module preset
- Cloudflare Workers deployment

## Language Behavior

- French and English content share the `/` route.
- The language switch updates the content in place.
- The selected language is persisted in browser storage.
- There is no browser-language redirect.
- Page descriptions, Open Graph and Twitter metadata follow the active language. The homepage keeps one canonical URL because both languages share `/`.
- French and English privacy pages are available at `/confidentialite` and `/en/privacy`, with separate canonicals and language alternates.

## Contact Behavior

- The current Lovable implementation uses an email link.
- The former Formspree form is not part of the new implementation.
- Do not reintroduce Formspree or a custom backend unless explicitly requested.

## Accessibility and Presentation

- Each page has a main landmark and a keyboard-visible skip link.
- Small orange labels use a darker shade on light surfaces and a lighter shade on dark surfaces.
- The Method section scrolls normally and reveals its four steps once with a 180 ms stagger; reduced motion shows the content immediately.
- Below-the-fold content blocks have a subtle, one-time entrance. Keyboard focus reveals content immediately; reduced motion disables entrances and moving link arrows. Language changes do not replay the effects.
- Portfolio links are available in navigation and below the Profile copy.
- The social sharing image is `public/social-card.png` (1200 × 630), rendered from the editable `public/social-card.svg`.

## Privacy Information

- The footer and email contact block link to the privacy page in the active language.
- Shared French and English privacy content is in `src/lib/privacy-content.ts`.
- The notice covers email enquiries, Cloudflare hosting and analytics, Google Fonts, browser language storage, service providers and data rights.
- No fixed email-retention duration or exclusively Swiss processing is asserted. Retention wording and provider information must continue to reflect actual practices.

## Security Headers

- SSR responses receive security headers in `src/server.ts` through `src/lib/security-headers.ts`.
- HSTS uses `max-age=31536000; includeSubDomains` without preload.
- CSP allows the inline hydration scripts and styles required by TanStack Start and the Google Fonts origins used by the site.
- Framing is restricted to the same origin, MIME sniffing is disabled and cross-origin referrer data is limited.
- Camera, microphone, geolocation, payment, USB and motion sensor browser APIs are disabled.

## Analytics

- Cloudflare Web Analytics is loaded once from the shared root shell.
- The CSP permits only `https://static.cloudflareinsights.com/beacon.min.js` for the analytics script and `https://cloudflareinsights.com` for beacon transmission.
- No analytics dependency or additional client library is installed.

## Deployment

- Live URL: `https://consulting.badismerakchi.com/`
- Production branch: `main`.
- The root `wrangler.jsonc` preserves the existing Worker name: `badis-cloud-devops-freelance`.
- `npm run build` generates the Cloudflare worker and assets in `.output`.
- Nitro generates `.wrangler/deploy/config.json`, which redirects Wrangler to `.output/server/wrangler.json`.
- The expected deploy command remains `npx wrangler deploy` after the build.

## Validation Commands

```bash
npm ci
npm run lint
npm test
npm run build
npx --yes wrangler@4.141.0 deploy --dry-run
```

## Current Validation State

- Production build passes.
- Automated tests cover routing, language preference, metadata updates, security headers and the one-time Method reveal.
- Vitest is updated to the patched 4.1.12 release.
- The dependency audit reports no known vulnerabilities after the Vite and Vitest patch updates.
- ESLint passes with six non-blocking React Fast Refresh warnings from reusable UI modules.
- Wrangler dry-run passes and targets the existing `badis-cloud-devops-freelance` Worker.
- The local development server returns HTTP 200 on `/`.

## Working Rules

- Read `AGENTS.md` and `PROJECT_STATE.md` before making changes.
- Preserve published Git history because the project is connected to Lovable.
- Keep bilingual copy in the existing browser-safe translation module.
- Keep changes small and reviewable.
- Do not add a backend or dependencies without explicit justification.
- Keep lint, tests and build passing.
