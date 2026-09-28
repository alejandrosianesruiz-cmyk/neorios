import { useState, useEffect, useRef } from 'react';
import { Eye } from 'lucide-react';
import { registerView, getViewCount } from '../lib/visitor';

interface VisitCounterProps {
  targetType: 'article' | 'tool' | 'prompt';
  targetSlug: string;
}

export default function VisitCounter({ targetType, targetSlug }: VisitCounterProps) {
  const [views, setViews] = useState(0);
  const [displayViews, setDisplayViews] = useState(0);
  const registered = useRef(false);

  useEffect(() => {
    const init = async () => {
      if (registered.current) return;
      registered.current = true;
      const existing = await getViewCount(targetType, targetSlug);
      const newCount = await registerView(targetType, targetSlug);
      setViews(newCount);
      setDisplayViews(existing);
    };
    init();
  }, [targetType, targetSlug]);

  useEffect(() => {
    if (views === displayViews) return;
    const start = displayViews;
    const end = views;
    const duration = 1000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayViews(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [views, displayViews]);

  return (
    <div className="flex items-center gap-2 text-sm text-ink-400">
      <Eye className="w-4 h-4 text-primary-400" />
      <span className="tabular-nums">{displayViews.toLocaleString('es-ES')}</span>
      <span className="text-ink-500">{displayViews === 1 ? 'visita' : 'visitas'}</span>
    </div>
  );
}
