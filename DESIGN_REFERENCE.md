# DESIGN_REFERENCE.md

## Main Design Reference

Reference website:

```text
https://www.fyberhub.fr/
```

This website is the main visual and structural inspiration for the freelance landing page.

The goal is to create a very similar commercial experience, but adapted to Cloud, DevOps, Platform Engineering and infrastructure consulting.

## Design Intent

The new website should feel like:

- A premium independent consultant website
- Dark, sharp and professional
- Commercial rather than CV-oriented
- Clear enough for non-technical decision makers
- Credible enough for technical managers
- Focused on contact conversion

The design should strongly follow the same rhythm as the reference site:

1. Strong hero section
2. Immediate availability / location signal
3. Clear CTA buttons
4. Service cards
5. About / credibility section
6. Method section
7. Contact form
8. Response time and mission availability

## What To Reproduce

Reproduce the following patterns from the reference site.

### 1. Dark Premium Atmosphere

Use:

- Very dark background
- Subtle gradients
- High contrast text
- Muted secondary text
- Accent color for CTAs and highlights
- Clean spacing
- Minimal visual noise

The page should feel technical, premium and controlled.

Avoid:

- Light corporate SaaS look
- Generic Bootstrap layout
- Too many colors
- Excessive gradients
- Playful startup visuals
- Heavy animations

## 2. Hero Structure

The hero should be strongly inspired by the reference.

Recommended structure:

```text
AVAILABILITY / LOCATION LINE

Main headline on two lines

Short commercial paragraph

Primary CTA
Secondary CTA

Small trust indicators
```

For Badis, adapt the content to:

```text
CONSULTANT DISPONIBLE · GENÈVE & REMOTE

Consultant Cloud & DevOps
à votre service

J’aide les entreprises à automatiser, fiabiliser et industrialiser leurs infrastructures cloud, leurs pipelines CI/CD et leurs plateformes de déploiement.

[Discuter de votre besoin]
[Voir les services →]

Terraform · CI/CD · Kubernetes
Genève & Remote
Réponse < 24h
```

The hero should not look like a resume introduction.

It must immediately answer:

- What does Badis do?
- Who is it for?
- What problem does he solve?
- How can the visitor contact him?

## 3. Navigation

Use a simple top navigation similar to the reference.

Recommended links:

```text
Services
À propos
Méthode
Contact
```

Primary navigation CTA:

```text
Prendre contact
```

The navigation should be:

- Minimal
- Fixed or sticky only if it improves usability
- Mobile-friendly
- Not overloaded

Do not add many pages in version 1.

## 4. Section Labels

Use small uppercase section labels to give structure.

Examples:

```text
// MES SERVICES
// QUI SUIS-JE
// COMMENT JE TRAVAILLE
// PRENONS CONTACT
```

For the Cloud / DevOps site, use:

```text
// SERVICES
// POURQUOI TRAVAILLER ENSEMBLE
// MÉTHODE
// CONTACT
```

These labels help reproduce the technical/premium feel of the reference.

## 5. Service Cards

The services section should use cards similar to the reference site.

Recommended number of cards:

- 3 cards for a tighter first version
- 4 cards only if the layout remains clean

Recommended service cards:

### Card 1

```text
// CLOUD
Cloud & Infrastructure Automation
```

Focus:

- Terraform
- AWS / Azure / OCI
- Infrastructure as Code
- Landing zones
- Environment standardization

### Card 2

```text
// DELIVERY
CI/CD & Industrialisation
```

Focus:

- GitHub Actions
- GitLab CI
- Docker
- Deployment workflows
- Release reliability

### Card 3

```text
// PLATFORM
Kubernetes & Platform Engineering
```

Focus:

- Kubernetes
- Helm
- GitOps
- Observability
- Internal platform foundations

Optional card:

```text
// AUDIT
Audit Infrastructure & Fiabilité
```

Focus:

- Infrastructure review
- Security-conscious recommendations
- Observability gaps
- Actionable roadmap

## 6. Card Content Pattern

Each card should include:

- Small category label
- Clear service title
- Short paragraph
- 3 bullet points with checkmarks
- Small CTA link

Example structure:

```text
// CLOUD

Cloud & Infrastructure Automation

Structuration et automatisation de vos environnements cloud avec une approche reproductible, documentée et maintenable.

✓ Infrastructure as Code avec Terraform
✓ Environnements cloud AWS, Azure ou OCI
✓ Documentation et standards d’exploitation

En savoir plus →
```

Do not write long paragraphs inside cards.

## 7. Featured Card

The reference site highlights one card as more premium/popular.

For Badis, the featured card should probably be:

```text
CI/CD & Industrialisation
```

or:

```text
Cloud & Infrastructure Automation
```

Recommended badge:

```text
POPULAIRE
```

Alternative badge:

```text
MISSION COURANTE
```

Use the badge sparingly.

## 8. About Section

The about section should mirror the reference structure:

- Strong heading
- Short credibility paragraph
- Second paragraph explaining independent/pragmatic approach
- Location line
- 4 credibility mini-cards
- Optional testimonial-style block later

Recommended heading:

```text
Consultant indépendant,
basé près de Genève
```

Recommended credibility mini-cards:

```text
Cloud Infrastructure
Terraform · AWS · Azure · OCI

DevOps Delivery
CI/CD · Docker · Automation

Platform Engineering
Kubernetes · Helm · Observability

Contexte Suisse
Genève · Banking · Entreprise
```

Do not turn this section into a full CV.

## 9. Method Section

The method section should follow a 4-step process, like the reference.

Recommended structure:

```text
01
Découverte

02
Évaluation

03
Plan d’action

04
Implémentation
```

Adapted descriptions:

### 01 — Découverte

Understand the business context, technical environment, constraints, pain points and expected outcome.

### 02 — Évaluation

Review the current infrastructure, pipelines, deployment flow, documentation and operational risks.

### 03 — Plan d’action

Produce a clear and prioritized roadmap with concrete improvements, not generic recommendations.

### 04 — Implémentation

Deliver the agreed improvements, document the result and transfer knowledge to the team.

## 10. Contact Section

The contact section should be strongly conversion-oriented.

It should include:

- Strong heading
- Short paragraph
- Contact form
- Availability indicators
- Email
- LinkedIn
- Response time
- Typical timeline

Recommended heading:

```text
Parlons de votre
infrastructure cloud
```

Recommended paragraph:

```text
Décrivez brièvement votre besoin, votre contexte technique et votre horizon de démarrage. Je vous répondrai rapidement pour voir si je peux vous aider.
```

Recommended form fields:

```text
Prénom & Nom *
Entreprise / Organisation
Email professionnel *
Service souhaité *
Budget estimé
Décrivez votre besoin *
```

Recommended side information:

```text
Disponible pour de nouvelles missions

Email
LinkedIn
Genève · Suisse romande · Remote

Réponse < 24h
Mission courte ou longue durée
Intervention sur site ou remote
```

## 11. Typical Timelines Block

Reproduce the idea of a small deadline/timeline block.

Recommended content:

```text
Première réponse
< 24h

Échange de cadrage
1–2 jours

Proposition ou plan d’action
2–3 jours

Démarrage mission
Selon disponibilité
```

This makes the page feel more concrete and professional.

## 12. Footer

Footer should stay minimal.

Recommended content:

```text
Badis Merakchi

Consultant Cloud & DevOps freelance · Genève

Navigation
Services
À propos
Méthode
Contact

Liens
LinkedIn
GitHub
Portfolio

© 2026 Badis Merakchi — Tous droits réservés
```

Optional technical trust line:

```text
Site statique · HTTPS · Performance optimisée
```

## 13. Layout Principles

Use:

- Wide hero section
- Maximum content width around 1120px or 1200px
- Large vertical spacing
- Cards in 3-column desktop layout
- Single-column mobile layout
- Strong section separation
- CTA repetition every 2–3 sections
- Clear typographic hierarchy

Avoid:

- Dense text
- Too many sections
- Too many icons
- Too many animations
- Too many colors
- Generic stock photos

## 14. Typography Direction

Use typography that feels:

- Modern
- Technical
- Premium
- Readable

Recommended style:

- Large bold hero headline
- Medium-weight section headings
- Small uppercase labels
- Comfortable paragraph line-height
- Compact card text

Possible font direction:

- Inter
- Geist
- Manrope
- Sora
- Space Grotesk

Prefer system fonts if simplicity is more important than brand distinctiveness.

## 15. Color Direction

Recommended palette direction:

```text
Background: near-black / dark navy
Surface: slightly lighter dark cards
Primary text: off-white
Secondary text: muted gray
Accent: cyan, blue, violet or electric green
Borders: subtle dark gray
```

The accent color should be used for:

- CTA buttons
- Small badges
- Highlights
- Checkmarks
- Interactive states

Avoid using too many accent colors.

## 16. Motion Direction

Animations are optional.

If used, keep them subtle:

- Slight hover movement on cards
- Soft opacity transitions
- Small gradient glow
- Smooth anchor scrolling

Avoid:

- Heavy scroll animations
- Complex animation libraries
- Moving backgrounds that hurt readability
- Effects that reduce performance

## 17. Copying Limits

Acceptable to copy:

- Overall one-page structure
- Section order
- Dark premium aesthetic
- CTA strategy
- Card-based service layout
- Method in 4 steps
- Contact-focused ending
- Response-time block

Do not copy:

- Exact written content
- Logo
- Personal name
- Brand identity
- Images
- Testimonials
- Source code
- Unique assets

## 18. Design Success Criteria

The design is successful if:

- The first screen immediately explains the offer
- The site feels premium and trustworthy
- The page does not feel like a CV
- The visitor understands the services quickly
- The contact CTA is obvious
- The design is close in spirit to FyberHub
- The content is clearly adapted to Cloud / DevOps
- The mobile version remains clean and readable

## 19. First Version Priority

For version 1, prioritize:

1. Strong hero
2. Clean service cards
3. Clear method section
4. Credible about section
5. Effective contact section
6. Responsive layout
7. Basic SEO

Do not prioritize:

- Blog
- CMS
- Complex animations
- Multilingual support
- Case study pages
- Analytics
- Booking integration