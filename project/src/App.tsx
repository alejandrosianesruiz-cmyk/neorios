import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import AITools from './pages/AITools';
import ToolDetail from './pages/ToolDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import Legal from './pages/Legal';
import Prompts from './pages/Prompts';
import Favorites from './pages/Favorites';
import UseCasesPage from './pages/UseCases';

function NotFound() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">Error 404</p>
      <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">Esta página no existe</h1>
      <p className="mb-8 max-w-xl text-base leading-7 text-slate-300">Puede que el enlace esté roto o que la página se haya movido. Vuelve al inicio o explora el catálogo de herramientas de IA.</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-400">Ir al inicio</Link>
        <Link to="/herramientas" className="rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/5">Ver herramientas</Link>
      </div>
    </section>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-ink-950">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/articulos/:slug" element={<ArticleDetail />} />
          <Route path="/usos-ia" element={<UseCasesPage />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/herramientas" element={<AITools />} />
          <Route path="/herramientas/:slug" element={<ToolDetail />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/privacidad" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
