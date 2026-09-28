import { useState, useEffect, useRef } from 'react';
import { Users } from 'lucide-react';
import { supabase } from '../lib/supabase';

const COUNTED_KEY = 'neorixy_visitor_counted';

async function readTotal(): Promise<number | null> {
  const { data } = await supabase
    .from('visitor_stats')
    .select('total_visitors')
    .eq('id', 1)
    .maybeSingle();
  return data ? data.total_visitors : null;
}

// Suma 1 de forma atómica en la base de datos (función increment_visitors).
// Si la función aún no existe, usa el método anterior como respaldo.
async function addVisitor(): Promise<{ total: number | null; incremented: boolean }> {
  const { data, error } = await supabase.rpc('increment_visitors');
  if (!error && typeof data === 'number') return { total: data, incremented: true };

  const current = await readTotal();
  if (current === null) return { total: null, incremented: false };
  const next = current + 1;
  const { error: updateError } = await supabase
    .from('visitor_stats')
    .update({ total_visitors: next, updated_at: new Date().toISOString() })
    .eq('id', 1);
  return updateError ? { total: current, incremented: false } : { total: next, incremented: true };
}

export default function VisitorCounter() {
  const [count, setCount] = useState(1000);
  const [animated, setAnimated] = useState(false);
  const [displayCount, setDisplayCount] = useState(1000);
  const hasRegistered = useRef(false);

  useEffect(() => {
    const registerVisit = async () => {
      if (hasRegistered.current) return;
      hasRegistered.current = true;

      // Cada persona suma una sola vez por navegador; al volver solo se muestra el total.
      let alreadyCounted = false;
      try {
        alreadyCounted = localStorage.getItem(COUNTED_KEY) === '1';
      } catch {
        alreadyCounted = false;
      }

      if (alreadyCounted) {
        const total = await readTotal();
        if (total !== null) setCount(total);
        return;
      }

      const { total, incremented } = await addVisitor();
      if (total !== null) setCount(total);
      if (incremented) {
        try {
          localStorage.setItem(COUNTED_KEY, '1');
        } catch {
          /* sin almacenamiento: la próxima visita volverá a sumar */
        }
      }
    };

    registerVisit();
  }, []);

  useEffect(() => {
    if (count === displayCount) return;
    setAnimated(true);
    const start = displayCount;
    const end = count;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayCount(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimated(false);
      }
    };
    requestAnimationFrame(animate);
  }, [count, displayCount]);

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-shrink-0">
        <Users className="w-8 h-8 text-primary-400" />
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-success-400 animate-pulse" />
      </div>
      <span className="text-3xl sm:text-4xl font-display font-extrabold text-ink-50 tabular-nums leading-none">
        {displayCount.toLocaleString('es-ES')}
      </span>
      <span className="text-sm text-ink-400 leading-tight max-w-[9rem]">
        {animated ? 'personas conectadas' : 'personas han visitado neorixy'}
      </span>
    </div>
  );
}
