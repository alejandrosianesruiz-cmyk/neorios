import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Política de privacidad — neorixy</title>
        <meta name="description" content="Política de privacidad de neorixy. Cómo tratamos los datos personales de los usuarios." />
      </Helmet>

      <section className="pt-24 pb-8 border-b border-ink-800/60">
        <div className="container-wide">
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink-50 mb-4">Política de privacidad</h1>
          <p className="text-sm text-ink-500">Última actualización: septiembre 2026</p>
        </div>
      </section>

      <section className="container-prose py-12">
        <div className="prose-article">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            El responsable del tratamiento de los datos personales recopilados a través de este sitio es el equipo editorial de neorixy. Puedes contactarnos en <a href="mailto:contacto@neorixy.com">contacto@neorixy.com</a>.
          </p>

          <h2>2. Datos que recopilamos</h2>
          <p>
            neorixy recopila los siguientes datos:
          </p>
          <ul>
            <li><strong>Suscripción al boletín</strong>: tu dirección de correo electrónico, si te suscribes voluntariamente.</li>
            <li><strong>Datos de navegación</strong>: información técnica anónima (tipo de navegador, páginas visitadas, duración de la visita) mediante cookies y servicios de analítica.</li>
            <li><strong>Formulario de contacto</strong>: tu nombre y correo electrónico, junto con el mensaje que nos envíes.</li>
          </ul>

          <h2>3. Finalidad del tratamiento</h2>
          <p>
            Los datos se tratan con las siguientes finalidades:
          </p>
          <ul>
            <li>Enviarte el boletín periódico sobre inteligencia artificial, si te has suscrito.</li>
            <li>Responder a tus consultas, correcciones o propuestas enviadas por correo.</li>
            <li>Analizar el uso del sitio para mejorar el contenido y la experiencia de navegación.</li>
          </ul>

          <h2>4. Base legal</h2>
          <p>
            La base legal para el tratamiento de tus datos es tu consentimiento explícito, prestado al suscribirte al boletín o al enviar un mensaje de contacto.
          </p>

          <h2>5. Conservación de los datos</h2>
          <p>
            Conservamos tus datos mientras mantengas la suscripción al boletín o hasta que solicites su supresión. Los datos de navegación anónimos se conservan durante el tiempo que dure la relación con el proveedor de analítica.
          </p>

          <h2>6. Cesiones y transferencias</h2>
          <p>
            No cedemos tus datos a terceros, salvo por obligación legal. Algunos proveedores de servicios (como la plataforma de envío de correo o de analítica) pueden acceder a los datos como encargados del tratamiento, bajo contrato y con garantías adecuadas.
          </p>

          <h2>7. Derechos de los interesados</h2>
          <p>
            Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a <a href="mailto:contacto@neorixy.com">contacto@neorixy.com</a>.
          </p>

          <h2>8. Medidas de seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos frente a accesos no autorizados, alteraciones o divulgaciones indebidas.
          </p>
        </div>
      </section>
    </>
  );
}
