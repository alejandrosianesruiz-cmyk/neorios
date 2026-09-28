import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import type { Article } from '../types';
import FavoriteButton from './FavoriteButton';

const categoryDots: Record<string, string> = {
  'Guías': 'bg-primary-500',
  'Comparativas': 'bg-accent-500',
  'Noticias': 'bg-success-500',
  'Tutoriales': 'bg-warning-500',
  'Opinión': 'bg-error-500',
};

export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link
      to={`/articulos/${article.slug}`}
      className={`group relative flex flex-col card-glow rounded-2xl overflow-hidden ${
        featured ? 'md:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-56 md:h-auto' : 'h-48'}`}>
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-apple"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium liquid-glass liquid-glass-clear text-white">
          <span className={`w-1.5 h-1.5 rounded-full ${categoryDots[article.category]}`} />
          {article.category}
        </span>
      </div>

      <div className={`flex flex-col flex-1 p-5 ${featured ? 'md:p-8 justify-center' : ''}`}>
        <div className="flex items-center gap-3 text-xs text-ink-500 mb-3">
          <span>Actualizado: septiembre 2026</span>
          <span className="w-1 h-1 rounded-full bg-ink-600" />
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readingTime} min</span>
        </div>

        <h3 className={`font-bold text-ink-50 leading-tight group-hover:text-primary-300 transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
          {article.title}
        </h3>

        <p className={`text-ink-400 mt-3 leading-relaxed ${featured ? 'text-base' : 'text-sm'} line-clamp-3`}>
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-ink-400">Equipo editorial</span>
          </div>
          <div className="flex items-center gap-2">
            <FavoriteButton type="article" slug={article.slug} title={article.title} image={article.coverImage} category={article.category} />
            <span className="flex items-center gap-1 text-xs font-medium text-primary-400 group-hover:gap-2 transition-all">
              Leer <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
