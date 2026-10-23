import { useLayoutEffect } from "react";

import { privacyContent } from "@/lib/privacy-content";
import { saveLanguage, type Language } from "@/lib/site-language";
import { PRIVACY_PATHS, syncPageMetadata } from "@/lib/site-metadata";

export function PrivacyPage({ language }: { language: Language }) {
  const content = privacyContent[language];
  const alternate = language === "fr" ? "en" : "fr";

  useLayoutEffect(() => {
    syncPageMetadata(language, "privacy");
    try {
      saveLanguage(window.localStorage, language);
    } catch {
      // The privacy page remains readable when browser storage is unavailable.
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#main-content">
        {content.skip}
      </a>
      <header className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10">
        <a href="/" className="font-display text-lg">
          Badis Merakchi.
        </a>
        <a
          href={PRIVACY_PATHS[alternate]}
          lang={alternate}
          className="inline-flex min-h-11 items-center text-sm underline underline-offset-4"
        >
          {content.switchLabel}
        </a>
      </header>
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <h1 className="font-display text-5xl font-light md:text-6xl">{content.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{content.intro}</p>
        <p className="mt-4 text-sm text-muted-foreground">{content.updated}</p>
        <div className="mt-12 space-y-10">
          {content.sections.map((section) => (
            <section key={section.title} className="border-t border-rule pt-6">
              <h2 className="font-display text-2xl">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.links && (
                <ul className="mt-4 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-signal-deep underline underline-offset-4"
                      >
                        {link.label}
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </main>
      <footer className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 border-t border-rule px-6 py-6 text-sm text-muted-foreground md:px-10">
        <span>© {new Date().getFullYear()} Badis Merakchi</span>
        <a href="/" className="inline-flex min-h-11 items-center underline underline-offset-4">
          {content.home}
        </a>
      </footer>
    </div>
  );
}
