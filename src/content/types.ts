export type SiteLanguage = "fr" | "en";

export interface SiteMetadata {
  title: string;
  description: string;
  openGraphTitle: string;
  openGraphDescription: string;
  openGraphLocale: string;
  openGraphAlternateLocale: string;
  canonicalUrl: string;
}

export interface SiteContent {
  lang: SiteLanguage;
  skipLinkLabel: string;
  metadata: SiteMetadata;
  navigation: {
    ariaLabel: string;
    services: string;
    about: string;
    method: string;
    contact: string;
    languageSwitch: {
      code: string;
      label: string;
      href: string;
      targetLang: SiteLanguage;
    };
  };
  hero: {
    availability: string;
    headline: {
      leading: string;
      accent: string;
      trailing: string;
      secondLine: string;
    };
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustAriaLabel: string;
    trustItems: readonly [string, string, string];
  };
  services: {
    label: string;
    heading: readonly [string, string];
    introduction: string;
    offers: readonly {
      category: string;
      title: string;
      description: string;
      bullets: readonly string[];
      cta: string;
    }[];
    training: {
      label: string;
      title: string;
      description: string;
      bullets: readonly string[];
      cta: string;
    };
    problems: {
      label: string;
      title: string;
      items: readonly string[];
    };
    formats: {
      label: string;
      title: string;
      items: readonly { label: string; detail: string }[];
    };
    aiNote: string;
  };
  about: {
    label: string;
    heading: readonly [string, string];
    introduction: string;
    paragraphs: readonly [string, string];
    location: string;
    verificationText: string;
    portfolioLabel: string;
    githubLabel: string;
    cardsAriaLabel: string;
    cards: readonly { title: string; text: string }[];
  };
  method: {
    label: string;
    heading: readonly [string, string];
    introduction: string;
    steps: readonly { title: string; description: string }[];
  };
  contact: {
    label: string;
    heading: readonly [string, string];
    introduction: string;
    formTitle: string;
    formLegend: string;
    fields: {
      name: string;
      company: string;
      email: string;
      service: string;
      servicePlaceholder: string;
      budget: string;
      message: string;
    };
    serviceOptions: readonly string[];
    subject: string;
    submitLabel: string;
    submittingLabel: string;
    helperText: string;
    errorMessage: string;
    asideAriaLabel: string;
    availabilityTitle: string;
    availabilityItems: readonly string[];
    timelineTitle: string;
    timelineItems: readonly { label: string; value: string }[];
    confirmationLabel: string;
    successTitle: string;
    successMessage: string;
    closeLabel: string;
  };
  footer: {
    tagline: string;
    navigationAriaLabel: string;
    navigationTitle: string;
    services: string;
    about: string;
    method: string;
    contact: string;
    linksTitle: string;
    portfolio: string;
    copyright: string;
  };
}
