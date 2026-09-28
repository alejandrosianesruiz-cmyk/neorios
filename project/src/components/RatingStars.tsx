import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { getRatingStats, getUserRating, submitRating } from '../lib/ratings';

interface RatingStarsProps {
  targetType: 'article' | 'tool' | 'prompt';
  targetSlug: string;
}

export default function RatingStars({ targetType, targetSlug }: RatingStarsProps) {
  const [avg, setAvg] = useState(0);
  const [count, setCount] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const load = async () => {
      const [stats, user] = await Promise.all([
        getRatingStats(targetType, targetSlug),
        getUserRating(targetType, targetSlug),
      ]);
      setAvg(stats.average);
      setCount(stats.count);
      setUserRating(user);
    };
    load();
  }, [targetType, targetSlug]);

  const handleRate = async (rating: number) => {
    if (submitting || userRating === rating) return;
    setSubmitting(true);
    setUserRating(rating);
    await submitRating(targetType, targetSlug, rating);
    const stats = await getRatingStats(targetType, targetSlug);
    setAvg(stats.average);
    setCount(stats.count);
    setSubmitting(false);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            onClick={() => handleRate(n)}
            onMouseEnter={() => setHover(n)}
            onMouseLeave={() => setHover(0)}
            disabled={submitting}
            className="p-0.5 transition-transform hover:scale-125"
            aria-label={`${n} estrellas`}
          >
            <Star
              className={`w-5 h-5 transition-colors ${
                n <= (hover || userRating)
                  ? 'text-warning-400 fill-warning-400'
                  : n <= Math.round(avg)
                    ? 'text-warning-400 fill-warning-400/50'
                    : 'text-ink-700'
              }`}
            />
          </button>
        ))}
      </div>
      <span className="text-sm text-ink-400">
        {count > 0 ? (
          <span>
            {avg.toFixed(1)} <span className="text-ink-500">{`(${count} ${count === 1 ? 'valoración' : 'valoraciones'})`}</span>
          </span>
        ) : (
          <span className="text-ink-500">Sin valoraciones aún</span>
        )}
      </span>
    </div>
  );
}
