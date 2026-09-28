import { LucideIcon } from 'lucide-react';
import {
  PenLine, Megaphone, Code, GraduationCap, Stethoscope,
  Palette, Briefcase, TrendingUp, Scale, Languages,
  Film, HeartPulse, Brain, ShoppingCart,
} from 'lucide-react';

export interface UseCase {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDesc: string;
  description: string;
  fields: UseCaseField[];
  tools: string[];
  promptHint: string;
}

export interface UseCaseField {
  name: string;
  description: string;
}

export const useCases: UseCase[] = [
  {
    id: 'escritura',
    icon: PenLine,
    title: 'Escritura y redacción',
    shortDesc: 'Correos, blogs, ensayos, guiones y todo tipo de textos',
    description: 'La IA puede redactar, corregir, traducir y adaptar cualquier tipo de texto. Desde un correo urgente hasta un artículo de blog completo, la IA es tu redactor junior disponible 24/7.',
    fields: [
      { name: 'Correos profesionales', description: 'Redacta correos con el tono perfecto para cualquier situación laboral.' },
      { name: 'Blogs y artículos', description: 'Genera borradores completos que tú solo tienes que editar y personalizar.' },
      { name: 'Corrección de textos', description: 'Detecta errores gramaticales, ortográficos y de estilo en segundos.' },
      { name: 'Guiones para vídeo', description: 'Crea guiones para YouTube, TikTok o presentaciones con estructura narrativa.' },
      { name: 'Traducción con contexto', description: 'Traduce manteniendo el tono, la cultura y las expresiones idiomáticas.' },
      { name: 'Resúmenes y síntesis', description: 'Convierte documentos de 50 páginas en un resumen de una página.' },
    ],
    tools: ['ChatGPT', 'Claude', 'Jasper', 'Notion AI'],
    promptHint: 'Actúa como un redactor profesional y escribe un artículo sobre [TEMA]...',
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing y publicidad',
    shortDesc: 'Estrategias, campañas, copywriting y contenido para redes',
    description: 'La IA está revolucionando el marketing: genera copy persuasivo, planifica campañas, analiza competencia y crea contenido a escala que antes requería todo un equipo.',
    fields: [
      { name: 'Copywriting', description: 'Textos persuasivos para landing pages, anuncios y emails que convierten.' },
      { name: 'Estrategia de contenidos', description: 'Calendarios editoriales completos con temas, formatos y canales.' },
      { name: 'Análisis de competencia', description: 'Estudia a tus competidores y encuentra oportunidades de mercado.' },
      { name: 'SEO', description: 'Investigación de palabras clave, meta descripciones y contenido optimizado.' },
      { name: 'Redes sociales', description: 'Posts, hashtags, ideas virales y estrategias por plataforma.' },
      { name: 'Email marketing', description: 'Secuencias completas de emails, asuntos y newsletters.' },
    ],
    tools: ['ChatGPT', 'Jasper', 'Perplexity', 'Gamma'],
    promptHint: 'Actúa como un director de marketing y crea un plan para [PRODUCTO]...',
  },
  {
    id: 'programacion',
    icon: Code,
    title: 'Programación y desarrollo',
    shortDesc: 'Escribir, depurar y explicar código en cualquier lenguaje',
    description: 'Los copilotos de IA escriben funciones, corrigen bugs, generan tests y explican código ajeno. Programar con IA multiplica tu productividad y reduce barreras de entrada.',
    fields: [
      { name: 'Generación de código', description: 'Describe lo que necesitas y la IA escribe la función o componente completo.' },
      { name: 'Debugging', description: 'Pega tu código con error y la IA encuentra y soluciona el problema.' },
      { name: 'Explicación de código', description: 'Entiende cualquier fragmento de código, incluso sin documentación.' },
      { name: 'Tests automáticos', description: 'Genera unit tests y test de integración para tu código.' },
      { name: 'Refactoring', description: 'Mejora la estructura del código sin cambiar su funcionalidad.' },
      { name: 'Documentación', description: 'Crea documentación técnica y comentarios automáticamente.' },
    ],
    tools: ['GitHub Copilot', 'Cursor', 'Claude', 'ChatGPT'],
    promptHint: 'Actúa como un senior developer en [LENGUAJE] y revisa este código...',
  },
  {
    id: 'educacion',
    icon: GraduationCap,
    title: 'Educación y aprendizaje',
    shortDesc: 'Tutores personalizados, planes de estudio y explicaciones a medida',
    description: 'La IA democratiza el acceso a la educación con tutores personalizados disponibles 24/7, que adaptan el ritmo y el estilo a cada estudiante.',
    fields: [
      { name: 'Tutoría personalizada', description: 'La IA explica conceptos a tu ritmo y nivel, cuantas veces necesites.' },
      { name: 'Planes de estudio', description: 'Rutas de aprendizaje estructuradas con objetivos y recursos.' },
      { name: 'Preparación de exámenes', description: 'Preguntas de práctica, simulacros y explicación de respuestas.' },
      { name: 'Idiomas', description: 'Conversación práctica, corrección de pronunciación y gramática.' },
      { name: 'Investigación', description: 'Síntesis de fuentes, resumen de artículos científicos y bibliografía.' },
      { name: 'Feedback de trabajos', description: 'Revisión de redacciones y proyectos con sugerencias de mejora.' },
    ],
    tools: ['ChatGPT', 'Claude', 'Perplexity', 'Duolingo Max'],
    promptHint: 'Actúa como un tutor de [MATERIA] y crea un plan de estudio para...',
  },
  {
    id: 'salud',
    icon: Stethoscope,
    title: 'Salud y bienestar',
    shortDesc: 'Información médica accesible, seguimiento de hábitos y apoyo mental',
    description: 'La IA no reemplaza al médico, pero ayuda a entender síntomas, llevar seguimiento de hábitos saludables y ofrece apoyo en salud mental las 24 horas.',
    fields: [
      { name: 'Información médica', description: 'Explicación de síntomas, medicamentos y condiciones en lenguaje claro.' },
      { name: 'Plan nutricional', description: 'Menús y dietas personalizados según tus objetivos y restricciones.' },
      { name: 'Rutinas de ejercicio', description: 'Planes de entrenamiento adaptados a tu nivel, tiempo y equipo.' },
      { name: 'Salud mental', description: 'Conversaciones de apoyo, técnicas de relajación y gestión del estrés.' },
      { name: 'Seguimiento de hábitos', description: 'Análisis de tu progreso y recomendaciones para mantener hábitos.' },
      { name: 'Preparación de consultas', description: 'Te ayuda a preparar preguntas para tu médico y entender el diagnóstico.' },
    ],
    tools: ['ChatGPT', 'Claude', 'Perplexity'],
    promptHint: 'Actúa como un nutricionista y crea un plan de comidas para [OBJETIVO]...',
  },
  {
    id: 'diseno',
    icon: Palette,
    title: 'Diseño y creatividad',
    shortDesc: 'Imágenes, logos, ilustraciones y arte generado por IA',
    description: 'La IA generativa ha democratizado el diseño: cualquiera puede crear imágenes profesionales, ilustraciones y conceptos artísticos con una simple descripción de texto.',
    fields: [
      { name: 'Generación de imágenes', description: 'Crea cualquier imagen desde una descripción textual.' },
      { name: 'Diseño de logos', description: 'Prototipos de logos e identidad visual en segundos.' },
      { name: 'Ilustración', description: 'Arte digital para libros, artículos, portadas y más.' },
      { name: 'Edición de fotos', description: 'Elimina fondos, extiende imágenes y retoca con IA.' },
      { name: 'Presentaciones', description: 'Slides profesionales generadas a partir de un texto.' },
      { name: 'Diseño web', description: 'Maquetas y prototipos de interfaces con IA.' },
    ],
    tools: ['Midjourney', 'Stable Diffusion', 'Gamma', 'Leonardo AI'],
    promptHint: 'Genera una imagen de [DESCRIPCIÓN] en estilo [ESTILO]...',
  },
  {
    id: 'negocio',
    icon: Briefcase,
    title: 'Negocio y emprendimiento',
    shortDesc: 'Planes de negocio, análisis financiero y estrategia',
    description: 'La IA es como tener un consultor de McKinsey disponible en cualquier momento: analiza mercados, proyecta finanzas y ayuda a tomar decisiones estratégicas.',
    fields: [
      { name: 'Planes de negocio', description: 'Estructura completa: mercado, propuesta de valor, finanzas y estrategia.' },
      { name: 'Análisis financiero', description: 'Proyecciones, ratios y interpretación de estados financieros.' },
      { name: 'Estudio de mercado', description: 'Tamaño de mercado, tendencias, segmentación y competencia.' },
      { name: 'Estrategia de precios', description: 'Modelos de pricing, análisis de elasticidad y posicionamiento.' },
      { name: 'Pitch deck', description: 'Presentaciones para inversores con narrativa persuasiva.' },
      { name: 'Automatización de procesos', description: 'Identifica qué tareas delegar en IA y cómo implementarlo.' },
    ],
    tools: ['ChatGPT', 'Claude', 'Perplexity', 'Notion AI'],
    promptHint: 'Actúa como un consultor de estrategia y analiza [MERCADO]...',
  },
  {
    id: 'productividad',
    icon: TrendingUp,
    title: 'Productividad y organización',
    shortDesc: 'Gestión del tiempo, automatización de tareas y organización personal',
    description: 'La IA te ayuda a organizar tu vida: prioriza tareas, resume reuniones, gestiona tu correo y automatiza lo repetitivo para que te concentres en lo importante.',
    fields: [
      { name: 'Gestión de tareas', description: 'Prioriza tu lista de tareas y crea un plan de acción diario.' },
      { name: 'Resumen de reuniones', description: 'Convierte notas o transcripciones en actas con tareas y decisiones.' },
      { name: 'Gestión de correo', description: 'Clasifica, redacta respuestas y archiva tu bandeja de entrada.' },
      { name: 'Planificación de proyectos', description: 'Desglosa proyectos en fases, hitos y entregables.' },
      { name: 'Toma de notas inteligente', description: 'Organiza y conecta tus notas automáticamente.' },
      { name: 'Automatizaciones', description: 'Conecta herramientas y automatiza flujos de trabajo.' },
    ],
    tools: ['Notion AI', 'ChatGPT', 'Perplexity', 'Gamma'],
    promptHint: 'Organiza mi semana con estas tareas: [LISTA]. Prioriza por urgencia e importancia...',
  },
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal y administrativo',
    shortDesc: 'Contratos, documentos legales y comprensión de normativa',
    description: 'La IA no es un abogado, pero puede redactar contratos básicos, explicar cláusulas complejas y ayudarte a entender la normativa que afecta a tu negocio.',
    fields: [
      { name: 'Contratos básicos', description: 'Redacta contratos de servicios, NDA, prestación de servicios, etc.' },
      { name: 'Comprensión de cláusulas', description: 'Traduce el lenguaje legal a español claro y comprensible.' },
      { name: 'Documentos administrativos', description: 'Cartas formales, solicitudes y comunicaciones oficiales.' },
      { name: 'Cumplimiento normativo', description: 'Explica qué normativa aplica a tu actividad (RGPD, etc.).' },
      { name: 'Revisión de términos', description: 'Analiza términos y condiciones antes de aceptarlos.' },
      { name: 'Modelos de documentos', description: 'Genera plantillas reutilizables para tu negocio.' },
    ],
    tools: ['ChatGPT', 'Claude'],
    promptHint: 'Actúa como un abogado especializado en [ÁREA] y redacta un contrato de [TIPO]...',
  },
  {
    id: 'idiomas',
    icon: Languages,
    title: 'Idiomas y traducción',
    shortDesc: 'Traducción, conversación práctica y aprendizaje de idiomas',
    description: 'La IA es el compañero de idiomas perfecto: traduce con contexto, mantiene conversaciones en cualquier idioma y corrige tu pronunciación y gramática.',
    fields: [
      { name: 'Traducción contextual', description: 'Traduce manteniendo el significado, el tono y las expresiones idiomáticas.' },
      { name: 'Conversación práctica', description: 'Diálogos en el idioma que aprendes a tu nivel y sobre tu interés.' },
      { name: 'Corrección gramatical', description: 'Corrige tus textos y explica por qué algo es incorrecto.' },
      { name: 'Pronunciación', description: 'Guías de pronunciación y detección de errores comunes.' },
      { name: 'Localización', description: 'Adapta contenido a la cultura y variante regional del idioma.' },
      { name: 'Vocabulario especializado', description: 'Aprende terminología específica de tu profesión en otro idioma.' },
    ],
    tools: ['ChatGPT', 'Claude', 'ElevenLabs', 'Duolingo Max'],
    promptHint: 'Actúa como mi profesor de [IDIOMA]. Corrige mis errores y explícame por qué...',
  },
  {
    id: 'audiovisual',
    icon: Film,
    title: 'Audio y vídeo',
    shortDesc: 'Música, voz, edición de vídeo y transcripción automática',
    description: 'La IA genera canciones, sintetiza voces, transcribe audio y edita vídeo. La producción audiovisual al alcance de cualquiera, sin equipo técnico ni estudio.',
    fields: [
      { name: 'Generación de música', description: 'Crea canciones completas con voz, letra e instrumentación.' },
      { name: 'Síntesis de voz', description: 'Genera narraciones realistas en múltiples idiomas y voces.' },
      { name: 'Transcripción', description: 'Convierte audio o vídeo a texto con precisión profesional.' },
      { name: 'Edición de vídeo', description: 'Cortes automáticos, subtítulos y efectos visuales con IA.' },
      { name: 'Doblaje', description: 'Traduce y dobla tus vídeos a otros idiomas manteniendo el tono.' },
      { name: 'Podcasts', description: 'Edición, resúmenes, show notes y clips promocionales.' },
    ],
    tools: ['Suno AI', 'ElevenLabs', 'Runway ML', 'ChatGPT'],
    promptHint: 'Genera una canción de [GÉNERO] sobre [TEMA] con [ESTADO DE ÁNIMO]...',
  },
  {
    id: 'desarrollo-personal',
    icon: Brain,
    title: 'Desarrollo personal',
    shortDesc: 'Coaching, hábitos, reflexión y toma de decisiones',
    description: 'La IA puede ser tu coach personal: te ayuda a reflexionar, establecer metas, crear hábitos y tomar decisiones difíciles con un enfoque estructurado.',
    fields: [
      { name: 'Coaching personal', description: 'Conversaciones estructuradas que te ayudan a clarificar tus objetivos.' },
      { name: 'Creación de hábitos', description: 'Planes de hábitos basados en ciencia, con seguimiento y motivación.' },
      { name: 'Toma de decisiones', description: 'Análisis de pros y contras, escenarios y marcos de decisión.' },
      { name: 'Reflexión guiada', description: 'Preguntas poderosas que te ayudan a pensar con profundidad.' },
      { name: 'Gestión emocional', description: 'Técnicas de mindfulness, identificación de emociones y estrategias.' },
      { name: 'Definición de metas', description: 'Sistema SMART para establecer objetivos realistas y alcanzables.' },
    ],
    tools: ['ChatGPT', 'Claude'],
    promptHint: 'Actúa como mi coach personal. Quiero mejorar en [ÁREA] y necesito un plan...',
  },
  {
    id: "uso-13",
    icon: PenLine,
    title: "Fotografía de producto",
    shortDesc: "Crear variaciones de escenas y fondos para catálogos",
    description: "La IA puede apoyar tareas de ecommerce relacionadas con fotografía de producto, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con fotografía de producto."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en ecommerce. Necesito ayuda con fotografía de producto. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-14",
    icon: Megaphone,
    title: "Atención al cliente",
    shortDesc: "Diseñar respuestas y flujos para consultas frecuentes",
    description: "La IA puede apoyar tareas de soporte relacionadas con atención al cliente, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con atención al cliente."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Claude", "Gemini", "Perplexity", "Microsoft Copilot"],
    promptHint: "Actúa como un especialista en soporte. Necesito ayuda con atención al cliente. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-15",
    icon: Code,
    title: "Gestión de inventario",
    shortDesc: "Detectar patrones y preparar resúmenes de stock",
    description: "La IA puede apoyar tareas de operaciones relacionadas con gestión de inventario, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con gestión de inventario."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Gemini", "Perplexity", "Microsoft Copilot", "Notion AI"],
    promptHint: "Actúa como un especialista en operaciones. Necesito ayuda con gestión de inventario. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-16",
    icon: GraduationCap,
    title: "Compras empresariales",
    shortDesc: "Comparar requisitos, ofertas y criterios de compra",
    description: "La IA puede apoyar tareas de negocio relacionadas con compras empresariales, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con compras empresariales."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Perplexity", "Microsoft Copilot", "Notion AI", "Mistral AI"],
    promptHint: "Actúa como un especialista en negocio. Necesito ayuda con compras empresariales. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-17",
    icon: Stethoscope,
    title: "Recursos humanos",
    shortDesc: "Preparar descripciones de puestos y entrevistas estructuradas",
    description: "La IA puede apoyar tareas de rr. hh. relacionadas con recursos humanos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con recursos humanos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Microsoft Copilot", "Notion AI", "Mistral AI", "Canva"],
    promptHint: "Actúa como un especialista en rr. hh.. Necesito ayuda con recursos humanos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-18",
    icon: Palette,
    title: "Onboarding de empleados",
    shortDesc: "Crear itinerarios y materiales de bienvenida",
    description: "La IA puede apoyar tareas de rr. hh. relacionadas con onboarding de empleados, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con onboarding de empleados."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Notion AI", "Mistral AI", "Canva", "Figma"],
    promptHint: "Actúa como un especialista en rr. hh.. Necesito ayuda con onboarding de empleados. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-19",
    icon: Briefcase,
    title: "Formación corporativa",
    shortDesc: "Convertir procedimientos en módulos de aprendizaje",
    description: "La IA puede apoyar tareas de educación relacionadas con formación corporativa, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con formación corporativa."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Mistral AI", "Canva", "Figma", "GitHub Copilot"],
    promptHint: "Actúa como un especialista en educación. Necesito ayuda con formación corporativa. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-20",
    icon: TrendingUp,
    title: "Documentación interna",
    shortDesc: "Ordenar procesos y convertir notas en manuales",
    description: "La IA puede apoyar tareas de productividad relacionadas con documentación interna, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con documentación interna."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Canva", "Figma", "GitHub Copilot", "Cursor"],
    promptHint: "Actúa como un especialista en productividad. Necesito ayuda con documentación interna. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-21",
    icon: Scale,
    title: "Gestión de proyectos",
    shortDesc: "Transformar objetivos en tareas y dependencias",
    description: "La IA puede apoyar tareas de productividad relacionadas con gestión de proyectos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con gestión de proyectos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Figma", "GitHub Copilot", "Cursor", "Zapier"],
    promptHint: "Actúa como un especialista en productividad. Necesito ayuda con gestión de proyectos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-22",
    icon: Languages,
    title: "Actas de reuniones",
    shortDesc: "Extraer decisiones, responsables y próximos pasos",
    description: "La IA puede apoyar tareas de reuniones relacionadas con actas de reuniones, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con actas de reuniones."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["GitHub Copilot", "Cursor", "Zapier", "NotebookLM"],
    promptHint: "Actúa como un especialista en reuniones. Necesito ayuda con actas de reuniones. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-23",
    icon: Film,
    title: "Investigación de mercado",
    shortDesc: "Agrupar señales y preguntas para explorar un mercado",
    description: "La IA puede apoyar tareas de investigación relacionadas con investigación de mercado, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con investigación de mercado."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Cursor", "Zapier", "NotebookLM", "ElevenLabs"],
    promptHint: "Actúa como un especialista en investigación. Necesito ayuda con investigación de mercado. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-24",
    icon: HeartPulse,
    title: "Encuestas",
    shortDesc: "Diseñar preguntas claras y categorías de análisis",
    description: "La IA puede apoyar tareas de investigación relacionadas con encuestas, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con encuestas."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en investigación. Necesito ayuda con encuestas. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-25",
    icon: Brain,
    title: "Análisis de reseñas",
    shortDesc: "Clasificar opiniones por tema y sentimiento",
    description: "La IA puede apoyar tareas de datos relacionadas con análisis de reseñas, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con análisis de reseñas."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en datos. Necesito ayuda con análisis de reseñas. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-26",
    icon: ShoppingCart,
    title: "Análisis de tickets",
    shortDesc: "Detectar motivos repetidos en soporte",
    description: "La IA puede apoyar tareas de datos relacionadas con análisis de tickets, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con análisis de tickets."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en datos. Necesito ayuda con análisis de tickets. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-27",
    icon: PenLine,
    title: "Control de calidad",
    shortDesc: "Crear listas de comprobación y criterios de revisión",
    description: "La IA puede apoyar tareas de operaciones relacionadas con control de calidad, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con control de calidad."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en operaciones. Necesito ayuda con control de calidad. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-28",
    icon: Megaphone,
    title: "Auditoría de contenido",
    shortDesc: "Detectar inconsistencias de tono y estructura",
    description: "La IA puede apoyar tareas de contenido relacionadas con auditoría de contenido, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con auditoría de contenido."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Claude", "Gemini", "Perplexity", "Microsoft Copilot"],
    promptHint: "Actúa como un especialista en contenido. Necesito ayuda con auditoría de contenido. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-29",
    icon: Code,
    title: "Calendarios editoriales",
    shortDesc: "Generar ideas y distribuirlas por canales",
    description: "La IA puede apoyar tareas de marketing relacionadas con calendarios editoriales, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con calendarios editoriales."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Gemini", "Perplexity", "Microsoft Copilot", "Notion AI"],
    promptHint: "Actúa como un especialista en marketing. Necesito ayuda con calendarios editoriales. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-30",
    icon: GraduationCap,
    title: "Newsletters",
    shortDesc: "Preparar borradores y asuntos para boletines",
    description: "La IA puede apoyar tareas de marketing relacionadas con newsletters, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con newsletters."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Perplexity", "Microsoft Copilot", "Notion AI", "Mistral AI"],
    promptHint: "Actúa como un especialista en marketing. Necesito ayuda con newsletters. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-31",
    icon: Stethoscope,
    title: "Copy para anuncios",
    shortDesc: "Crear variantes para distintos públicos",
    description: "La IA puede apoyar tareas de publicidad relacionadas con copy para anuncios, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con copy para anuncios."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Microsoft Copilot", "Notion AI", "Mistral AI", "Canva"],
    promptHint: "Actúa como un especialista en publicidad. Necesito ayuda con copy para anuncios. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-32",
    icon: Palette,
    title: "Landing pages",
    shortDesc: "Estructurar mensajes y secciones de una página",
    description: "La IA puede apoyar tareas de marketing relacionadas con landing pages, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con landing pages."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Notion AI", "Mistral AI", "Canva", "Figma"],
    promptHint: "Actúa como un especialista en marketing. Necesito ayuda con landing pages. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-33",
    icon: Briefcase,
    title: "SEO local",
    shortDesc: "Crear ideas de contenido orientadas a búsquedas locales",
    description: "La IA puede apoyar tareas de seo relacionadas con seo local, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con seo local."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Mistral AI", "Canva", "Figma", "GitHub Copilot"],
    promptHint: "Actúa como un especialista en seo. Necesito ayuda con seo local. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-34",
    icon: TrendingUp,
    title: "Arquitectura web",
    shortDesc: "Proponer jerarquías de páginas y navegación",
    description: "La IA puede apoyar tareas de web relacionadas con arquitectura web, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con arquitectura web."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Canva", "Figma", "GitHub Copilot", "Cursor"],
    promptHint: "Actúa como un especialista en web. Necesito ayuda con arquitectura web. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-35",
    icon: Scale,
    title: "Documentación API",
    shortDesc: "Generar borradores de documentación técnica",
    description: "La IA puede apoyar tareas de programación relacionadas con documentación api, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con documentación api."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Figma", "GitHub Copilot", "Cursor", "Zapier"],
    promptHint: "Actúa como un especialista en programación. Necesito ayuda con documentación api. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-36",
    icon: Languages,
    title: "Migración de código",
    shortDesc: "Planificar cambios entre versiones o lenguajes",
    description: "La IA puede apoyar tareas de programación relacionadas con migración de código, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con migración de código."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["GitHub Copilot", "Cursor", "Zapier", "NotebookLM"],
    promptHint: "Actúa como un especialista en programación. Necesito ayuda con migración de código. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-37",
    icon: Film,
    title: "Revisión de pull requests",
    shortDesc: "Crear listas de comprobación para revisiones",
    description: "La IA puede apoyar tareas de programación relacionadas con revisión de pull requests, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con revisión de pull requests."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Cursor", "Zapier", "NotebookLM", "ElevenLabs"],
    promptHint: "Actúa como un especialista en programación. Necesito ayuda con revisión de pull requests. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-38",
    icon: HeartPulse,
    title: "SQL y consultas",
    shortDesc: "Explicar y construir consultas a partir de requisitos",
    description: "La IA puede apoyar tareas de datos relacionadas con sql y consultas, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con sql y consultas."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en datos. Necesito ayuda con sql y consultas. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-39",
    icon: Brain,
    title: "Automatización con scripts",
    shortDesc: "Convertir tareas repetitivas en pequeños scripts",
    description: "La IA puede apoyar tareas de programación relacionadas con automatización con scripts, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con automatización con scripts."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en programación. Necesito ayuda con automatización con scripts. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-40",
    icon: ShoppingCart,
    title: "Pruebas de accesibilidad",
    shortDesc: "Detectar problemas comunes en interfaces",
    description: "La IA puede apoyar tareas de web relacionadas con pruebas de accesibilidad, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con pruebas de accesibilidad."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en web. Necesito ayuda con pruebas de accesibilidad. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-41",
    icon: PenLine,
    title: "UX research",
    shortDesc: "Preparar entrevistas y síntesis de hallazgos",
    description: "La IA puede apoyar tareas de diseño relacionadas con ux research, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con ux research."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en diseño. Necesito ayuda con ux research. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-42",
    icon: Megaphone,
    title: "Wireframes",
    shortDesc: "Generar descripciones de pantallas y componentes",
    description: "La IA puede apoyar tareas de diseño relacionadas con wireframes, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con wireframes."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Claude", "Gemini", "Perplexity", "Microsoft Copilot"],
    promptHint: "Actúa como un especialista en diseño. Necesito ayuda con wireframes. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-43",
    icon: Code,
    title: "Sistemas de diseño",
    shortDesc: "Documentar componentes y reglas visuales",
    description: "La IA puede apoyar tareas de diseño relacionadas con sistemas de diseño, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con sistemas de diseño."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Gemini", "Perplexity", "Microsoft Copilot", "Notion AI"],
    promptHint: "Actúa como un especialista en diseño. Necesito ayuda con sistemas de diseño. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-44",
    icon: GraduationCap,
    title: "Presentaciones ejecutivas",
    shortDesc: "Convertir datos en una narrativa clara",
    description: "La IA puede apoyar tareas de presentaciones relacionadas con presentaciones ejecutivas, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con presentaciones ejecutivas."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Perplexity", "Microsoft Copilot", "Notion AI", "Mistral AI"],
    promptHint: "Actúa como un especialista en presentaciones. Necesito ayuda con presentaciones ejecutivas. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-45",
    icon: Stethoscope,
    title: "Informes de ventas",
    shortDesc: "Resumir métricas y variaciones relevantes",
    description: "La IA puede apoyar tareas de ventas relacionadas con informes de ventas, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con informes de ventas."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Microsoft Copilot", "Notion AI", "Mistral AI", "Canva"],
    promptHint: "Actúa como un especialista en ventas. Necesito ayuda con informes de ventas. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-46",
    icon: Palette,
    title: "Previsión de demanda",
    shortDesc: "Preparar escenarios y preguntas para análisis",
    description: "La IA puede apoyar tareas de datos relacionadas con previsión de demanda, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con previsión de demanda."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Notion AI", "Mistral AI", "Canva", "Figma"],
    promptHint: "Actúa como un especialista en datos. Necesito ayuda con previsión de demanda. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-47",
    icon: Briefcase,
    title: "Presupuestos",
    shortDesc: "Organizar partidas y supuestos",
    description: "La IA puede apoyar tareas de finanzas relacionadas con presupuestos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con presupuestos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Mistral AI", "Canva", "Figma", "GitHub Copilot"],
    promptHint: "Actúa como un especialista en finanzas. Necesito ayuda con presupuestos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-48",
    icon: TrendingUp,
    title: "Facturación",
    shortDesc: "Clasificar conceptos y detectar campos incompletos",
    description: "La IA puede apoyar tareas de administración relacionadas con facturación, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con facturación."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Canva", "Figma", "GitHub Copilot", "Cursor"],
    promptHint: "Actúa como un especialista en administración. Necesito ayuda con facturación. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-49",
    icon: Scale,
    title: "Gestión documental",
    shortDesc: "Extraer metadatos y clasificar archivos",
    description: "La IA puede apoyar tareas de documentos relacionadas con gestión documental, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con gestión documental."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Figma", "GitHub Copilot", "Cursor", "Zapier"],
    promptHint: "Actúa como un especialista en documentos. Necesito ayuda con gestión documental. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-50",
    icon: Languages,
    title: "Transcripción de audio",
    shortDesc: "Convertir conversaciones en texto editable",
    description: "La IA puede apoyar tareas de audio relacionadas con transcripción de audio, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con transcripción de audio."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["GitHub Copilot", "Cursor", "Zapier", "NotebookLM"],
    promptHint: "Actúa como un especialista en audio. Necesito ayuda con transcripción de audio. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-51",
    icon: Film,
    title: "Edición de podcasts",
    shortDesc: "Detectar segmentos y proponer cortes",
    description: "La IA puede apoyar tareas de audio relacionadas con edición de podcasts, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con edición de podcasts."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Cursor", "Zapier", "NotebookLM", "ElevenLabs"],
    promptHint: "Actúa como un especialista en audio. Necesito ayuda con edición de podcasts. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-52",
    icon: HeartPulse,
    title: "Guiones de YouTube",
    shortDesc: "Estructurar vídeos con introducción, desarrollo y cierre",
    description: "La IA puede apoyar tareas de vídeo relacionadas con guiones de youtube, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con guiones de youtube."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en vídeo. Necesito ayuda con guiones de youtube. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-53",
    icon: Brain,
    title: "Vídeos cortos",
    shortDesc: "Crear ideas de hooks y secuencias breves",
    description: "La IA puede apoyar tareas de vídeo relacionadas con vídeos cortos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con vídeos cortos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en vídeo. Necesito ayuda con vídeos cortos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-54",
    icon: ShoppingCart,
    title: "Subtítulos",
    shortDesc: "Revisar transcripciones y adaptar líneas",
    description: "La IA puede apoyar tareas de vídeo relacionadas con subtítulos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con subtítulos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en vídeo. Necesito ayuda con subtítulos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-55",
    icon: PenLine,
    title: "Generación de imágenes",
    shortDesc: "Crear briefs y prompts visuales",
    description: "La IA puede apoyar tareas de imágenes relacionadas con generación de imágenes, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con generación de imágenes."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en imágenes. Necesito ayuda con generación de imágenes. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-56",
    icon: Megaphone,
    title: "Edición fotográfica",
    shortDesc: "Describir cambios concretos para una imagen",
    description: "La IA puede apoyar tareas de imágenes relacionadas con edición fotográfica, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con edición fotográfica."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Claude", "Gemini", "Perplexity", "Microsoft Copilot"],
    promptHint: "Actúa como un especialista en imágenes. Necesito ayuda con edición fotográfica. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-57",
    icon: Code,
    title: "Identidad de marca",
    shortDesc: "Definir atributos y tono de una marca",
    description: "La IA puede apoyar tareas de branding relacionadas con identidad de marca, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con identidad de marca."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Gemini", "Perplexity", "Microsoft Copilot", "Notion AI"],
    promptHint: "Actúa como un especialista en branding. Necesito ayuda con identidad de marca. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-58",
    icon: GraduationCap,
    title: "Naming",
    shortDesc: "Explorar nombres y criterios de marca",
    description: "La IA puede apoyar tareas de branding relacionadas con naming, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con naming."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Perplexity", "Microsoft Copilot", "Notion AI", "Mistral AI"],
    promptHint: "Actúa como un especialista en branding. Necesito ayuda con naming. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-59",
    icon: Stethoscope,
    title: "Email comercial",
    shortDesc: "Personalizar mensajes de prospección",
    description: "La IA puede apoyar tareas de ventas relacionadas con email comercial, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con email comercial."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Microsoft Copilot", "Notion AI", "Mistral AI", "Canva"],
    promptHint: "Actúa como un especialista en ventas. Necesito ayuda con email comercial. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-60",
    icon: Palette,
    title: "Preparación de reuniones",
    shortDesc: "Crear agendas y preguntas clave",
    description: "La IA puede apoyar tareas de productividad relacionadas con preparación de reuniones, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con preparación de reuniones."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Notion AI", "Mistral AI", "Canva", "Figma"],
    promptHint: "Actúa como un especialista en productividad. Necesito ayuda con preparación de reuniones. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-61",
    icon: Briefcase,
    title: "Seguimiento de clientes",
    shortDesc: "Convertir notas en próximos pasos",
    description: "La IA puede apoyar tareas de ventas relacionadas con seguimiento de clientes, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con seguimiento de clientes."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Mistral AI", "Canva", "Figma", "GitHub Copilot"],
    promptHint: "Actúa como un especialista en ventas. Necesito ayuda con seguimiento de clientes. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-62",
    icon: TrendingUp,
    title: "Propuestas de servicio",
    shortDesc: "Estructurar alcance, entregables y condiciones",
    description: "La IA puede apoyar tareas de negocio relacionadas con propuestas de servicio, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con propuestas de servicio."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Canva", "Figma", "GitHub Copilot", "Cursor"],
    promptHint: "Actúa como un especialista en negocio. Necesito ayuda con propuestas de servicio. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-63",
    icon: Scale,
    title: "Documentos técnicos",
    shortDesc: "Simplificar conceptos para distintos públicos",
    description: "La IA puede apoyar tareas de documentación relacionadas con documentos técnicos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con documentos técnicos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Figma", "GitHub Copilot", "Cursor", "Zapier"],
    promptHint: "Actúa como un especialista en documentación. Necesito ayuda con documentos técnicos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-64",
    icon: Languages,
    title: "Traducción especializada",
    shortDesc: "Adaptar terminología manteniendo contexto",
    description: "La IA puede apoyar tareas de idiomas relacionadas con traducción especializada, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con traducción especializada."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["GitHub Copilot", "Cursor", "Zapier", "NotebookLM"],
    promptHint: "Actúa como un especialista en idiomas. Necesito ayuda con traducción especializada. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-65",
    icon: Film,
    title: "Localización de contenidos",
    shortDesc: "Ajustar expresiones a un mercado concreto",
    description: "La IA puede apoyar tareas de idiomas relacionadas con localización de contenidos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con localización de contenidos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Cursor", "Zapier", "NotebookLM", "ElevenLabs"],
    promptHint: "Actúa como un especialista en idiomas. Necesito ayuda con localización de contenidos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-66",
    icon: HeartPulse,
    title: "Práctica de conversación",
    shortDesc: "Simular diálogos en otro idioma",
    description: "La IA puede apoyar tareas de idiomas relacionadas con práctica de conversación, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con práctica de conversación."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en idiomas. Necesito ayuda con práctica de conversación. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-67",
    icon: Brain,
    title: "Tutor de ciencias",
    shortDesc: "Explicar conceptos con ejemplos graduados",
    description: "La IA puede apoyar tareas de educación relacionadas con tutor de ciencias, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con tutor de ciencias."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en educación. Necesito ayuda con tutor de ciencias. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-68",
    icon: ShoppingCart,
    title: "Preparación de exámenes",
    shortDesc: "Crear preguntas y revisar errores",
    description: "La IA puede apoyar tareas de educación relacionadas con preparación de exámenes, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con preparación de exámenes."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en educación. Necesito ayuda con preparación de exámenes. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-69",
    icon: PenLine,
    title: "Flashcards",
    shortDesc: "Convertir apuntes en tarjetas de repaso",
    description: "La IA puede apoyar tareas de educación relacionadas con flashcards, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con flashcards."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en educación. Necesito ayuda con flashcards. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-70",
    icon: Megaphone,
    title: "Planificación personal",
    shortDesc: "Dividir objetivos grandes en acciones pequeñas",
    description: "La IA puede apoyar tareas de productividad relacionadas con planificación personal, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con planificación personal."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Claude", "Gemini", "Perplexity", "Microsoft Copilot"],
    promptHint: "Actúa como un especialista en productividad. Necesito ayuda con planificación personal. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-71",
    icon: Code,
    title: "Diario de aprendizaje",
    shortDesc: "Resumir avances y dudas pendientes",
    description: "La IA puede apoyar tareas de educación relacionadas con diario de aprendizaje, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con diario de aprendizaje."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Gemini", "Perplexity", "Microsoft Copilot", "Notion AI"],
    promptHint: "Actúa como un especialista en educación. Necesito ayuda con diario de aprendizaje. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-72",
    icon: GraduationCap,
    title: "Lluvia de ideas",
    shortDesc: "Generar alternativas sin cerrar demasiado pronto",
    description: "La IA puede apoyar tareas de creatividad relacionadas con lluvia de ideas, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con lluvia de ideas."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Perplexity", "Microsoft Copilot", "Notion AI", "Mistral AI"],
    promptHint: "Actúa como un especialista en creatividad. Necesito ayuda con lluvia de ideas. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-73",
    icon: Stethoscope,
    title: "Escritura creativa",
    shortDesc: "Explorar personajes, escenas y conflictos",
    description: "La IA puede apoyar tareas de creatividad relacionadas con escritura creativa, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con escritura creativa."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Microsoft Copilot", "Notion AI", "Mistral AI", "Canva"],
    promptHint: "Actúa como un especialista en creatividad. Necesito ayuda con escritura creativa. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-74",
    icon: Palette,
    title: "Storytelling",
    shortDesc: "Convertir datos en una historia comprensible",
    description: "La IA puede apoyar tareas de comunicación relacionadas con storytelling, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con storytelling."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Notion AI", "Mistral AI", "Canva", "Figma"],
    promptHint: "Actúa como un especialista en comunicación. Necesito ayuda con storytelling. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-75",
    icon: Briefcase,
    title: "Discursos",
    shortDesc: "Estructurar mensajes para distintos públicos",
    description: "La IA puede apoyar tareas de comunicación relacionadas con discursos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con discursos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Mistral AI", "Canva", "Figma", "GitHub Copilot"],
    promptHint: "Actúa como un especialista en comunicación. Necesito ayuda con discursos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-76",
    icon: TrendingUp,
    title: "Presentaciones de ventas",
    shortDesc: "Preparar argumentos y objeciones",
    description: "La IA puede apoyar tareas de ventas relacionadas con presentaciones de ventas, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con presentaciones de ventas."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Canva", "Figma", "GitHub Copilot", "Cursor"],
    promptHint: "Actúa como un especialista en ventas. Necesito ayuda con presentaciones de ventas. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-77",
    icon: Scale,
    title: "Ecommerce",
    shortDesc: "Crear fichas consistentes de catálogo",
    description: "La IA puede apoyar tareas de ecommerce relacionadas con ecommerce, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con ecommerce."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Figma", "GitHub Copilot", "Cursor", "Zapier"],
    promptHint: "Actúa como un especialista en ecommerce. Necesito ayuda con ecommerce. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-78",
    icon: Languages,
    title: "Comparación de productos",
    shortDesc: "Construir matrices de criterios",
    description: "La IA puede apoyar tareas de compras relacionadas con comparación de productos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con comparación de productos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["GitHub Copilot", "Cursor", "Zapier", "NotebookLM"],
    promptHint: "Actúa como un especialista en compras. Necesito ayuda con comparación de productos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-79",
    icon: Film,
    title: "Gestión de proveedores",
    shortDesc: "Preparar preguntas y resúmenes de ofertas",
    description: "La IA puede apoyar tareas de operaciones relacionadas con gestión de proveedores, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con gestión de proveedores."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Cursor", "Zapier", "NotebookLM", "ElevenLabs"],
    promptHint: "Actúa como un especialista en operaciones. Necesito ayuda con gestión de proveedores. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-80",
    icon: HeartPulse,
    title: "Mantenimiento preventivo",
    shortDesc: "Organizar procedimientos y checklists",
    description: "La IA puede apoyar tareas de operaciones relacionadas con mantenimiento preventivo, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con mantenimiento preventivo."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en operaciones. Necesito ayuda con mantenimiento preventivo. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-81",
    icon: Brain,
    title: "Logística",
    shortDesc: "Resumir incidencias y proponer preguntas de seguimiento",
    description: "La IA puede apoyar tareas de operaciones relacionadas con logística, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con logística."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en operaciones. Necesito ayuda con logística. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-82",
    icon: ShoppingCart,
    title: "Restauración de documentos",
    shortDesc: "Detectar fragmentos incompletos y ordenar información",
    description: "La IA puede apoyar tareas de documentos relacionadas con restauración de documentos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con restauración de documentos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en documentos. Necesito ayuda con restauración de documentos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-83",
    icon: PenLine,
    title: "Investigación académica",
    shortDesc: "Organizar preguntas, fuentes y notas",
    description: "La IA puede apoyar tareas de investigación relacionadas con investigación académica, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con investigación académica."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en investigación. Necesito ayuda con investigación académica. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-84",
    icon: Megaphone,
    title: "Revisión bibliográfica",
    shortDesc: "Agrupar hallazgos por tema y metodología",
    description: "La IA puede apoyar tareas de investigación relacionadas con revisión bibliográfica, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con revisión bibliográfica."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Claude", "Gemini", "Perplexity", "Microsoft Copilot"],
    promptHint: "Actúa como un especialista en investigación. Necesito ayuda con revisión bibliográfica. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-85",
    icon: Code,
    title: "Análisis de entrevistas",
    shortDesc: "Codificar respuestas por categorías",
    description: "La IA puede apoyar tareas de investigación relacionadas con análisis de entrevistas, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con análisis de entrevistas."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Gemini", "Perplexity", "Microsoft Copilot", "Notion AI"],
    promptHint: "Actúa como un especialista en investigación. Necesito ayuda con análisis de entrevistas. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-86",
    icon: GraduationCap,
    title: "Planificación de experimentos",
    shortDesc: "Definir variables, controles y criterios",
    description: "La IA puede apoyar tareas de investigación relacionadas con planificación de experimentos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con planificación de experimentos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Perplexity", "Microsoft Copilot", "Notion AI", "Mistral AI"],
    promptHint: "Actúa como un especialista en investigación. Necesito ayuda con planificación de experimentos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-87",
    icon: Stethoscope,
    title: "Visualización de datos",
    shortDesc: "Elegir gráficos según la pregunta",
    description: "La IA puede apoyar tareas de datos relacionadas con visualización de datos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con visualización de datos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Microsoft Copilot", "Notion AI", "Mistral AI", "Canva"],
    promptHint: "Actúa como un especialista en datos. Necesito ayuda con visualización de datos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-88",
    icon: Palette,
    title: "Limpieza de datasets",
    shortDesc: "Detectar valores ausentes y formatos inconsistentes",
    description: "La IA puede apoyar tareas de datos relacionadas con limpieza de datasets, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con limpieza de datasets."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Notion AI", "Mistral AI", "Canva", "Figma"],
    promptHint: "Actúa como un especialista en datos. Necesito ayuda con limpieza de datasets. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-89",
    icon: Briefcase,
    title: "Explicación de métricas",
    shortDesc: "Traducir KPIs técnicos a lenguaje sencillo",
    description: "La IA puede apoyar tareas de datos relacionadas con explicación de métricas, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con explicación de métricas."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Mistral AI", "Canva", "Figma", "GitHub Copilot"],
    promptHint: "Actúa como un especialista en datos. Necesito ayuda con explicación de métricas. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-90",
    icon: TrendingUp,
    title: "Automatización de informes",
    shortDesc: "Generar borradores a partir de datos",
    description: "La IA puede apoyar tareas de automatización relacionadas con automatización de informes, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con automatización de informes."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Canva", "Figma", "GitHub Copilot", "Cursor"],
    promptHint: "Actúa como un especialista en automatización. Necesito ayuda con automatización de informes. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-91",
    icon: Scale,
    title: "Gestión de calendario",
    shortDesc: "Reorganizar bloques según prioridades",
    description: "La IA puede apoyar tareas de productividad relacionadas con gestión de calendario, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con gestión de calendario."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Figma", "GitHub Copilot", "Cursor", "Zapier"],
    promptHint: "Actúa como un especialista en productividad. Necesito ayuda con gestión de calendario. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-92",
    icon: Languages,
    title: "Priorización",
    shortDesc: "Comparar tareas según impacto y esfuerzo",
    description: "La IA puede apoyar tareas de productividad relacionadas con priorización, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con priorización."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["GitHub Copilot", "Cursor", "Zapier", "NotebookLM"],
    promptHint: "Actúa como un especialista en productividad. Necesito ayuda con priorización. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-93",
    icon: Film,
    title: "Gestión del conocimiento",
    shortDesc: "Convertir notas dispersas en una base organizada",
    description: "La IA puede apoyar tareas de productividad relacionadas con gestión del conocimiento, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con gestión del conocimiento."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Cursor", "Zapier", "NotebookLM", "ElevenLabs"],
    promptHint: "Actúa como un especialista en productividad. Necesito ayuda con gestión del conocimiento. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-94",
    icon: HeartPulse,
    title: "FAQ de producto",
    shortDesc: "Transformar documentación en respuestas rápidas",
    description: "La IA puede apoyar tareas de soporte relacionadas con faq de producto, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con faq de producto."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en soporte. Necesito ayuda con faq de producto. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-95",
    icon: Brain,
    title: "Chat interno",
    shortDesc: "Crear respuestas basadas en documentación aprobada",
    description: "La IA puede apoyar tareas de soporte relacionadas con chat interno, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con chat interno."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en soporte. Necesito ayuda con chat interno. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-96",
    icon: ShoppingCart,
    title: "Guías de usuario",
    shortDesc: "Explicar procesos paso a paso",
    description: "La IA puede apoyar tareas de documentación relacionadas con guías de usuario, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con guías de usuario."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en documentación. Necesito ayuda con guías de usuario. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-97",
    icon: PenLine,
    title: "Microcopy de interfaces",
    shortDesc: "Mejorar textos de botones y mensajes",
    description: "La IA puede apoyar tareas de ux relacionadas con microcopy de interfaces, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con microcopy de interfaces."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity"],
    promptHint: "Actúa como un especialista en ux. Necesito ayuda con microcopy de interfaces. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-98",
    icon: Megaphone,
    title: "Mensajes de error",
    shortDesc: "Redactar errores claros y accionables",
    description: "La IA puede apoyar tareas de ux relacionadas con mensajes de error, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con mensajes de error."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Claude", "Gemini", "Perplexity", "Microsoft Copilot"],
    promptHint: "Actúa como un especialista en ux. Necesito ayuda con mensajes de error. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-99",
    icon: Code,
    title: "Pruebas de usabilidad",
    shortDesc: "Preparar tareas y preguntas para usuarios",
    description: "La IA puede apoyar tareas de ux relacionadas con pruebas de usabilidad, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con pruebas de usabilidad."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Gemini", "Perplexity", "Microsoft Copilot", "Notion AI"],
    promptHint: "Actúa como un especialista en ux. Necesito ayuda con pruebas de usabilidad. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  },
  {
    id: "uso-100",
    icon: GraduationCap,
    title: "Optimización de procesos",
    shortDesc: "Mapear pasos y detectar trabajo repetitivo",
    description: "La IA puede apoyar tareas de operaciones relacionadas con optimización de procesos, especialmente cuando hay que organizar información, generar borradores o detectar patrones. El resultado debe revisarse con el contexto y las reglas de cada actividad.",
    fields: [{"name": "Preparación", "description": "Define el objetivo, el contexto y el formato antes de pedir ayuda con optimización de procesos."}, {"name": "Generación", "description": "Crea un primer borrador o una lista de alternativas para acelerar el trabajo."}, {"name": "Revisión", "description": "Comprueba datos, tono, coherencia y requisitos antes de utilizar el resultado."}, {"name": "Mejora continua", "description": "Guarda los prompts que funcionen y ajusta las instrucciones según el resultado."}],
    tools: ["Perplexity", "Microsoft Copilot", "Notion AI", "Mistral AI"],
    promptHint: "Actúa como un especialista en operaciones. Necesito ayuda con optimización de procesos. Objetivo: [OBJETIVO]. Contexto: [CONTEXTO]. Genera un resultado práctico en [FORMATO], indica qué datos faltan y separa claramente los supuestos de los hechos."
  }
];
