import type { Language } from "./site-language";

export const SITE_URL = "https://consulting.badismerakchi.com";
export const CONTACT_EMAIL = "badis.merakchi@gmail.com";
export const PRIVACY_PATHS = { fr: "/confidentialite", en: "/en/privacy" } as const;
type PageKind = "home" | "privacy";

const metadata = {
  fr: {
    home: {
      title: "Badis Merakchi — Consultant Cloud & DevOps freelance",
      description:
        "Consultant senior Cloud & DevOps : infrastructure as code, CI/CD, Kubernetes et transfert de compétences. Missions en France, Suisse romande et remote.",
    },
    privacy: {
      title: "Confidentialité | Badis Merakchi",
      description:
        "Comment sont traitées les données de contact, la préférence de langue et les mesures de fréquentation du site de Badis Merakchi.",
    },
    imageAlt: "Badis Merakchi — Cloud, DevOps et Platform Engineering",
    locale: "fr_CH",
  },
  en: {
    home: {
      title: "Badis Merakchi — Freelance Cloud & DevOps consultant",
      description:
        "Senior Cloud & DevOps consultant: Infrastructure as Code, CI/CD, Kubernetes and knowledge transfer. Available in France, French-speaking Switzerland and remotely.",
    },
    privacy: {
      title: "Privacy | Badis Merakchi",
      description:
        "How contact information, language preferences and website usage metrics are handled on Badis Merakchi’s consulting website.",
    },
    imageAlt: "Badis Merakchi — Cloud, DevOps and Platform Engineering",
    locale: "en_GB",
  },
};

export function getPageHead(language: Language, page: PageKind = "home") {
  const content = metadata[language];
  const url = SITE_URL + (page === "home" ? "/" : PRIVACY_PATHS[language]);
  return {
    meta: [
      { title: content[page].title },
      { name: "description", content: content[page].description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Badis Merakchi" },
      { property: "og:title", content: content[page].title },
      { property: "og:description", content: content[page].description },
      { property: "og:url", content: url },
      { property: "og:locale", content: content.locale },
      { property: "og:image", content: SITE_URL + "/social-card.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: content.imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: content[page].title },
      { name: "twitter:description", content: content[page].description },
      { name: "twitter:image", content: SITE_URL + "/social-card.png" },
      { name: "twitter:image:alt", content: content.imageAlt },
    ],
    links: [
      { rel: "canonical", href: url },
      ...(page === "privacy"
        ? [
            { rel: "alternate", hrefLang: "fr", href: SITE_URL + PRIVACY_PATHS.fr },
            { rel: "alternate", hrefLang: "en", href: SITE_URL + PRIVACY_PATHS.en },
          ]
        : []),
    ],
  };
}

export function syncPageMetadata(language: Language, page: PageKind = "home") {
  const head = getPageHead(language, page);
  document.documentElement.lang = language;
  document.title = metadata[language][page].title;
  for (const tag of head.meta) {
    const attribute = "property" in tag ? "property" : "name" in tag ? "name" : null;
    if (!attribute) continue;
    const key = attribute === "property" ? tag.property : tag.name;
    let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attribute, key!);
      document.head.append(element);
    }
    element.content = tag.content!;
  }
}
