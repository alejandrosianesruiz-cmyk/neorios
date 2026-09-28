/*
# Create ratings and item_views tables

1. New Tables
- `ratings`: Stores star ratings (1-5) for articles, tools, and prompts. Each row is one user's rating for one item, identified by localStorage ID.
  - `id` (uuid, primary key)
  - `target_type` (text: 'article', 'tool', or 'prompt')
  - `target_slug` (text, the slug)
  - `rating` (integer, 1-5)
  - `user_fingerprint` (text, localStorage-based ID to prevent duplicate ratings)
  - `created_at` (timestamp)
  - Unique constraint on (target_type, target_slug, user_fingerprint)
- `item_views`: Stores view counts per item (article, tool, or prompt).
  - `id` (uuid, primary key)
  - `target_type` (text)
  - `target_slug` (text)
  - `views` (integer, default 0)
  - `created_at` (timestamp)
  - Unique constraint on (target_type, target_slug)
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated full CRUD (single-tenant, no auth).
3. Notes
- Ratings are per-user (localStorage fingerprint) so each browser can rate once.
- Views are a simple counter per item.
*/

CREATE TABLE IF NOT EXISTS ratings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  target_type text NOT NULL,
  target_slug text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  user_fingerprint text NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE (target_type, target_slug, user_fingerprint)
);

ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_ratings" ON ratings;
CREATE POLICY "anon_read_ratings" ON ratings FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_ratings" ON ratings;
CREATE POLICY "anon_insert_ratings" ON ratings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_ratings" ON ratings;
CREATE POLICY "anon_update_ratings" ON ratings FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_ratings" ON ratings;
CREATE POLICY "anon_delete_ratings" ON ratings FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS item_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  target_type text NOT NULL,
  target_slug text NOT NULL,
  views integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  UNIQUE (target_type, target_slug)
);

ALTER TABLE item_views ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_read_views" ON item_views;
CREATE POLICY "anon_read_views" ON item_views FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_views" ON item_views;
CREATE POLICY "anon_insert_views" ON item_views FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_views" ON item_views;
CREATE POLICY "anon_update_views" ON item_views FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);
