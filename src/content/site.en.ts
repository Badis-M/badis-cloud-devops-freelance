import type { SiteContent } from "./types";

export const siteEn = {
  lang: "en",
  skipLinkLabel: "Skip to main content",
  metadata: {
    title: "Cloud Consultant | Badis Merakchi",
    description:
      "Cloud, DevOps and Platform Engineering consultant based near Geneva. Infrastructure as Code, CI/CD, Kubernetes, cloud automation and operational reliability.",
    openGraphTitle: "Badis Merakchi — Freelance Cloud & DevOps Consultant",
    openGraphDescription:
      "I help companies automate, improve reliability and industrialize their cloud infrastructure, CI/CD pipelines and deployment platforms.",
    openGraphLocale: "en_GB",
    openGraphAlternateLocale: "fr_FR",
    canonicalUrl: "https://consulting.badismerakchi.com/en/",
  },
  navigation: {
    ariaLabel: "Main navigation",
    services: "Services",
    about: "About",
    method: "Method",
    contact: "Contact",
    languageSwitch: {
      code: "FR",
      label: "Voir le site en français",
      href: "/",
      targetLang: "fr",
    },
  },
  hero: {
    availability: "FRENCH-SPEAKING SWITZERLAND · GENEVA · FRANCE & REMOTE",
    headline: {
      leading: "",
      accent: "Cloud & DevOps",
      trailing: "Consultant",
      secondLine: "for your infrastructure",
    },
    description:
      "I help companies automate, improve reliability and industrialize their cloud infrastructure, CI/CD pipelines and deployment platforms.",
    primaryCta: "Discuss your needs",
    secondaryCta: "View services",
    trustAriaLabel: "Trust indicators",
    trustItems: [
      "Terraform · CI/CD · Kubernetes",
      "Geneva · French-speaking Switzerland · Remote",
      "Response < 24h",
    ],
  },
  services: {
    label: "// SERVICES",
    heading: ["Practical services", "to strengthen your infrastructure"],
    introduction:
      "I work across Cloud, DevOps and Platform Engineering with a pragmatic approach: understand the context, identify friction points, and deliver useful, documented improvements.",
    offers: [
      {
        category: "// CLOUD",
        title: "Cloud & Infrastructure Automation",
        description:
          "I audit, structure and automate your infrastructure to create an IaC foundation that is reproducible, maintainable and usable by your teams.",
        bullets: [
          "Infrastructure as Code audits and structuring",
          "Terraform standards for AWS, Azure or OCI",
          "Operational documentation and reproducible environments",
        ],
        cta: "Discuss infrastructure →",
      },
      {
        category: "// DELIVERY",
        title: "CI/CD & Delivery Industrialisation",
        description:
          "I improve the reliability of your build, test and deployment workflows to reduce manual steps and make releases more predictable.",
        bullets: [
          "GitHub Actions and GitLab CI workflows",
          "Controlled, industrialized Docker deployments",
          "Release management, error handling and rollback strategies",
        ],
        cta: "Improve your pipelines →",
      },
      {
        category: "// PLATFORM",
        title: "Kubernetes & Platform Engineering",
        description:
          "I help you standardize containerized deployments and establish Platform Engineering foundations suited to your team’s maturity.",
        bullets: [
          "Kubernetes, Helm and GitOps standards",
          "Observability and operational diagnostics",
          "Reusable patterns and team documentation",
        ],
        cta: "Structure your platform →",
      },
    ],
    training: {
      label: "// TRAINING & ENABLEMENT",
      title: "Training & Knowledge Transfer",
      description:
        "I support your teams with practical Cloud, DevOps, CI/CD, Terraform, Docker or Kubernetes fundamentals through a hands-on teaching approach.",
      bullets: [
        "Practical workshops and clear technical explanations",
        "Support for developing in-house capabilities",
        "Clear documentation and operational knowledge transfer",
      ],
      cta: "Discuss training →",
    },
    problems: {
      label: "// YOUR CHALLENGES",
      title: "Where I can help",
      items: [
        "Infrastructure is created manually or difficult to reproduce",
        "CI/CD pipelines are fragile or overly manual",
        "Docker or Kubernetes deployments lack standardization",
        "Operational documentation or visibility is limited",
        "A Cloud or DevOps foundation is needed before scaling",
      ],
    },
    formats: {
      label: "// ENGAGEMENT",
      title: "Engagement formats",
      items: [
        { label: "Short audit", detail: "3 to 5 days" },
        { label: "Project support", detail: "a few weeks" },
        { label: "Long-term engagement", detail: "Cloud / DevOps / Platform" },
        { label: "Team training", detail: "workshops, support and documentation" },
      ],
    },
    aiNote:
      "I can also help teams establish reliable cloud foundations for application, data or AI projects.",
  },
  about: {
    label: "// ABOUT",
    heading: ["Independent consultant,", "based near Geneva"],
    introduction:
      "I’m Badis Merakchi, a Cloud & DevOps consultant. I support companies with infrastructure automation, CI/CD pipelines, cloud environments and Platform Engineering foundations.",
    paragraphs: [
      "My experience includes demanding technical environments where reliability, documentation and operational clarity are essential.",
      "I favour solutions that are simple, robust and suited to the team’s maturity. The goal is to deliver useful improvements without adding unnecessary complexity.",
    ],
    location: "Geneva · French-speaking Switzerland · Remote",
    verificationText:
      "You can also review my technical portfolio and GitHub projects for further examples of my work.",
    portfolioLabel: "Technical portfolio →",
    githubLabel: "GitHub →",
    cardsAriaLabel: "Credibility highlights",
    cards: [
      { title: "Trainer", text: "Teaching & knowledge transfer" },
      { title: "Cloud & Infrastructure", text: "Terraform · AWS · Azure · OCI" },
      { title: "DevOps Delivery", text: "CI/CD · Docker · Automation" },
      { title: "Responsiveness", text: "Available & response within 24h" },
    ],
  },
  method: {
    label: "// METHOD",
    heading: ["A structured engagement,", "from scoping to delivery"],
    introduction:
      "Every engagement starts with a clear understanding of the context. The aim is not to add tools, but to solve the right problems in the right order.",
    steps: [
      {
        title: "Discovery",
        description:
          "We clarify your context, objectives, technical constraints, timeline and the problems that need to be addressed first.",
      },
      {
        title: "Assessment",
        description:
          "I review the existing infrastructure, pipelines, deployments, documentation, security, observability and operational friction points.",
      },
      {
        title: "Action plan",
        description:
          "You receive a clear, prioritized and actionable roadmap, starting with the improvements that can deliver the most value.",
      },
      {
        title: "Implementation",
        description:
          "I implement the agreed improvements with documentation, knowledge transfer and close attention to maintainability.",
      },
    ],
  },
  contact: {
    label: "// CONTACT",
    heading: ["Let’s discuss your", "cloud infrastructure"],
    introduction:
      "Briefly describe your needs, technical context and expected start date. I’ll respond promptly to determine how I can help.",
    formTitle: "Your request",
    formLegend: "Contact information and engagement details",
    fields: {
      name: "Name *",
      company: "Company / Organisation",
      email: "Work email *",
      service: "Service required *",
      servicePlaceholder: "Select a service",
      budget: "Estimated budget",
      message: "Describe your needs *",
    },
    serviceOptions: [
      "Cloud & Infrastructure Automation",
      "CI/CD & Delivery Industrialisation",
      "Kubernetes & Platform Engineering",
      "Training & Knowledge Transfer",
      "Infrastructure & Reliability Audit",
      "Other Cloud / DevOps need",
    ],
    subject: "New consulting enquiry — badismerakchi.com",
    submitLabel: "Send your request",
    submittingLabel: "Sending...",
    helperText: "Your message will be sent by email. I’ll respond as soon as possible.",
    errorMessage:
      "Your message could not be sent. Please try again or contact me via LinkedIn.",
    asideAriaLabel: "Availability and indicative timelines",
    availabilityTitle: "Available for new engagements",
    availabilityItems: [
      "Geneva · French-speaking Switzerland · Remote",
      "Short or long-term engagements",
      "Response < 24h",
      "On-site or remote support",
    ],
    timelineTitle: "Indicative timelines",
    timelineItems: [
      { label: "Initial response", value: "< 24h" },
      { label: "Scoping call", value: "1–2 days" },
      { label: "Proposal or action plan", value: "2–3 days" },
      { label: "Engagement start", value: "Subject to availability" },
    ],
    confirmationLabel: "// CONFIRMATION",
    successTitle: "Message received",
    successMessage:
      "Thank you for your enquiry. I have received the information provided and will get back to you within 24 hours to discuss your needs.",
    closeLabel: "Close",
  },
  footer: {
    tagline: "Freelance Cloud & DevOps Consultant · Geneva",
    navigationAriaLabel: "Footer navigation",
    navigationTitle: "Navigation",
    services: "Services",
    about: "About",
    method: "Method",
    contact: "Contact",
    linksTitle: "Links",
    portfolio: "Portfolio",
    copyright: "© 2026 Badis Merakchi — All rights reserved.",
  },
} satisfies SiteContent;
