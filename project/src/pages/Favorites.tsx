import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Heart, Trash2, BookOpen, Wrench, Terminal } from 'lucide-react';
import { useFavorites } from '../lib/favorites';

const typeConfig = {
  article: { icon: BookOpen, label: 'Artículo', basePath: '/articulos' },
  tool: { icon: Wrench, label: 'Herramienta', basePath: '/herramientas' },
  prompt: { icon: Terminal, label: 'Prompt', basePath: '/prompts' },
};

export default function Favorites() {
  const { favorites, removeFavorite, count } = useFavorites();

  return (
    <>
      <Helmet>
        <title>Mis favoritos — neorixy</title>
        <meta name="description" content="Tus artículos, herramientas y prompts favoritos guardados en neorixy." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-error-400 text-sm font-medium mb-3">
            <Heart className="w-4 h-4 fill-current" /> Favoritos
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink-50 mb-4">Mis favoritos</h1>
          <p className="text-lg text-ink-400 max-w-2xl">
            {count > 0
              ? `Tienes ${count} ${count === 1 ? 'elemento guardado' : 'elementos guardados'}.`
              : 'Aún no has guardado ningún favorito. Explora el contenido y pulsa el corazón para guardarlo aquí.'}
          </p>
        </div>
      </section>

      <section className="container-wide py-12">
        {count === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-ink-700 mx-auto mb-4" />
            <p className="text-ink-400 text-lg mb-1">No tienes favoritos todavía</p>
            <p className="text-sm text-ink-500 mb-6">Pulsa el corazón en cualquier artículo, herramienta o prompt para guardarlo aquí.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/articulos" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full btn-glow text-white text-sm font-medium">
                <BookOpen className="w-4 h-4" /> Ver artículos
              </Link>
              <Link to="/herramientas" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-ink-800 hover:bg-ink-700 text-ink-50 text-sm font-medium transition-colors">
                <Wrench className="w-4 h-4" /> Ver herramientas
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {favorites.map((fav) => {
              const cfg = typeConfig[fav.type as keyof typeof typeConfig];
              const Icon = cfg.icon;
              return (
                <div
                  key={`${fav.type}-${fav.slug}`}
                  className="group relative flex flex-col card-glow rounded-2xl overflow-hidden"
                >
                  {fav.image && (
                    <Link to={`${cfg.basePath}/${fav.slug}`}>
                      <div className="h-36 overflow-hidden">
                        <img src={fav.image} alt={fav.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-apple" loading="lazy" />
                      </div>
                    </Link>
                  )}
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-ink-800/60 text-ink-400">
                        <Icon className="w-3 h-3" /> {cfg.label}
                      </span>
                      {fav.category && (
                        <span className="px-2 py-0.5 rounded-md text-xs bg-ink-800/60 text-ink-500">{fav.category}</span>
                      )}
                    </div>
                    <Link to={`${cfg.basePath}/${fav.slug}`}>
                      <h3 className="font-bold text-ink-50 group-hover:text-primary-300 transition-colors mb-2 line-clamp-2">{fav.title}</h3>
                    </Link>
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <span className="text-xs text-ink-500">
                        {new Date(fav.addedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                      <button
                        onClick={() => removeFavorite(fav.type, fav.slug)}
                        className="flex items-center gap-1 text-xs text-ink-500 hover:text-error-400 transition-colors"
                        aria-label="Quitar de favoritos"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Quitar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
