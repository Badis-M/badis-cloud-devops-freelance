import { afterEach, describe, expect, it } from "vitest";

import { getPageHead, syncPageMetadata } from "./site-metadata";

afterEach(() => {
  document.head.replaceChildren();
  document.documentElement.lang = "fr";
});

describe("page metadata", () => {
  it("updates descriptions and social metadata in both directions without duplicate tags", () => {
    syncPageMetadata("fr");
    const frenchDescription = document
      .querySelector('meta[name="description"]')
      ?.getAttribute("content");

    syncPageMetadata("en");
    expect(document.documentElement.lang).toBe("en");
    expect(document.title).toContain("Freelance Cloud");
    expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toContain(
      "knowledge transfer",
    );
    expect(
      document.querySelector('meta[property="og:description"]')?.getAttribute("content"),
    ).not.toBe(frenchDescription);
    expect(document.querySelector('meta[property="og:locale"]')?.getAttribute("content")).toBe(
      "en_GB",
    );

    syncPageMetadata("fr");
    expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toBe(
      frenchDescription,
    );
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.querySelectorAll('meta[property="og:title"]')).toHaveLength(1);
  });

  it("uses a shared home canonical and distinct privacy language alternates", () => {
    expect(getPageHead("fr").links).toEqual(getPageHead("en").links);
    const head = getPageHead("en", "privacy");
    expect(head.links).toContainEqual({
      rel: "canonical",
      href: "https://consulting.badismerakchi.com/en/privacy",
    });
    expect(head.links).toContainEqual({
      rel: "alternate",
      hrefLang: "fr",
      href: "https://consulting.badismerakchi.com/confidentialite",
    });
    expect(head.links).toContainEqual({
      rel: "alternate",
      hrefLang: "en",
      href: "https://consulting.badismerakchi.com/en/privacy",
    });
  });
});
