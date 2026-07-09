import { describe, it, expect } from "vitest";
import { validateNote } from "../src/logic.js";

describe("validateNote", () => {
  it("rejects empty and whitespace-only notes with a message", () => {
    for (const input of ["", "   ", null, undefined]) {
      const res = validateNote(input);
      expect(res.valid).toBe(false);
      expect(res.message).toBe("Note cannot be empty.");
      expect(res.trimmed).toBe("");
    }
  });

  it("rejects notes over 500 characters but keeps the trimmed text", () => {
    const long = "x".repeat(501);
    const res = validateNote(long);
    expect(res.valid).toBe(false);
    expect(res.message).toMatch(/500 characters or fewer/);
    expect(res.trimmed).toBe(long);
  });

  it("accepts a note of exactly 500 characters", () => {
    expect(validateNote("x".repeat(500)).valid).toBe(true);
  });

  it("accepts and trims a valid note", () => {
    expect(validateNote("  miss you  ")).toEqual({ valid: true, message: "", trimmed: "miss you" });
  });
});
