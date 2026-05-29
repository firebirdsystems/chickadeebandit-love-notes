const MAX_LENGTH = 500;

export function validateNote(content) {
  const trimmed = (content ?? "").trim();
  if (!trimmed) return { valid: false, message: "Note cannot be empty.", trimmed: "" };
  if (trimmed.length > MAX_LENGTH) return { valid: false, message: `Note must be ${MAX_LENGTH} characters or fewer.`, trimmed };
  return { valid: true, message: "", trimmed };
}
