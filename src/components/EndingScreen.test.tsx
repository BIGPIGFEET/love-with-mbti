import { describe, expect, it, vi } from "vitest";
import { copyCurrentLink } from "./EndingScreen.tsx";

describe("copyCurrentLink", () => {
  it("rejects when the legacy clipboard fallback reports failure", async () => {
    const clipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, "clipboard");
    const execCommandDescriptor = Object.getOwnPropertyDescriptor(document, "execCommand");

    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: undefined,
    });
    Object.defineProperty(document, "execCommand", {
      configurable: true,
      value: vi.fn(() => false),
    });

    try {
      await expect(copyCurrentLink()).rejects.toThrow("clipboard fallback");
      expect(document.querySelector("textarea")).not.toBeInTheDocument();
    } finally {
      if (clipboardDescriptor) {
        Object.defineProperty(navigator, "clipboard", clipboardDescriptor);
      } else {
        Object.defineProperty(navigator, "clipboard", {
          configurable: true,
          value: undefined,
        });
      }

      if (execCommandDescriptor) {
        Object.defineProperty(document, "execCommand", execCommandDescriptor);
      } else {
        Object.defineProperty(document, "execCommand", {
          configurable: true,
          value: undefined,
        });
      }
    }
  });
});
