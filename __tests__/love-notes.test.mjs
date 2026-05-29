import { describe, it, expect } from "vitest";
import { validateNote } from "../src/logic.js";

describe("validateNote", () => {
  it("rejects empty string", () => {
    expect(validateNote("").valid).toBe(false);
  });

  it("rejects whitespace-only content", () => {
    expect(validateNote("   ").valid).toBe(false);
  });

  it("accepts valid content", () => {
    const result = validateNote("Good morning!");
    expect(result.valid).toBe(true);
    expect(result.trimmed).toBe("Good morning!");
  });

  it("trims surrounding whitespace in trimmed output", () => {
    expect(validateNote("  hi  ").trimmed).toBe("hi");
  });

  it("rejects content over 500 characters", () => {
    expect(validateNote("x".repeat(501)).valid).toBe(false);
  });

  it("accepts exactly 500 characters", () => {
    expect(validateNote("x".repeat(500)).valid).toBe(true);
  });

  it("handles null input", () => {
    expect(validateNote(null).valid).toBe(false);
  });
});
