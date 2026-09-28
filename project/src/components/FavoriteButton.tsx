import { Heart } from 'lucide-react';
import { useFavorites, type FavoriteItem } from '../lib/favorites';

interface FavoriteButtonProps {
  type: 'article' | 'tool' | 'prompt';
  slug: string;
  title: string;
  image?: string;
  category?: string;
  variant?: 'icon' | 'full';
}

export default function FavoriteButton({ type, slug, title, image, category, variant = 'icon' }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(type, slug);
  const item: FavoriteItem = { type, slug, title, image, category };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(item);
      }}
      className={`flex items-center gap-2 transition-all duration-300 ${
        variant === 'full'
          ? `px-4 py-2.5 rounded-xl border ${
              fav
                ? 'bg-error-500/15 border-error-500/30 text-error-400'
                : 'bg-ink-800/60 border-ink-700/40 text-ink-300 hover:border-error-500/40 hover:text-error-400'
            }`
          : ''
      }`}
      aria-label={fav ? 'Quitar de favoritos' : 'Añadir a favoritos'}
    >
      <Heart
        className={`w-5 h-5 transition-all duration-300 ${fav ? 'fill-current text-error-400 scale-110' : 'text-ink-400 hover:text-error-400 hover:scale-110'}`}
      />
      {variant === 'full' && (
        <span className="text-sm font-medium">{fav ? 'En favoritos' : 'Favorito'}</span>
      )}
    </button>
  );
}
