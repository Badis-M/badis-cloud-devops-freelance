import { describe, expect, it } from "vitest";
import { LANGUAGE_KEY, readLanguage, saveLanguage } from "./site-language";

describe("Site language preference", () => {
  it("defaults to French without a saved choice", () => {
    expect(readLanguage({ getItem: () => null })).toBe("fr");
  });

  it("retains English after reading the saved choice again", () => {
    const storage = new Map<string, string>();
    const adapter = {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => {
        storage.set(key, value);
      },
    };
    saveLanguage(adapter, "en");
    expect(storage.get(LANGUAGE_KEY)).toBe("en");
    expect(readLanguage(adapter)).toBe("en");
    saveLanguage(adapter, "fr");
    expect(readLanguage(adapter)).toBe("fr");
  });

  it("keeps French available when storage fails", () => {
    expect(
      readLanguage({
        getItem: () => {
          throw new Error("Unavailable");
        },
      }),
    ).toBe("fr");
  });
});
