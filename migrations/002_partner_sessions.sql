ALTER TABLE app_love_notes__partner_config ADD COLUMN session_id TEXT;
ALTER TABLE app_love_notes__notes ADD COLUMN session_id TEXT;

CREATE INDEX IF NOT EXISTS app_love_notes__idx_notes_session_recipient_sent
  ON app_love_notes__notes (session_id, recipient_id, sent_at DESC);
