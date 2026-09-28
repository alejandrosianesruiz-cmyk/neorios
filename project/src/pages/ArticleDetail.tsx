import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, ArrowLeft, Calendar, Tag, Sparkles, Facebook, Instagram, Twitter, Link as LinkIcon } from 'lucide-react';
import { articles } from '../data/articles';
import { aiTools } from '../data/aiTools';
import ArticleCard from '../components/ArticleCard';
import LikeButton from '../components/LikeButton';
import FavoriteButton from '../components/FavoriteButton';
import RatingStars from '../components/RatingStars';
import VisitCounter from '../components/VisitCounter';

const categoryColors: Record<string, string> = {
  'Guías': 'bg-primary-500/15 text-primary-300 border-primary-500/30',
  'Comparativas': 'bg-accent-500/15 text-accent-300 border-accent-500/30',
  'Noticias': 'bg-success-500/15 text-success-300 border-success-500/30',
  'Tutoriales': 'bg-warning-500/15 text-warning-300 border-warning-500/30',
  'Opinión': 'bg-error-500/15 text-error-300 border-error-500/30',
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <Navigate to="/articulos" replace />;

  const related = articles.filter((a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t)))).slice(0, 3);

  // Find related tools based on article tags
  const relatedTools = aiTools.filter((t) =>
    article.tags.some((tag) =>
      t.name.toLowerCase().includes(tag.toLowerCase()) ||
      t.category.toLowerCase().includes(tag.toLowerCase()) ||
      tag.toLowerCase().includes(t.category.toLowerCase())
    )
  ).slice(0, 4);

  // Render internal links in text: [text](/path) -> <Link>
  const renderLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    let key = 0;
    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      const [, linkText, linkUrl] = match;
      if (linkUrl.startsWith('/')) {
        parts.push(
          <Link key={`link-${key++}`} to={linkUrl} className="text-primary-400 hover:text-primary-300 underline underline-offset-2">
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a key={`link-${key++}`} href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline underline-offset-2">
            {linkText}
          </a>
        );
      }
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    return parts;
  };

  const renderContent = (block: string) => {
    if (block.startsWith('## ')) {
      return <h2 key={block}>{block.replace('## ', '')}</h2>;
    }
    if (block.startsWith('### ')) {
      return <h3 key={block}>{block.replace('### ', '')}</h3>;
    }
    if (block.startsWith('> ')) {
      return <blockquote key={block}>{renderLinks(block.replace('> ', ''))}</blockquote>;
    }
    if (block.startsWith('- ') || block.startsWith('1. ') || block.startsWith('2. ') || block.startsWith('3. ') || block.startsWith('4. ') || block.startsWith('5. ') || block.startsWith('6. ') || block.startsWith('7. ')) {
      const items = block.split('\n').filter((l) => l.trim());
      const isOrdered = /^\d+\./.test(items[0]);
      const listItems = items.map((item) => {
        const text = item.replace(/^[-]\s|^\d+\.\s/, '');
        return <li key={item}>{renderLinks(text)}</li>;
      });
      return isOrdered ? <ol key={block}>{listItems}</ol> : <ul key={block}>{listItems}</ul>;
    }
    if (block.startsWith('|')) {
      const rows = block.split('\n').filter((r) => r.trim() && !r.includes('---'));
      if (rows.length < 2) return <p key={block}>{block}</p>;
      const headers = rows[0].split('|').filter((c) => c.trim()).map((c) => c.trim());
      const bodyRows = rows.slice(1).map((r) => r.split('|').filter((c) => c.trim()).map((c) => c.trim()));
      return (
        <div key={block} className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-ink-800 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-ink-800/60">
                {headers.map((h) => <th key={h} className="px-4 py-3 text-left font-semibold text-ink-50 border-b border-ink-700">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-ink-900/40' : 'bg-ink-900/20'}>
                  {row.map((cell, j) => <td key={j} className="px-4 py-3 text-ink-300 border-b border-ink-800/40">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    return <p key={block}>{renderLinks(block)}</p>;
  };

  return (
    <>
      <Helmet>
        <title>{article.title} — neorixy</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={article.coverImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        <link rel="canonical" href={`https://neorixy.com/articulos/${article.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          author: { '@type': 'Person', name: article.author.name },
          image: article.coverImage,
        })}</script>
      </Helmet>

      {/* Hero */}
      <article className="pt-16">
        <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/70 to-ink-950" />
          <div className="absolute inset-0 flex items-end">
            <div className="container-wide pb-10">
              <Link to="/articulos" className="inline-flex items-center gap-1 text-sm text-ink-300 hover:text-ink-50 transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Volver a artículos
              </Link>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border mb-4 ${categoryColors[article.category]}`}>
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-ink-50 leading-tight max-w-4xl">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-ink-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow-sm flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-ink-50">Equipo editorial</p>
                    <p className="text-xs text-ink-500">neorixy</p>
                  </div>
                </div>
                <span className="w-1 h-1 rounded-full bg-ink-600" />
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Actualizado: septiembre 2026</span>
                <span className="w-1 h-1 rounded-full bg-ink-600" />
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readingTime} min de lectura</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-prose py-12">
          <p className="text-xl text-ink-300 leading-relaxed mb-8 font-light border-l-4 border-primary-600 pl-5">
            {article.excerpt}
          </p>

          <div className="prose-article">
            {article.content.map((block) => renderContent(block))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-10 pt-6 border-t border-ink-800/60">
            <Tag className="w-4 h-4 text-ink-500" />
            {article.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-lg bg-ink-800/60 text-sm text-ink-300 border border-ink-700/40">
                {tag}
              </span>
            ))}
          </div>

          {/* Share, Like, Favorite */}
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <button
              type="button"
              onClick={() => {
                const url = window.location.href;
                const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                window.open(shareUrl, '_blank', 'noopener,noreferrer,width=700,height=600');
              }}
              aria-label="Compartir en Facebook"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink-800 hover:bg-ink-700 text-sm text-ink-300 hover:text-ink-50 transition-colors"
            >
              <Facebook className="w-4 h-4" /> Facebook
            </button>

            <button
              type="button"
              onClick={async () => {
                const url = window.location.href;
                try {
                  await navigator.clipboard.writeText(url);
                  window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
                } catch {
                  window.open(`https://www.instagram.com/?url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
                }
              }}
              aria-label="Compartir en Instagram"
              title="Copia el enlace y abre Instagram"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink-800 hover:bg-ink-700 text-sm text-ink-300 hover:text-ink-50 transition-colors"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </button>

            <button
              type="button"
              onClick={() => {
                const url = window.location.href;
                const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article.title)}`;
                window.open(shareUrl, '_blank', 'noopener,noreferrer,width=700,height=600');
              }}
              aria-label="Compartir en X"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink-800 hover:bg-ink-700 text-sm text-ink-300 hover:text-ink-50 transition-colors"
            >
              <Twitter className="w-4 h-4" /> X
            </button>

            <button
              type="button"
              onClick={async () => {
                const url = window.location.href;
                try {
                  await navigator.clipboard.writeText(url);
                  window.alert('Enlace copiado al portapapeles');
                } catch {
                  const input = document.createElement('input');
                  input.value = url;
                  document.body.appendChild(input);
                  input.select();
                  document.execCommand('copy');
                  input.remove();
                  window.alert('Enlace copiado al portapapeles');
                }
              }}
              aria-label="Copiar enlace"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink-800 hover:bg-ink-700 text-sm text-ink-300 hover:text-ink-50 transition-colors"
            >
              <LinkIcon className="w-4 h-4" /> Copiar enlace
            </button>

            <LikeButton targetType="article" targetSlug={article.slug} />
            <FavoriteButton type="article" slug={article.slug} title={article.title} image={article.coverImage} category={article.category} variant="full" />
          </div>

          {/* Rating and Views */}
          <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-ink-800/60">
            <div>
              <p className="text-xs text-ink-500 mb-1.5">Valora este artículo</p>
              <RatingStars targetType="article" targetSlug={article.slug} />
            </div>
            <VisitCounter targetType="article" targetSlug={article.slug} />
          </div>

          {/* Author */}
          <div className="mt-10 p-6 rounded-2xl card-static flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow-sm flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-ink-500 uppercase tracking-wide">Escrito por</p>
              <p className="text-lg font-semibold text-ink-50">Equipo editorial</p>
              <p className="text-sm text-ink-400">neorixy</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related tools */}
      {relatedTools.length > 0 && (
        <section className="container-wide py-12">
          <h2 className="text-2xl font-extrabold text-ink-50 mb-6">Herramientas relacionadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedTools.map((t) => (
              <Link key={t.id} to={`/herramientas/${t.slug}`} className="group flex flex-col card-glow rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-ink-800 flex-shrink-0 border border-ink-700/40">
                    <img src={t.logo} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-ink-50 group-hover:text-primary-300 transition-colors text-sm">{t.name}</h3>
                    <p className="text-xs text-ink-500">{t.category} · {t.pricing}</p>
                  </div>
                </div>
                <p className="text-xs text-ink-400 line-clamp-2">{t.tagline}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="container-wide py-16">
          <h2 className="text-2xl font-extrabold text-ink-50 mb-6">Artículos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </section>
      )}

    </>
  );
}
