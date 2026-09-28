import { Helmet } from 'react-helmet-async';

export default function Legal() {
  return (
    <>
      <Helmet>
        <title>Aviso legal — neorixy</title>
        <meta name="description" content="Aviso legal de neorixy. Información sobre la titularidad, condiciones de uso y propiedad intelectual." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink-50 mb-4">Aviso legal</h1>
          <p className="text-sm text-ink-500">Última actualización: septiembre 2026</p>
        </div>
      </section>

      <section className="container-prose py-12">
        <div className="prose-article">
          <h2>1. Titularidad del sitio</h2>
          <p>
            El sitio web <strong>neorixy.com</strong> es un proyecto editorial independiente sobre inteligencia artificial en español. Puedes contactar con el equipo editorial en <a href="mailto:contacto@neorixy.com">contacto@neorixy.com</a>.
          </p>

          <h2>2. Condiciones de uso</h2>
          <p>
            El acceso a este sitio es libre y gratuito. La utilización del sitio implica la aceptación de las siguientes condiciones:
          </p>
          <ul>
            <li>No está permitido reproducir el contenido sin citar la fuente ni enlazar al artículo original.</li>
            <li>No está permitido utilizar el sitio para fines ilícitos o contrarios a la buena fe.</li>
            <li>El usuario se compromete a no introducir virus, código malicioso ni realizar acciones que puedan dañar el sitio.</li>
          </ul>

          <h2>3. Propiedad intelectual</h2>
          <p>
            Todo el contenido publicado en neorixy (artículos, análisis de herramientas, guías, tutoriales, prompts y diseño del sitio) es obra del equipo editorial y está protegido por la legislación de propiedad intelectual. La reproducción total o parcial sin autorización está prohibida, salvo el uso legítimo de cita con enlace a la fuente.
          </p>
          <p>
            Los nombres, logotipos y marcas de las herramientas de IA analizadas pertenecen a sus respectivos titulares. neorixy no mantiene relación comercial con ellos salvo que se indique expresamente en el artículo.
          </p>

          <h2>4. Enlaces a sitios externos</h2>
          <p>
            neorixy contiene enlaces a sitios web externos (principalmente a las herramientas analizadas). No nos hacemos responsables del contenido ni del funcionamiento de esos sitios. El usuario accede a ellos bajo su propia responsabilidad.
          </p>

          <h2>5. Publicidad y transparencia</h2>
          <p>
            neorixy puede generar ingresos mediante publicidad o enlaces de afiliación. Esto nunca condiciona el análisis de las herramientas: indicamos ventajas y desventajas con independencia. Los contenidos patrocinados, si los hubiera, se etiquetarían siempre de forma visible.
          </p>

          <h2>6. Limitación de responsabilidad</h2>
          <p>
            neorixy no garantiza la ausencia de errores en el contenido ni la disponibilidad continua del sitio. El equipo editorial trabaja por la exactitud y actualización de la información, pero no se hace responsable de los daños derivados del uso del sitio o de las herramientas analizadas.
          </p>

          <h2>7. Legislación aplicable</h2>
          <p>
            Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales correspondientes.
          </p>
        </div>
      </section>
    </>
  );
}
