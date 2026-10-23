import type { Language } from "./site-language";

type PrivacyContent = {
  title: string;
  intro: string;
  updated: string;
  home: string;
  skip: string;
  switchLabel: string;
  sections: { title: string; paragraphs: string[]; links?: { label: string; href: string }[] }[];
};

export const privacyContent: Record<Language, PrivacyContent> = {
  fr: {
    title: "Confidentialité",
    intro:
      "Cette page explique les informations utilisées lorsque vous consultez ce site ou contactez Badis Merakchi.",
    updated: "Mis à jour le 23 octobre 2026",
    home: "Retour au site",
    skip: "Aller au contenu",
    switchLabel: "Read in English",
    sections: [
      {
        title: "Responsable et contact",
        paragraphs: [
          "Badis Merakchi est responsable des traitements liés à son activité de consulting. Pour toute question ou demande relative à vos données, vous pouvez écrire à badis.merakchi@gmail.com.",
        ],
      },
      {
        title: "Vos échanges par email",
        paragraphs: [
          "Le lien de contact ouvre votre application de messagerie. Aucun message n’est envoyé avant que vous ne le validiez dans cette application. Seuls les messages que vous décidez d’envoyer sont reçus.",
          "Votre adresse email, votre nom et les informations professionnelles communiquées servent à répondre à votre demande, préparer une éventuelle mission et suivre les échanges. La messagerie de réception est fournie par Google (Gmail). Évitez de transmettre des identifiants, secrets ou informations confidentielles dans une première prise de contact.",
          "Les échanges sont conservés pendant le temps nécessaire au suivi de votre demande et, lorsqu’une mission se concrétise, aux obligations contractuelles ou légales applicables. Vous pouvez demander la suppression des échanges qui ne sont plus nécessaires.",
        ],
      },
      {
        title: "Hébergement et mesure de fréquentation",
        paragraphs: [
          "Cloudflare héberge ce site et traite les informations techniques nécessaires à sa livraison et à sa sécurité, notamment l’adresse IP et les caractéristiques des requêtes.",
          "Cloudflare Web Analytics mesure la fréquentation et les performances des pages : pages consultées, provenance et indicateurs de chargement ou d’interaction. Le navigateur télécharge le beacon Cloudflare et lui transmet ces mesures. Aucun outil publicitaire n’est intégré au site.",
          "Les modalités de traitement et de conservation des données techniques sont décrites par Cloudflare dans sa documentation et sa politique de confidentialité.",
        ],
        links: [
          {
            label: "Fonctionnement de Cloudflare Web Analytics",
            href: "https://developers.cloudflare.com/web-analytics/about/",
          },
          {
            label: "Confidentialité chez Cloudflare",
            href: "https://www.cloudflare.com/privacypolicy/",
          },
        ],
      },
      {
        title: "Polices Google Fonts",
        paragraphs: [
          "Les polices sont téléchargées depuis Google Fonts. Cette connexion transmet à Google les informations techniques de la requête, dont votre adresse IP, nécessaires à la fourniture des fichiers de police.",
        ],
        links: [
          {
            label: "Politique de confidentialité de Google",
            href: "https://policies.google.com/privacy?hl=fr",
          },
        ],
      },
      {
        title: "Préférence de langue",
        paragraphs: [
          "Votre choix français ou anglais est enregistré dans le stockage local du navigateur, sous la clé badis-site-language. Il sert uniquement à retrouver votre langue lors d’une prochaine visite. Il reste sur votre appareil jusqu’à sa modification ou à l’effacement des données du site dans votre navigateur.",
        ],
      },
      {
        title: "Prestataires et transferts",
        paragraphs: [
          "Les services Cloudflare et Google utilisent des infrastructures internationales ; leurs traitements peuvent avoir lieu hors de votre pays, notamment aux États-Unis. Leurs politiques décrivent les garanties et modalités applicables. Ce site ne promet donc pas un hébergement ou un traitement exclusivement suisse.",
          "Les liens vers le portfolio et les sites externes vous font quitter ce site ; leurs propres informations de confidentialité s’appliquent.",
        ],
      },
      {
        title: "Vos droits",
        paragraphs: [
          "Selon la législation applicable à votre situation, vous pouvez demander l’accès à vos données, leur rectification ou leur suppression, ainsi que vous opposer à certains traitements. Adressez votre demande à badis.merakchi@gmail.com en précisant les échanges concernés. Une vérification d’identité proportionnée peut être nécessaire.",
          "Le traitement des demandes professionnelles repose, selon leur nature, sur la préparation ou l’exécution d’une mission et sur l’intérêt à répondre aux sollicitations reçues. Les obligations de protection des données applicables, notamment la LPD suisse et le RGPD lorsqu’il s’applique, sont prises en compte.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy",
    intro:
      "This page explains how information is used when you browse this website or contact Badis Merakchi.",
    updated: "Updated on 23 October 2026",
    home: "Back to the website",
    skip: "Skip to content",
    switchLabel: "Lire en français",
    sections: [
      {
        title: "Controller and contact",
        paragraphs: [
          "Badis Merakchi is responsible for processing related to his consulting activity. For questions or requests about your information, email badis.merakchi@gmail.com.",
        ],
      },
      {
        title: "Email enquiries",
        paragraphs: [
          "The contact link opens your email application. No message is sent until you confirm it in that application. Only messages you choose to send are received.",
          "Your email address, name and any professional information you provide are used to respond to your enquiry, prepare a possible engagement and follow up on discussions. Incoming mail is handled through Google (Gmail). Please avoid sending credentials, secrets or confidential information in an initial enquiry.",
          "Messages are retained for as long as necessary to follow up on your enquiry and, if an engagement proceeds, meet applicable contractual or legal obligations. You can request the deletion of correspondence that is no longer needed.",
        ],
      },
      {
        title: "Hosting and website analytics",
        paragraphs: [
          "Cloudflare hosts this website and processes technical information needed to deliver and secure it, including IP addresses and request characteristics.",
          "Cloudflare Web Analytics measures traffic and page performance, including pages visited, referral sources and loading or interaction metrics. Your browser downloads the Cloudflare beacon and sends these measurements to Cloudflare. No advertising tools are integrated into this website.",
          "Cloudflare describes its technical data handling and retention practices in its documentation and privacy policy.",
        ],
        links: [
          {
            label: "How Cloudflare Web Analytics works",
            href: "https://developers.cloudflare.com/web-analytics/about/",
          },
          { label: "Cloudflare privacy policy", href: "https://www.cloudflare.com/privacypolicy/" },
        ],
      },
      {
        title: "Google Fonts",
        paragraphs: [
          "Fonts are downloaded from Google Fonts. This connection sends Google technical request information, including your IP address, to deliver the font files.",
        ],
        links: [
          { label: "Google privacy policy", href: "https://policies.google.com/privacy?hl=en" },
        ],
      },
      {
        title: "Language preference",
        paragraphs: [
          "Your French or English preference is saved in your browser’s local storage under badis-site-language. It is used only to restore your selected language on a later visit. It remains on your device until you change it or clear this website’s browser data.",
        ],
      },
      {
        title: "Providers and international processing",
        paragraphs: [
          "Cloudflare and Google operate international infrastructure. Processing may take place outside your country, including in the United States. Their policies describe the applicable safeguards and arrangements. This website therefore does not promise exclusively Swiss hosting or processing.",
          "Portfolio and other external links take you to separate websites with their own privacy information.",
        ],
      },
      {
        title: "Your rights",
        paragraphs: [
          "Depending on the law applicable to your circumstances, you may request access, correction or deletion of your information, or object to certain processing. Contact badis.merakchi@gmail.com and identify the correspondence concerned. Proportionate identity verification may be necessary.",
          "Professional enquiries are processed, depending on their nature, to prepare or carry out an engagement and in the interest of responding to incoming requests. Applicable data protection obligations, including the Swiss FADP and the GDPR where applicable, are taken into account.",
        ],
      },
    ],
  },
};
