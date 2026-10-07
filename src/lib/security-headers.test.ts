import { describe, expect, it } from "vitest";

import { SECURITY_HEADERS, withSecurityHeaders } from "./security-headers";

describe("security headers", () => {
  it("adds the complete policy without dropping existing response headers", async () => {
    const original = new Response("ok", {
      headers: { "content-type": "text/plain", "x-existing": "preserved" },
    });

    const secured = withSecurityHeaders(original);

    expect(secured.headers.get("x-existing")).toBe("preserved");
    expect(secured.headers.get("content-type")).toContain("text/plain");
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      expect(secured.headers.get(name)).toBe(value);
    }
    await expect(secured.text()).resolves.toBe("ok");
  });
});
