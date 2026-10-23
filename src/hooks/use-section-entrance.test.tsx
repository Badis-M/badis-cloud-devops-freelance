import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useSectionEntrance } from "./use-section-entrance";

let onIntersection: IntersectionObserverCallback;
let onMotionChange: () => void;
const observe = vi.fn();
const unobserve = vi.fn();
const disconnect = vi.fn();
const motion = { matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() };

function Preview({ label = "Portfolio" }: { label?: string }) {
  const ref = useSectionEntrance();
  return (
    <div ref={ref}>
      <div className="section-entrance" data-testid="intro">
        Introduction
      </div>
      <div className="section-entrance" data-testid="portfolio">
        <a href="#contact">{label}</a>
      </div>
    </div>
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  motion.matches = false;
  motion.addEventListener.mockImplementation((_event, callback) => {
    onMotionChange = callback;
  });
  vi.stubGlobal(
    "matchMedia",
    vi.fn(() => motion),
  );
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function (
    this: HTMLElement,
  ) {
    return { top: this.dataset["testid"] === "intro" ? 0 : window.innerHeight + 100 } as DOMRect;
  });
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(callback: IntersectionObserverCallback) {
        onIntersection = callback;
      }
      observe = observe;
      unobserve = unobserve;
      disconnect = disconnect;
    },
  );
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("section entrances", () => {
  it("only animates offscreen blocks and preserves the reveal across language updates", () => {
    const { rerender } = render(<Preview />);
    const block = screen.getByTestId("portfolio");
    expect(screen.getByTestId("intro")).not.toHaveAttribute("data-entrance");
    expect(block).toHaveAttribute("data-entrance", "waiting");
    act(() =>
      onIntersection(
        [{ target: block, isIntersecting: true }] as unknown as IntersectionObserverEntry[],
        {} as IntersectionObserver,
      ),
    );
    expect(block).toHaveAttribute("data-entrance", "visible");
    expect(unobserve).toHaveBeenCalledWith(block);
    rerender(<Preview label="Explore my portfolio" />);
    expect(block).toHaveAttribute("data-entrance", "visible");
    expect(observe).toHaveBeenCalledOnce();
  });

  it("reveals a block immediately when a keyboard user focuses its link", () => {
    render(<Preview />);
    fireEvent.focusIn(screen.getByRole("link"));
    expect(screen.getByTestId("portfolio")).not.toHaveAttribute("data-entrance");
  });

  it("keeps content visible with reduced motion or without IntersectionObserver", () => {
    motion.matches = true;
    const { unmount } = render(<Preview />);
    expect(screen.getByTestId("portfolio")).not.toHaveAttribute("data-entrance");
    unmount();
    motion.matches = false;
    Reflect.deleteProperty(window, "IntersectionObserver");
    render(<Preview />);
    expect(screen.getByTestId("portfolio")).not.toHaveAttribute("data-entrance");
  });

  it("cancels pending entrances when reduced motion is enabled and cleans up on unmount", () => {
    const { unmount } = render(<Preview />);
    motion.matches = true;
    act(() => onMotionChange());
    expect(screen.getByTestId("portfolio")).not.toHaveAttribute("data-entrance");
    expect(disconnect).toHaveBeenCalled();
    unmount();
    expect(motion.removeEventListener).toHaveBeenCalledWith("change", onMotionChange);
  });
});
