import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, BookOpen, Wrench, Zap, Target, Award, Sparkles, Terminal, Layers } from 'lucide-react';
import { articles } from '../data/articles';
import { aiTools } from '../data/aiTools';
import { useCases } from '../data/useCases';
import { promptTemplates } from '../data/prompts';
import ArticleCard from '../components/ArticleCard';
import ToolCard from '../components/ToolCard';
import Newsletter from '../components/Newsletter';
import VisitorCounter from '../components/VisitorCounter';
import AnimatedHeadline from '../components/AnimatedHeadline';

export default function Home() {
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 2);
  const recentArticles = articles.slice(0, 6);
  const topTools = aiTools.slice(0, 6);
  const topUseCases = useCases.slice(0, 6);
  const topPrompts = promptTemplates.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>neorixy — Descubre, compara y aprende IA en español</title>
        <meta name="description" content="La plataforma en español para descubrir, comparar y aprender a usar las mejores herramientas de inteligencia artificial. Guías, comparativas y tutoriales." />
        <meta property="og:title" content="neorixy — Descubre, compara y aprende IA en español" />
        <meta property="og:description" content="Guías, comparativas y tutoriales sobre IA en español. Catálogo de herramientas analizadas." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://neorixy.com/" />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-14 overflow-hidden hero-glow">
        <div className="container-wide relative">
          <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 lg:gap-6 items-center">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-3 text-primary-400 text-sm sm:text-base font-medium mb-7 animate-fade-in-down">
                <Sparkles className="w-6 h-6 text-primary-500 fill-primary-500" />
                <span aria-hidden="true" className="w-px h-6 bg-primary-500/70" />
                Tu guía en español sobre inteligencia artificial
              </div>

              <AnimatedHeadline
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-ink-50 mb-7"
                segments={[
                  { text: 'Descubre el poder de la' },
                  { text: 'inteligencia artificial', gradient: true },
                  { text: 'en español' },
                ]}
              />

              <p className="text-lg sm:text-xl text-ink-300 leading-relaxed mb-9 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                Guías profundas, comparativas detalladas y tutoriales prácticos sobre las mejores herramientas de IA. Todo en un mismo lugar, pensado para la comunidad hispanohablante.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <Link
                  to="/articulos"
                  className="btn-glow inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full text-base font-semibold"
                >
                  <BookOpen className="w-6 h-6" />
                  Explorar artículos
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/herramientas"
                  className="btn-outline inline-flex items-center justify-center gap-3 h-14 px-8 rounded-full text-base font-semibold"
                >
                  <Wrench className="w-6 h-6" />
                  Catálogo de herramientas
                </Link>
              </div>
            </div>

            {/* Firma visual: el signo de apertura ¿, exclusivo del español, en trama de puntos luminosa con órbitas */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-2 w-72 opacity-40 lg:opacity-100 lg:static lg:w-full lg:max-w-[560px] lg:justify-self-end animate-fade-in">
              <svg viewBox="-150 -50 700 500" className="w-full h-auto overflow-visible" role="presentation" focusable="false">
                <defs>
                  <pattern id="neo-dots" width="11" height="11" patternUnits="userSpaceOnUse">
                    <circle cx="5.5" cy="5.5" r="3.4" fill="#fff" />
                  </pattern>
                  <linearGradient id="neo-fill" gradientUnits="userSpaceOnUse" x1="200" y1="-8" x2="300" y2="400">
                    <stop offset="0" stopColor="#22E5FF" />
                    <stop offset="0.45" stopColor="#1E8CFF" />
                    <stop offset="1" stopColor="#5B6BFF" />
                  </linearGradient>
                  <linearGradient id="neo-orbit" gradientUnits="userSpaceOnUse" x1="-140" y1="300" x2="540" y2="120">
                    <stop offset="0" stopColor="#1E8CFF" stopOpacity="0" />
                    <stop offset="0.5" stopColor="#3FA0FF" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#22D3EE" stopOpacity="0.5" />
                  </linearGradient>
                  <radialGradient id="neo-halo" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor="#1E8CFF" stopOpacity="0.35" />
                    <stop offset="1" stopColor="#1E8CFF" stopOpacity="0" />
                  </radialGradient>
                  <filter id="neo-blur" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="16" />
                  </filter>
                  <mask id="neo-shape">
                    <g fill="none" stroke="url(#neo-dots)" strokeWidth="64" strokeLinecap="round">
                      <path d="M292 268C292 328 252 358 200 358C148 358 108 328 108 268C108 208 200 198 200 134L200 108" />
                      <circle cx="200" cy="30" r="38" fill="url(#neo-dots)" stroke="none" />
                    </g>
                  </mask>
                </defs>

                <ellipse cx="220" cy="210" rx="330" ry="250" fill="url(#neo-halo)" />

                <g fill="none" stroke="url(#neo-orbit)" strokeWidth="1.6" transform="rotate(-14 200 230)">
                  <ellipse cx="210" cy="240" rx="330" ry="86" />
                  <ellipse cx="210" cy="240" rx="300" ry="62" opacity="0.6" />
                  <ellipse cx="210" cy="240" rx="360" ry="112" opacity="0.35" />
                </g>

                <g filter="url(#neo-blur)" opacity="0.75">
                  <rect x="-150" y="-50" width="700" height="500" fill="url(#neo-fill)" mask="url(#neo-shape)" />
                </g>
                <rect x="-150" y="-50" width="700" height="500" fill="url(#neo-fill)" mask="url(#neo-shape)" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 mt-14 pt-8 border-t border-primary-500/30 grid grid-cols-2 lg:grid-cols-4 gap-y-8 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="lg:pr-8"><VisitorCounter /></div>
            {[
              { icon: BookOpen, value: `${articles.length}`, label: 'artículos', sub: 'y creciendo' },
              { icon: Wrench, value: `${aiTools.length}`, label: 'herramientas', sub: 'analizadas' },
              { icon: Target, value: '100%', label: 'en español', sub: '' },
            ].map((stat) => (
              <div key={stat.label} className="relative flex items-center gap-3 lg:px-8">
                <span aria-hidden="true" className="stat-divider hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-14 w-px" />
                <stat.icon className="w-8 h-8 text-primary-400 flex-shrink-0" />
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-ink-50 tabular-nums leading-none">{stat.value}</span>
                <span className="text-sm text-ink-400 leading-tight">
                  {stat.label}
                  {stat.sub && <><br />{stat.sub}</>}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      {featuredArticles.length > 0 && (
        <section className="container-wide py-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold mb-2">
                <TrendingUp className="w-4 h-4" /> Destacados
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-ink-50">Artículos que no te puedes perder</h2>
            </div>
            <Link to="/articulos" className="hidden sm:flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured />
            ))}
          </div>
        </section>
      )}

      {/* Recent articles */}
      <section className="container-wide py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold mb-2">
              <BookOpen className="w-4 h-4" /> Últimas publicaciones
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-50">Lo más reciente</h2>
          </div>
          <Link to="/articulos" className="hidden sm:flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Top tools */}
      <section className="container-wide py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold mb-2">
              <Award className="w-4 h-4" /> Herramientas destacadas
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-50">Las mejores IA, analizadas</h2>
            <p className="text-ink-400 mt-2">Análisis honesto de las herramientas de IA más potentes del momento.</p>
          </div>
          <Link to="/herramientas" className="hidden sm:flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium">
            Ver catálogo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Use cases */}
      <section className="container-wide py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold mb-2">
              <Layers className="w-4 h-4" /> Campos de aplicación
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-50">¿En qué puede ayudarte la IA?</h2>
            <p className="text-ink-400 mt-2">Descubre los distintos campos en los que la IA puede transformar tu trabajo y tu día a día.</p>
          </div>
          <Link to="/usos-ia" className="hidden sm:flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topUseCases.map((uc) => (
            <Link
              key={uc.id}
              to="/usos-ia"
              className="group p-6 rounded-2xl card-glow"
            >
              <div className="w-12 h-12 rounded-xl icon-tile flex items-center justify-center mb-4">
                <uc.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-lg font-bold text-ink-50 mb-2 group-hover:text-primary-300 transition-colors">{uc.title}</h3>
              <p className="text-sm text-ink-400 leading-relaxed mb-3">{uc.shortDesc}</p>
              <div className="flex flex-wrap gap-1.5">
                {uc.fields.slice(0, 3).map((f) => (
                  <span key={f.name} className="px-2 py-0.5 rounded-md text-xs bg-ink-800/60 text-ink-400">{f.name}</span>
                ))}
                <span className="px-2 py-0.5 rounded-md text-xs bg-ink-800/60 text-ink-500">+{uc.fields.length - 3} más</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Prompts teaser */}
      <section className="container-wide py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-primary-400 text-sm font-semibold mb-2">
              <Terminal className="w-4 h-4" /> Prompts
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink-50">Prompts listos para usar</h2>
            <p className="text-ink-400 mt-2">Plantillas profesionales que puedes copiar y personalizar para obtener resultados excepcionales.</p>
          </div>
          <Link to="/prompts" className="hidden sm:flex items-center gap-1 text-sm text-primary-400 hover:gap-2 transition-all font-medium">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {topPrompts.map((prompt) => (
            <Link
              key={prompt.id}
              to="/prompts"
              className="group p-5 rounded-2xl card-glow"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-accent-500/15 text-accent-300 border border-accent-500/30">{prompt.category}</span>
              </div>
              <h3 className="text-base font-bold text-ink-50 mb-2 group-hover:text-accent-300 transition-colors">{prompt.title}</h3>
              <p className="text-sm text-ink-400 line-clamp-2">{prompt.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: 'Contenido en español', desc: 'Olvídate de traducir. Todo nuestro contenido está escrito originalmente en español, con contexto local.', color: 'text-primary-400' },
            { icon: Zap, title: 'Análisis honesto', desc: 'Sin patrocinios ocultos. Analizamos ventajas, desventajas y casos de uso reales de cada herramienta.', color: 'text-primary-400' },
            { icon: BookOpen, title: 'Para todos los niveles', desc: 'Desde tu primera conversación con ChatGPT hasta prompting avanzado. Hay contenido para ti.', color: 'text-primary-400' },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl card-static">
              <div className={`w-12 h-12 rounded-xl icon-tile flex items-center justify-center mb-4`}>
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-lg font-bold text-ink-50 mb-2">{item.title}</h3>
              <p className="text-sm text-ink-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-wide py-20">
        <Newsletter />
      </section>
    </>
  );
}
