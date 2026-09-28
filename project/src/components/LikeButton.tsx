import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface LikeButtonProps {
  targetType: 'article' | 'tool';
  targetSlug: string;
}

export default function LikeButton({ targetType, targetSlug }: LikeButtonProps) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const storageKey = `neorixy-liked-${targetType}-${targetSlug}`;

  useEffect(() => {
    const fetchLike = async () => {
      const { data } = await supabase
        .from('likes')
        .select('count')
        .eq('target_type', targetType)
        .eq('target_slug', targetSlug)
        .maybeSingle();

      if (data) {
        setCount(data.count);
      }
      setLiked(localStorage.getItem(storageKey) === 'true');
      setLoading(false);
    };
    fetchLike();
  }, [targetType, targetSlug, storageKey]);

  const handleLike = async () => {
    if (liked || loading) return;

    setLiked(true);
    localStorage.setItem(storageKey, 'true');
    const newCount = count + 1;
    setCount(newCount);

    const { data: existing } = await supabase
      .from('likes')
      .select('id, count')
      .eq('target_type', targetType)
      .eq('target_slug', targetSlug)
      .maybeSingle();

    if (existing) {
      await supabase
        .from('likes')
        .update({ count: existing.count + 1 })
        .eq('id', existing.id);
    } else {
      await supabase
        .from('likes')
        .insert({ target_type: targetType, target_slug: targetSlug, count: 1 });
    }
  };

  return (
    <button
      onClick={handleLike}
      disabled={liked}
      className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
        liked
          ? 'bg-error-500/15 border-error-500/30 text-error-400'
          : 'bg-ink-800/60 border-ink-700/40 text-ink-300 hover:border-error-500/40 hover:text-error-400'
      }`}
      aria-label={liked ? 'Te gusta' : 'Me gusta'}
    >
      <Heart
        className={`w-5 h-5 transition-all duration-300 ${liked ? 'fill-current scale-110' : 'group-hover:scale-110'}`}
      />
      <span className="text-sm font-medium">{count.toLocaleString('es-ES')}</span>
      <span className="text-xs text-ink-500">{count === 1 ? 'me gusta' : 'me gusta'}</span>
    </button>
  );
}
