# AGENTS.md

## Project

This repository contains a standalone freelance landing page for Badis Merakchi.

The site is separate from the existing portfolio website.  
Its purpose is not to present a CV, but to sell freelance services clearly.

Primary goal:

> Convert visitors into qualified freelance leads for Cloud, DevOps, Platform Engineering, automation, infrastructure, and reliability work.

Target audience:

- Swiss and French-speaking companies
- Startups, SMEs, scaleups, IT teams, agencies, and consulting partners
- Technical managers, CTOs, founders, recruiters, and delivery managers
- Geneva, Lausanne, French-speaking Switzerland, France, and remote clients

The site should feel like a premium independent consultant website, inspired by the structure and visual rhythm of `https://www.fyberhub.fr/`, but adapted to Cloud, DevOps, and Platform Engineering.

## Core Positioning

Badis Merakchi is a Cloud and DevOps consultant based near Geneva.

Recommended positioning:

> Cloud, DevOps & Platform Engineering consultant helping teams automate, secure, and industrialize their infrastructure and delivery workflows.

Key themes:

- Infrastructure as Code
- Cloud automation
- CI/CD pipelines
- Kubernetes and containers
- Platform Engineering
- Linux and systems reliability
- Observability
- Security-conscious infrastructure
- Swiss banking and enterprise context
- Pragmatic delivery

## Important Existing Context

Badis already has a personal portfolio website:

- `https://portfolio.badismerakchi.com/`

That existing portfolio is more profile-oriented and career-oriented.

This new site must be more commercial:

- Stronger hero section
- Clear service offers
- Clear calls to action
- Contact form
- Business-oriented wording
- Less CV-like
- More focused on freelance conversion

Do not simply rebuild the existing portfolio.

## Visual Direction

The visual style should be strongly inspired by FyberHub:

- Dark premium background
- Modern consultant aesthetic
- Strong contrast
- Large hero typography
- Clean service cards
- Section-based one-page landing page
- Repeated call-to-action buttons
- Professional but not corporate-boring
- Minimal animations, only if they improve perceived quality
- Mobile-first responsive layout

Important constraint:

Do not copy FyberHub text, logo, assets, or source code directly.

Acceptable:

- Similar layout structure
- Similar section rhythm
- Similar dark aesthetic
- Similar commercial framing
- Similar CTA placement
- Similar card-based design

## Technical Stack

Preferred stack:

- Astro
- TypeScript
- Tailwind CSS
- Static site generation
- GitHub Pages or Cloudflare Pages deployment

Avoid unnecessary complexity.

Do not add a backend unless explicitly requested.

For the contact form, use a static-friendly solution such as:

- Formspree
- Basin
- Netlify Forms
- Cloudflare Pages form integration
- Email link fallback

The contact form must not expose secrets in frontend code.

## Site Structure

Recommended one-page structure:

1. Hero
2. Services
3. Why work with me
4. Method / process
5. About
6. Proof / experience / technologies
7. Contact
8. Footer

Optional later additions:

- Case studies
- Blog
- Separate service pages
- Calendly integration
- French and English versions

Initial version should remain simple and focused.

## Content Tone

The tone must be:

- Direct
- Professional
- Confident
- Clear
- Commercial
- Practical
- Swiss-market compatible

Avoid:

- Buzzword overload
- Fake startup hype
- Excessive self-praise
- Long paragraphs
- Generic consultant clichés
- Overly technical language in the hero section

Use French as the main website language for the first version.

Technical keywords can remain in English where standard:

- Cloud
- DevOps
- Platform Engineering
- Infrastructure as Code
- CI/CD
- Kubernetes
- Observability

## Services To Highlight

Initial service offers:

### 1. Cloud & Infrastructure Automation

Focus:

- Terraform
- Cloud landing zones
- Infrastructure as Code
- AWS / Azure / OCI
- Secure and reproducible environments
- Automation of infrastructure provisioning

### 2. CI/CD & Delivery Industrialization

Focus:

- GitHub Actions
- GitLab CI
- Docker
- Deployment workflows
- Release reliability
- Pipeline cleanup and optimization
- Developer experience

### 3. Kubernetes & Platform Engineering

Focus:

- Kubernetes basics and operational support
- Helm
- GitOps
- Observability
- Internal developer platforms
- Standardized deployment patterns
- Reliability and troubleshooting

### 4. Infrastructure Audit & Reliability

Focus:

- Review of existing infrastructure
- Security and configuration risks
- Operational weaknesses
- Monitoring and observability gaps
- Cost and complexity reduction
- Actionable recommendations

Do not claim deep senior expertise in areas where Badis is still growing.

Be strong, but accurate.

## Credibility Points

Use the following experience carefully:

- 4 years at Oracle in Geneva
- Cloud infrastructure work
- Swiss clients
- Financial sector exposure
- Terraform
- OCI, AWS, Azure
- Docker
- Kubernetes exposure
- CI/CD
- Linux
- Automation
- Infrastructure troubleshooting
- Banking-sector awareness

Avoid naming clients unless already public or explicitly approved.

## SEO Requirements

Basic SEO must be included from the beginning.

Target keywords:

- consultant DevOps Genève
- consultant Cloud Genève
- freelance DevOps Suisse
- ingénieur DevOps freelance
- consultant Platform Engineering
- Terraform consultant
- Kubernetes consultant
- cloud engineer Genève
- infrastructure as code consultant

Each page must have:

- title
- meta description
- Open Graph metadata
- clean semantic HTML
- accessible headings
- descriptive links
- fast loading performance

## Accessibility Requirements

Respect basic accessibility:

- Semantic HTML
- One H1 per page
- Correct heading hierarchy
- Sufficient contrast
- Keyboard-accessible links and buttons
- Visible focus states
- Alt text for meaningful images
- No text embedded only in images

## Performance Requirements

The site should be fast and lightweight.

Avoid:

- Heavy animation libraries
- Unnecessary JavaScript
- Large images
- Third-party scripts unless needed
- Client-side rendering for static content

Prefer:

- Static rendering
- Optimized assets
- CSS-based effects
- Minimal dependencies

## Security Requirements

Security-first rules:

- Do not commit secrets
- Do not expose API keys in frontend code
- Validate contact form assumptions
- Use environment variables where required
- Avoid unsafe HTML injection
- Do not add tracking tools without explicit approval
- Do not add third-party scripts without explaining why

## Development Rules

Before creating new files, state:

- File name
- Purpose
- Location
- Why it is needed

Before modifying existing files, state:

- Scope of change
- Whether it is an inline fix, rewrite, or refactor
- Risk level

Do not perform large refactors without approval.

Work task by task.

Prefer small, reviewable changes.

## Code Quality Rules

Use:

- Clear component structure
- Reusable Astro components
- Tailwind utility classes where appropriate
- Simple naming
- Minimal abstractions
- TypeScript where useful

Avoid:

- Over-engineering
- Premature CMS setup
- Complex state management
- Unused dependencies
- Generic placeholder content left in final sections

Comments should explain why, not what.

## Suggested Initial File Structure

Recommended structure:

```text
/
├── AGENTS.md
├── README.md
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Method.astro
│   │   ├── About.astro
│   │   ├── Proof.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
└── docs/
    ├── context/
    │   ├── PROJECT_BRIEF.md
    │   ├── DESIGN_REFERENCE.md
    │   ├── CONTENT_BRIEF.md
    │   └── IMPLEMENTATION_PLAN.md
    └── prompts/
        └── CODEX_START_PROMPT.md
```

## First Implementation Goal

The first implementation should produce:

- A clean Astro + Tailwind project
- A one-page French landing page
- Dark premium design
- Hero section inspired by FyberHub
- Services section
- Method section
- About section
- Contact section
- Responsive layout
- Basic SEO
- No backend
- No complex animation

## Definition of Done

The first usable version is complete when:

- The landing page is visually coherent
- The page works on mobile and desktop
- All main sections are present
- CTA buttons scroll to contact
- Contact information is visible
- SEO metadata is configured
- No placeholder text remains
- The project runs locally
- The project can be deployed statically

## Working Style For Codex

When receiving a task:

1. Read the relevant context files first.
2. Identify the smallest safe change.
3. Explain the planned change briefly.
4. Implement only the requested scope.
5. Mention risks, tradeoffs, or missing context.
6. Do not invent business claims.
7. Do not add dependencies without justification.
8. Keep the project static and simple unless instructed otherwise.