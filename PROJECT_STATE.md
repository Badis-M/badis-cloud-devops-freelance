# Project State

This file is the current source of truth for future Codex tasks in this repository.

Documentation priority:

1. The current user task overrides all repository documentation.
2. `PROJECT_STATE.md` overrides older context files when they conflict.
3. Older context files remain useful for background information when they do not conflict with this file.

## Project Summary

- Standalone freelance consulting landing page for Badis Merakchi.
- Primary positioning: Cloud, DevOps and Platform Engineering consulting.
- Primary goal: generate qualified commercial leads for freelance consulting missions.
- The site is commercial and service-oriented, not a CV or job-search page.
- The implementation remains a static Astro, TypeScript and Tailwind CSS website.
- The site is available in French and English through static routes.

## Live Deployment

- Live URL: `https://consulting.badismerakchi.com/`
- Hosting: Cloudflare Workers Static Assets / Cloudflare deployment.
- Source code: GitHub repository.
- Production branch: `main`.
- Deployments happen after a Git push when the Cloudflare Git integration is active.

## Current Page Structure

The rendered one-page structure must remain:

1. Navigation
2. Hero
3. Services
4. Qui suis-je
5. Méthode
6. Contact
7. Footer

## Language and Routing

- French remains the primary language at `/`.
- English is available at `/en/`.
- The navigation includes a discreet language switch between both routes.
- No browser-language redirect is used.
- Shared page copy is maintained in `src/content/site.fr.ts` and `src/content/site.en.ts`.
- Both routes use the same Astro components and keep the same section order.

## Removed or Deprecated Sections

- Proof / Technologies is no longer rendered.
- WhyWorkWithMe is no longer rendered.
- Do not reintroduce either section unless the user explicitly requests it.
- Their component files may remain in the repository while they are unused.

## Approved Design Direction

- Centered, compact hero.
- One continuous dark background across the page.
- Deep navy as the dominant color.
- Violet as a secondary accent.
- Rose should remain almost imperceptible.
- Minimal, premium, independent-consultant aesthetic.
- Inspired by FyberHub in spirit and rhythm, without pixel-perfect copying or reused assets.
- Keep the design calm, readable, responsive and lightweight.

## Current Functional State

- The contact form is enabled through Formspree.
- Current Formspree endpoint: `https://formspree.io/f/xyeykrvl`.
- Do not change the Formspree endpoint unless the user explicitly requests it.
- The form submits through AJAX using `fetch` and `FormData`.
- Successful submissions do not redirect away from the page.
- A success popup appears after Formspree confirms a successful submission.
- An inline error message appears when submission fails.
- Loading and focus-management behavior are implemented.
- There is no custom backend.
- There is no analytics integration.
- There are no unnecessary runtime dependencies.

## Current Metadata

- Browser title: `Consultant Cloud | Badis Merakchi`.
- English browser title: `Cloud Consultant | Badis Merakchi`.
- Favicon: `/favicon.png?v=2`.
- Primary language: French (`fr`), with an English (`en`) version at `/en/`.
- Canonical and alternate-language links are configured for both routes.
- SEO should remain focused on Cloud, DevOps, freelance consulting, Geneva and Switzerland.
- Existing metadata and favicon configuration should not change unless explicitly requested.

## Current Known Improvement Backlog

- Continue improving the commercial positioning.
- Keep services concrete, mission-oriented and focused on client outcomes.
- Continue highlighting training and team enablement.
- Mention AI carefully without claiming AI, MLOps or machine-learning expertise.
- Improve acquisition channels later through LinkedIn, freelance platforms, the Swiss network, ESNs and direct outreach.
- Continue targeting Swiss permanent employment opportunities in parallel, but never mention that search on the consulting website.

## Working Rules for Future Codex Tasks

- Read `AGENTS.md` and `PROJECT_STATE.md` before making changes.
- The current user task overrides older documentation and this state file.
- Modify only the files requested by the user.
- Keep changes small, reviewable and reversible.
- Do not add dependencies without clear justification.
- Do not add a backend unless explicitly requested.
- Do not change the Formspree endpoint unless explicitly requested.
- Do not reintroduce removed sections unless explicitly requested.
- Preserve the current page structure unless explicitly requested.
- Preserve the French `/` and English `/en/` static routes unless explicitly requested.
- Keep shared copy in the typed language files instead of duplicating component markup.
- Preserve the approved design direction unless explicitly requested.
- Keep the build passing.
- Do not commit secrets, credentials or private local state.
