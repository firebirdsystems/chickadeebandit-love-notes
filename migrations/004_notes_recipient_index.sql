-- The inbox read (src/index.html loadNotes, also declared as manifest.preload.notes)
-- filters on recipient_id and orders by sent_at. The existing
-- (session_id, recipient_id, sent_at) index leads with session_id, so the
-- statement as posted plans as a full table scan.
CREATE INDEX IF NOT EXISTS app_love_notes__idx_notes_recipient_sent
  ON app_love_notes__notes (recipient_id, sent_at DESC);
