import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  english,
  readLanguage,
  saveLanguage,
  LANGUAGE_KEY,
  type Language,
} from "@/lib/site-language";

const EMAIL = "badis.merakchi@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Badis Merakchi — Consultant Cloud & DevOps freelance" },
      {
        name: "description",
        content:
          "Consultant senior Cloud & DevOps : infrastructure as code, CI/CD, Kubernetes et transfert de compétences. Missions en France, Suisse romande et remote.",
      },
      { property: "og:title", content: "Badis Merakchi — Consultant Cloud & DevOps" },
      {
        property: "og:description",
        content:
          "Fiabiliser, automatiser et transmettre : une intervention structurée, du cadrage à la livraison.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const problems = [
  "Une infrastructure créée à la main, que personne n’ose plus toucher",
  "Des pipelines CI/CD fragiles, lents ou encore trop manuels",
  "Des déploiements Docker / Kubernetes différents d’une équipe à l’autre",
  "Peu de documentation, peu de visibilité quand un incident survient",
  "Le besoin de poser des fondations solides avant de grandir",
];

const services = [
  {
    n: "I",
    need: "« Notre infrastructure n’est pas reproductible. »",
    title: "Infrastructure Cloud automatisée",
    body: "Je reprends votre existant et le transforme en Infrastructure as Code claire et maintenable, que vos équipes peuvent faire évoluer sans moi.",
    points: [
      "Audit et structuration IaC",
      "Standards Terraform sur AWS, Azure ou OCI",
      "Environnements reproductibles et documentés",
    ],
  },
  {
    n: "II",
    need: "« Chaque mise en production est un pari. »",
    title: "CI/CD & industrialisation",
    body: "Je fiabilise vos chaînes de build, test et déploiement pour des releases prévisibles, moins d’étapes manuelles et un retour arrière maîtrisé.",
    points: [
      "GitHub Actions et GitLab CI",
      "Déploiements Docker industrialisés",
      "Releases, gestion d’erreurs et rollback",
    ],
  },
  {
    n: "III",
    need: "« Kubernetes est devenu difficile à gouverner. »",
    title: "Kubernetes & Platform Engineering",
    body: "Je standardise vos déploiements conteneurisés et pose une plateforme interne à la mesure de la maturité de vos équipes, sans sur-ingénierie.",
    points: [
      "Standards Kubernetes, Helm et GitOps",
      "Observabilité et diagnostic opérationnel",
      "Patterns réutilisables pour les équipes",
    ],
  },
  {
    n: "IV",
    need: "« Nos équipes doivent monter en autonomie. »",
    title: "Formation & transfert de compétences",
    body: "Ateliers pratiques sur Cloud, CI/CD, Terraform, Docker ou Kubernetes, pensés à partir de vos propres systèmes plutôt que d’exemples théoriques.",
    points: [
      "Ateliers terrain et vulgarisation",
      "Accompagnement à la montée en compétence",
      "Documentation et passation opérationnelle",
    ],
  },
  {
    n: "V",
    need: "« Notre facture cloud augmente sans visibilité claire. »",
    title: "FinOps & optimisation des coûts cloud",
    body: "J’analyse vos dépenses cloud, identifie les ressources sous-utilisées et priorise les optimisations en tenant compte des performances et des contraintes opérationnelles.",
    points: [
      "Analyse des consommations et des principaux postes de dépenses",
      "Dimensionnement des ressources et suppression des ressources inutilisées",
      "Suivi budgétaire et recommandations priorisées",
    ],
  },
];

// Method timeline: scroll-driven progressive reveal.
// - "static": default render (SSR, no JS, reduced motion) — all steps visible, no pinning.
// - "pinned": desktop, when the section fits the viewport — the section sticks while scroll progress reveals steps.
// - "steps": mobile / short viewports — each step reveals as it enters the viewport.
// Steps are only faded (opacity), never removed, so screen readers always get the full text.
type TimelineMode = "static" | "pinned" | "steps";
const PIN_STEP_VH = 45; // scroll distance (in vh) per revealed step while pinned

function MethodTimeline({
  children,
  translate,
}: {
  children: ReactNode;
  translate: (text: string) => string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const [mode, setMode] = useState<TimelineMode>("static");
  const [revealed, setRevealed] = useState(steps.length);
  const [line, setLine] = useState<number | null>(null);

  // Pick a mode from viewport size and motion preference.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 768px)");
    const pick = () => {
      if (reduce.matches) return setMode("static");
      if (!desktop.matches) return setMode("steps");
      const el = contentRef.current;
      // Pin only when heading + timeline fit on screen (content height without vertical padding + small margin).
      const inner = el
        ? el.scrollHeight - parseFloat(getComputedStyle(el).paddingTop) * 2
        : Infinity;
      setMode(inner + 96 <= window.innerHeight ? "pinned" : "steps");
    };
    pick();
    window.addEventListener("resize", pick);
    reduce.addEventListener("change", pick);
    return () => {
      window.removeEventListener("resize", pick);
      reduce.removeEventListener("change", pick);
    };
  }, []);

  // Map scroll position to the number of revealed steps (reverses naturally on scroll up).
  useEffect(() => {
    if (mode === "static") {
      setRevealed(steps.length);
      setLine(null);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const items = Array.from(listRef.current?.children ?? []).filter(
        (c) => c.tagName === "LI",
      ) as HTMLElement[];
      let n = 1;
      if (mode === "pinned" && trackRef.current) {
        const rect = trackRef.current.getBoundingClientRect();
        const dist = trackRef.current.offsetHeight - window.innerHeight;
        const p = dist > 0 ? Math.min(1, Math.max(0, -rect.top / dist)) : 1;
        n = Math.min(steps.length, 1 + Math.floor(p * steps.length));
      } else {
        n = items.filter((li) => li.getBoundingClientRect().top < window.innerHeight * 0.8).length;
      }
      setRevealed(n);
      const last = items[Math.max(0, n - 1)];
      const horizontal = mode === "pinned" || window.matchMedia("(min-width: 768px)").matches;
      setLine(n === 0 || !last ? 0 : (horizontal ? last.offsetLeft : last.offsetTop) + 18);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [mode]);

  const pinned = mode === "pinned";
  const active = mode === "static" ? -1 : revealed - 1;

  return (
    <div
      ref={trackRef}
      data-mode={mode}
      style={pinned ? { height: `calc(100vh + ${PIN_STEP_VH * (steps.length - 1)}vh)` } : undefined}
    >
      <div
        className={pinned ? "sticky top-0 flex min-h-screen flex-col justify-center" : undefined}
      >
        <div
          ref={contentRef}
          className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${pinned ? "py-12" : "py-20 md:py-32"}`}
        >
          {children}
          <ol ref={listRef} className="timeline relative mt-20 grid gap-0 md:grid-cols-4">
            <div
              aria-hidden
              className="absolute left-[1.15rem] top-0 h-full w-px bg-rule md:left-0 md:top-[1.15rem] md:h-px md:w-full"
            />
            <div
              aria-hidden
              className="timeline-line absolute left-[1.15rem] top-0 w-px bg-signal md:left-0 md:top-[1.15rem] md:h-px"
              style={line === null ? undefined : { ["--line" as string]: `${line}px` }}
              data-progress={line === null ? "full" : "partial"}
            />
            {steps.map((s, i) => {
              const shown = i < revealed;
              const isActive = i === active;
              return (
                <li
                  key={s.n}
                  tabIndex={0}
                  data-shown={shown}
                  aria-current={isActive ? "step" : undefined}
                  className="timeline-step group relative rounded-sm pb-12 pl-14 outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-4 focus-visible:ring-offset-card md:pb-0 md:pl-0 md:pr-8"
                >
                  <span
                    className={`absolute left-0 top-0 flex h-[2.3rem] w-[2.3rem] items-center justify-center rounded-full border bg-card font-mono text-xs transition-colors duration-300 md:static group-hover:border-signal group-hover:text-signal group-focus-visible:border-signal group-focus-visible:text-signal ${
                      isActive ? "border-signal text-signal" : "border-foreground"
                    }`}
                  >
                    {s.n}
                  </span>
                  <h3
                    className={`pt-1 font-display text-2xl [overflow-wrap:anywhere] hyphens-auto underline decoration-1 underline-offset-8 transition-colors duration-300 group-hover:decoration-signal group-focus-visible:decoration-signal md:mt-8 md:pt-0 md:text-3xl ${
                      isActive ? "decoration-signal" : "decoration-transparent"
                    }`}
                  >
                    {translate(s.t)}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{translate(s.d)}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    n: "01",
    t: "Découverte",
    d: "Nous clarifions votre contexte, vos objectifs, vos contraintes techniques, vos délais et les problèmes à résoudre en priorité.",
  },
  {
    n: "02",
    t: "Évaluation",
    d: "J’analyse l’existant : infrastructure, pipelines, déploiements, documentation, sécurité, observabilité et points de friction opérationnels.",
  },
  {
    n: "03",
    t: "Plan d’action",
    d: "Vous obtenez une roadmap claire, priorisée et directement exploitable, avec les actions à forte valeur ajoutée en premier.",
  },
  {
    n: "04",
    t: "Implémentation",
    d: "Je mets en place les améliorations validées, avec documentation, transfert de connaissance et attention portée à la maintenabilité.",
  },
];

const formats: [string, string][] = [
  ["Audit court", "3 à 5 jours"],
  ["Renfort projet", "Quelques semaines"],
  ["Mission longue", "Cloud, DevOps, Platform"],
  ["Formation d’équipe", "Ateliers et support"],
];

function CTA({ translate }: { translate: (text: string) => string }) {
  return (
    <a
      href="#contact"
      className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    >
      {translate("Discutons de votre besoin")}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}

function Index() {
  const [language, setLanguage] = useState<Language>("fr");
  const scrollAnchor = useRef<{ element: Element; top: number } | null>(null);
  const timelineAnchor = useRef<{ element: HTMLElement; progress: number } | null>(null);
  const t = (text: string) => (language === "en" ? (english[text] ?? text) : text);

  const capturePosition = () => {
    const track = document.querySelector<HTMLElement>('[data-mode="pinned"]');
    if (track) {
      const rect = track.getBoundingClientRect();
      const distance = track.offsetHeight - window.innerHeight;
      if (rect.top <= 0 && -rect.top < distance) {
        timelineAnchor.current = { element: track, progress: -rect.top / distance };
        return;
      }
    }
    const candidates = Array.from(
      document.querySelectorAll(
        "header, section h1, section h2, section h3, section p, article, .timeline-step, footer",
      ),
    );
    const element = candidates.find((item) => {
      const rect = item.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight;
    });
    if (element) scrollAnchor.current = { element, top: element.getBoundingClientRect().top };
  };

  const selectLanguage = (next: Language) => {
    if (next === language) return;
    capturePosition();
    setLanguage(next);
    try {
      saveLanguage(window.localStorage, next);
    } catch {
      /* Storage may be blocked. */
    }
  };

  useEffect(() => {
    try {
      setLanguage(readLanguage(window.localStorage));
    } catch {
      /* Keep French as the default. */
    }
    const sync = (event: StorageEvent) => {
      if (event.key !== LANGUAGE_KEY) return;
      capturePosition();
      setLanguage(event.newValue === "en" ? "en" : "fr");
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "en"
        ? "Badis Merakchi — Freelance Cloud & DevOps consultant"
        : "Badis Merakchi — Consultant Cloud & DevOps freelance";
    const pinned = timelineAnchor.current;
    const anchor = scrollAnchor.current;
    if (pinned) {
      const top = pinned.element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: top + pinned.progress * (pinned.element.offsetHeight - window.innerHeight),
        behavior: "instant",
      });
    } else if (anchor?.element.isConnected) {
      window.scrollBy({
        top: anchor.element.getBoundingClientRect().top - anchor.top,
        behavior: "instant",
      });
    }
    timelineAnchor.current = null;
    scrollAnchor.current = null;
    // Recompute the line without remounting the timeline or restarting its effects.
    window.dispatchEvent(new Event("scroll"));
  }, [language]);

  const languageSelector = (
    <div
      role="group"
      aria-label={language === "fr" ? "Langue du site" : "Site language"}
      className="flex shrink-0 items-center"
    >
      {(["fr", "en"] as const).map((value, index) => (
        <span key={value} className="flex items-center">
          {index > 0 && (
            <span aria-hidden="true" className="text-muted-foreground">
              /
            </span>
          )}
          <Button
            type="button"
            variant="ghost"
            aria-label={value === "fr" ? "Français" : "English"}
            aria-pressed={language === value}
            lang={value}
            onClick={() => selectLanguage(value)}
            className={`h-11 min-w-11 rounded-none px-2 hover:bg-transparent hover:text-foreground ${language === value ? "font-semibold text-foreground underline decoration-signal decoration-2 underline-offset-4" : "text-muted-foreground"}`}
          >
            {value.toUpperCase()}
          </Button>
        </span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-background text-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-6 py-6 md:px-10">
          <a href="#" className="min-w-0 font-display text-lg tracking-tight">
            {t("Badis Merakchi")}
            <span className="text-signal">{t(".")}</span>
          </a>
          <nav
            aria-label={language === "fr" ? "Navigation principale" : "Main navigation"}
            className="flex items-center gap-2 text-sm text-muted-foreground md:gap-8"
          >
            <a href="#prestations" className="hidden md:inline hover:text-foreground">
              {t("Prestations")}
            </a>
            <a href="#methode" className="hidden md:inline hover:text-foreground">
              {t("Méthode")}
            </a>
            <a href="#profil" className="hidden md:inline hover:text-foreground">
              {t("Profil")}
            </a>
            <a href="#contact" className="inline-flex min-h-11 items-center hover:text-foreground">
              {t("Contact")}
            </a>
            {languageSelector}
          </nav>
        </div>
      </header>

      {/* Home */}
      <section className="bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-12 md:px-10 md:pb-28 md:pt-20">
          <p className="eyebrow reveal flex items-center gap-3 text-muted-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-signal" />
            {t("Consultant Cloud & DevOps · France, Suisse romande, remote")}
          </p>
          <h1 className="reveal mt-8 max-w-5xl font-display text-[2.6rem] font-light leading-[1.02] tracking-tight md:text-[5.5rem]">
            {t("Des infrastructures que vos équipes ")}
            <em className="text-signal">{t("comprennent")}</em>
            {t(", déploient et font évoluer.")}
          </h1>
          <div className="reveal mt-12 grid gap-10 border-t border-rule pt-8 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t(
                "J’accompagne les entreprises et leurs équipes techniques qui veulent automatiser, fiabiliser et industrialiser leur cloud, leurs pipelines CI/CD et leurs plateformes de déploiement — avec une démarche claire et des résultats qui restent maintenables après mon départ.",
              )}
            </p>
            <div className="flex flex-col items-start gap-5">
              <CTA translate={t} />
              <a
                href={`mailto:${EMAIL}`}
                className="font-mono text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                {EMAIL}
              </a>
              <p className="eyebrow text-muted-foreground">{t("Réponse sous 24 h")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-night text-night-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.6fr] md:px-10 md:py-28">
          <div>
            <p className="eyebrow text-signal">{t("Vos enjeux")}</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight md:text-5xl">
              {t("Vous vous reconnaissez peut‑être ici.")}
            </h2>
          </div>
          <ol className="divide-y divide-night-foreground/15 border-y border-night-foreground/15">
            {problems.map((p, i) => (
              <li key={p} className="flex gap-6 py-5 text-lg leading-snug md:text-xl">
                <span className="pt-1 font-mono text-xs text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t(p)}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Services */}
      <section id="prestations" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-signal">{t("Prestations")}</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-light leading-tight md:text-5xl">
              {t("Partir de votre problème, pas d’un catalogue d’outils.")}
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            {t(
              "Cinq domaines d’intervention, toujours avec la même exigence : simple, robuste, documenté.",
            )}
          </p>
        </div>
        <div className="mt-16 border-t border-foreground">
          {services.map((s) => (
            <article
              key={s.n}
              className="grid gap-6 border-b border-rule py-10 md:grid-cols-[4rem_1fr_1.2fr] md:gap-10 md:py-14"
            >
              <span className="font-display text-2xl italic text-signal">{s.n}</span>
              <div>
                <p className="font-display text-xl italic text-muted-foreground">{t(s.need)}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{t(s.title)}</h3>
              </div>
              <div>
                <p className="leading-relaxed text-muted-foreground">{t(s.body)}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-signal">—</span>
                      {t(p)}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section id="methode" className="border-y border-rule bg-card">
        <MethodTimeline translate={t}>
          <p className="eyebrow text-signal">{t("Méthode")}</p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-light leading-[1.05] tracking-tight md:text-7xl">
            {t("Une intervention structurée, ")}
            <em>{t("du cadrage à la livraison")}</em>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t(
              "Chaque mission commence par une compréhension claire du contexte. L’objectif n’est pas d’ajouter des outils, mais de résoudre les bons problèmes dans le bon ordre.",
            )}
          </p>
        </MethodTimeline>
      </section>

      {/* Profile */}
      <section id="profil" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-[1.3fr_1fr] md:gap-20">
          <div>
            <p className="eyebrow text-signal">{t("Profil")}</p>
            <h2 className="mt-5 font-display text-3xl font-light leading-tight md:text-5xl">
              {t("Un consultant senior qui livre — et qui transmet.")}
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                {t(
                  "Je suis Badis Merakchi, consultant indépendant Cloud & DevOps basé près de Genève. J’interviens sur l’automatisation d’infrastructure, les pipelines CI/CD, les environnements cloud et les fondations Platform Engineering, dans des contextes techniques exigeants.",
                )}
              </p>
              <p>
                {t(
                  "Ma conviction : les meilleures solutions sont simples, robustes et adaptées à la maturité de l’équipe. Je ne complexifie pas l’existant, je le rends fiable, lisible et exploitable par ceux qui le feront vivre.",
                )}
              </p>
            </div>
          </div>
          <dl className="self-end border-t border-foreground">
            {(
              [
                ["Cloud & IaC", "Terraform · AWS · Azure · OCI"],
                ["Delivery", "CI/CD · Docker · Automatisation"],
                ["Plateforme", "Kubernetes · Helm · GitOps"],
                ["Transmission", "Formateur, documentation, ateliers"],
              ] as [string, string][]
            ).map(([k, v]) => (
              <div
                key={k}
                className="flex flex-col gap-1 border-b border-rule py-5 sm:flex-row sm:justify-between"
              >
                <dt className="font-medium">{t(k)}</dt>
                <dd className="font-mono text-sm text-muted-foreground">{t(v)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-24">
          <p className="eyebrow text-muted-foreground">{t("Formats d’intervention")}</p>
          <div className="mt-6 grid grid-cols-2 border-l border-t border-rule md:grid-cols-4">
            {formats.map(([label, d]) => (
              <div key={label} className="border-b border-r border-rule p-6">
                <p className="font-display text-xl">{t(label)}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t(d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
          <p className="eyebrow text-signal">{t("Contact")}</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-light leading-[1.05] md:text-7xl">
            {t("Parlons de votre infrastructure.")}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
            {t(
              "Quelques lignes suffisent : votre contexte, ce qui bloque aujourd’hui et votre horizon de démarrage. Je vous réponds sous 24 h pour voir si je peux vous aider.",
            )}
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-12 block break-all font-display text-2xl italic underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal md:text-5xl"
          >
            {EMAIL}
          </a>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs uppercase tracking-widest text-primary-foreground/60">
            <span>{t("Disponible pour de nouvelles missions")}</span>
            <span>{t("Sur site ou remote")}</span>
            <span>{t("Mission courte ou longue")}</span>
          </div>
        </div>
        <footer className="mx-auto flex max-w-6xl justify-between border-t border-primary-foreground/15 px-6 py-6 text-xs text-primary-foreground/60 md:px-10">
          <span>© {new Date().getFullYear()} Badis Merakchi</span>
          <span>Cloud · DevOps · Platform</span>
        </footer>
      </section>
    </div>
  );
}
