CREATE TABLE IF NOT EXISTS partner_config (
  member_id TEXT NOT NULL,
  household_id UUID NOT NULL DEFAULT current_setting('app.household_id', true)::uuid,
  partner_id TEXT NOT NULL,
  PRIMARY KEY (member_id, household_id)
);

CREATE TABLE IF NOT EXISTS notes (
  id TEXT PRIMARY KEY,
  household_id UUID NOT NULL DEFAULT current_setting('app.household_id', true)::uuid,
  sender_id TEXT NOT NULL,
  recipient_id TEXT NOT NULL,
  content TEXT NOT NULL,
  sent_at TEXT NOT NULL,
  read_at TEXT
);
