/*
# Create likes and visitor counter tables

1. New Tables
- `likes`: Stores like counts for articles and tools. Each row represents one item (article or tool) with its total like count.
  - `id` (uuid, primary key)
  - `target_type` (text, either 'article' or 'tool')
  - `target_slug` (text, the slug of the article or tool)
  - `count` (integer, default 0, the total number of likes)
  - `created_at` (timestamp)
  - Unique constraint on (target_type, target_slug) to prevent duplicates.
- `visitor_stats`: Single-row table tracking total visitor count.
  - `id` (int, primary key, always 1)
  - `total_visitors` (integer, default 1000, starts at 1000 as requested)
  - `updated_at` (timestamp)
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated to read and write (single-tenant, no auth app).
3. Notes
- The visitor counter starts at 1000 as requested.
- Likes use a simple count per item; the frontend uses localStorage to prevent double-liking from the same browser.
*/

CREATE TABLE IF NOT EXISTS likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  target_type text NOT NULL,
  target_slug text NOT NULL,
  count integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  UNIQUE (target_type, target_slug)
);

ALTER TABLE likes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_likes" ON likes;
CREATE POLICY "anon_read_likes" ON likes FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_likes" ON likes;
CREATE POLICY "anon_insert_likes" ON likes FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_likes" ON likes;
CREATE POLICY "anon_update_likes" ON likes FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

CREATE TABLE IF NOT EXISTS visitor_stats (
  id integer PRIMARY KEY DEFAULT 1,
  total_visitors integer NOT NULL DEFAULT 1000,
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT single_row CHECK (id = 1)
);

ALTER TABLE visitor_stats ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_visitors" ON visitor_stats;
CREATE POLICY "anon_read_visitors" ON visitor_stats FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_update_visitors" ON visitor_stats;
CREATE POLICY "anon_update_visitors" ON visitor_stats FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

INSERT INTO visitor_stats (id, total_visitors)
VALUES (1, 1000)
ON CONFLICT (id) DO NOTHING;
