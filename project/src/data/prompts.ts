export interface PromptTemplate {
  id: string;
  title: string;
  description: string;
  category: PromptCategory;
  prompt: string;
  tips: string[];
}

export type PromptCategory =
  | 'Escritura'
  | 'Marketing'
  | 'Programación'
  | 'Educación'
  | 'Productividad'
  | 'Negocio'
  | 'Creatividad'
  | 'Análisis';

export const promptTemplates: PromptTemplate[] = [
  {
    id: 'p1',
    title: 'Redactar un correo profesional',
    description: 'Genera un correo de trabajo con el tono y la estructura correctos.',
    category: 'Escritura',
    prompt: 'Actúa como un profesional de la comunicación. Redacta un correo electrónico para [SITUACIÓN: presentar un proyecto a mi jefe / pedir un aumento / rechazar una oferta / etc.]. El tono debe ser profesional pero cercano. El correo debe tener: un asunto claro, un saludo, una introducción breve, el cuerpo del mensaje con los puntos clave, y un cierre con llamada a la acción. Mantén el texto conciso (máximo 150 palabras).',
    tips: ['Sustituye [SITUACIÓN] por tu caso concreto', 'Puedes añadir "usa un tono más formal" o "más informal"', 'Pide varias versiones y elige la mejor'],
  },
  {
    id: 'p2',
    title: 'Crear un plan de marketing completo',
    description: 'Genera un plan de marketing estructurado para tu producto o servicio.',
    category: 'Marketing',
    prompt: 'Actúa como un director de marketing con 15 años de experiencia. Crea un plan de marketing para [PRODUCTO/SERVICIO] dirigido a [PÚBLICO OBJETIVO]. El plan debe incluir: 1) Análisis de la competencia, 2) Propuesta de valor, 3) Canales de marketing recomendados, 4) Calendario de contenidos para 3 meses, 5) KPIs para medir el éxito, 6) Presupuesto estimado. Presenta la información en formato de tabla donde sea posible.',
    tips: ['Cuanto más específico seas sobre el producto y el público, mejor', 'Pide que se enfoque en un canal concreto (Instagram, LinkedIn, etc.)', 'Solicita un calendario semana a semana'],
  },
  {
    id: 'p3',
    title: 'Depurar y explicar código',
    description: 'La IA encuentra errores en tu código y te los explica en español.',
    category: 'Programación',
    prompt: 'Actúa como un senior developer experto en [LENGUAJE]. Revisa el siguiente código y: 1) Identifica cualquier bug o error, 2) Explica qué hace cada parte del código en español, 3) Sugiere mejoras de rendimiento, 4) Reescribe el código corregido con comentarios en español. Aquí está el código:\n\n[CÓDIGO]',
    tips: ['Especifica siempre el lenguaje de programación', 'Puedes pedir que explique como si tuvieras 10 años para entenderlo mejor', 'Pide también tests para el código corregido'],
  },
  {
    id: 'p4',
    title: 'Crear un plan de estudio personalizado',
    description: 'Diseña un plan de aprendizaje adaptado a tu nivel y tiempo disponible.',
    category: 'Educación',
    prompt: 'Actúa como un tutor experto en [MATERIA]. Crea un plan de estudio para aprender [TEMA] desde cero hasta nivel intermedio. Tengo [X HORAS] disponibles a la semana y [X MESES] para alcanzar el objetivo. El plan debe incluir: 1) Objetivos semanales, 2) Recursos gratuitos recomendados, 3) Ejercicios prácticos, 4) Hitos de evaluación, 5) Consejos para mantener la motivación. Adapta el ritmo a alguien que [NIVEL ACTUAL: no tiene experiencia previa / tiene conocimientos básicos / etc.].',
    tips: ['Sé honesto sobre tu nivel actual para que el plan sea realista', 'Pide recursos en español si lo prefieres', 'Pide un plan de repaso al final'],
  },
  {
    id: 'p5',
    title: 'Resumir reuniones y extraer tareas',
    description: 'Convierte las notas de una reunión en un resumen con tareas accionables.',
    category: 'Productividad',
    prompt: 'Actúa como un asistente de proyectos. A partir de las siguientes notas de la reunión, genera: 1) Un resumen ejecutivo de 3-4 líneas, 2) Los puntos clave discutidos en formato lista, 3) Las decisiones tomadas, 4) Una tabla de tareas con: tarea, responsable y fecha límite, 5) Los temas pendientes para la próxima reunión. Notas de la reunión:\n\n[NOTAS]',
    tips: ['Funciona también con transcripciones de reuniones', 'Puedes pedir que el resumen sea más corto o más detallado', 'Pide que priorice las tareas por urgencia'],
  },
  {
    id: 'p6',
    title: 'Analizar a la competencia',
    description: 'Análisis estructurado de tus competidores con oportunidades y amenazas.',
    category: 'Negocio',
    prompt: 'Actúa como un consultor de estrategia empresarial. Realiza un análisis competitivo de [TU EMPRESA] frente a [COMPETIDOR 1, COMPETIDOR 2]. Incluye: 1) Tabla comparativa con: producto, precio, público, fortalezas, debilidades, 2) Análisis DAFO de cada competidor, 3) Oportunidades que mi empresa puede aprovechar, 4) Amenazas a las que debo prestar atención, 5) 3 recomendaciones estratégicas concretas. Basa el análisis en información pública y reciente.',
    tips: ['Proporciona tu URL y las de tus competidores para mayor contexto', 'Pide que se enfoque en un mercado geográfico concreto', 'Solicita un análisis de posicionamiento de marca'],
  },
  {
    id: 'p7',
    title: 'Generar ideas de contenido creativo',
    description: 'Lluvia de ideas estructurada para contenido original en redes sociales.',
    category: 'Creatividad',
    prompt: 'Actúa como un creador de contenido viral. Genera 15 ideas de contenido para [PLATAFORMA: Instagram / TikTok / YouTube / Blog] sobre el tema [TEMA]. Para cada idea incluye: 1) Título atractivo, 2) Formato (video, carrusel, post, etc.), 3) Gancho para captar atención en los primeros 3 segundos, 4) Estructura del contenido, 5) Llamada a la acción. Las ideas deben ser originales, no genéricas, y adaptadas al algoritmo de la plataforma.',
    tips: ['Especifica el nicho y el tono de tu marca', 'Pide que evite topicos sobreexplotados', 'Selecciona las 3 mejores y pide que las desarrolle completamente'],
  },
  {
    id: 'p8',
    title: 'Analizar datos de ventas',
    description: 'Sube tus datos y obtén conclusiones accionables en segundos.',
    category: 'Análisis',
    prompt: 'Actúa como un analista de datos de negocio. Analiza los siguientes datos de ventas y genera: 1) Un resumen de los resultados generales, 2) Las 3 tendencias más importantes, 3) Los productos más vendidos y los que no funcionan, 4) Comparativa con el periodo anterior, 5) 5 recomendaciones para aumentar las ventas, 6) Preguntas que debería hacerme como responsable de negocio. Datos:\n\n[DATOS]',
    tips: ['Puedes pegar datos de Excel o CSV directamente', 'Pide que genere gráficos si usas ChatGPT con análisis de datos', 'Solicita un pronóstico para el próximo trimestre'],
  },
  {
    id: 'p9',
    title: 'Escribir una historia o relato corto',
    description: 'Crea narrativa creativa con personajes, conflicto y resolución.',
    category: 'Creatividad',
    prompt: 'Actúa como un escritor de relatos cortos. Escribe un relato de aproximadamente 800 palabras sobre [TEMA/PREMISA]. El relato debe tener: 1) Un personaje principal con una motivación clara, 2) Un conflicto o conflicto central, 3) Un giro inesperado en la mitad, 4) Una resolución satisfactoria pero no obvia, 5) Un estilo narrativo [ESTILO: realista mágico / thriller / ciencia ficción / etc.]. Usa descripciones vívidas y diálogos naturales en español.',
    tips: ['Define el tono: oscuro, humorístico, melancólico...', 'Pide que lo adapte a un público específico (joven adulto, infantil...)', 'Puedes pedir una serie de relatos relacionados'],
  },
  {
    id: 'p10',
    title: 'Preparar una entrevista de trabajo',
    description: 'Simula una entrevista de trabajo con preguntas y feedback.',
    category: 'Productividad',
    prompt: 'Actúa como un entrevistador de recursos humanos para el puesto de [PUESTO] en [TIPO DE EMPRESA: startup / multinacional / agencia / etc.]. Realiza una entrevista simulada conmigo siguiendo estos pasos: 1) Hazme una pregunta a la vez y espera mi respuesta, 2) Después de cada respuesta, dame feedback sobre qué di bien y qué puedo mejorar, 3) Haz un total de 8 preguntas que cubran: experiencia técnica, habilidades blandas, resolución de problemas y cultura de empresa, 4) Al final, dame una valoración general y consejos para mejorar. Empieza con la primera pregunta.',
    tips: ['Especifica tu nivel de experiencia para que las preguntas se ajusten', 'Pide que sea más exigente o más relajado', 'Puedes pedir preguntas en inglés si es para un puesto internacional'],
  },
  {
    id: 'p11',
    title: 'Crear descripciones de productos que venden',
    description: 'Textos persuasivos para e-commerce optimizados para conversión.',
    category: 'Marketing',
    prompt: 'Actúa como un copywriter experto en e-commerce. Escribe 3 versiones de una descripción de producto para [PRODUCTO] dirigido a [PÚBLICO]. Cada versión debe tener: 1) Un título que capte atención, 2) Una descripción de 80-120 palabras que destaque beneficios (no solo características), 3) 5 bullets points con beneficios clave, 4) Una frase de cierre que invite a comprar, 5) Palabras clave SEO incluidas de forma natural. Las 3 versiones deben tener tonos diferentes: profesional, cercano y emocional.',
    tips: ['Incluye el precio aproximado para que el copy sea coherente', 'Pide que añada emoji si es para Instagram o una tienda informal', 'Solicita también textos para anuncios'],
  },
  {
    id: 'p12',
    title: 'Explicar un concepto complejo de forma sencilla',
    description: 'La IA traduce temas difíciles a explicaciones que cualquiera entiende.',
    category: 'Educación',
    prompt: 'Actúa como un profesor divulgador experto. Explícame [CONCEPTO COMPLEJO] de forma que pueda entenderlo alguien sin conocimientos previos. Usa: 1) Una analogía de la vida cotidiana, 2) Una explicación paso a paso en lenguaje sencillo, 3) Un ejemplo práctico, 4) Un resumen de 3 puntos clave, 5) Una respuesta a la pregunta "¿y esto para qué me sirve en el día a día?". Evita jerga técnica y si usas algún término, explícalo inmediatamente.',
    tips: ['Pide que lo explique como si tuvieras 5, 10 o 15 años para ajustar el nivel', 'Solicita una segunda analogía diferente', 'Pide ejemplos relacionados con tu profesión o interés'],
  },
  {
    "id": "p13",
    "title": "Crear una propuesta comercial",
    "description": "Prompt listo para una propuesta comercial para [CLIENTE] sobre [SERVICIO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito una propuesta comercial para [CLIENTE] sobre [SERVICIO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p14",
    "title": "Preparar una reunión con cliente",
    "description": "Prompt listo para una agenda y lista de preguntas para una reunión con [CLIENTE].",
    "category": "Productividad",
    "prompt": "Actúa como un especialista en productividad. Necesito una agenda y lista de preguntas para una reunión con [CLIENTE]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p15",
    "title": "Convertir notas en tareas",
    "description": "Prompt listo para un listado priorizado de tareas a partir de [NOTAS].",
    "category": "Productividad",
    "prompt": "Actúa como un especialista en productividad. Necesito un listado priorizado de tareas a partir de [NOTAS]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p16",
    "title": "Crear una FAQ de producto",
    "description": "Prompt listo para una sección de preguntas frecuentes para [PRODUCTO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito una sección de preguntas frecuentes para [PRODUCTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p17",
    "title": "Escribir una landing page",
    "description": "Prompt listo para el texto de una landing page para [PRODUCTO].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito el texto de una landing page para [PRODUCTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p18",
    "title": "Crear anuncios con variantes",
    "description": "Prompt listo para cinco variantes de anuncios para [PRODUCTO].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito cinco variantes de anuncios para [PRODUCTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p19",
    "title": "Crear un calendario de contenidos",
    "description": "Prompt listo para un calendario de contenidos de 30 días para [MARCA].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito un calendario de contenidos de 30 días para [MARCA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p20",
    "title": "Definir voz de marca",
    "description": "Prompt listo para una guía de tono de voz para [MARCA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito una guía de tono de voz para [MARCA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p21",
    "title": "Generar nombres de marca",
    "description": "Prompt listo para 20 nombres para una marca de [SECTOR].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito 20 nombres para una marca de [SECTOR]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p22",
    "title": "Crear un briefing de diseño",
    "description": "Prompt listo para un briefing para diseñar [PIEZA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito un briefing para diseñar [PIEZA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p23",
    "title": "Crear un guion de YouTube",
    "description": "Prompt listo para un guion de vídeo sobre [TEMA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito un guion de vídeo sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p24",
    "title": "Crear un guion para Reels",
    "description": "Prompt listo para un guion de 45 segundos sobre [TEMA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito un guion de 45 segundos sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p25",
    "title": "Convertir artículo en vídeo",
    "description": "Prompt listo para un guion de vídeo a partir de [ARTÍCULO].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito un guion de vídeo a partir de [ARTÍCULO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p26",
    "title": "Preparar una entrevista de trabajo",
    "description": "Prompt listo para una simulación de entrevista para [PUESTO].",
    "category": "Educación",
    "prompt": "Actúa como un especialista en educación. Necesito una simulación de entrevista para [PUESTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p27",
    "title": "Crear preguntas de examen",
    "description": "Prompt listo para un examen de [MATERIA] con distintos niveles.",
    "category": "Educación",
    "prompt": "Actúa como un especialista en educación. Necesito un examen de [MATERIA] con distintos niveles. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p28",
    "title": "Explicar un concepto difícil",
    "description": "Prompt listo para una explicación sencilla de [CONCEPTO].",
    "category": "Educación",
    "prompt": "Actúa como un especialista en educación. Necesito una explicación sencilla de [CONCEPTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p29",
    "title": "Crear flashcards",
    "description": "Prompt listo para tarjetas de estudio sobre [TEMA].",
    "category": "Educación",
    "prompt": "Actúa como un especialista en educación. Necesito tarjetas de estudio sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p30",
    "title": "Diseñar un plan de estudio",
    "description": "Prompt listo para un plan de estudio de [TEMA] para [TIEMPO].",
    "category": "Educación",
    "prompt": "Actúa como un especialista en educación. Necesito un plan de estudio de [TEMA] para [TIEMPO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p31",
    "title": "Practicar un idioma",
    "description": "Prompt listo para una conversación guiada en [IDIOMA].",
    "category": "Educación",
    "prompt": "Actúa como un especialista en educación. Necesito una conversación guiada en [IDIOMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p32",
    "title": "Crear ejercicios progresivos",
    "description": "Prompt listo para ejercicios de [MATERIA] que aumenten de dificultad.",
    "category": "Educación",
    "prompt": "Actúa como un especialista en educación. Necesito ejercicios de [MATERIA] que aumenten de dificultad. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p33",
    "title": "Revisar código",
    "description": "Prompt listo para una revisión técnica de [CÓDIGO].",
    "category": "Programación",
    "prompt": "Actúa como un especialista en programación. Necesito una revisión técnica de [CÓDIGO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p34",
    "title": "Generar tests",
    "description": "Prompt listo para tests automatizados para [CÓDIGO].",
    "category": "Programación",
    "prompt": "Actúa como un especialista en programación. Necesito tests automatizados para [CÓDIGO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p35",
    "title": "Documentar una API",
    "description": "Prompt listo para documentación para el endpoint [ENDPOINT].",
    "category": "Programación",
    "prompt": "Actúa como un especialista en programación. Necesito documentación para el endpoint [ENDPOINT]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p36",
    "title": "Explicar un error",
    "description": "Prompt listo para una explicación del error [ERROR] en [LENGUAJE].",
    "category": "Programación",
    "prompt": "Actúa como un especialista en programación. Necesito una explicación del error [ERROR] en [LENGUAJE]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p37",
    "title": "Refactorizar código",
    "description": "Prompt listo para una refactorización de [CÓDIGO].",
    "category": "Programación",
    "prompt": "Actúa como un especialista en programación. Necesito una refactorización de [CÓDIGO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p38",
    "title": "Crear una consulta SQL",
    "description": "Prompt listo para una consulta SQL para [OBJETIVO].",
    "category": "Programación",
    "prompt": "Actúa como un especialista en programación. Necesito una consulta SQL para [OBJETIVO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p39",
    "title": "Diseñar un esquema de base de datos",
    "description": "Prompt listo para un esquema de datos para [PROYECTO].",
    "category": "Programación",
    "prompt": "Actúa como un especialista en programación. Necesito un esquema de datos para [PROYECTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p40",
    "title": "Crear una arquitectura web",
    "description": "Prompt listo para una arquitectura para [APLICACIÓN].",
    "category": "Programación",
    "prompt": "Actúa como un especialista en programación. Necesito una arquitectura para [APLICACIÓN]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p41",
    "title": "Auditar accesibilidad",
    "description": "Prompt listo para una auditoría de accesibilidad de [PÁGINA].",
    "category": "Programación",
    "prompt": "Actúa como un especialista en programación. Necesito una auditoría de accesibilidad de [PÁGINA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p42",
    "title": "Analizar una hoja de cálculo",
    "description": "Prompt listo para los datos del archivo [ARCHIVO].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito los datos del archivo [ARCHIVO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p43",
    "title": "Limpiar datos",
    "description": "Prompt listo para un procedimiento para limpiar [DATASET].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito un procedimiento para limpiar [DATASET]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p44",
    "title": "Elegir visualizaciones",
    "description": "Prompt listo para gráficos adecuados para [DATOS].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito gráficos adecuados para [DATOS]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p45",
    "title": "Crear un informe ejecutivo",
    "description": "Prompt listo para un informe ejecutivo a partir de [DATOS].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito un informe ejecutivo a partir de [DATOS]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p46",
    "title": "Analizar comentarios",
    "description": "Prompt listo para comentarios de clientes sobre [PRODUCTO].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito comentarios de clientes sobre [PRODUCTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p47",
    "title": "Comparar competidores",
    "description": "Prompt listo para una comparación de [EMPRESA] con [COMPETIDORES].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito una comparación de [EMPRESA] con [COMPETIDORES]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p48",
    "title": "Analizar una encuesta",
    "description": "Prompt listo para las respuestas de una encuesta sobre [TEMA].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito las respuestas de una encuesta sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p49",
    "title": "Crear un DAFO",
    "description": "Prompt listo para un análisis DAFO de [EMPRESA].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito un análisis DAFO de [EMPRESA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p50",
    "title": "Detectar riesgos",
    "description": "Prompt listo para riesgos potenciales en [PROYECTO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito riesgos potenciales en [PROYECTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p51",
    "title": "Crear un plan de acción",
    "description": "Prompt listo para un plan de acción para [OBJETIVO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito un plan de acción para [OBJETIVO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p52",
    "title": "Preparar un presupuesto",
    "description": "Prompt listo para un presupuesto para [PROYECTO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito un presupuesto para [PROYECTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p53",
    "title": "Crear una matriz de prioridades",
    "description": "Prompt listo para una matriz de prioridades para [TAREAS].",
    "category": "Productividad",
    "prompt": "Actúa como un especialista en productividad. Necesito una matriz de prioridades para [TAREAS]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p54",
    "title": "Planificar la semana",
    "description": "Prompt listo para una planificación semanal a partir de [TAREAS].",
    "category": "Productividad",
    "prompt": "Actúa como un especialista en productividad. Necesito una planificación semanal a partir de [TAREAS]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p55",
    "title": "Resumir un PDF",
    "description": "Prompt listo para un resumen estructurado del documento [PDF].",
    "category": "Productividad",
    "prompt": "Actúa como un especialista en productividad. Necesito un resumen estructurado del documento [PDF]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p56",
    "title": "Extraer decisiones de una reunión",
    "description": "Prompt listo para las decisiones y responsables de [REUNIÓN].",
    "category": "Productividad",
    "prompt": "Actúa como un especialista en productividad. Necesito las decisiones y responsables de [REUNIÓN]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p57",
    "title": "Crear un SOP",
    "description": "Prompt listo para un procedimiento operativo estándar para [PROCESO].",
    "category": "Productividad",
    "prompt": "Actúa como un especialista en productividad. Necesito un procedimiento operativo estándar para [PROCESO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p58",
    "title": "Organizar notas",
    "description": "Prompt listo para notas dispersas sobre [TEMA].",
    "category": "Productividad",
    "prompt": "Actúa como un especialista en productividad. Necesito notas dispersas sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p59",
    "title": "Crear una checklist",
    "description": "Prompt listo para una checklist para [PROCESO].",
    "category": "Productividad",
    "prompt": "Actúa como un especialista en productividad. Necesito una checklist para [PROCESO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p60",
    "title": "Preparar un email delicado",
    "description": "Prompt listo para un correo sobre [SITUACIÓN].",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito un correo sobre [SITUACIÓN]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p61",
    "title": "Mejorar un texto",
    "description": "Prompt listo para una versión más clara de [TEXTO].",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito una versión más clara de [TEXTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p62",
    "title": "Adaptar el tono",
    "description": "Prompt listo para varias versiones de [TEXTO] con distintos tonos.",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito varias versiones de [TEXTO] con distintos tonos. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p63",
    "title": "Traducir con contexto",
    "description": "Prompt listo para la traducción de [TEXTO] a [IDIOMA].",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito la traducción de [TEXTO] a [IDIOMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p64",
    "title": "Resumir para dirección",
    "description": "Prompt listo para un resumen ejecutivo de [DOCUMENTO].",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito un resumen ejecutivo de [DOCUMENTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p65",
    "title": "Crear un comunicado",
    "description": "Prompt listo para un comunicado sobre [TEMA].",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito un comunicado sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p66",
    "title": "Convertir entrevista en artículo",
    "description": "Prompt listo para un artículo a partir de [ENTREVISTA].",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito un artículo a partir de [ENTREVISTA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p67",
    "title": "Crear una descripción de puesto",
    "description": "Prompt listo para una oferta de empleo para [PUESTO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito una oferta de empleo para [PUESTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p68",
    "title": "Preparar onboarding",
    "description": "Prompt listo para un plan de incorporación para [ROL].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito un plan de incorporación para [ROL]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p69",
    "title": "Crear preguntas de entrevista",
    "description": "Prompt listo para preguntas estructuradas para [PUESTO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito preguntas estructuradas para [PUESTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p70",
    "title": "Crear un manual interno",
    "description": "Prompt listo para un manual para [PROCESO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito un manual para [PROCESO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p71",
    "title": "Preparar una propuesta de servicio",
    "description": "Prompt listo para una propuesta para [CLIENTE].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito una propuesta para [CLIENTE]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p72",
    "title": "Analizar requisitos",
    "description": "Prompt listo para los requisitos de [PROYECTO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito los requisitos de [PROYECTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p73",
    "title": "Crear un roadmap",
    "description": "Prompt listo para un roadmap de [PRODUCTO].",
    "category": "Negocio",
    "prompt": "Actúa como un especialista en negocio. Necesito un roadmap de [PRODUCTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p74",
    "title": "Generar ideas de producto",
    "description": "Prompt listo para ideas de productos para [PÚBLICO].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito ideas de productos para [PÚBLICO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p75",
    "title": "Lluvia de ideas estructurada",
    "description": "Prompt listo para ideas sobre [RETO] agrupadas por categorías.",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito ideas sobre [RETO] agrupadas por categorías. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p76",
    "title": "Crear personajes",
    "description": "Prompt listo para personajes para una historia sobre [TEMA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito personajes para una historia sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p77",
    "title": "Desarrollar una historia",
    "description": "Prompt listo para una historia corta sobre [IDEA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito una historia corta sobre [IDEA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p78",
    "title": "Crear slogans",
    "description": "Prompt listo para slogans para [MARCA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito slogans para [MARCA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p79",
    "title": "Crear conceptos visuales",
    "description": "Prompt listo para conceptos visuales para [CAMPAÑA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito conceptos visuales para [CAMPAÑA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p80",
    "title": "Crear prompts para imágenes",
    "description": "Prompt listo para prompts para generar imágenes de [ESCENA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito prompts para generar imágenes de [ESCENA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p81",
    "title": "Preparar un podcast",
    "description": "Prompt listo para la estructura de un episodio sobre [TEMA].",
    "category": "Creatividad",
    "prompt": "Actúa como un especialista en creatividad. Necesito la estructura de un episodio sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p82",
    "title": "Crear una estrategia SEO",
    "description": "Prompt listo para una estrategia SEO para [WEB].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito una estrategia SEO para [WEB]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p83",
    "title": "Agrupar palabras clave",
    "description": "Prompt listo para una agrupación de keywords para [SECTOR].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito una agrupación de keywords para [SECTOR]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p84",
    "title": "Crear metadescripciones",
    "description": "Prompt listo para metadescripciones para [PÁGINAS].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito metadescripciones para [PÁGINAS]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p85",
    "title": "Optimizar una ficha de producto",
    "description": "Prompt listo para una ficha de producto para [PRODUCTO].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito una ficha de producto para [PRODUCTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p86",
    "title": "Crear emails de bienvenida",
    "description": "Prompt listo para una secuencia de bienvenida para [MARCA].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito una secuencia de bienvenida para [MARCA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p87",
    "title": "Crear una newsletter",
    "description": "Prompt listo para una newsletter sobre [TEMA].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito una newsletter sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p88",
    "title": "Crear un plan de lanzamiento",
    "description": "Prompt listo para un plan de lanzamiento para [PRODUCTO].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito un plan de lanzamiento para [PRODUCTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p89",
    "title": "Analizar una landing",
    "description": "Prompt listo para una revisión de [URL/TEXTO].",
    "category": "Marketing",
    "prompt": "Actúa como un especialista en marketing. Necesito una revisión de [URL/TEXTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p90",
    "title": "Diseñar una encuesta",
    "description": "Prompt listo para una encuesta para conocer [OBJETIVO].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito una encuesta para conocer [OBJETIVO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p91",
    "title": "Preparar una investigación",
    "description": "Prompt listo para un plan de investigación sobre [TEMA].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito un plan de investigación sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p92",
    "title": "Sintetizar fuentes",
    "description": "Prompt listo para una síntesis de [FUENTES].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito una síntesis de [FUENTES]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p93",
    "title": "Crear preguntas de investigación",
    "description": "Prompt listo para preguntas de investigación sobre [TEMA].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito preguntas de investigación sobre [TEMA]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p94",
    "title": "Codificar entrevistas",
    "description": "Prompt listo para categorías para analizar [ENTREVISTAS].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito categorías para analizar [ENTREVISTAS]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p95",
    "title": "Preparar un experimento",
    "description": "Prompt listo para un diseño experimental para [HIPÓTESIS].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito un diseño experimental para [HIPÓTESIS]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p96",
    "title": "Crear un cuadro de mando",
    "description": "Prompt listo para un dashboard conceptual para [NEGOCIO].",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito un dashboard conceptual para [NEGOCIO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p97",
    "title": "Explicar métricas",
    "description": "Prompt listo para una explicación de [KPIS] para un público no técnico.",
    "category": "Análisis",
    "prompt": "Actúa como un especialista en análisis. Necesito una explicación de [KPIS] para un público no técnico. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p98",
    "title": "Crear una guía de usuario",
    "description": "Prompt listo para una guía de usuario para [PRODUCTO].",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito una guía de usuario para [PRODUCTO]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p99",
    "title": "Crear mensajes de error",
    "description": "Prompt listo para mensajes de error claros para [APP].",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito mensajes de error claros para [APP]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  },
  {
    "id": "p100",
    "title": "Mejorar microcopy",
    "description": "Prompt listo para microcopys para [INTERFAZ].",
    "category": "Escritura",
    "prompt": "Actúa como un especialista en escritura. Necesito microcopys para [INTERFAZ]. Antes de escribir, identifica los datos que faltan y, si faltan, usa marcadores entre corchetes. Entrega el resultado con una estructura clara, lenguaje natural y criterios verificables. No inventes datos que no aparezcan en el contexto. Si haces suposiciones, sepáralas al final.",
    "tips": [
      "Sustituye los campos entre corchetes por información concreta.",
      "Indica quién utilizará el resultado y qué nivel de detalle necesita.",
      "Pide una segunda versión si quieres comparar enfoques."
    ]
  }
];
