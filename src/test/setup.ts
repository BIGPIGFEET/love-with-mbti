import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

function mediaQueryList(query: string, matches = false): MediaQueryList {
  return {
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  };
}

const matchMediaMock = vi.fn((query: string) => mediaQueryList(query));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
  matchMediaMock.mockImplementation((query: string) => mediaQueryList(query));
});

Object.defineProperty(window, "scrollTo", {
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(window, "matchMedia", {
  value: matchMediaMock,
  writable: true,
});
