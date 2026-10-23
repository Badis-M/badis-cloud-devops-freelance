import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Route } from "@/routes/index";

const Page = Route.options.component!;
let onIntersection: IntersectionObserverCallback;
const disconnect = vi.fn();

function mockMotion(reduced: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => ({
      matches: reduced,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
}

beforeEach(() => {
  window.localStorage.clear();
  disconnect.mockClear();
  mockMotion(false);
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(callback: IntersectionObserverCallback) {
        onIntersection = callback;
      }
      observe = vi.fn();
      disconnect = disconnect;
    },
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe("method entrance", () => {
  it("reveals once and keeps the steps visible after language changes and scrolling", () => {
    const { container } = render(<Page />);
    const steps = () => Array.from(container.querySelectorAll(".timeline-step"));
    expect(steps().every((step) => step.getAttribute("data-reveal") === "waiting")).toBe(true);

    act(() => {
      onIntersection(
        [{ isIntersecting: true }] as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      );
    });
    expect(disconnect).toHaveBeenCalledOnce();
    expect(steps().every((step) => step.getAttribute("data-reveal") === "visible")).toBe(true);

    fireEvent.click(screen.getByRole("button", { name: "English" }));
    fireEvent.scroll(window);
    expect(screen.getByRole("heading", { name: "Discovery" })).toBeInTheDocument();
    expect(steps().every((step) => step.getAttribute("data-reveal") === "visible")).toBe(true);
  });

  it("leaves all steps visible without animation when reduced motion is preferred", () => {
    mockMotion(true);
    const { container } = render(<Page />);
    const steps = Array.from(container.querySelectorAll(".timeline-step"));
    expect(steps).toHaveLength(4);
    expect(steps.every((step) => step.getAttribute("data-reveal") === "static")).toBe(true);
  });
});
