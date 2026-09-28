import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type FavoriteItem = {
  type: 'article' | 'tool' | 'prompt';
  slug: string;
  title: string;
  image?: string;
  category?: string;
  addedAt: string;
};

type FavoritesContextValue = {
  favorites: FavoriteItem[];
  isFavorite: (type: string, slug: string) => boolean;
  toggleFavorite: (item: FavoriteItem) => void;
  removeFavorite: (type: string, slug: string) => void;
  count: number;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

const STORAGE_KEY = 'neorixy-favorites';

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      // ignore parse errors
    }
  }, []);

  const persist = (items: FavoriteItem[]) => {
    setFavorites(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const isFavorite = (type: string, slug: string) =>
    favorites.some((f) => f.type === type && f.slug === slug);

  const toggleFavorite = (item: FavoriteItem) => {
    if (isFavorite(item.type, item.slug)) {
      persist(favorites.filter((f) => !(f.type === item.type && f.slug === item.slug)));
    } else {
      persist([...favorites, { ...item, addedAt: new Date().toISOString() }]);
    }
  };

  const removeFavorite = (type: string, slug: string) =>
    persist(favorites.filter((f) => !(f.type === type && f.slug === slug)));

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, removeFavorite, count: favorites.length }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error('useFavorites must be used within FavoritesProvider');
  return ctx;
}
