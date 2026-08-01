# IMPLEMENTATION_PLAN.md

## Purpose

This file defines the implementation roadmap for Codex.

The project must be built step by step.

Do not generate the full project in one uncontrolled pass.  
Prefer small, reviewable tasks.

## Implementation Strategy

Build the site in this order:

1. Project setup
2. Global design system
3. Page layout
4. Main sections
5. Contact section
6. SEO
7. Responsive polish
8. Deployment readiness

The first version must remain simple, static and maintainable.

## Target Stack

Use:

- Astro
- TypeScript
- Tailwind CSS
- Static site generation

Avoid:

- Backend
- CMS
- Database
- Authentication
- Complex animation libraries
- Unnecessary dependencies

## Phase 1 — Project Setup

### Goal

Create a clean Astro project with Tailwind CSS and a maintainable file structure.

### Tasks

1. Initialize Astro project
2. Add Tailwind CSS
3. Configure TypeScript
4. Create base folder structure
5. Add global CSS
6. Add base layout
7. Add placeholder homepage

### Expected Files

```text
/
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── components/
│   └── styles/
│       └── global.css
└── public/
```

### Acceptance Criteria

- Project runs locally
- Tailwind classes work
- Homepage renders
- No unnecessary dependencies
- No placeholder framework branding remains

## Phase 2 — Global Design System

### Goal

Create the visual foundation inspired by FyberHub.

### Tasks

1. Define dark color palette
2. Define typography scale
3. Define layout container
4. Define section spacing
5. Define button styles
6. Define card styles
7. Define subtle border and glow utilities

### Design Direction

Use:

- Dark premium background
- Off-white text
- Muted gray secondary text
- Subtle card backgrounds
- Accent color for CTAs
- Large hero typography
- Clean spacing

Avoid:

- Too many colors
- Heavy gradients
- Light corporate style
- Generic SaaS template feel

### Acceptance Criteria

- Site has a consistent visual language
- Buttons, cards and sections feel coherent
- Design feels premium and technical
- Mobile layout remains readable

## Phase 3 — Page Skeleton

### Goal

Create the one-page structure before implementing final details.

### Sections

Implement these sections in order:

1. Navigation
2. Hero
3. Services
4. Why Work With Me
5. Method
6. About
7. Proof / Technologies
8. Contact
9. Footer

### Expected Components

```text
src/components/Navigation.astro
src/components/Hero.astro
src/components/Services.astro
src/components/WhyWorkWithMe.astro
src/components/Method.astro
src/components/About.astro
src/components/Proof.astro
src/components/Contact.astro
src/components/Footer.astro
```

### Acceptance Criteria

- All sections are present
- Anchor navigation works
- CTA buttons scroll to contact or services
- Layout is readable on desktop and mobile

## Phase 4 — Hero Section

### Goal

Build a strong first screen that immediately explains the freelance offer.

### Content Source

Use:

- `docs/context/CONTENT_BRIEF.md`
- `docs/context/DESIGN_REFERENCE.md`

### Required Elements

- Availability / location line
- Strong headline
- Supporting paragraph
- Primary CTA
- Secondary CTA
- Trust indicators

### Recommended Content

```text
CONSULTANT DISPONIBLE · GENÈVE & REMOTE

Consultant Cloud & DevOps
à votre service

J’aide les entreprises à automatiser, fiabiliser et industrialiser leurs infrastructures cloud, leurs pipelines CI/CD et leurs plateformes de déploiement.

Discuter de votre besoin
Voir les services

Terraform · CI/CD · Kubernetes
Genève · Suisse romande · Remote
Réponse < 24h
```

### Acceptance Criteria

- Offer is understandable within 5 seconds
- CTA is visible above the fold
- Section does not feel like a CV
- Visual style is close in spirit to FyberHub

## Phase 5 — Services Section

### Goal

Present clear freelance services.

### Service Cards

Implement 3 cards first:

1. Cloud & Infrastructure Automation
2. CI/CD & Industrialisation
3. Kubernetes & Platform Engineering

Optional fourth card:

4. Audit Infrastructure & Fiabilité

### Card Structure

Each card should include:

- Small category label
- Title
- Short description
- 3 bullet points
- CTA link

### Acceptance Criteria

- Services are clear and commercial
- Cards are visually balanced
- No long paragraphs
- Technical language remains understandable

## Phase 6 — Why Work With Me Section

### Goal

Build credibility without turning the page into a résumé.

### Required Content

Mention:

- 4 years at Oracle Geneva
- Cloud infrastructure background
- Swiss client context
- Financial sector exposure
- Delivery-oriented mindset
- Practical and documented approach

### Acceptance Criteria

- Section builds trust
- Claims remain accurate
- Tone is confident but not exaggerated
- No confidential client names are used

## Phase 7 — Method Section

### Goal

Show a simple collaboration process.

### Steps

1. Découverte
2. Évaluation
3. Plan d’action
4. Implémentation

### Acceptance Criteria

- Process is easy to understand
- Client knows what happens next
- Section increases trust and conversion

## Phase 8 — About Section

### Goal

Humanize the site while staying commercial.

### Required Content

Mention:

- Badis Merakchi
- Consultant Cloud & DevOps
- Based near Geneva
- Infrastructure automation
- CI/CD
- Cloud environments
- Platform Engineering foundations
- Practical delivery mindset

### Acceptance Criteria

- Section is concise
- Section does not duplicate the hero
- Section does not become a full CV

## Phase 9 — Proof / Technologies Section

### Goal

Give technical credibility.

### Include

- Technologies
- Environment categories
- Experience points
- Existing links if available

### Suggested Categories

- Cloud: AWS, Azure, OCI
- IaC: Terraform, Ansible
- Containers: Docker, Kubernetes, Helm
- CI/CD: GitHub Actions, GitLab CI
- Systems: Linux, Bash, Networking basics
- Observability: Prometheus, Grafana, Logs, Metrics

### Acceptance Criteria

- Technology list is readable
- No unsupported expertise claims
- Section supports credibility without overwhelming visitors

## Phase 10 — Contact Section

### Goal

Convert visitors into qualified leads.

### Initial Contact Strategy

For version 1, use a simple mailto fallback unless a static form provider is explicitly selected.

Do not add backend infrastructure.

### Required Elements

- Strong heading
- Short paragraph
- Contact CTA
- Email
- LinkedIn
- Availability indicators
- Response time
- Optional form structure

### Form Fields If Implemented

```text
Prénom & Nom *
Entreprise / Organisation
Email professionnel *
Service souhaité *
Budget estimé
Décrivez votre besoin *
```

### Acceptance Criteria

- Contact path is obvious
- No frontend secrets
- No fake backend behavior
- CTA works

## Phase 11 — SEO Metadata

### Goal

Make the static page clean and searchable.

### Required Metadata

- Page title
- Meta description
- Open Graph title
- Open Graph description
- Language set to French
- Canonical URL placeholder
- Semantic heading hierarchy

### Recommended Title

```text
Consultant Cloud & DevOps Freelance à Genève | Badis Merakchi
```

### Recommended Description

```text
Consultant Cloud, DevOps et Platform Engineering basé près de Genève. Infrastructure as Code, CI/CD, Kubernetes, automatisation cloud et fiabilité opérationnelle.
```

### Acceptance Criteria

- One H1 only
- Metadata exists
- Heading hierarchy is clean
- Links are descriptive

## Phase 12 — Responsive Polish

### Goal

Ensure the site works well on mobile and desktop.

### Check

- Mobile navigation
- Hero readability
- Card stacking
- Button sizes
- Section spacing
- Contact readability
- Footer layout

### Acceptance Criteria

- Works on mobile
- Works on tablet
- Works on desktop
- No horizontal scroll
- CTAs remain visible and usable

## Phase 13 — Performance & Accessibility

### Goal

Keep the site fast, accessible and clean.

### Check

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Sufficient contrast
- Optimized assets
- Minimal JavaScript
- No unused dependencies

### Acceptance Criteria

- Fast static page
- No heavy client-side rendering
- No accessibility blocker visible
- No unnecessary third-party scripts

## Phase 14 — Deployment Readiness

### Goal

Prepare the project for static deployment.

### Deployment Options

Preferred:

- GitHub Pages
- Cloudflare Pages

Alternative:

- Vercel
- Netlify

### Required

- README with local setup
- Build command documented
- Output directory documented
- Environment variable notes if needed
- No secrets committed

### Acceptance Criteria

- Project builds successfully
- Deployment path is clear
- README is accurate
- No local-only assumptions remain

## Recommended Codex Task Order

Use these tasks one by one.

### Task 1

Set up a new Astro + Tailwind project using the project context files.

### Task 2

Create the base layout, global styles, color palette, typography and reusable container pattern.

### Task 3

Create the page skeleton with all major sections as separate Astro components.

### Task 4

Implement the hero section using the content brief and design reference.

### Task 5

Implement the services section with 3 service cards and responsive layout.

### Task 6

Implement the credibility, method and about sections.

### Task 7

Implement the proof / technologies and contact sections.

### Task 8

Add SEO metadata, accessibility improvements and responsive polish.

### Task 9

Prepare README and static deployment instructions.

## Rules For Codex

For each task, Codex should:

1. Read `AGENTS.md`
2. Read the relevant files in `docs/context/`
3. Propose the smallest safe change
4. Implement only the requested task
5. Avoid extra features
6. Avoid unsupported claims
7. Avoid unnecessary dependencies
8. Keep the site static
9. Mention risks or missing context

## Definition Of Done For Version 1

Version 1 is complete when:

- Site runs locally
- One-page landing page is complete
- Design is dark, premium and close in spirit to FyberHub
- Content is in French
- Services are clear
- CTA leads to contact
- Mobile layout is clean
- SEO metadata is present
- No placeholder text remains
- No secrets are exposed
- Static deployment is possible
