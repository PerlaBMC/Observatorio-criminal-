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
  },
  {
    metadata: {
      id: "art-002",
      slug: "criminologia-en-mexico",
      titulo: "La criminología en México: funciones, alcances y retos",
      categoria: {
        principal: "investigacion-criminologica",
        label: "Investigación criminológica"
      },
      etiquetas: [
        "criminología",
        "criminologos en méxico",
        "análisis conductual",
        "violencia",
        "sistema penitenciario",
        "política criminal"
      ],
      fechaPublicacion: "2026-03-23",
      autor: "Perla Mondragón",
      tiempoLectura: 13 ,
      estado: "publicado"
    },

    clasificacion: {
      area: "Delincuencia en México",
      subarea: "Análisis conductual",
      nivel: "Divulgativo",
      region: "México"
    },

    seo: {
      metaTitle: "La criminología en México: funciones, alcances y retos actuales",
      metaDescription:
        "La función de criminólogo en México, qué hace, donde se desempeña, cuales son los retos para la materia."
    },

    media: {
      imagenPrincipal: "https://res.cloudinary.com/dujrua0vo/image/upload/v1769187955/KKILLER_1_hn4wbn.png",
      banner: "https://res.cloudinary.com/dujrua0vo/image/upload/v1774314149/BannerArtPage_2_yaz5a5.png",
      altImagen: "Ilustración conceptual de la criminología en México"
    },

    resumen:
      "En México, entender la violencia no es opcional: la criminología se enfrenta al reto de descifrar sus raíces para transformar el rumbo del país",

    contenido: [
      {
        tipo: "subtitulo",
        variante: "introduccion",
        texto: "El reto de comprender la violencia en México: claves criminológicas para entender sus causas y transformar su impacto"
      },
      {
        tipo: "parrafo",
        texto: "La criminología es una ciencia social de carácter multidisciplinario que estudia el fenómeno delictivo de manera integral, abarcando no solo el delito y a quien lo comete, sino también a la víctima, los contextos en los que ocurre y los mecanismos de control social que buscan contenerlo. Su enfoque trasciende la visión punitiva tradicional, ya que no se limita a analizar el castigo, sino que se centra en comprender las causas, dinámicas y consecuencias de la conducta criminal."
      },
      {
        tipo: "parrafo",
        texto: "En este sentido, su objetivo principal no radica únicamente en sancionar, sino en explicar por qué ocurren los delitos, identificar los factores de riesgo que los propician y, a partir de ello, diseñar estrategias de prevención e intervención que resulten efectivas y sostenibles en el tiempo. Esta perspectiva permite transitar de respuestas reactivas hacia modelos preventivos basados en evidencia, donde el conocimiento científico orienta la acción pública."
      },
      {
        tipo: "parrafo",
        texto: "En México, la criminología desempeña un papel clave para entender la complejidad del fenómeno delictivo y el impacto de la violencia en distintos niveles de la vida social. Más allá del análisis del crimen en sí, esta disciplina examina de forma articulada las causas sociales, económicas, psicológicas e institucionales que lo originan y lo reproducen. Esto incluye factores como la desigualdad, la descomposición del tejido social, la impunidad, la debilidad institucional y la presencia de estructuras criminales organizadas."
      },
      {
        tipo: "parrafo",
        texto: "En un contexto marcado por la delincuencia organizada, las brechas de desigualdad y diversas formas de violencia estructural, la criminología se consolida como una herramienta indispensable para la toma de decisiones informadas. Su aportación permite diseñar políticas públicas más eficaces, fortalecer los sistemas de seguridad y justicia, y orientar intervenciones que no solo atiendan las consecuencias del delito, sino que incidan directamente en sus causas, contribuyendo así a una reducción real y sostenida de la criminalidad."
      },
      {
        tipo: "subtitulo",
        texto: "Funciones actuales de la criminología en México"
      },
      {
        tipo: "parrafo",
        texto: "En la práctica profesional, el criminólogo en México desempeña funciones sustantivas en diversos ámbitos del sistema de justicia y seguridad, consolidándose como un perfil técnico indispensable para la toma de decisiones informadas. Entre sus principales atribuciones destacan el análisis de conductas delictivas, la evaluación de riesgos procesales, la elaboración de diagnósticos criminológicos y la participación en el diseño e implementación de estrategias de prevención del delito. Su intervención permite incorporar criterios científicos y metodológicos en procesos que, de otro modo, podrían depender exclusivamente de valoraciones jurídicas o discrecionales."
      },
      {
        tipo: "parrafo",
        texto: "Una de sus funciones más relevantes se vincula con la evaluación de riesgos procesales, entendida como un procedimiento técnico-administrativo orientado a estimar la probabilidad de que una persona imputada se sustraiga de la acción de la justicia, obstaculice el desarrollo de la investigación o represente un riesgo para la víctima durante el proceso penal. Este análisis cobra especial importancia en el marco del sistema penal acusatorio, donde la imposición de medidas cautelares debe responder a criterios de necesidad, proporcionalidad y respeto a los derechos humanos."
      },
      {
        tipo: "parrafo",
        texto: "De conformidad con el artículo 168 del Código Nacional de Procedimientos Penales, la autoridad debe considerar diversos indicadores para determinar el riesgo de sustracción, elemento clave para decidir la procedencia de medidas cautelares como la prisión preventiva. En este contexto, el criminólogo evalúa factores como el arraigo domiciliario, familiar y social, la estabilidad laboral, el entorno comunitario, así como la capacidad real de la persona para abandonar su lugar de residencia o permanecer oculta. Este análisis no solo se limita a la identificación de riesgos, sino que también permite proponer alternativas viables a la privación de la libertad."
      }, 
      {
        tipo: "parrafo",
        texto: "Cuando se determina que el imputado no presenta un riesgo significativo de sustracción ni constituye una amenaza para la víctima o la sociedad, es posible optar por medidas cautelares distintas a la prisión preventiva. Este enfoque contribuye a evitar el uso excesivo de dicha medida, privilegiando soluciones más acordes con el principio de presunción de inocencia. El propio Código Nacional de Procedimientos Penales contempla un amplio catálogo de medidas que pueden ser impuestas por la autoridad judicial, tales como la exhibición de una garantía económica, el embargo de bienes, la inmovilización de cuentas bancarias o la prohibición de salir del país o de una determinada localidad, entre otras."
      },
      {
        tipo: "parrafo",
        texto: "En el ámbito institucional, las evaluaciones de riesgo procesal son realizadas principalmente por las Unidades Estatales de Supervisión a Medidas Cautelares y Suspensión Condicional del Proceso (UMECAS), las cuales elaboran perfiles integrales de las personas imputadas a partir de información socioeconómica, antecedentes procesales y comportamiento previo. Estos informes son puestos a disposición del Ministerio Público y la defensa, quienes los utilizan como insumo para argumentar ante el Juez de Control la necesidad —o no— de imponer una medida cautelar. Con base en estos elementos y en los argumentos de las partes, la autoridad judicial determina la procedencia y alcance de las medidas."
      },
      {
        tipo: "parrafo",
        texto: "Para garantizar la calidad y legitimidad de estas evaluaciones, el criminólogo debe apegarse a criterios estrictamente técnicos y objetivos. Esto implica la recopilación sistemática de información verificable, la realización de entrevistas estructuradas y el análisis de indicadores de riesgo reales, como antecedentes de conductas violentas, ausencia de redes de apoyo familiar, consumo problemático de sustancias o historial delictivo comprobable. En contraste, resulta éticamente inadmisible sustentar conclusiones en apreciaciones subjetivas o prejuicios, como asociar automáticamente la capacidad económica o la frecuencia de viajes con un mayor riesgo procesal, ya que ello vulnera los principios de imparcialidad y rigor científico."
      },
      {
        tipo: "parrafo",
        texto: "Finalmente, el campo de acción del criminólogo no se limita al ámbito institucional. De manera independiente, también puede intervenir como perito particular en la elaboración de metaperitajes, especialmente en aquellos casos donde la defensa considera que el informe de riesgo procesal emitido por la UMECAS presenta omisiones, inconsistencias o valoraciones cuestionables. Esta posibilidad fortalece el principio de contradicción y contribuye a un equilibrio procesal más justo, al permitir la revisión técnica de los dictámenes que inciden directamente en la libertad personal de los imputados."
      },
      {
        tipo: "subtitulo",
        texto: "La criminología en el sistema penitenciario mexicano"
      },
      {
        tipo: "parrafo",
        texto: "Dentro del sistema penitenciario mexicano, la función del criminólogo ha sido —y continúa siendo— fundamental para la gestión adecuada de la población penitenciaria y la preservación de la gobernabilidad institucional. Antes de la entrada en vigor de la Ley Nacional de Ejecución Penal en 2016, el criminólogo desempeñaba un papel central en la clasificación de las personas de nuevo ingreso a los centros penitenciarios, con el objetivo de ubicarlas en el módulo correspondiente conforme a su perfil de riesgo. Para ello, realizaba entrevistas iniciales exhaustivas en las que recababa información sobre los antecedentes de vida, posibles vínculos con pandillas o grupos criminales, conductas para y antisociales —como el consumo de sustancias o la participación en actos violentos tanto dentro como fuera del entorno penitenciario—, así como su disposición al tratamiento."
      },
      {
        tipo: "parrafo",
        texto: "A partir de esta información, el criminólogo establecía parámetros técnicos para evaluar el nivel de riesgo de cada persona, considerando variables como la capacidad criminal, la adaptabilidad social y la peligrosidad. Este proceso no solo respondía a criterios de orden administrativo, sino que tenía como propósito esencial prevenir conflictos, reducir riesgos y garantizar la seguridad tanto de la población penitenciaria como del personal, contribuyendo así a la estabilidad interna de los centros."
      },
      {
        tipo: "parrafo",
        texto: "De manera paralela, el criminólogo supervisaba el desarrollo del tratamiento técnico progresivo, participando en procesos de evaluación y análisis multidisciplinario para verificar el cumplimiento de las actividades asignadas. Estas incluían componentes educativos, laborales, deportivos, psicológicos y de seguridad, todos orientados a un objetivo superior: la reinserción social efectiva de la persona privada de la libertad."
      },
      {
        tipo: "parrafo",
        texto: "Con la entrada en vigor de la Ley Nacional de Ejecución Penal en 2016, se introdujeron cambios relevantes en el sistema, tanto en el lenguaje —al sustituir términos como “interno” por “persona privada de la libertad”— como en el enfoque, al reemplazar el tratamiento técnico progresivo por el plan de actividades. A partir de estas modificaciones, algunos especialistas interpretaron que la figura del criminólogo había perdido relevancia al no ser mencionada de forma expresa en la legislación. No obstante, esta apreciación resulta limitada frente a la realidad operativa de los centros penitenciarios."
      },
      {
        tipo: "parrafo",
        texto: "En la práctica, el criminólogo sigue siendo un actor clave. Si bien las entrevistas iniciales han dejado de tener un carácter formalmente clasificatorio, continúan siendo herramientas indispensables para conocer el perfil integral de las personas que ingresan al sistema. A través de estas, es posible identificar factores de riesgo, necesidades específicas de atención, posibles conflictos derivados de pertenencia a grupos antagónicos, así como requerimientos de intervención médica o psiquiátrica, especialmente en casos de consumo o abstinencia de sustancias."
      },
      {
        tipo: "parrafo",
        texto: "Asimismo, el seguimiento y evaluación del avance en el plan de actividades permiten al criminólogo emitir valoraciones técnicas relevantes en procesos judiciales, como la solicitud de medidas cautelares, beneficios preliberacionales o traslados entre centros penitenciarios. De esta manera, su labor se mantiene alineada con la finalidad del sistema penitenciario: garantizar que el trabajo multidisciplinario se oriente al cumplimiento de los cinco ejes rectores establecidos en el artículo 18 de la Constitución Política de los Estados Unidos Mexicanos, asegurando condiciones que favorezcan una reinserción social efectiva y sostenible."
      }, 
      {
        tipo: "subtitulo",
        texto: "Retos y desafíos de la criminología en México"
      },
      {
        tipo: "parrafo",
        texto: "Uno de los principales retos de la criminología en México radica en su limitada incorporación en los procesos de toma de decisiones públicas, especialmente en espacios estratégicos como la Cámara de Diputados, donde se diseñan, discuten y aprueban reformas en materia de seguridad y justicia. Esta ausencia no es menor: restringe la posibilidad de evolucionar de una política criminal predominantemente reactiva —centrada en el endurecimiento de penas y el incremento del catálogo de delitos— hacia una política criminológica integral, preventiva y sustentada en evidencia empírica. En la práctica, esto perpetúa respuestas coyunturales frente al delito, en lugar de atender sus causas estructurales y dinámicas territoriales."
      },
      {
        tipo: "parrafo",
        texto: "La inclusión del criminólogo en la planeación, implementación y evaluación de políticas públicas permitiría robustecer el enfoque técnico de las decisiones legislativas y administrativas. A través de metodologías científicas, análisis estadísticos y estudios de campo, el criminólogo identifica patrones delictivos, factores de riesgo y contextos de vulnerabilidad que anteceden a la conducta criminal. Esta capacidad de anticipación resulta clave para diseñar intervenciones focalizadas que reduzcan la probabilidad de que determinadas conductas escalen hacia delitos tipificados, optimizando así el uso de recursos públicos y fortaleciendo la prevención situacional y social."
      },
      {
        tipo: "parrafo",
        texto: "Además, el criminólogo aporta herramientas de evaluación de impacto que permiten medir la efectividad real de las políticas de seguridad, evitando la reproducción de estrategias ineficaces o meramente simbólicas. En este sentido, su participación contribuye a contrarrestar el denominado “fetichismo de la ley”: la tendencia a privilegiar la producción normativa y el aumento de sanciones como respuesta automática frente a la inseguridad, sin considerar su viabilidad operativa ni sus efectos reales en la disminución de la criminalidad."
      },
      {
        tipo: "parrafo",
        texto: "Integrar la perspectiva criminológica en el diseño de políticas públicas no solo fortalece la calidad técnica de las decisiones, sino que también promueve un enfoque más racional, preventivo y sostenible de la seguridad. En un contexto como el mexicano, marcado por altos niveles de violencia y complejidad delictiva, resulta indispensable transitar hacia modelos de gobernanza que incorporen conocimiento especializado, prioricen la evidencia sobre la coyuntura política y coloquen la prevención del delito como eje central de la estrategia de seguridad."
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
