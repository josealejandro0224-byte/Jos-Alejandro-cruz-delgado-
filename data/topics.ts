import { HtmlTag, TopicCategory } from '../types';

export const htmlTopics: HtmlTag[] = [
  // --- FUNDAMENTOS ---
  {
    name: '<html>',
    category: TopicCategory.BASICS,
    description: 'El elemento raíz de un documento HTML.',
    syntax: '<html lang="es">\n  ...\n</html>',
    usage: 'Es el contenedor padre absoluto de todo el documento HTML. Todo lo que no sea el DOCTYPE debe ir dentro de esta etiqueta. El atributo "lang" es crítico para la accesibilidad (lectores de pantalla) y SEO.',
    attributes: ['lang: Define el idioma del documento (ej: "es", "en").'],
    example: {
      code: `<!DOCTYPE html>
<html lang="es">
  <!-- Todo el contenido va aquí -->
</html>`,
      description: 'La estructura envolvente obligatoria.'
    }
  },
  {
    name: '<head>',
    category: TopicCategory.BASICS,
    description: 'Contenedor de metadatos e información técnica.',
    syntax: '<head>\n  ...\n</head>',
    usage: 'Contiene información que NO se muestra directamente al usuario, pero es vital para el navegador. Aquí se definen el título, enlaces a CSS, scripts de análisis y metaetiquetas.',
    example: {
      code: `<head>
  <meta charset="UTF-8">
  <title>Mi Súper Página</title>
  <link rel="stylesheet" href="styles.css">
</head>`,
      description: 'El "cerebro" invisible del documento.'
    }
  },
  {
    name: '<body>',
    category: TopicCategory.BASICS,
    description: 'El cuerpo visible del documento.',
    syntax: '<body>\n  ...\n</body>',
    usage: 'Contiene todo lo que el usuario final ve: texto, imágenes, botones, etc. Solo puede haber un <body> por documento.',
    example: {
      code: `<body>
  <h1>Hola Mundo</h1>
  <p>Aquí comienza la página visible.</p>
</body>`,
      description: 'El lienzo visual de tu sitio web.'
    }
  },

  // --- ESTRUCTURA BÁSICA ---
  {
    name: '<div>',
    category: TopicCategory.STRUCTURE,
    description: 'División o contenedor genérico.',
    syntax: '<div class="...">...</div>',
    usage: 'Es un contenedor "de bloque" sin significado semántico. Se usa principalmente para agrupar elementos y aplicarles estilos CSS o manipularlos con JavaScript. Es la herramienta principal de maquetación.',
    example: {
      code: `<div style="background: #1e293b; padding: 20px; border-radius: 8px; color: white;">
  <h3>Tarjeta de Usuario</h3>
  <p>Contenido agrupado visualmente.</p>
</div>`,
      description: 'Agrupación visual sin valor semántico.'
    }
  },
  {
    name: '<span>',
    category: TopicCategory.STRUCTURE,
    description: 'Contenedor genérico en línea.',
    syntax: '<span>...</span>',
    usage: 'Similar al <div>, pero para elementos "en línea" (inline). Se usa para aplicar estilos a una parte específica de un texto sin romper el flujo del párrafo.',
    example: {
      code: `<p>Este es un texto normal, pero <span style="color: #38bdf8; font-weight: bold;">esta parte es azul</span> gracias al span.</p>`,
      description: 'Estilizado de fragmentos de texto específicos.'
    }
  },
  {
    name: '<hr>',
    category: TopicCategory.STRUCTURE,
    description: 'Cambio temático (Línea Horizontal).',
    syntax: '<hr>',
    usage: 'Originalmente significaba "Horizontal Rule". En HTML5 representa un cambio de tema o separación de contenido (como un salto de escena en un libro).',
    example: {
      code: `<h2>Capítulo 1</h2>
<p>Texto del capítulo...</p>
<hr style="border-color: #475569; margin: 20px 0;">
<h2>Capítulo 2</h2>`,
      description: 'Separador visual y semántico.'
    }
  },

  // --- TEXTO Y FORMATO ---
  {
    name: '<h1> - <h6>',
    category: TopicCategory.TEXT,
    description: 'Encabezados de sección.',
    syntax: '<h1>Título Principal</h1>\n<h2>Subtítulo</h2>',
    usage: 'Definen la estructura jerárquica del contenido. <h1> es el más importante (solo uno por página) y <h6> el menos importante. Son vitales para el SEO y la lectura.',
    attributes: [],
    example: {
      code: `<h1>Guía de HTML</h1>
  <h2>Capítulo 1: Texto</h2>
    <h3>Encabezados</h3>
    <h3>Párrafos</h3>
  <h2>Capítulo 2: Listas</h2>`,
      description: 'Jerarquía clara de información.'
    }
  },
  {
    name: '<p>',
    category: TopicCategory.TEXT,
    description: 'Párrafo de texto.',
    syntax: '<p>Texto...</p>',
    usage: 'Representa un bloque de texto. Los navegadores añaden automáticamente un margen superior e inferior para separarlo de otros elementos.',
    example: {
      code: `<p>HTML (HyperText Markup Language) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.</p>
<p>Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos.</p>`,
      description: 'Bloques de texto separados.'
    }
  },
  {
    name: '<strong> & <em>',
    category: TopicCategory.TEXT,
    description: 'Importancia y Énfasis.',
    syntax: '<strong>Importante</strong>\n<em>Énfasis</em>',
    usage: '<strong> indica que el texto tiene "fuerte importancia" (generalmente negrita). <em> indica "énfasis" en la entonación (generalmente cursiva).',
    example: {
      code: `<p><strong>Advertencia:</strong> Por favor, <em>lea cuidadosamente</em> las instrucciones antes de continuar.</p>`,
      description: 'Semántica visual para destacar texto.'
    }
  },
  {
    name: '<blockquote>',
    category: TopicCategory.TEXT,
    description: 'Cita en bloque.',
    syntax: '<blockquote cite="...">...</blockquote>',
    usage: 'Indica que el contenido incluido es una cita de otra fuente. Generalmente se muestra con sangría.',
    attributes: ['cite: URL de la fuente de la cita.'],
    example: {
      code: `<p>Como dijo MDN:</p>
<blockquote cite="https://developer.mozilla.org" style="border-left: 4px solid #38bdf8; padding-left: 10px; color: #94a3b8;">
  HTML es la base de la web. Sin él, no tendríamos estructura.
</blockquote>`,
      description: 'Destacando una cita externa.'
    }
  },
  {
    name: '<br>',
    category: TopicCategory.TEXT,
    description: 'Salto de línea.',
    syntax: 'Texto<br>Más texto',
    usage: 'Fuerza un salto de línea dentro de un bloque de texto (como un párrafo). Útil para poemas o direcciones, pero NO debe usarse para espaciado visual (usa CSS margins para eso).',
    example: {
      code: `<p>Av. Siempre Viva 742<br>
Springfield, USA<br>
Código Postal: 12345</p>`,
      description: 'Dirección postal con saltos forzados.'
    }
  },

  // --- LISTAS ---
  {
    name: '<ul> & <li>',
    category: TopicCategory.LISTS,
    description: 'Lista desordenada.',
    syntax: '<ul>\n  <li>Item 1</li>\n</ul>',
    usage: 'Crea una lista donde el orden de los elementos no importa. Generalmente se representa con viñetas (bullet points).',
    example: {
      code: `<h3>Ingredientes:</h3>
<ul>
  <li>Harina</li>
  <li>Huevos</li>
  <li>Leche</li>
</ul>`,
      description: 'Lista clásica con "bullet points".'
    }
  },
  {
    name: '<ol> & <li>',
    category: TopicCategory.LISTS,
    description: 'Lista ordenada.',
    syntax: '<ol>\n  <li>Primero</li>\n</ol>',
    usage: 'Crea una lista donde el orden ES importante. Los elementos se numeran automáticamente (1, 2, 3...).',
    attributes: ['start: Número de inicio', 'type: Tipo de contador (1, A, a, I, i)'],
    example: {
      code: `<h3>Pasos a seguir:</h3>
<ol type="1">
  <li>Precalentar el horno.</li>
  <li>Mezclar ingredientes.</li>
  <li>Hornear por 30 mins.</li>
</ol>`,
      description: 'Instrucciones paso a paso numeradas.'
    }
  },
  {
    name: '<dl>, <dt>, <dd>',
    category: TopicCategory.LISTS,
    description: 'Lista de descripción.',
    syntax: '<dl>\n <dt>Término</dt>\n <dd>Definición</dd>\n</dl>',
    usage: 'Se usa para mostrar pares de términos y descripciones, como un glosario o metadatos (ej: clave/valor).',
    example: {
      code: `<dl>
  <dt style="color: #38bdf8; font-weight: bold;">HTML</dt>
  <dd style="margin-left: 20px; margin-bottom: 10px;">Lenguaje de Marcado de Hipertexto.</dd>
  
  <dt style="color: #38bdf8; font-weight: bold;">CSS</dt>
  <dd style="margin-left: 20px;">Hojas de Estilo en Cascada.</dd>
</dl>`,
      description: 'Glosario de términos técnicos.'
    }
  },

  // --- SEMÁNTICA MODERNA ---
  {
    name: '<header>',
    category: TopicCategory.SEMANTICS,
    description: 'Cabecera de sección o página.',
    syntax: '<header>...</header>',
    usage: 'Contiene contenido introductorio o de navegación. Puede usarse para la cabecera de todo el sitio o la cabecera de un artículo específico.',
    example: {
      code: `<article style="border: 1px solid #334155; padding: 15px; border-radius: 8px;">
  <header>
    <h2 style="margin:0;">Noticia de Última Hora</h2>
    <small style="color: #94a3b8;">Publicado hoy</small>
  </header>
  <p>Contenido de la noticia...</p>
</article>`,
      description: 'Cabecera semántica dentro de un artículo.'
    }
  },
  {
    name: '<nav>',
    category: TopicCategory.SEMANTICS,
    description: 'Sección de navegación.',
    syntax: '<nav>...</nav>',
    usage: 'Define un bloque de enlaces de navegación principales. Ayuda a los lectores de pantalla y motores de búsqueda a identificar el menú principal.',
    example: {
      code: `<nav style="background: #1e293b; padding: 10px; border-radius: 6px;">
  <a href="#" style="margin-right: 15px; color: white; text-decoration: none;">Inicio</a>
  <a href="#" style="margin-right: 15px; color: white; text-decoration: none;">Servicios</a>
  <a href="#" style="color: white; text-decoration: none;">Contacto</a>
</nav>`,
      description: 'Barra de navegación simple.'
    }
  },
  {
    name: '<main>',
    category: TopicCategory.SEMANTICS,
    description: 'Contenido principal.',
    syntax: '<main>...</main>',
    usage: 'Especifica el contenido principal y único del documento. No debe haber más de un <main> visible por página. Ayuda a los usuarios a saltar directamente al contenido importante.',
    example: {
      code: `<body>
  <header>Logotipo...</header>
  <main>
    <h1>Artículo Principal</h1>
    <p>Este es el foco de la página.</p>
  </main>
  <footer>Copyright...</footer>
</body>`,
      description: 'Estructura macro de una página.'
    }
  },
  {
    name: '<section>',
    category: TopicCategory.SEMANTICS,
    description: 'Sección temática genérica.',
    syntax: '<section>...</section>',
    usage: 'Agrupa contenido relacionado temáticamente. Generalmente, una <section> debería tener un título (h2-h6).',
    example: {
      code: `<section>
  <h2>Nuestros Servicios</h2>
  <p>Ofrecemos desarrollo web...</p>
</section>
<section>
  <h2>Testimonios</h2>
  <p>Lo que dicen los clientes...</p>
</section>`,
      description: 'Dividiendo la página en áreas lógicas.'
    }
  },
  {
    name: '<article>',
    category: TopicCategory.SEMANTICS,
    description: 'Contenido independiente.',
    syntax: '<article>...</article>',
    usage: 'Representa una composición auto-contenida que tiene sentido por sí sola (como un post de blog, un tweet, o una noticia). Debería poder distribuirse independientemente.',
    example: {
      code: `<article style="background: #334155; padding: 15px; border-radius: 8px;">
  <h3>Cómo aprender React</h3>
  <p>React es una librería...</p>
  <button>Leer más</button>
</article>`,
      description: 'Tarjeta de post de blog.'
    }
  },
  {
    name: '<aside>',
    category: TopicCategory.SEMANTICS,
    description: 'Contenido tangencial.',
    syntax: '<aside>...</aside>',
    usage: 'Define contenido relacionado indirectamente con el contenido principal. A menudo se usa como barras laterales (sidebars), cajas de publicidad o biografía del autor.',
    example: {
      code: `<div style="display: flex; gap: 20px;">
  <main style="flex: 2;">Contenido principal...</main>
  <aside style="flex: 1; background: #1e293b; padding: 10px; font-size: 0.9em;">
    <h4>Sobre el autor</h4>
    <p>Experto en HTML5.</p>
  </aside>
</div>`,
      description: 'Barra lateral junto al contenido.'
    }
  },
  {
    name: '<footer>',
    category: TopicCategory.SEMANTICS,
    description: 'Pie de página.',
    syntax: '<footer>...</footer>',
    usage: 'Define el pie de una página o sección. Suele contener derechos de autor, enlaces legales, información de contacto o mapas del sitio.',
    example: {
      code: `<footer style="text-align: center; color: #94a3b8; margin-top: 20px;">
  <p>&copy; 2024 Mi Empresa S.A.</p>
  <a href="#" style="color: inherit;">Política de Privacidad</a>
</footer>`,
      description: 'Pie de página estándar.'
    }
  },

  // --- MULTIMEDIA ---
  {
    name: '<img>',
    category: TopicCategory.MEDIA,
    description: 'Imagen incrustada.',
    syntax: '<img src="..." alt="...">',
    usage: 'Incrusta una imagen. Es un elemento vacío (sin etiqueta de cierre). El atributo "alt" es obligatorio para validación y accesibilidad.',
    attributes: ['src: Ruta de la imagen', 'alt: Texto alternativo', 'width/height: Dimensiones (evita saltos de diseño)'],
    example: {
      code: `<img src="https://picsum.photos/300/200" alt="Paisaje aleatorio" style="border-radius: 8px; border: 2px solid white;">`,
      description: 'Imagen simple con bordes.'
    }
  },
  {
    name: '<video>',
    category: TopicCategory.MEDIA,
    description: 'Reproductor de video.',
    syntax: '<video controls>...</video>',
    usage: 'Incrusta contenido de video. Permite múltiples fuentes para compatibilidad entre navegadores.',
    attributes: ['controls: Muestra botones play/pause', 'autoplay: Inicia solo', 'loop: Repite', 'muted: Sin sonido'],
    example: {
      code: `<video controls width="100%" poster="https://picsum.photos/300/150">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Tu navegador no soporta video.
</video>`,
      description: 'Reproductor de video nativo con poster.'
    }
  },
  {
    name: '<audio>',
    category: TopicCategory.MEDIA,
    description: 'Reproductor de audio.',
    syntax: '<audio controls>...</audio>',
    usage: 'Incrusta contenido de sonido. Funciona igual que la etiqueta video.',
    example: {
      code: `<p>Escucha nuestro podcast:</p>
<audio controls src="https://www.w3schools.com/html/horse.mp3" style="width: 100%;">
  Tu navegador no soporta audio.
</audio>`,
      description: 'Reproductor de audio simple.'
    }
  },
  {
    name: '<iframe>',
    category: TopicCategory.MEDIA,
    description: 'Marco en línea.',
    syntax: '<iframe src="..."></iframe>',
    usage: 'Permite incrustar otra página web (o contenido como mapas de Google y videos de YouTube) dentro de la página actual.',
    example: {
      code: `<iframe 
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15,51.5,-0.1,51.52&layer=mapnik" 
  width="100%" 
  height="200" 
  style="border:none; border-radius: 8px;">
</iframe>`,
      description: 'Incrustando un mapa externo.'
    }
  },
  {
    name: '<figure> & <figcaption>',
    category: TopicCategory.MEDIA,
    description: 'Contenido con leyenda.',
    syntax: '<figure>\n <img...>\n <figcaption>...</figcaption>\n</figure>',
    usage: 'Se usa para agrupar contenido multimedia (como imágenes o diagramas) con su título o leyenda explicativa.',
    example: {
      code: `<figure style="background: #0f172a; padding: 10px; display: inline-block; border-radius: 8px;">
  <img src="https://picsum.photos/200" alt="Arte" style="display: block;">
  <figcaption style="text-align: center; margin-top: 8px; color: #94a3b8; font-size: 0.9em;">
    Fig 1. Arte abstracto generativo.
  </figcaption>
</figure>`,
      description: 'Imagen con pie de foto semántico.'
    }
  },

  // --- FORMULARIOS ---
  {
    name: '<form>',
    category: TopicCategory.FORMS,
    description: 'Contenedor de formulario.',
    syntax: '<form action="..." method="...">...</form>',
    usage: 'Define una sección interactiva para capturar datos del usuario y enviarlos a un servidor.',
    attributes: ['action: URL destino de los datos', 'method: GET (URL) o POST (Oculto)'],
    example: {
      code: `<form>
  <!-- Los inputs van aquí -->
  <p style="color: #94a3b8; font-style: italic;">Contenedor lógico del formulario</p>
</form>`,
      description: 'La envoltura de cualquier recolección de datos.'
    }
  },
  {
    name: '<input> (Tipos comunes)',
    category: TopicCategory.FORMS,
    description: 'Entrada de datos versátil.',
    syntax: '<input type="...">',
    usage: 'El elemento de formulario más potente. Su comportamiento cambia drásticamente según el atributo "type".',
    attributes: ['type="text"', 'type="password"', 'type="email"', 'type="number"', 'type="date"', 'type="color"'],
    example: {
      code: `<div style="display: grid; gap: 10px;">
  <input type="text" placeholder="Texto normal" style="padding: 8px; border-radius: 4px; color: black;">
  <input type="color" value="#38bdf8" style="height: 40px; width: 100%;">
  <input type="range" min="0" max="100" style="width: 100%;">
  <input type="date" style="padding: 8px; border-radius: 4px; color: black;">
</div>`,
      description: 'Variedad de inputs disponibles en HTML5.'
    }
  },
  {
    name: '<label>',
    category: TopicCategory.FORMS,
    description: 'Etiqueta de campo.',
    syntax: '<label for="id">Texto</label>',
    usage: 'Asocia un texto descriptivo con un input. Es crucial para la accesibilidad. Al hacer clic en el label, el input recibe el foco.',
    example: {
      code: `<input type="checkbox" id="aceptar" style="margin-right: 8px;">
<label for="aceptar" style="cursor: pointer; user-select: none;">
  Acepto los términos y condiciones
</label>`,
      description: 'Haz clic en el texto para activar el checkbox.'
    }
  },
  {
    name: '<textarea>',
    category: TopicCategory.FORMS,
    description: 'Área de texto multilínea.',
    syntax: '<textarea>...</textarea>',
    usage: 'Permite al usuario escribir múltiples líneas de texto, como en un comentario o biografía.',
    example: {
      code: `<label style="display: block; margin-bottom: 5px;">Escribe tu mensaje:</label>
<textarea rows="4" style="width: 100%; padding: 10px; border-radius: 6px; color: black; resize: vertical;">
Hola, me gustaría saber...
</textarea>`,
      description: 'Campo para textos largos.'
    }
  },
  {
    name: '<select> & <option>',
    category: TopicCategory.FORMS,
    description: 'Menú desplegable.',
    syntax: '<select>\n <option>...</option>\n</select>',
    usage: 'Crea una lista desplegable donde el usuario puede elegir una (o varias) opciones.',
    example: {
      code: `<label>Elige tu plan:</label>
<select style="padding: 8px; border-radius: 4px; color: black; margin-left: 10px;">
  <option value="free">Gratuito</option>
  <option value="pro" selected>Profesional</option>
  <option value="ent">Empresarial</option>
</select>`,
      description: 'Selector clásico de opciones.'
    }
  },
  {
    name: '<button>',
    category: TopicCategory.FORMS,
    description: 'Botón interactivo.',
    syntax: '<button type="...">Texto</button>',
    usage: 'Elemento cliqueable. Dentro de un form, por defecto envía los datos (submit), a menos que se especifique type="button".',
    attributes: ['type="submit": Envía formulario', 'type="button": Solo acción JS', 'type="reset": Limpia formulario'],
    example: {
      code: `<button style="background: #0ea5e9; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; margin-right: 10px;">
  Enviar
</button>
<button style="background: transparent; border: 1px solid #94a3b8; color: #94a3b8; padding: 10px 20px; border-radius: 6px; cursor: pointer;">
  Cancelar
</button>`,
      description: 'Botones con estilos primarios y secundarios.'
    }
  },

  // --- TABLAS ---
  {
    name: '<table>, <tr>, <td>, <th>',
    category: TopicCategory.TABLES,
    description: 'Estructura de tablas.',
    syntax: '<table>...</table>',
    usage: 'Las tablas se construyen fila por fila (<tr>). Las celdas de encabezado son <th> (negrita y centrada) y las de datos <td>.',
    example: {
      code: `<table style="width: 100%; border: 1px solid #334155; border-collapse: collapse;">
  <tr style="background: #1e293b;">
    <th style="padding: 8px;">Nombre</th>
    <th style="padding: 8px;">Edad</th>
  </tr>
  <tr style="border-top: 1px solid #334155;">
    <td style="padding: 8px;">Ana</td>
    <td style="padding: 8px; text-align: center;">28</td>
  </tr>
  <tr style="border-top: 1px solid #334155;">
    <td style="padding: 8px;">Carlos</td>
    <td style="padding: 8px; text-align: center;">34</td>
  </tr>
</table>`,
      description: 'Tabla básica de datos.'
    }
  },

  // --- PROGRAMMING & META ---
  {
    name: '<script>',
    category: TopicCategory.PROGRAMMING,
    description: 'Script ejecutable (JavaScript).',
    syntax: '<script src="...">...</script>',
    usage: 'Se usa para incrustar código ejecutable, típicamente JavaScript, o para enlazar archivos .js externos. Es lo que da interactividad a la web.',
    example: {
      code: `<button id="btnAlert">Haz clic</button>

<script>
  document.getElementById('btnAlert').addEventListener('click', () => {
    alert('¡Hola desde JavaScript!');
  });
</script>`,
      description: 'Incrustando lógica JS directamente en HTML.'
    }
  },
  {
    name: '<link>',
    category: TopicCategory.PROGRAMMING,
    description: 'Enlace a recurso externo.',
    syntax: '<link rel="..." href="...">',
    usage: 'Se usa casi exclusivamente en el <head> para vincular hojas de estilo (CSS), favicons o fuentes.',
    example: {
      code: `<head>
  <!-- Vincula CSS -->
  <link rel="stylesheet" href="style.css">
  <!-- Icono de pestaña -->
  <link rel="icon" href="favicon.ico">
</head>`,
      description: 'Conectando el HTML con recursos externos.'
    }
  },
  {
    name: '<meta>',
    category: TopicCategory.PROGRAMMING,
    description: 'Metadatos del documento.',
    syntax: '<meta name="..." content="...">',
    usage: 'Provee información sobre el documento que no se muestra. Vital para SEO (descripción), codificación de caracteres y configuración del Viewport en móviles.',
    example: {
      code: `<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Tutorial completo de HTML">`,
      description: 'Configuraciones esenciales invisibles.'
    }
  }
];