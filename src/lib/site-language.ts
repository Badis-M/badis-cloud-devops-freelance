export type Language = "fr" | "en";
export const LANGUAGE_KEY = "badis-site-language";

export function readLanguage(storage: Pick<Storage, "getItem">): Language {
  try {
    return storage.getItem(LANGUAGE_KEY) === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

export function saveLanguage(storage: Pick<Storage, "setItem">, language: Language) {
  try {
    storage.setItem(LANGUAGE_KEY, language);
  } catch {
    // Language selection still works when browser storage is unavailable.
  }
}

export const english: Record<string, string> = {
  Prestations: "Services",
  Méthode: "Approach",
  Profil: "About",
  Contact: "Contact",
  "Discutons de votre besoin": "Let’s discuss your needs",
  "Consultant Cloud & DevOps · France, Suisse romande, remote":
    "Cloud & DevOps consultant · France, French-speaking Switzerland, remote",
  "Des infrastructures que vos équipes ": "Infrastructure your teams ",
  comprennent: "understand",
  ", déploient et font évoluer.": ", deploy and evolve.",
  "J’accompagne les entreprises et leurs équipes techniques qui veulent automatiser, fiabiliser et industrialiser leur cloud, leurs pipelines CI/CD et leurs plateformes de déploiement — avec une démarche claire et des résultats qui restent maintenables après mon départ.":
    "I help businesses and their technical teams automate, strengthen and streamline their cloud infrastructure, CI/CD pipelines and deployment platforms — with a clear approach and solutions they can maintain long after my engagement ends.",
  "Réponse sous 24 h": "Reply within 24 hours",
  "Vos enjeux": "Your challenges",
  "Vous vous reconnaissez peut‑être ici.": "Does any of this sound familiar?",
  "Une infrastructure créée à la main, que personne n’ose plus toucher":
    "Manually built infrastructure that no one dares to change",
  "Des pipelines CI/CD fragiles, lents ou encore trop manuels":
    "CI/CD pipelines that are fragile, slow or still too manual",
  "Des déploiements Docker / Kubernetes différents d’une équipe à l’autre":
    "Docker / Kubernetes deployments that vary from team to team",
  "Peu de documentation, peu de visibilité quand un incident survient":
    "Limited documentation and little visibility when incidents occur",
  "Le besoin de poser des fondations solides avant de grandir":
    "The need for solid foundations before scaling up",
  "Partir de votre problème, pas d’un catalogue d’outils.":
    "Start with your problem, not a list of tools.",
  "Cinq domaines d’intervention, toujours avec la même exigence : simple, robuste, documenté.":
    "Five areas of expertise, with one consistent standard: simple, robust, documented.",
  "« Notre infrastructure n’est pas reproductible. »":
    "“We can’t reproduce our infrastructure reliably.”",
  "Infrastructure Cloud automatisée": "Cloud infrastructure automation",
  "Je reprends votre existant et le transforme en Infrastructure as Code claire et maintenable, que vos équipes peuvent faire évoluer sans moi.":
    "I turn your existing infrastructure into clear, maintainable Infrastructure as Code that your teams can evolve independently.",
  "Audit et structuration IaC": "IaC assessment and structure",
  "Standards Terraform sur AWS, Azure ou OCI": "Terraform standards for AWS, Azure or OCI",
  "Environnements reproductibles et documentés": "Reproducible, documented environments",
  "« Chaque mise en production est un pari. »": "“Every production release feels like a gamble.”",
  "CI/CD & industrialisation": "CI/CD & delivery automation",
  "Je fiabilise vos chaînes de build, test et déploiement pour des releases prévisibles, moins d’étapes manuelles et un retour arrière maîtrisé.":
    "I strengthen your build, test and deployment pipelines for predictable releases, fewer manual steps and reliable rollbacks.",
  "GitHub Actions et GitLab CI": "GitHub Actions and GitLab CI",
  "Déploiements Docker industrialisés": "Standardised Docker deployments",
  "Releases, gestion d’erreurs et rollback": "Releases, error handling and rollback",
  "« Kubernetes est devenu difficile à gouverner. »":
    "“Kubernetes has become difficult to manage.”",
  "Kubernetes & Platform Engineering": "Kubernetes & Platform Engineering",
  "Je standardise vos déploiements conteneurisés et pose une plateforme interne à la mesure de la maturité de vos équipes, sans sur-ingénierie.":
    "I standardise your containerised deployments and build an internal platform suited to your teams’ maturity, without over-engineering.",
  "Standards Kubernetes, Helm et GitOps": "Kubernetes, Helm and GitOps standards",
  "Observabilité et diagnostic opérationnel": "Observability and operational troubleshooting",
  "Patterns réutilisables pour les équipes": "Reusable patterns for your teams",
  "« Nos équipes doivent monter en autonomie. »":
    "“Our teams need to become more self-sufficient.”",
  "Formation & transfert de compétences": "Training & knowledge transfer",
  "Ateliers pratiques sur Cloud, CI/CD, Terraform, Docker ou Kubernetes, pensés à partir de vos propres systèmes plutôt que d’exemples théoriques.":
    "Hands-on workshops covering Cloud, CI/CD, Terraform, Docker or Kubernetes, built around your own systems rather than theoretical examples.",
  "Ateliers terrain et vulgarisation": "Hands-on workshops and clear explanations",
  "Accompagnement à la montée en compétence": "Coaching to develop team expertise",
  "Documentation et passation opérationnelle": "Documentation and operational handover",
  "« Notre facture cloud augmente sans visibilité claire. »":
    "“Our cloud bill keeps growing, and we lack visibility.”",
  "FinOps & optimisation des coûts cloud": "FinOps & cloud cost optimisation",
  "J’analyse vos dépenses cloud, identifie les ressources sous-utilisées et priorise les optimisations en tenant compte des performances et des contraintes opérationnelles.":
    "I analyse your cloud spending, identify underused resources and prioritise optimisations while accounting for performance and operational constraints.",
  "Analyse des consommations et des principaux postes de dépenses":
    "Analysis of usage and key cost drivers",
  "Dimensionnement des ressources et suppression des ressources inutilisées":
    "Resource rightsizing and removal of unused resources",
  "Suivi budgétaire et recommandations priorisées":
    "Budget tracking and prioritised recommendations",
  "Une intervention structurée, ": "A structured engagement, ",
  "du cadrage à la livraison": "from scoping to delivery",
  "Chaque mission commence par une compréhension claire du contexte. L’objectif n’est pas d’ajouter des outils, mais de résoudre les bons problèmes dans le bon ordre.":
    "Every engagement starts with a clear understanding of your context. The aim is not to add more tools, but to solve the right problems in the right order.",
  Découverte: "Discovery",
  "Nous clarifions votre contexte, vos objectifs, vos contraintes techniques, vos délais et les problèmes à résoudre en priorité.":
    "Together, we clarify your context, goals, technical constraints, timelines and the problems that need addressing first.",
  Évaluation: "Assessment",
  "J’analyse l’existant : infrastructure, pipelines, déploiements, documentation, sécurité, observabilité et points de friction opérationnels.":
    "I assess your current infrastructure, pipelines, deployments, documentation, security, observability and operational pain points.",
  "Plan d’action": "Action plan",
  "Vous obtenez une roadmap claire, priorisée et directement exploitable, avec les actions à forte valeur ajoutée en premier.":
    "You receive a clear, prioritised and actionable roadmap, with the highest-value improvements first.",
  Implémentation: "Implementation",
  "Je mets en place les améliorations validées, avec documentation, transfert de connaissance et attention portée à la maintenabilité.":
    "I implement the agreed improvements, with documentation, knowledge transfer and a focus on long-term maintainability.",
  "Un consultant senior qui livre — et qui transmet.":
    "A senior consultant who delivers — and shares expertise.",
  "Je suis Badis Merakchi, consultant indépendant Cloud & DevOps basé près de Genève. J’interviens sur l’automatisation d’infrastructure, les pipelines CI/CD, les environnements cloud et les fondations Platform Engineering, dans des contextes techniques exigeants.":
    "I’m Badis Merakchi, an independent Cloud & DevOps consultant based near Geneva. I work on infrastructure automation, CI/CD pipelines, cloud environments and Platform Engineering foundations in demanding technical settings.",
  "Ma conviction : les meilleures solutions sont simples, robustes et adaptées à la maturité de l’équipe. Je ne complexifie pas l’existant, je le rends fiable, lisible et exploitable par ceux qui le feront vivre.":
    "I believe the best solutions are simple, robust and suited to the team’s maturity. Rather than adding complexity, I make existing systems reliable, understandable and manageable for the people who will run them.",
  "Cloud & IaC": "Cloud & IaC",
  "Terraform · AWS · Azure · OCI": "Terraform · AWS · Azure · OCI",
  Delivery: "Delivery",
  "CI/CD · Docker · Automatisation": "CI/CD · Docker · Automation",
  Plateforme: "Platform",
  "Kubernetes · Helm · GitOps": "Kubernetes · Helm · GitOps",
  Transmission: "Knowledge sharing",
  "Formateur, documentation, ateliers": "Training, documentation, workshops",
  "Formats d’intervention": "Engagement formats",
  "Audit court": "Short assessment",
  "3 à 5 jours": "3 to 5 days",
  "Renfort projet": "Project support",
  "Quelques semaines": "A few weeks",
  "Mission longue": "Long-term engagement",
  "Cloud, DevOps, Platform": "Cloud, DevOps, Platform",
  "Formation d’équipe": "Team training",
  "Ateliers et support": "Workshops and support",
  "Parlons de votre infrastructure.": "Let’s talk about your infrastructure.",
  "Quelques lignes suffisent : votre contexte, ce qui bloque aujourd’hui et votre horizon de démarrage. Je vous réponds sous 24 h pour voir si je peux vous aider.":
    "A few lines are all it takes: your context, what’s holding you back and when you’d like to start. I’ll reply within 24 hours to explore how I can help.",
  "Disponible pour de nouvelles missions": "Available for new engagements",
  "Sur site ou remote": "On-site or remote",
  "Mission courte ou longue": "Short or long-term engagements",
};
