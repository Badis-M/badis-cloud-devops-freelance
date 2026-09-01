import type { SiteContent } from "./types";

export const siteFr = {
  lang: "fr",
  skipLinkLabel: "Aller au contenu principal",
  metadata: {
    title: "Consultant Cloud | Badis Merakchi",
    description:
      "Consultant Cloud, DevOps et Platform Engineering basé près de Genève. Infrastructure as Code, CI/CD, Kubernetes, automatisation cloud et fiabilité opérationnelle.",
    openGraphTitle: "Badis Merakchi — Consultant Cloud & DevOps Freelance",
    openGraphDescription:
      "J’aide les entreprises à automatiser, fiabiliser et industrialiser leurs infrastructures cloud, leurs pipelines CI/CD et leurs plateformes de déploiement.",
    openGraphLocale: "fr_FR",
    openGraphAlternateLocale: "en_GB",
    canonicalUrl: "https://consulting.badismerakchi.com/",
  },
  navigation: {
    ariaLabel: "Navigation principale",
    services: "Services",
    about: "À propos",
    method: "Méthode",
    contact: "Contact",
    languageSwitch: {
      code: "EN",
      label: "View the site in English",
      href: "/en/",
      targetLang: "en",
    },
  },
  hero: {
    availability: "SUISSE ROMANDE · GENÈVE · FRANCE & REMOTE",
    headline: {
      leading: "Consultant",
      accent: "Cloud & DevOps",
      trailing: "",
      secondLine: "pour vos infrastructures",
    },
    description:
      "J’aide les entreprises à automatiser, fiabiliser et industrialiser leurs infrastructures cloud, leurs pipelines CI/CD et leurs plateformes de déploiement.",
    primaryCta: "Discuter de votre besoin",
    secondaryCta: "Voir les services",
    trustAriaLabel: "Indicateurs de confiance",
    trustItems: [
      "Terraform · CI/CD · Kubernetes",
      "Genève · Suisse romande · Remote",
      "Réponse < 24h",
    ],
  },
  services: {
    label: "// SERVICES",
    heading: ["Des services concrets", "pour renforcer votre infrastructure"],
    introduction:
      "J’interviens sur des sujets Cloud, DevOps et Platform Engineering avec une approche pragmatique : comprendre le contexte, identifier les points de friction, livrer des améliorations utiles et documentées.",
    offers: [
      {
        category: "// CLOUD",
        title: "Cloud & Infrastructure Automation",
        description:
          "J’interviens sur l’audit, la structuration et l’automatisation de votre infrastructure pour obtenir une base IaC reproductible, maintenable et exploitable par vos équipes.",
        bullets: [
          "Audit et structuration Infrastructure as Code",
          "Standards Terraform pour AWS, Azure ou OCI",
          "Documentation d’exploitation et environnements reproductibles",
        ],
        cta: "Parler infrastructure →",
      },
      {
        category: "// DELIVERY",
        title: "CI/CD & Industrialisation",
        description:
          "Je fiabilise vos workflows de build, test et déploiement afin de réduire les étapes manuelles et rendre les releases plus prévisibles.",
        bullets: [
          "Workflows GitHub Actions et GitLab CI",
          "Déploiements Docker industrialisés et contrôlés",
          "Gestion des releases, erreurs et stratégies de rollback",
        ],
        cta: "Optimiser vos pipelines →",
      },
      {
        category: "// PLATFORM",
        title: "Kubernetes & Platform Engineering",
        description:
          "Je vous aide à standardiser vos déploiements conteneurisés et à poser des fondations Platform Engineering adaptées à la maturité de vos équipes.",
        bullets: [
          "Standards Kubernetes, Helm et GitOps",
          "Observabilité et diagnostic opérationnel",
          "Patterns réutilisables et documentation d’équipe",
        ],
        cta: "Structurer votre plateforme →",
      },
    ],
    training: {
      label: "// FORMATION & ENABLEMENT",
      title: "Formation & Transfert de compétences",
      description:
        "J’accompagne vos équipes sur les fondamentaux Cloud, DevOps, CI/CD, Terraform, Docker ou Kubernetes, avec une approche pédagogique orientée terrain.",
      bullets: [
        "Ateliers pratiques et vulgarisation technique",
        "Support à la montée en compétence des équipes",
        "Documentation claire et transfert opérationnel",
      ],
      cta: "Parler formation →",
    },
    problems: {
      label: "// VOS ENJEUX",
      title: "Les situations où j’interviens",
      items: [
        "Infrastructure créée manuellement ou difficile à reproduire",
        "Pipelines CI/CD fragiles ou trop manuels",
        "Déploiements Docker / Kubernetes peu standardisés",
        "Manque de documentation ou de visibilité opérationnelle",
        "Besoin de structurer une base Cloud / DevOps avant de scaler",
      ],
    },
    formats: {
      label: "// COLLABORATION",
      title: "Formats d’intervention",
      items: [
        { label: "Audit court", detail: "3 à 5 jours" },
        { label: "Renfort projet", detail: "quelques semaines" },
        { label: "Mission longue", detail: "Cloud / DevOps / Platform" },
        { label: "Formation équipe", detail: "ateliers, support et documentation" },
      ],
    },
    aiNote:
      "Je peux aussi accompagner les équipes qui veulent préparer des fondations cloud fiables pour des projets applicatifs, data ou IA.",
  },
  about: {
    label: "// QUI SUIS-JE",
    heading: ["Consultant indépendant,", "basé près de Genève"],
    introduction:
      "Je suis Badis Merakchi, consultant Cloud & DevOps. J’accompagne les entreprises sur l’automatisation d’infrastructure, les pipelines CI/CD, les environnements cloud et les fondations Platform Engineering.",
    paragraphs: [
      "Mon expérience m’a amené à travailler dans des contextes techniques exigeants, avec une attention particulière portée à la fiabilité, à la documentation et à la clarté opérationnelle.",
      "Je privilégie les solutions simples, robustes et adaptées au niveau de maturité de l’équipe. L’objectif est de livrer des améliorations utiles, pas de complexifier l’existant.",
    ],
    location: "Genève · Suisse romande · Remote",
    verificationText:
      "Pour compléter ce site, vous pouvez consulter mon portfolio technique ou mes projets GitHub.",
    portfolioLabel: "Portfolio technique →",
    githubLabel: "GitHub →",
    cardsAriaLabel: "Repères de crédibilité",
    cards: [
      { title: "Formateur", text: "Pédagogie & transfert de compétences" },
      { title: "Cloud & Infrastructure", text: "Terraform · AWS · Azure · OCI" },
      { title: "DevOps Delivery", text: "CI/CD · Docker · Automatisation" },
      { title: "Réactivité", text: "Disponible & réponse sous 24h" },
    ],
  },
  method: {
    label: "// MÉTHODE",
    heading: ["Une intervention structurée,", "du cadrage à la livraison"],
    introduction:
      "Chaque mission commence par une compréhension claire du contexte. L’objectif n’est pas d’ajouter des outils, mais de résoudre les bons problèmes dans le bon ordre.",
    steps: [
      {
        title: "Découverte",
        description:
          "Nous clarifions votre contexte, vos objectifs, vos contraintes techniques, vos délais et les problèmes à résoudre en priorité.",
      },
      {
        title: "Évaluation",
        description:
          "J’analyse l’existant : infrastructure, pipelines, déploiements, documentation, sécurité, observabilité et points de friction opérationnels.",
      },
      {
        title: "Plan d’action",
        description:
          "Vous obtenez une roadmap claire, priorisée et directement exploitable, avec les actions à forte valeur ajoutée en premier.",
      },
      {
        title: "Implémentation",
        description:
          "Je mets en place les améliorations validées, avec documentation, transfert de connaissance et attention portée à la maintenabilité.",
      },
    ],
  },
  contact: {
    label: "// CONTACT",
    heading: ["Parlons de votre", "infrastructure cloud"],
    introduction:
      "Décrivez brièvement votre besoin, votre contexte technique et votre horizon de démarrage. Je vous répondrai rapidement pour voir si je peux vous aider.",
    formTitle: "Votre demande",
    formLegend: "Informations de contact et détails de la demande",
    fields: {
      name: "Prénom & Nom *",
      company: "Entreprise / Organisation",
      email: "Email professionnel *",
      service: "Service souhaité *",
      servicePlaceholder: "Sélectionnez un service",
      budget: "Budget estimé",
      message: "Décrivez votre besoin *",
    },
    serviceOptions: [
      "Cloud & Infrastructure Automation",
      "CI/CD & Industrialisation",
      "Kubernetes & Platform Engineering",
      "Formation & Transfert de compétences",
      "Audit Infrastructure & Fiabilité",
      "Autre besoin Cloud / DevOps",
    ],
    subject: "Nouvelle demande consulting — badismerakchi.com",
    submitLabel: "Envoyer une demande",
    submittingLabel: "Envoi en cours...",
    helperText: "Votre message sera transmis par email. Je vous répondrai dès que possible.",
    errorMessage:
      "L’envoi a échoué. Vous pouvez réessayer ou me contacter via LinkedIn.",
    asideAriaLabel: "Disponibilité et délais indicatifs",
    availabilityTitle: "Disponible pour de nouvelles missions",
    availabilityItems: [
      "Genève · Suisse romande · Remote",
      "Mission courte ou longue durée",
      "Réponse < 24h",
      "Intervention sur site ou remote",
    ],
    timelineTitle: "Délais indicatifs",
    timelineItems: [
      { label: "Première réponse", value: "< 24h" },
      { label: "Échange de cadrage", value: "1–2 jours" },
      { label: "Proposition ou plan d’action", value: "2–3 jours" },
      { label: "Démarrage mission", value: "Selon disponibilité" },
    ],
    confirmationLabel: "// CONFIRMATION",
    successTitle: "Message bien reçu",
    successMessage:
      "Merci pour votre demande. J’ai bien reçu les informations transmises et je vous recontacterai sous 24h pour échanger sur votre besoin.",
    closeLabel: "Fermer",
  },
  footer: {
    tagline: "Consultant Cloud & DevOps freelance · Genève",
    navigationAriaLabel: "Navigation de pied de page",
    navigationTitle: "Navigation",
    services: "Services",
    about: "À propos",
    method: "Méthode",
    contact: "Contact",
    linksTitle: "Liens",
    portfolio: "Portfolio",
    copyright: "© 2026 Badis Merakchi — Tous droits réservés.",
  },
} satisfies SiteContent;
