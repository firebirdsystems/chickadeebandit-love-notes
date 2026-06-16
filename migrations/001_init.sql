CREATE TABLE IF NOT EXISTS app_love_notes__partner_config (
  member_id TEXT NOT NULL,
  partner_id TEXT NOT NULL,
  PRIMARY KEY (member_id)
);

CREATE TABLE IF NOT EXISTS app_love_notes__notes (
  id TEXT PRIMARY KEY,
  sender_id TEXT NOT NULL,
  recipient_id TEXT NOT NULL,
  content TEXT NOT NULL,
  sent_at TEXT NOT NULL,
  read_at TEXT
);
