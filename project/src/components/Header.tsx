import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Search, Sparkles, Heart } from 'lucide-react';
import { useFavorites } from '../lib/favorites';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/articulos', label: 'Artículos' },
  { to: '/usos-ia', label: 'Usos de IA' },
  { to: '/prompts', label: 'Prompts' },
  { to: '/herramientas', label: 'Herramientas' },
  { to: '/sobre-nosotros', label: 'Sobre neorixy' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useFavorites();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-5 pt-3 pointer-events-none">
      <div
        className={`liquid-glass pointer-events-auto max-w-7xl mx-auto rounded-full flex items-center justify-between h-14 pl-3 pr-3 lg:pl-4 lg:pr-3 transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-black/20' : ''
        }`}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow-sm flex items-center justify-center group-hover:scale-[1.03] transition-transform ease-apple">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-display font-extrabold text-ink-50 tracking-tight">
            neorixy
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-[14px] font-medium transition-colors ${
                  isActive
                    ? 'text-ink-50 bg-primary-500/20'
                    : 'text-ink-300 hover:text-ink-50 hover:bg-primary-500/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/favoritos"
            className="relative w-9 h-9 rounded-full bg-primary-500/10 hover:bg-primary-500/20 flex items-center justify-center text-ink-400 hover:text-error-400 transition-colors"
            aria-label="Favoritos"
          >
            <Heart className="w-4 h-4" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-error-600 text-white text-[11px] font-semibold flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <Link
            to="/articulos"
            className="w-9 h-9 rounded-full bg-primary-500/10 hover:bg-primary-500/20 flex items-center justify-center text-ink-400 hover:text-ink-50 transition-colors"
            aria-label="Buscar"
          >
            <Search className="w-4 h-4" />
          </Link>
          <Link
            to="/herramientas"
            className="px-5 py-2 rounded-full btn-glow text-white text-[14px] font-semibold"
          >
            Explorar herramientas
          </Link>
        </div>

        <button
          className="lg:hidden -mr-2 w-11 h-11 flex items-center justify-center rounded-full text-ink-200 hover:bg-ink-50/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="liquid-glass liquid-glass-dense pointer-events-auto lg:hidden max-w-7xl mx-auto mt-2 rounded-3xl px-3 py-3 space-y-1 animate-fade-in-down">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'text-ink-50 bg-primary-500/20'
                    : 'text-ink-300 hover:text-ink-50 hover:bg-primary-500/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/favoritos"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 px-4 py-3 rounded-xl text-base font-medium text-ink-300 hover:text-ink-50 hover:bg-ink-50/5 transition-colors"
          >
            <Heart className="w-4 h-4" /> Favoritos{count > 0 && ` (${count})`}
          </Link>
          <Link
            to="/herramientas"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 px-4 py-3 rounded-full btn-glow text-white text-sm font-medium text-center"
          >
            Explorar herramientas
          </Link>
        </nav>
      )}
    </header>
  );
}
