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
    privacyNotice:
      "The information submitted is used solely to respond to your enquiry and is transmitted through Formspree.",
    privacyLinkLabel: "Learn more about how your data is handled.",
    privacyHref: "/en/privacy/",
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
    privacy: "Privacy",
    privacyHref: "/en/privacy/",
    copyright: "© 2026 Badis Merakchi — All rights reserved.",
  },
  privacy: {
    metadata: {
      title: "Privacy Policy | Badis Merakchi",
      description:
        "Privacy policy for Badis Merakchi’s consulting website and information about how contact enquiries are handled.",
      openGraphTitle: "Privacy Policy | Badis Merakchi",
      openGraphDescription:
        "Information about the data processed when submitting an enquiry through Badis Merakchi’s consulting website.",
      openGraphLocale: "en_GB",
      openGraphAlternateLocale: "fr_FR",
      canonicalUrl: "https://consulting.badismerakchi.com/en/privacy/",
    },
    label: "// PRIVACY",
    title: "Privacy Policy",
    introduction:
      "This page explains which data is processed when you use the contact form, why it is processed and how you can exercise your rights.",
    updatedLabel: "Last updated",
    updatedDate: "26 September 2026",
    homeHref: "/en/",
    homeLabel: "Back to the website",
    languageSwitch: {
      code: "FR",
      label: "Consulter la politique de confidentialité en français",
      href: "/confidentialite/",
      targetLang: "fr",
    },
    sections: [
      {
        title: "Data controller",
        paragraphs: [
          "Badis Merakchi, an independent Cloud & DevOps consultant based near Geneva, is responsible for processing data submitted through this website.",
          "For any question about your data, you can use the contact form and state that your request concerns data protection.",
        ],
        link: { label: "Go to the contact form →", href: "/en/#contact" },
      },
      {
        title: "Data collected",
        paragraphs: [
          "The form may collect the information you choose to provide when describing your requirements.",
        ],
        items: [
          "First and last name",
          "Company or organisation",
          "Work email address",
          "Required service and estimated budget",
          "Message content",
        ],
      },
      {
        title: "Purposes and legal basis",
        paragraphs: [
          "This data is used solely to receive your enquiry, understand your context, respond to you and prepare a potential discussion or commercial proposal.",
          "Processing is based on pre-contractual steps taken at your request and, where relevant, on the legitimate interest in managing professional enquiries. Your details are not added to a marketing list without your consent.",
        ],
      },
      {
        title: "Recipients and technical services",
        paragraphs: [
          "The information is intended for Badis Merakchi and the service providers strictly required to operate the website. Formspree processes form submissions and sends them by email. Cloudflare hosts and protects the website and may process technical data required to deliver and secure the service.",
        ],
        link: {
          label: "Read Formspree’s privacy policy →",
          href: "https://formspree.io/legal/privacy-policy/",
          external: true,
        },
      },
      {
        title: "International transfers",
        paragraphs: [
          "Formspree states that it uses infrastructure located in the United States and may process information in other countries where it operates. Its privacy policy describes the measures applied to these transfers.",
        ],
      },
      {
        title: "Retention period",
        paragraphs: [
          "Enquiries that do not result in a contractual relationship are retained for no longer than 12 months after the last exchange and are then deleted from systems controlled by Badis Merakchi.",
          "Where a contractual relationship is established, some information may be retained for longer when required to perform the engagement or comply with legal, administrative or accounting obligations. Technical service providers may apply their own retention and backup periods.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Depending on the applicable regulations, you may request access to, correction or deletion of your data, restrict its processing or object to its use.",
          "You can exercise these rights through the contact form. You may also contact the relevant data protection authority if you believe your request has not been handled appropriately.",
        ],
        link: { label: "Exercise your rights →", href: "/en/#contact" },
      },
      {
        title: "Cookies and audience measurement",
        paragraphs: [
          "This website currently uses no analytics, advertising or marketing tracking tools and does not intentionally place cookies for these purposes.",
        ],
      },
      {
        title: "Changes to this policy",
        paragraphs: [
          "This policy may be updated if the form, service providers or applicable obligations change. The latest revision date is shown at the top of this page.",
        ],
      },
    ],
  },
} satisfies SiteContent;
