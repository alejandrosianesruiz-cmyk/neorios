import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-primary-500/25 bg-ink-950 mt-20">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-primary-500 to-primary-700 shadow-glow-sm flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-display font-extrabold text-ink-50">
                neorixy
              </span>
            </Link>
            <p className="text-sm text-ink-400 leading-relaxed">
              La plataforma en español para descubrir, comparar y aprender a usar las mejores herramientas de inteligencia artificial.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-50 mb-4">Contenido</h4>
            <ul className="space-y-2">
              <li><Link to="/articulos" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Artículos</Link></li>
              <li><Link to="/usos-ia" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Usos de IA</Link></li>
              <li><Link to="/prompts" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Plantillas de Prompts</Link></li>
              <li><Link to="/articulos?categoria=Comparativas" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Comparativas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-50 mb-4">Herramientas</h4>
            <ul className="space-y-2">
              <li><Link to="/herramientas" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Catálogo completo</Link></li>
              <li><Link to="/herramientas?categoria=Texto" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">IA de texto</Link></li>
              <li><Link to="/herramientas?categoria=Imagen" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">IA de imagen</Link></li>
              <li><Link to="/herramientas?categoria=Audio" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">IA de audio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink-50 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/sobre-nosotros" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Sobre neorixy</Link></li>
              <li><Link to="/contacto" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Contacto</Link></li>
              <li><Link to="/privacidad" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Política de privacidad</Link></li>
              <li><Link to="/cookies" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Política de cookies</Link></li>
              <li><Link to="/legal" className="text-sm text-ink-400 hover:text-primary-400 transition-colors">Aviso legal</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-500/15 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-ink-500">
            © 2026 neorixy · Plataforma independiente de inteligencia artificial
          </p>
          <p className="text-xs text-ink-500">
            Hecho con dedicación para la comunidad hispanohablante de IA
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <p className="text-xs text-ink-500 tracking-widest font-mono">
            A.S.R
          </p>
        </div>
      </div>
    </footer>
  );
}
