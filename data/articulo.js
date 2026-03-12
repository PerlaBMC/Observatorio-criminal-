export const articulos = [
  {
    metadata: {
      id: "art-001",
      slug: "perfilacion-criminal",
      titulo: "Perfilación criminal en México",
      categoria: {
        principal: "investigacion-criminologica",
        label: "Investigación criminológica"
      },
      etiquetas: [
        "criminología",
        "perfilación criminal",
        "análisis conductual",
        "violencia",
        "asesinos en seria"
      ],
      fechaPublicacion: "2026-01-01",
      autor: "Perla Mondragón",
      tiempoLectura: 10 ,
      estado: "publicado"
    },

    clasificacion: {
      area: "Delincuencia en México",
      subarea: "Análisis conductual",
      nivel: "Divulgativo",
      region: "México"
    },

    seo: {
      metaTitle: "Perfilación criminal en México: qué es y cómo se aplica",
      metaDescription:
        "Análisis criminológico sobre la perfilación criminal en México, sus alcances reales, limitaciones y aplicación práctica."
    },

    media: {
      imagenPrincipal: "https://res.cloudinary.com/dujrua0vo/image/upload/v1768103773/KKILLER_zyuzhs.png",
      banner: "https://res.cloudinary.com/dujrua0vo/image/upload/v1773277186/BannerArtPage_1_fdmzgb.png",
      altImagen: "Ilustración conceptual de perfilación criminal"
    },

    resumen:
      "La perfilación criminal revela cómo los patrones de comportamiento, el modus operandi y el contexto social ayudan a entender al agresor",

    contenido: [
      {
        tipo: "subtitulo",
        variante: "introduccion",
        texto: "La perfilación criminal en México: entre la herramienta científica y las carencias estructurales"
      },
      {
        tipo: "parrafo",
        texto: "La perfilación criminal es una de las herramientas más fascinantes —y a la vez más malinterpretadas— dentro del campo de la criminología aplicada. Mientras la cultura popular la presenta como un ejercicio casi intuitivo, capaz de revelar en minutos la identidad de un asesino, la realidad es muy distinta. En la práctica, la perfilación es un proceso técnico, gradual y profundamente dependiente de la calidad de la investigación inicial. Cuando falla la recolección de indicios o se fragmenta la información institucional, el perfil pierde fuerza. Y en México, ahí radica uno de los principales problemas."
      },
      {
        tipo: "subtitulo",
        texto: "¿Qué es realmente un perfil criminal?"
      },
      {
        tipo: "parrafo",
        texto: "Un perfil criminal es una inferencia científica sobre las características probables de un autor desconocido, construida a partir del análisis sistemático del comportamiento delictivo, la escena del crimen, el contexto y la información victimal. No se trata de adivinar quién cometió el delito, sino de delimitar hipótesis que reduzcan el margen de búsqueda y orienten decisiones estratégicas."
      },
      {
        tipo: "parrafo",
        texto: "El perfil no ofrece nombres propios; ofrece patrones. Describe rangos de edad probables, niveles de organización, posibles antecedentes, zonas geográficas de confort, habilidades sociales, control emocional, escalamiento de violencia y, en ocasiones, características físicas inferidas a partir de la dinámica del hecho. Es una herramienta de orientación, no una sentencia."
      },
      {
        tipo: "parrafo",
        texto: "Sin embargo, para que el perfil tenga valor, debe partir de datos sólidos. Y aquí emerge una primera debilidad estructural en el contexto mexicano: la calidad desigual en la integración de carpetas de investigación."
      },
      {
        tipo: "subtitulo",
        texto: "Los insumos: cuando el dato es la base de todo"
      },
      {
        tipo: "parrafo",
        texto: "La perfilación depende de la información primaria recabada por policías y peritos. Informes policiales mal elaborados, escenas contaminadas o testimonios no sistematizados generan vacíos que distorsionan cualquier inferencia posterior."
      },
      {
        tipo: "parrafo",
        texto: "Dos pilares fundamentales son los informes de investigación y la perfilación victimal. El primero permite reconstruir qué ocurrió y cómo se comportó el agresor; el segundo busca entender por qué la víctima fue elegida. En delitos seriales, la repetición de ciertos rasgos en las víctimas —edad, ocupación, rutinas, nivel de vulnerabilidad— puede indicar una preferencia específica o una motivación simbólica."
      }, 
      {
        tipo: "parrafo",
        texto: "Cuando estos datos no se concentran en una base unificada, los casos tienden a investigarse de forma aislada. Esa fragmentación ha sido uno de los mayores obstáculos para detectar serialidad en México."
      },
      {
        tipo: "subtitulo",
        texto: "El requisito de la repetición: por qué un solo caso no basta"
      },
      {
        tipo: "parrafo",
        texto: "La perfilación criminal con rigor científico no se aplica sobre un único hecho aislado. El sesgo cognitivo es demasiado alto. Para identificar patrones conductuales se requiere repetición, generalmente al menos tres eventos con similitudes relevantes."
      },
      {
        tipo: "parrafo",
        texto: "Sólo entonces pueden compararse elementos como:"
      },
      {
        tipo: "lista",
        items: ["Modus operandi", "Firma o sello personal","Selección victimal", "Geografía de actuación"]
      },
      {
        tipo: "parrafo",
        texto: "La ausencia de sistemas interconectados entre fiscalías estatales complica esta tarea. Si un agresor opera en distintos municipios o estados, la falta de intercambio ágil de información puede impedir que los patrones se detecten oportunamente."
      },
      {
        tipo: "subtitulo",
        texto: "El Método V.E.R.A.: una estructura para ordenar el caos"
      },
      {
        tipo: "parrafo",
        texto: "Uno de los modelos estructurados para la elaboración de perfiles es el Método V.E.R.A., atribuido a Juan Enrique Soto Castro. Este método organiza el análisis en cuatro ejes interdependientes: Víctima, Escena, Reconstrucción y Autor."
      },
      {
        tipo: "parrafo",
        texto: "El estudio de la víctima no busca culpabilizarla, sino comprender su contexto, sus rutinas y los factores que facilitaron su selección. Este análisis permite distinguir entre delitos oportunistas y delitos dirigidos."
      },
      {
        tipo: "parrafo",
        texto: "La escena del delito se examina desde una perspectiva espacio-temporal. No se trata únicamente del lugar donde se consumó el hecho, sino también del punto de abordaje, las posibles escenas de transición y el lugar de abandono. Cada espacio elegido responde a una lógica del agresor. Comprenderla es fundamental."
      },
      {
        tipo: "parrafo",
        texto: "La reconstrucción del delito recorre el iter criminis completo, ordenando cronológicamente la interacción entre autor y víctima. Aquí se identifican elementos como el nivel de planificación, la improvisación, el control, la violencia instrumental o expresiva."
      },
      {
        tipo: "parrafo",
        texto: "Finalmente, la inferencia sobre el autor integra todos los datos anteriores para formular hipótesis coherentes sobre su perfil conductual. Este proceso exige método científico: formular hipótesis, contrastarlas con evidencia y modificarlas cuando nuevos datos emergen."
      }, 
      {
        tipo: "subtitulo",
        texto: "Perfilación criminal en México: marco institucional y realidad operativa"
      },
      {
        tipo: "parrafo",
        texto: "En México, la perfilación podría desarrollarse dentro de instituciones como la Fiscalía General de la República y las fiscalías estatales, bajo la conducción del Ministerio Público. Asimismo, la Secretaría de Seguridad y Protección Ciudadana establece lineamientos generales para la coordinación en materia de seguridad."
      },
      {
        tipo: "parrafo",
        texto: "En teoría, las policías de investigación recaban evidencia, entrevistan testigos, analizan inteligencia y protegen escenas del crimen bajo protocolos técnicos. En la práctica, existen desafíos persistentes: sobrecarga de trabajo, déficit de personal especializado, falta de capacitación continua en análisis conductual y escasa integración de bases de datos criminales interoperables."
      },
      {
        tipo: "parrafo",
        texto: "La perfilación criminal no fracasa por la técnica en sí, sino por la debilidad en los cimientos institucionales que deberían sostenerla."
      },
      {
        tipo: "subtitulo",
        texto: "Casos emblemáticos y lecciones aprendidas"
      },
      {
        tipo: "parrafo",
        texto: "El caso de Juana Barraza, conocida como “La Mataviejitas”, evidenció cómo la investigación fragmentada puede retrasar el reconocimiento de la serialidad. Durante años, los homicidios de mujeres adultas mayores fueron tratados como eventos aislados. El sesgo inicial asumió que el agresor debía ser hombre, lo que desvió líneas de investigación. Solo cuando el patrón victimal fue imposible de ignorar se consolidó la hipótesis de un agresor serial."
      },
      {
        tipo: "parrafo",
        texto: "Por otro lado, César Armando Librado Legorreta, “El Coqueto”, operaba bajo un modus operandi repetitivo como conductor de transporte público. Las víctimas compartían características demográficas y los ataques ocurrían en horarios estratégicos. Aquí el patrón fue más evidente, pero nuevamente la detección no fue inmediata."
      },
      {
        tipo: "parrafo",
        texto: "Estos casos muestran que la perfilación no es una herramienta extraordinaria, sino una necesidad metodológica que debe activarse tempranamente cuando existen indicios de repetición."
      },
      {
        tipo: "subtitulo",
        texto: "Más allá del mito televisivo"
      },
      {
        tipo: "parrafo",
        texto: "Series como Criminal Minds han instalado la idea de que el perfilador resuelve casos con intuiciones brillantes. En la realidad, la perfilación es un trabajo interdisciplinario que depende de:"
      },
      {
        tipo: "lista",
        items: ["Evidencia forense sólida", "Coordinación interinstitucional", "Análisis estadístico", "Bases de datos confiables"] 
      },
      {
        tipo: "parrafo",
        texto: "No sustituye la genética forense, la balística, la dactiloscopía ni la georreferenciación; se complementa con ellas. La criminalística valida o refuta las hipótesis conductuales."
      },
      {
        tipo: "subtitulo",
        texto: "El verdadero potencial: prevención y política pública"
      },
      {
        tipo: "parrafo",
        texto: "Más allá de la captura de un agresor, la perfilación tiene un potencial preventivo. Identificar zonas de riesgo, horarios críticos y poblaciones vulnerables permite diseñar estrategias focalizadas. Cuando el análisis conductual se integra a la inteligencia criminal, puede contribuir a reducir la victimización reiterada."
      },
      {
        tipo: "parrafo",
        texto: "Sin embargo, mientras persistan problemas estructurales como la impunidad elevada, la fragmentación institucional y la insuficiente profesionalización en análisis conductual, la perfilación criminal seguirá siendo una herramienta subutilizada."
      },
      {
        tipo: "parrafo",
        texto: "La perfilación no es magia ni espectáculo. Es ciencia aplicada a la conducta humana en su expresión más violenta. Su eficacia no depende de mentes brillantes aisladas, sino de sistemas sólidos, coordinados y comprometidos con la verdad. En un país donde la confianza en la impartición de justicia enfrenta cuestionamientos constantes, fortalecer herramientas como esta no es un lujo académico: es una necesidad estructural."
      }

    ],

    referencias: [
      {
        autor: "Ressler, Robert",
        titulo: "Whoever Fights Monsters",
        año: 1992,
        fuente: "Libro",
        url: ""
      }
    ],

    notas: [
      {
        id: 1,
        texto: "En México no existe un protocolo único nacional."
      }
    ]
  }
];
