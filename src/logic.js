const MAX_LENGTH = 500;

export function validateNote(content) {
  const trimmed = (content ?? "").trim();
  if (!trimmed) return { valid: false, message: "Note cannot be empty.", trimmed: "" };
  if (trimmed.length > MAX_LENGTH) return { valid: false, message: `Note must be ${MAX_LENGTH} characters or fewer.`, trimmed };
  return { valid: true, message: "", trimmed };
}

/**
 * Fields the in-app search matches against (see hub-sdk `searchMatch`).
 * A note is only its text and who sent it — but the pile grows for
 * years, and finding the one you're thinking of is the whole reason to
 * keep them.
 */
export function searchableFields(note, senderName = "") {
  return [note.content, senderName];
}
