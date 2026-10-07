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
- The current working tree contains the new Lovable implementation and has not been committed or pushed yet.

## Current Stack

- TanStack Start
- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Nitro Cloudflare module preset
- Cloudflare Workers deployment

## Language Behavior

- French and English content share the `/` route.
- The language switch updates the content in place.
- The selected language is persisted in browser storage.
- There is no browser-language redirect.

## Contact Behavior

- The current Lovable implementation uses an email link.
- The former Formspree form and its privacy-policy routes are not part of the new implementation.
- Do not reintroduce Formspree or a custom backend unless explicitly requested.

## Security Headers

- SSR responses receive security headers in `src/server.ts` through `src/lib/security-headers.ts`.
- HSTS uses `max-age=31536000; includeSubDomains` without preload.
- CSP allows the inline hydration scripts and styles required by TanStack Start and the Google Fonts origins used by the site.
- Framing is restricted to the same origin, MIME sniffing is disabled and cross-origin referrer data is limited.
- Camera, microphone, geolocation, payment, USB and motion sensor browser APIs are disabled.

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
- All four automated tests pass.
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
