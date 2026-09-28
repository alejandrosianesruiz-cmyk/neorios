/*
  # Contador de visitantes: suma atómica

  Ejecuta este archivo entero en Supabase > SQL Editor (es seguro repetirlo).
  - Crea la tabla visitor_stats y su fila inicial (1000) si no existen.
  - Crea la función increment_visitors(), que suma 1 y devuelve el nuevo total,
    sin que dos visitas simultáneas se pisen entre sí.
*/

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

CREATE OR REPLACE FUNCTION increment_visitors()
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE visitor_stats
  SET total_visitors = total_visitors + 1, updated_at = now()
  WHERE id = 1
  RETURNING total_visitors;
$$;

GRANT EXECUTE ON FUNCTION increment_visitors() TO anon, authenticated;
