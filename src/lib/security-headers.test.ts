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
    const policy = secured.headers.get("content-security-policy") ?? "";
    expect(policy).toContain(
      "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com/beacon.min.js",
    );
    expect(policy).toContain("connect-src 'self' https://cloudflareinsights.com");
    await expect(secured.text()).resolves.toBe("ok");
  });
});
