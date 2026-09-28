# Cambios realizados en esta versión

- Se ha unificado la URL canónica y los metadatos principales con `https://neorixy.com`, que ya figuraba en el sitemap y en las páginas legales.
- Se ha corregido el título y la descripción SEO de la página principal y los metadatos para compartir en redes.
- Se ha añadido un favicon SVG de Neorixy y se ha reutilizado el logotipo existente como imagen social.
- Se ha añadido una página 404 con enlaces al inicio y al catálogo.
- Se han corregido tres URL desactualizadas del sitemap.
- Se han añadido cabeceras HTTP básicas de seguridad en Netlify.
- Se ha quitado el `.env` del paquete y se ha añadido `.env.example` como plantilla. Las variables de Supabase deben configurarse en el entorno de despliegue.
- Se ha actualizado el nombre del proyecto en `package.json` y `package-lock.json`.

## Antes de desplegar

1. Comprueba que `neorixy.com` es el dominio principal que tienes configurado. Si utilizas otro dominio, cambia las URL canónicas, el sitemap, `robots.txt` y los metadatos.
2. Configura `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` en Netlify (Site configuration → Environment variables). Usa los valores de tu proyecto Supabase.
3. Ejecuta `npm ci`, `npm run typecheck`, `npm run lint` y `npm run build` antes de publicar.

La compilación no se ha podido verificar aquí porque la instalación de dependencias no terminó correctamente en este entorno.

## 28/09/2026 — Compartir artículos y retirada del newsletter
- Retirado el bloque de newsletter de la página de detalle de artículos.
- Añadidos botones para compartir el artículo actual en Facebook y X.
- Añadido botón de Instagram que copia la URL actual y abre Instagram (Instagram no ofrece un endpoint web público para compartir una URL directamente).
- Añadido botón para copiar el enlace del artículo actual al portapapeles.
- Los botones usan automáticamente `window.location.href`, por lo que comparten la página concreta que está viendo el visitante.
