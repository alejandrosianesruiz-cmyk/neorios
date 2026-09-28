import { Helmet } from 'react-helmet-async';

export default function Cookies() {
  return (
    <>
      <Helmet>
        <title>Política de cookies — neorixy</title>
        <meta name="description" content="Política de cookies de neorixy. Qué cookies utilizamos y cómo gestionarlas." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink-50 mb-4">Política de cookies</h1>
          <p className="text-sm text-ink-500">Última actualización: septiembre 2026</p>
        </div>
      </section>

      <section className="container-prose py-12">
        <div className="prose-article">
          <h2>1. Qué son las cookies</h2>
          <p>
            Las cookies son pequeños archivos de texto que un sitio web descarga en el navegador del usuario para almacenar y recuperar información sobre la navegación. Permiten, por ejemplo, recordar preferencias o medir el uso del sitio.
          </p>

          <h2>2. Cookies que utilizamos</h2>
          <p>
            neorixy utiliza los siguientes tipos de cookies:
          </p>
          <ul>
            <li><strong>Cookies técnicas</strong>: necesarias para el funcionamiento básico del sitio. No requieren consentimiento.</li>
            <li><strong>Cookies de analítica</strong>: nos ayudan a entender cómo usan el sitio los visitantes (páginas más visitadas, tiempo de permanencia, etc.). Pueden ser propias o de terceros.</li>
            <li><strong>Cookies de publicidad</strong>: si el sitio muestra anuncios, pueden utilizarse cookies para mostrar publicidad relevante. Estas requieren consentimiento.</li>
          </ul>

          <h2>3. Consentimiento</h2>
          <p>
            Al continuar navegando por el sitio, aceptas el uso de cookies según esta política. Puedes retirar tu consentimiento en cualquier momento desactivando las cookies desde la configuración de tu navegador.
          </p>

          <h2>4. Cómo desactivar las cookies</h2>
          <p>
            Puedes configurar tu navegador para que bloquee o elimine las cookies. Ten en cuenta que algunas funciones del sitio pueden dejar de funcionar si las desactivas:
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/Borrar-cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h2>5. Actualizaciones</h2>
          <p>
            Esta política puede actualizarse para reflejar cambios en la legislación o en los servicios que utilizamos. Te recomendamos revisarla periódicamente.
          </p>
        </div>
      </section>
    </>
  );
}
