import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacto — neorixy</title>
        <meta name="description" content="Contacta con el equipo editorial de neorixy para correcciones, sugerencias o propuestas de colaboración." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink-50 mb-4">Contacto</h1>
          <p className="text-lg text-ink-400 max-w-2xl">
            ¿Tienes una corrección, sugerencia o propuesta de colaboración? Escríbenos.
          </p>
        </div>
      </section>

      <section className="container-prose py-12">
        <div className="prose-article">
          <h2>Correo electrónico</h2>
          <p>
            Puedes escribirnos a <a href="mailto:contacto@neorixy.com">contacto@neorixy.com</a>. Respondemos en un plazo máximo de 72 horas laborables.
          </p>

          <h2>Para qué podemos ayudarte</h2>
          <ul>
            <li><strong>Correcciones</strong>: si detectas un error en un artículo o en el análisis de una herramienta.</li>
            <li><strong>Sugerencias</strong>: si quieres proponernos un tema, una herramienta o una mejora.</li>
            <li><strong>Colaboraciones</strong>: si representas una herramienta de IA y quieres que la analicemos. Las colaboraciones siempre se etiquetan como tal.</li>
            <li><strong>Prensa</strong>: si necesitas una declaración o comentario sobre el sector de la IA en español.</li>
          </ul>

          <h2>Redes</h2>
          <p>
            De momento no tenemos perfiles activos en redes sociales. Toda nuestra comunicación se canaliza a través del correo electrónico.
          </p>
        </div>
      </section>
    </>
  );
}
