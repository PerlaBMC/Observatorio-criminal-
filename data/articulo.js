export const articulos = [
	{
		metadata: {
			id: "art-001",
			slug: "perfilacion-criminal",
			titulo: "Perfilación criminal en México",
			categoria: {
				principal: "investigacion-criminologica",
				label: "Investigación criminológica",
			},
			etiquetas: [
				"criminología",
				"perfilación criminal",
				"análisis conductual",
				"violencia",
				"asesinos en seria",
			],
			fechaPublicacion: "2026-01-01",
			autor: "Perla Mondragón",
			tiempoLectura: 10,
			estado: "publicado",
		},

		clasificacion: {
			area: "Delincuencia en México",
			subarea: "Análisis conductual",
			nivel: "Divulgativo",
			region: "México",
		},

		seo: {
			metaTitle: "Perfilación criminal en México: qué es y cómo se aplica",
			metaDescription:
				"Análisis criminológico sobre la perfilación criminal en México, sus alcances reales, limitaciones y aplicación práctica.",
		},

		media: {
			imagenPrincipal:
				"https://res.cloudinary.com/dujrua0vo/image/upload/v1768103773/KKILLER_zyuzhs.png",
			banner:
				"https://res.cloudinary.com/dujrua0vo/image/upload/v1773277186/BannerArtPage_1_fdmzgb.png",
			altImagen: "Ilustración conceptual de perfilación criminal",
		},

		resumen:
			"La perfilación criminal revela cómo los patrones de comportamiento, el modus operandi y el contexto social ayudan a entender al agresor",

		contenido: [
			{
				tipo: "subtitulo",
				variante: "introduccion",
				texto:
					"La perfilación criminal en México: entre la herramienta científica y las carencias estructurales",
			},
			{
				tipo: "parrafo",
				texto:
					"La perfilación criminal es una de las herramientas más fascinantes —y a la vez más malinterpretadas— dentro del campo de la criminología aplicada. Mientras la cultura popular la presenta como un ejercicio casi intuitivo, capaz de revelar en minutos la identidad de un asesino, la realidad es muy distinta. En la práctica, la perfilación es un proceso técnico, gradual y profundamente dependiente de la calidad de la investigación inicial. Cuando falla la recolección de indicios o se fragmenta la información institucional, el perfil pierde fuerza. Y en México, ahí radica uno de los principales problemas.",
			},
			{
				tipo: "subtitulo",
				texto: "¿Qué es realmente un perfil criminal?",
			},
			{
				tipo: "parrafo",
				texto:
					"Un perfil criminal es una inferencia científica sobre las características probables de un autor desconocido, construida a partir del análisis sistemático del comportamiento delictivo, la escena del crimen, el contexto y la información victimal. No se trata de adivinar quién cometió el delito, sino de delimitar hipótesis que reduzcan el margen de búsqueda y orienten decisiones estratégicas.",
			},
			{
				tipo: "parrafo",
				texto:
					"El perfil no ofrece nombres propios; ofrece patrones. Describe rangos de edad probables, niveles de organización, posibles antecedentes, zonas geográficas de confort, habilidades sociales, control emocional, escalamiento de violencia y, en ocasiones, características físicas inferidas a partir de la dinámica del hecho. Es una herramienta de orientación, no una sentencia.",
			},
			{
				tipo: "parrafo",
				texto:
					"Sin embargo, para que el perfil tenga valor, debe partir de datos sólidos. Y aquí emerge una primera debilidad estructural en el contexto mexicano: la calidad desigual en la integración de carpetas de investigación.",
			},
			{
				tipo: "subtitulo",
				texto: "Los insumos: cuando el dato es la base de todo",
			},
			{
				tipo: "parrafo",
				texto:
					"La perfilación depende de la información primaria recabada por policías y peritos. Informes policiales mal elaborados, escenas contaminadas o testimonios no sistematizados generan vacíos que distorsionan cualquier inferencia posterior.",
			},
			{
				tipo: "parrafo",
				texto:
					"Dos pilares fundamentales son los informes de investigación y la perfilación victimal. El primero permite reconstruir qué ocurrió y cómo se comportó el agresor; el segundo busca entender por qué la víctima fue elegida. En delitos seriales, la repetición de ciertos rasgos en las víctimas —edad, ocupación, rutinas, nivel de vulnerabilidad— puede indicar una preferencia específica o una motivación simbólica.",
			},
			{
				tipo: "parrafo",
				texto:
					"Cuando estos datos no se concentran en una base unificada, los casos tienden a investigarse de forma aislada. Esa fragmentación ha sido uno de los mayores obstáculos para detectar serialidad en México.",
			},
			{
				tipo: "subtitulo",
				texto: "El requisito de la repetición: por qué un solo caso no basta",
			},
			{
				tipo: "parrafo",
				texto:
					"La perfilación criminal con rigor científico no se aplica sobre un único hecho aislado. El sesgo cognitivo es demasiado alto. Para identificar patrones conductuales se requiere repetición, generalmente al menos tres eventos con similitudes relevantes.",
			},
			{
				tipo: "parrafo",
				texto: "Sólo entonces pueden compararse elementos como:",
			},
			{
				tipo: "lista",
				items: [
					"Modus operandi",
					"Firma o sello personal",
					"Selección victimal",
					"Geografía de actuación",
				],
			},
			{
				tipo: "parrafo",
				texto:
					"La ausencia de sistemas interconectados entre fiscalías estatales complica esta tarea. Si un agresor opera en distintos municipios o estados, la falta de intercambio ágil de información puede impedir que los patrones se detecten oportunamente.",
			},
			{
				tipo: "subtitulo",
				texto: "El Método V.E.R.A.: una estructura para ordenar el caos",
			},
			{
				tipo: "parrafo",
				texto:
					"Uno de los modelos estructurados para la elaboración de perfiles es el Método V.E.R.A., atribuido a Juan Enrique Soto Castro. Este método organiza el análisis en cuatro ejes interdependientes: Víctima, Escena, Reconstrucción y Autor.",
			},
			{
				tipo: "parrafo",
				texto:
					"El estudio de la víctima no busca culpabilizarla, sino comprender su contexto, sus rutinas y los factores que facilitaron su selección. Este análisis permite distinguir entre delitos oportunistas y delitos dirigidos.",
			},
			{
				tipo: "parrafo",
				texto:
					"La escena del delito se examina desde una perspectiva espacio-temporal. No se trata únicamente del lugar donde se consumó el hecho, sino también del punto de abordaje, las posibles escenas de transición y el lugar de abandono. Cada espacio elegido responde a una lógica del agresor. Comprenderla es fundamental.",
			},
			{
				tipo: "parrafo",
				texto:
					"La reconstrucción del delito recorre el iter criminis completo, ordenando cronológicamente la interacción entre autor y víctima. Aquí se identifican elementos como el nivel de planificación, la improvisación, el control, la violencia instrumental o expresiva.",
			},
			{
				tipo: "parrafo",
				texto:
					"Finalmente, la inferencia sobre el autor integra todos los datos anteriores para formular hipótesis coherentes sobre su perfil conductual. Este proceso exige método científico: formular hipótesis, contrastarlas con evidencia y modificarlas cuando nuevos datos emergen.",
			},
			{
				tipo: "subtitulo",
				texto:
					"Perfilación criminal en México: marco institucional y realidad operativa",
			},
			{
				tipo: "parrafo",
				texto:
					"En México, la perfilación podría desarrollarse dentro de instituciones como la Fiscalía General de la República y las fiscalías estatales, bajo la conducción del Ministerio Público. Asimismo, la Secretaría de Seguridad y Protección Ciudadana establece lineamientos generales para la coordinación en materia de seguridad.",
			},
			{
				tipo: "parrafo",
				texto:
					"En teoría, las policías de investigación recaban evidencia, entrevistan testigos, analizan inteligencia y protegen escenas del crimen bajo protocolos técnicos. En la práctica, existen desafíos persistentes: sobrecarga de trabajo, déficit de personal especializado, falta de capacitación continua en análisis conductual y escasa integración de bases de datos criminales interoperables.",
			},
			{
				tipo: "parrafo",
				texto:
					"La perfilación criminal no fracasa por la técnica en sí, sino por la debilidad en los cimientos institucionales que deberían sostenerla.",
			},
			{
				tipo: "subtitulo",
				texto: "Casos emblemáticos y lecciones aprendidas",
			},
			{
				tipo: "parrafo",
				texto:
					"El caso de Juana Barraza, conocida como “La Mataviejitas”, evidenció cómo la investigación fragmentada puede retrasar el reconocimiento de la serialidad. Durante años, los homicidios de mujeres adultas mayores fueron tratados como eventos aislados. El sesgo inicial asumió que el agresor debía ser hombre, lo que desvió líneas de investigación. Solo cuando el patrón victimal fue imposible de ignorar se consolidó la hipótesis de un agresor serial.",
			},
			{
				tipo: "parrafo",
				texto:
					"Por otro lado, César Armando Librado Legorreta, “El Coqueto”, operaba bajo un modus operandi repetitivo como conductor de transporte público. Las víctimas compartían características demográficas y los ataques ocurrían en horarios estratégicos. Aquí el patrón fue más evidente, pero nuevamente la detección no fue inmediata.",
			},
			{
				tipo: "parrafo",
				texto:
					"Estos casos muestran que la perfilación no es una herramienta extraordinaria, sino una necesidad metodológica que debe activarse tempranamente cuando existen indicios de repetición.",
			},
			{
				tipo: "subtitulo",
				texto: "Más allá del mito televisivo",
			},
			{
				tipo: "parrafo",
				texto:
					"Series como Criminal Minds han instalado la idea de que el perfilador resuelve casos con intuiciones brillantes. En la realidad, la perfilación es un trabajo interdisciplinario que depende de:",
			},
			{
				tipo: "lista",
				items: [
					"Evidencia forense sólida",
					"Coordinación interinstitucional",
					"Análisis estadístico",
					"Bases de datos confiables",
				],
			},
			{
				tipo: "parrafo",
				texto:
					"No sustituye la genética forense, la balística, la dactiloscopía ni la georreferenciación; se complementa con ellas. La criminalística valida o refuta las hipótesis conductuales.",
			},
			{
				tipo: "subtitulo",
				texto: "El verdadero potencial: prevención y política pública",
			},
			{
				tipo: "parrafo",
				texto:
					"Más allá de la captura de un agresor, la perfilación tiene un potencial preventivo. Identificar zonas de riesgo, horarios críticos y poblaciones vulnerables permite diseñar estrategias focalizadas. Cuando el análisis conductual se integra a la inteligencia criminal, puede contribuir a reducir la victimización reiterada.",
			},
			{
				tipo: "parrafo",
				texto:
					"Sin embargo, mientras persistan problemas estructurales como la impunidad elevada, la fragmentación institucional y la insuficiente profesionalización en análisis conductual, la perfilación criminal seguirá siendo una herramienta subutilizada.",
			},
			{
				tipo: "parrafo",
				texto:
					"La perfilación no es magia ni espectáculo. Es ciencia aplicada a la conducta humana en su expresión más violenta. Su eficacia no depende de mentes brillantes aisladas, sino de sistemas sólidos, coordinados y comprometidos con la verdad. En un país donde la confianza en la impartición de justicia enfrenta cuestionamientos constantes, fortalecer herramientas como esta no es un lujo académico: es una necesidad estructural.",
			},
		],

		referencias: [
			{
				autor: "Ressler, Robert",
				titulo: "Whoever Fights Monsters",
				año: 1992,
				fuente: "Libro",
				url: "",
			},
		],

		notas: [
			{
				id: 1,
				texto: "En México no existe un protocolo único nacional.",
			},
		],
	},
	{
		metadata: {
			id: "art-002",
			slug: "criminologia-en-mexico",
			titulo: "La criminología en México: funciones, alcances y retos",
			categoria: {
				principal: "investigacion-criminologica",
				label: "Investigación criminológica",
			},
			etiquetas: [
				"criminología",
				"criminologos en méxico",
				"análisis conductual",
				"violencia",
				"sistema penitenciario",
				"política criminal",
			],
			fechaPublicacion: "2026-03-23",
			autor: "Perla Mondragón",
			tiempoLectura: 13,
			estado: "publicado",
		},

		clasificacion: {
			area: "Delincuencia en México",
			subarea: "Análisis conductual",
			nivel: "Divulgativo",
			region: "México",
		},

		seo: {
			metaTitle:
				"La criminología en México: funciones, alcances y retos actuales",
			metaDescription:
				"La función de criminólogo en México, qué hace, donde se desempeña, cuales son los retos para la materia.",
		},

		media: {
			imagenPrincipal:
				"https://res.cloudinary.com/dujrua0vo/image/upload/v1769187955/KKILLER_1_hn4wbn.png",
			banner:
				"https://res.cloudinary.com/dujrua0vo/image/upload/v1774314149/BannerArtPage_2_yaz5a5.png",
			altImagen: "Ilustración conceptual de la criminología en México",
		},

		resumen:
			"En México, entender la violencia no es opcional: la criminología se enfrenta al reto de descifrar sus raíces para transformar el rumbo del país",

		contenido: [
			{
				tipo: "subtitulo",
				variante: "introduccion",
				texto:
					"El reto de comprender la violencia en México: claves criminológicas para entender sus causas y transformar su impacto",
			},
			{
				tipo: "parrafo",
				texto:
					"La criminología es una ciencia social de carácter multidisciplinario que estudia el fenómeno delictivo de manera integral, abarcando no solo el delito y a quien lo comete, sino también a la víctima, los contextos en los que ocurre y los mecanismos de control social que buscan contenerlo. Su enfoque trasciende la visión punitiva tradicional, ya que no se limita a analizar el castigo, sino que se centra en comprender las causas, dinámicas y consecuencias de la conducta criminal.",
			},
			{
				tipo: "parrafo",
				texto:
					"En este sentido, su objetivo principal no radica únicamente en sancionar, sino en explicar por qué ocurren los delitos, identificar los factores de riesgo que los propician y, a partir de ello, diseñar estrategias de prevención e intervención que resulten efectivas y sostenibles en el tiempo. Esta perspectiva permite transitar de respuestas reactivas hacia modelos preventivos basados en evidencia, donde el conocimiento científico orienta la acción pública.",
			},
			{
				tipo: "parrafo",
				texto:
					"En México, la criminología desempeña un papel clave para entender la complejidad del fenómeno delictivo y el impacto de la violencia en distintos niveles de la vida social. Más allá del análisis del crimen en sí, esta disciplina examina de forma articulada las causas sociales, económicas, psicológicas e institucionales que lo originan y lo reproducen. Esto incluye factores como la desigualdad, la descomposición del tejido social, la impunidad, la debilidad institucional y la presencia de estructuras criminales organizadas.",
			},
			{
				tipo: "parrafo",
				texto:
					"En un contexto marcado por la delincuencia organizada, las brechas de desigualdad y diversas formas de violencia estructural, la criminología se consolida como una herramienta indispensable para la toma de decisiones informadas. Su aportación permite diseñar políticas públicas más eficaces, fortalecer los sistemas de seguridad y justicia, y orientar intervenciones que no solo atiendan las consecuencias del delito, sino que incidan directamente en sus causas, contribuyendo así a una reducción real y sostenida de la criminalidad.",
			},
			{
				tipo: "subtitulo",
				texto: "Funciones actuales de la criminología en México",
			},
			{
				tipo: "parrafo",
				texto:
					"En la práctica profesional, el criminólogo en México desempeña funciones sustantivas en diversos ámbitos del sistema de justicia y seguridad, consolidándose como un perfil técnico indispensable para la toma de decisiones informadas. Entre sus principales atribuciones destacan el análisis de conductas delictivas, la evaluación de riesgos procesales, la elaboración de diagnósticos criminológicos y la participación en el diseño e implementación de estrategias de prevención del delito. Su intervención permite incorporar criterios científicos y metodológicos en procesos que, de otro modo, podrían depender exclusivamente de valoraciones jurídicas o discrecionales.",
			},
			{
				tipo: "parrafo",
				texto:
					"Una de sus funciones más relevantes se vincula con la evaluación de riesgos procesales, entendida como un procedimiento técnico-administrativo orientado a estimar la probabilidad de que una persona imputada se sustraiga de la acción de la justicia, obstaculice el desarrollo de la investigación o represente un riesgo para la víctima durante el proceso penal. Este análisis cobra especial importancia en el marco del sistema penal acusatorio, donde la imposición de medidas cautelares debe responder a criterios de necesidad, proporcionalidad y respeto a los derechos humanos.",
			},
			{
				tipo: "parrafo",
				texto:
					"De conformidad con el artículo 168 del Código Nacional de Procedimientos Penales, la autoridad debe considerar diversos indicadores para determinar el riesgo de sustracción, elemento clave para decidir la procedencia de medidas cautelares como la prisión preventiva. En este contexto, el criminólogo evalúa factores como el arraigo domiciliario, familiar y social, la estabilidad laboral, el entorno comunitario, así como la capacidad real de la persona para abandonar su lugar de residencia o permanecer oculta. Este análisis no solo se limita a la identificación de riesgos, sino que también permite proponer alternativas viables a la privación de la libertad.",
			},
			{
				tipo: "parrafo",
				texto:
					"Cuando se determina que el imputado no presenta un riesgo significativo de sustracción ni constituye una amenaza para la víctima o la sociedad, es posible optar por medidas cautelares distintas a la prisión preventiva. Este enfoque contribuye a evitar el uso excesivo de dicha medida, privilegiando soluciones más acordes con el principio de presunción de inocencia. El propio Código Nacional de Procedimientos Penales contempla un amplio catálogo de medidas que pueden ser impuestas por la autoridad judicial, tales como la exhibición de una garantía económica, el embargo de bienes, la inmovilización de cuentas bancarias o la prohibición de salir del país o de una determinada localidad, entre otras.",
			},
			{
				tipo: "parrafo",
				texto:
					"En el ámbito institucional, las evaluaciones de riesgo procesal son realizadas principalmente por las Unidades Estatales de Supervisión a Medidas Cautelares y Suspensión Condicional del Proceso (UMECAS), las cuales elaboran perfiles integrales de las personas imputadas a partir de información socioeconómica, antecedentes procesales y comportamiento previo. Estos informes son puestos a disposición del Ministerio Público y la defensa, quienes los utilizan como insumo para argumentar ante el Juez de Control la necesidad —o no— de imponer una medida cautelar. Con base en estos elementos y en los argumentos de las partes, la autoridad judicial determina la procedencia y alcance de las medidas.",
			},
			{
				tipo: "parrafo",
				texto:
					"Para garantizar la calidad y legitimidad de estas evaluaciones, el criminólogo debe apegarse a criterios estrictamente técnicos y objetivos. Esto implica la recopilación sistemática de información verificable, la realización de entrevistas estructuradas y el análisis de indicadores de riesgo reales, como antecedentes de conductas violentas, ausencia de redes de apoyo familiar, consumo problemático de sustancias o historial delictivo comprobable. En contraste, resulta éticamente inadmisible sustentar conclusiones en apreciaciones subjetivas o prejuicios, como asociar automáticamente la capacidad económica o la frecuencia de viajes con un mayor riesgo procesal, ya que ello vulnera los principios de imparcialidad y rigor científico.",
			},
			{
				tipo: "parrafo",
				texto:
					"Finalmente, el campo de acción del criminólogo no se limita al ámbito institucional. De manera independiente, también puede intervenir como perito particular en la elaboración de metaperitajes, especialmente en aquellos casos donde la defensa considera que el informe de riesgo procesal emitido por la UMECAS presenta omisiones, inconsistencias o valoraciones cuestionables. Esta posibilidad fortalece el principio de contradicción y contribuye a un equilibrio procesal más justo, al permitir la revisión técnica de los dictámenes que inciden directamente en la libertad personal de los imputados.",
			},
			{
				tipo: "subtitulo",
				texto: "La criminología en el sistema penitenciario mexicano",
			},
			{
				tipo: "parrafo",
				texto:
					"Dentro del sistema penitenciario mexicano, la función del criminólogo ha sido —y continúa siendo— fundamental para la gestión adecuada de la población penitenciaria y la preservación de la gobernabilidad institucional. Antes de la entrada en vigor de la Ley Nacional de Ejecución Penal en 2016, el criminólogo desempeñaba un papel central en la clasificación de las personas de nuevo ingreso a los centros penitenciarios, con el objetivo de ubicarlas en el módulo correspondiente conforme a su perfil de riesgo. Para ello, realizaba entrevistas iniciales exhaustivas en las que recababa información sobre los antecedentes de vida, posibles vínculos con pandillas o grupos criminales, conductas para y antisociales —como el consumo de sustancias o la participación en actos violentos tanto dentro como fuera del entorno penitenciario—, así como su disposición al tratamiento.",
			},
			{
				tipo: "parrafo",
				texto:
					"A partir de esta información, el criminólogo establecía parámetros técnicos para evaluar el nivel de riesgo de cada persona, considerando variables como la capacidad criminal, la adaptabilidad social y la peligrosidad. Este proceso no solo respondía a criterios de orden administrativo, sino que tenía como propósito esencial prevenir conflictos, reducir riesgos y garantizar la seguridad tanto de la población penitenciaria como del personal, contribuyendo así a la estabilidad interna de los centros.",
			},
			{
				tipo: "parrafo",
				texto:
					"De manera paralela, el criminólogo supervisaba el desarrollo del tratamiento técnico progresivo, participando en procesos de evaluación y análisis multidisciplinario para verificar el cumplimiento de las actividades asignadas. Estas incluían componentes educativos, laborales, deportivos, psicológicos y de seguridad, todos orientados a un objetivo superior: la reinserción social efectiva de la persona privada de la libertad.",
			},
			{
				tipo: "parrafo",
				texto:
					"Con la entrada en vigor de la Ley Nacional de Ejecución Penal en 2016, se introdujeron cambios relevantes en el sistema, tanto en el lenguaje —al sustituir términos como “interno” por “persona privada de la libertad”— como en el enfoque, al reemplazar el tratamiento técnico progresivo por el plan de actividades. A partir de estas modificaciones, algunos especialistas interpretaron que la figura del criminólogo había perdido relevancia al no ser mencionada de forma expresa en la legislación. No obstante, esta apreciación resulta limitada frente a la realidad operativa de los centros penitenciarios.",
			},
			{
				tipo: "parrafo",
				texto:
					"En la práctica, el criminólogo sigue siendo un actor clave. Si bien las entrevistas iniciales han dejado de tener un carácter formalmente clasificatorio, continúan siendo herramientas indispensables para conocer el perfil integral de las personas que ingresan al sistema. A través de estas, es posible identificar factores de riesgo, necesidades específicas de atención, posibles conflictos derivados de pertenencia a grupos antagónicos, así como requerimientos de intervención médica o psiquiátrica, especialmente en casos de consumo o abstinencia de sustancias.",
			},
			{
				tipo: "parrafo",
				texto:
					"Asimismo, el seguimiento y evaluación del avance en el plan de actividades permiten al criminólogo emitir valoraciones técnicas relevantes en procesos judiciales, como la solicitud de medidas cautelares, beneficios preliberacionales o traslados entre centros penitenciarios. De esta manera, su labor se mantiene alineada con la finalidad del sistema penitenciario: garantizar que el trabajo multidisciplinario se oriente al cumplimiento de los cinco ejes rectores establecidos en el artículo 18 de la Constitución Política de los Estados Unidos Mexicanos, asegurando condiciones que favorezcan una reinserción social efectiva y sostenible.",
			},
			{
				tipo: "subtitulo",
				texto: "Retos y desafíos de la criminología en México",
			},
			{
				tipo: "parrafo",
				texto:
					"Uno de los principales retos de la criminología en México radica en su limitada incorporación en los procesos de toma de decisiones públicas, especialmente en espacios estratégicos como la Cámara de Diputados, donde se diseñan, discuten y aprueban reformas en materia de seguridad y justicia. Esta ausencia no es menor: restringe la posibilidad de evolucionar de una política criminal predominantemente reactiva —centrada en el endurecimiento de penas y el incremento del catálogo de delitos— hacia una política criminológica integral, preventiva y sustentada en evidencia empírica. En la práctica, esto perpetúa respuestas coyunturales frente al delito, en lugar de atender sus causas estructurales y dinámicas territoriales.",
			},
			{
				tipo: "parrafo",
				texto:
					"La inclusión del criminólogo en la planeación, implementación y evaluación de políticas públicas permitiría robustecer el enfoque técnico de las decisiones legislativas y administrativas. A través de metodologías científicas, análisis estadísticos y estudios de campo, el criminólogo identifica patrones delictivos, factores de riesgo y contextos de vulnerabilidad que anteceden a la conducta criminal. Esta capacidad de anticipación resulta clave para diseñar intervenciones focalizadas que reduzcan la probabilidad de que determinadas conductas escalen hacia delitos tipificados, optimizando así el uso de recursos públicos y fortaleciendo la prevención situacional y social.",
			},
			{
				tipo: "parrafo",
				texto:
					"Además, el criminólogo aporta herramientas de evaluación de impacto que permiten medir la efectividad real de las políticas de seguridad, evitando la reproducción de estrategias ineficaces o meramente simbólicas. En este sentido, su participación contribuye a contrarrestar el denominado “fetichismo de la ley”: la tendencia a privilegiar la producción normativa y el aumento de sanciones como respuesta automática frente a la inseguridad, sin considerar su viabilidad operativa ni sus efectos reales en la disminución de la criminalidad.",
			},
			{
				tipo: "parrafo",
				texto:
					"Integrar la perspectiva criminológica en el diseño de políticas públicas no solo fortalece la calidad técnica de las decisiones, sino que también promueve un enfoque más racional, preventivo y sostenible de la seguridad. En un contexto como el mexicano, marcado por altos niveles de violencia y complejidad delictiva, resulta indispensable transitar hacia modelos de gobernanza que incorporen conocimiento especializado, prioricen la evidencia sobre la coyuntura política y coloquen la prevención del delito como eje central de la estrategia de seguridad.",
			},
		],

		referencias: [
			{
				autor: "Ressler, Robert",
				titulo: "Whoever Fights Monsters",
				año: 1992,
				fuente: "Libro",
				url: "",
			},
		],

		notas: [
			{
				id: 1,
				texto: "En México no existe un protocolo único nacional.",
			},
		],
	},
	{
		metadata: {
			id: "art-003",
			slug: "drogadiccion-en-mexico",
			titulo:
				"Drogadicción en México: factores, efectos y consecuencias sociales",
			categoria: {
				principal: "investigacion-criminologica",
				label: "Investigación criminológica",
			},
			etiquetas: [
				"criminología",
				"drogadicción en méxico",
				"análisis conductual",
				"violencia por consumo de drogas",
				"dependencia",
				"política criminal",
			],
			fechaPublicacion: "2026-04-06",
			autor: "Perla Mondragón",
			tiempoLectura: 13,
			estado: "publicado",
		},

		clasificacion: {
			area: "Delincuencia en México",
			subarea: "Análisis conductual",
			nivel: "Divulgativo",
			region: "México",
		},

		seo: {
			metaTitle:
				"Drogadicción en México: factores, efectos y consecuencias sociales",
			metaDescription:
				"Los factores que propician el consumo y consecuencias por el consumo de drogas",
		},

		media: {
			imagenPrincipal:
				"https://res.cloudinary.com/dwzbls5ib/image/upload/v1775516326/Observatorio_criminal_4_ewg3lk.png",
			banner:
				"https://res.cloudinary.com/dwzbls5ib/image/upload/v1775516308/BannerArtPage_2_smwgfz.png",
			altImagen: "Ilustración drogadicción en México",
		},

		resumen:
			"Lejos de ser un fenómeno aislado, el consumo problemático de sustancias se entrelaza con contextos de violencia, exclusión y deterioro comunitario",

		contenido: [
			{
				tipo: "subtitulo",
				variante: "introduccion",
				texto:
					"Comprender la complejidad de la drogadicción y el alcance real de sus consecuencias es fundamental para diseñar políticas públicas eficaces y sostenibles.",
			},
			{
				tipo: "parrafo",
				texto:
					"La drogadicción en México constituye uno de los desafíos más complejos para la salud pública, la seguridad y la cohesión social. Lejos de ser un fenómeno aislado o estrictamente individual, el consumo problemático de sustancias se entrelaza con contextos de violencia, exclusión y deterioro comunitario. Comprender sus causas, efectos y manifestaciones a lo largo del ciclo de vida resulta indispensable para diseñar estrategias de prevención y atención verdaderamente eficaces.",
			},
			{
				tipo: "parrafo",
				texto:
					"El uso y abuso de sustancias adictivas representa un fenómeno multidimensional que impacta no sólo la salud individual, sino también la integración familiar y la estabilidad social. Aunque toda la población está expuesta, existen grupos particularmente vulnerables, como niños y jóvenes, quienes enfrentan un mayor riesgo de ver truncado su desarrollo personal y sus proyectos de vida.",
			},
			{
				tipo: "subtitulo",
				texto:
					"Factores sociales y psicológicos que contribuyen a la adicción",
			},
			{
				tipo: "parrafo",
				texto:
					"La adicción no surge de manera espontánea ni aislada. Responde a la convergencia de múltiples factores sociales y psicológicos, entre los que destacan la pobreza, la desintegración familiar, la violencia intrafamiliar, la falta de oportunidades educativas y laborales, así como la normalización del consumo en entornos donde predominan el ocio desestructurado, la inactividad y la cercanía con dinámicas delictivas.",
			},
			{
				tipo: "parrafo",
				texto: "En comunidades donde la apología del delito y el narcotráfico forman parte de la vida cotidiana, el acceso temprano a las drogas y la percepción de bajo riesgo aumentan significativamente. En estos contextos, el consumo deja de percibirse como una conducta desviada para integrarse como un elemento más del entorno social.",
			},
			{
				tipo: "parrafo",
				texto:
					"Un caso ilustrativo es el de Juan Luis Lagunas Rosales, conocido como “El Pirata de Culiacán”. Su historia refleja la convergencia de factores de riesgo: abandono familiar, exclusión social, incorporación temprana a entornos delictivos y consumo problemático de sustancias. Desde muy joven, se integró a dinámicas informales y posteriormente a estructuras criminales en roles básicos, como los llamados “halcones”. Su popularidad en redes sociales, basada en la exposición constante a estados de intoxicación, evidenció además un fenómeno preocupante: la normalización y banalización del deterioro humano como entretenimiento.",
			},
			{
				tipo: "parrafo",
				texto:
					"Más allá del desenlace trágico de su vida, este caso revela un elemento crítico: la tolerancia social frente al consumo en menores de edad y la falta de cuestionamiento sobre las condiciones estructurales que lo propician. La viralización de su imagen no sólo invisibilizó su contexto de vulnerabilidad, sino que reforzó patrones de imitación en otros jóvenes.",
			},
			{
				tipo: "parrafo",
				texto:
					"Este tipo de trayectorias permite observar cómo distintos factores —abandono o negligencia parental, ausencia de figuras de autoridad, entornos de precariedad, estrés postraumático, baja regulación emocional e influencia de pares— convergen para detonar el consumo como mecanismo de evasión.",
			},
			{
				tipo: "subtitulo",
				texto:
					"Drogadicción y etapas de la vida",
			},
			{
				tipo: "parrafo",
				texto:
					"Los efectos del consumo de drogas no son homogéneos; varían de manera significativa según la etapa del desarrollo en la que se inicia. En el caso de niños y adolescentes, el impacto es especialmente severo debido a que el cerebro aún se encuentra en proceso de maduración.",
			},
			{
				tipo: "parrafo",
				texto:
					"El desarrollo cerebral humano concluye aproximadamente entre los 21 y 25 años. Durante este periodo, el consumo de sustancias psicoactivas interfiere en procesos neurológicos esenciales, lo que no sólo incrementa la probabilidad de desarrollar dependencia, sino que también agrava los daños estructurales y eleva el riesgo de trastornos psiquiátricos. En edades tempranas, esto se traduce en alteraciones en la memoria, la atención, el aprendizaje y la regulación emocional, así como en una mayor impulsividad, dificultades para evaluar riesgos y una mayor propensión a involucrarse en conductas violentas o delictivas.",
			},
			{
				tipo: "parrafo",
				texto:
					"A nivel neurobiológico, los principales efectos pueden entenderse a partir de cuatro ejes:",
			},
      	{
				tipo: "lista",
				items: [
					"En primer lugar, la afectación de la corteza prefrontal resulta crítica. Esta región, encargada de funciones como la toma de decisiones, el control de impulsos, la planificación y la empatía, es una de las últimas en desarrollarse. El consumo de sustancias durante la adolescencia interrumpe su maduración natural, altera la conectividad neuronal y puede reducir la materia gris. Además, interfiere con el proceso de “poda neuronal”, fundamental para optimizar las conexiones cerebrales, lo que puede derivar en déficits persistentes en la toma de decisiones y un mayor riesgo de trastornos mentales. Esta alteración también se relaciona con la pérdida de control sobre el consumo y con conductas desadaptativas.",
					"En segundo lugar, el sistema de recompensa cerebral sufre una profunda disrupción. Las drogas provocan liberaciones masivas de dopamina, muy superiores a las generadas por estímulos naturales, lo que refuerza de manera artificial la conducta de consumo. Con el uso continuo, el cerebro reduce su sensibilidad a esta sustancia, generando tolerancia y dependencia. Como consecuencia, disminuye la capacidad de experimentar placer en actividades cotidianas, apareciendo estados de apatía, depresión o anhedonia, especialmente durante los periodos de abstinencia.",
					"En tercer lugar, el consumo sostenido produce daños estructurales y funcionales. Se observa destrucción neuronal, disminución de la neurogénesis y, en algunos casos, reducción del volumen cerebral, lo que compromete de manera duradera diversas funciones cognitivas.",
					"Finalmente, las consecuencias psicológicas y cognitivas son amplias. El consumo se asocia con un mayor riesgo de depresión, ansiedad, trastornos de pánico, paranoia y conductas agresivas, además de un deterioro progresivo en la memoria, la concentración y la agilidad mental.",
				],
			},
			{
				tipo: "subtitulo",
				texto: "Drogadicción y comportamiento violento",
			},
			{
				tipo: "parrafo",
				texto:
					"Desde la criminología, la drogadicción se entiende como un factor de riesgo, no como una causa única de la violencia. El consumo puede facilitar conductas violentas al disminuir el autocontrol, aumentar la impulsividad y generar conflictos asociados a la dependencia, como disputas familiares, delitos patrimoniales o participación en economías ilícitas.",
			},
			{
				tipo: "parrafo",
				texto:
					"A nivel neurobiológico, las sustancias psicoactivas alteran neurotransmisores y afectan el funcionamiento de la corteza prefrontal, debilitando los mecanismos de inhibición conductual. Este fenómeno se relaciona con el modelo de Inhibición de Respuesta Alterada, que explica la incapacidad para frenar impulsos o conductas inapropiadas en contextos específicos.",
			},
			{
				tipo: "parrafo",
				texto:
					"Si bien no toda persona consumidora desarrolla conductas violentas, las alteraciones neuropsicológicas derivadas del consumo incrementan significativamente la probabilidad de respuestas agresivas.",
			},
			{
				tipo: "subtitulo",
				texto:
					"Panorama del consumo y políticas de prevención en México",
			},
			{
				tipo: "parrafo",
				texto:
					"En México, los datos disponibles muestran una tendencia al alza en el consumo de drogas ilícitas, particularmente entre adolescentes y jóvenes, así como una disminución en la edad de inicio. Este fenómeno incrementa los riesgos de dependencia y daño neurológico a largo plazo.",
			},
			{
				tipo: "parrafo",
				texto:
					"El Observatorio Mexicano de Salud Mental y Adicciones participa en el análisis del fenómeno y en el diseño de políticas públicas; sin embargo, gran parte de la información proviene de la demanda de tratamiento, lo que genera un subregistro, ya que muchos consumidores no buscan atención especializada.",
			},
			{
				tipo: "parrafo",
				texto: "Entre las estrategias implementadas destaca la campaña “Aléjate de las drogas. El fentanilo te mata”, impulsada durante la administración de Claudia Sheinbaum. Estas iniciativas buscan sensibilizar a la población, aunque su alcance resulta limitado frente a la complejidad estructural del problema.",
			},
			{
				tipo: "parrafo",
				texto: "El acceso a la información ya no constituye la principal barrera. El verdadero desafío radica en los factores sociales que motivan el consumo: entornos familiares disfuncionales, ausencia de supervisión parental, exclusión social y contextos donde la criminalidad se normaliza.",
			},
			{
				tipo: "parrafo",
				texto: "A ello se suma la influencia cultural. Productos mediáticos, como la canción NuevaYol de Bad Bunny, así como diversos contenidos del género de corridos tumbados o reguetón, pueden reforzar la asociación entre consumo, estatus y aceptación social, favoreciendo conductas de imitación.",
			},
			{
				tipo: "parrafo",
				texto: "Mientras estos factores no se aborden de manera integral, el consumo continuará expandiéndose, especialmente en contextos donde el acceso a sustancias es amplio y normalizado, tanto en zonas marginadas como en sectores de alto nivel socioeconómico.",
			},
			{
				tipo: "subtitulo",
				texto: "Centros especializados para el tratamiento de adicciones en México",
			},
      {
        tipo: "parrafo",
        texto: "México cuenta con una red institucional para la atención de las adicciones, basada en dos modelos principales."
      },
            {
        tipo: "parrafo",
        texto: "Por un lado, los Centros de Atención Primaria en Adicciones (CAPA) ofrecen servicios gratuitos enfocados en la prevención, detección temprana y tratamiento ambulatorio. Su objetivo es intervenir de manera oportuna antes de que el consumo evolucione hacia una dependencia severa."
      },
            {
        tipo: "parrafo",
        texto: "Por otro lado, los Centros de Integración Juvenil brindan atención especializada mediante terapia individual, familiar y grupal, así como tratamientos farmacológicos y programas de hospitalización en casos necesarios. Su modelo combina intervención clínica con estrategias de reintegración social."
      },
            {
        tipo: "parrafo",
        texto: "La drogadicción en México no puede entenderse ni atenderse desde una sola perspectiva. Se trata de un fenómeno profundamente ligado a condiciones estructurales, culturales y psicológicas que requieren intervenciones integrales."
      },
            {
        tipo: "parrafo",
        texto: "Reducir el problema implica ir más allá de campañas informativas y apostar por políticas que fortalezcan el entorno familiar, amplíen las oportunidades educativas y laborales, y transformen los contextos sociales que hoy favorecen el consumo."
      },
            {
        tipo: "parrafo",
        texto: "En última instancia, la prevención efectiva no comienza con la prohibición, sino con la construcción de entornos que hagan innecesaria la evasión."
      }
		],

		referencias: [
			{
				autor: "Ressler, Robert",
				titulo: "Whoever Fights Monsters",
				año: 1992,
				fuente: "Libro",
				url: "",
			},
		],

		notas: [
			{
				id: 1,
				texto: "En México no existe un protocolo único nacional.",
			},
		],
	},
	{
		metadata: {
			id: "art-004",
			slug: "criminal-o-delincuente",
			titulo:
				"Criminal o delincuente ¿cómo se forma uno?",
			categoria: {
				principal: "investigacion-criminologica",
				label: "Investigación criminológica",
			},
			etiquetas: [
				"criminología",
				"criminal",
				"análisis conductual",
				"delincuente",
				"monstruo",
				"feminicida",
			],
			fechaPublicacion: "2026-04-22",
			autor: "Perla Mondragón",
			tiempoLectura: 13,
			estado: "publicado",
		},

		clasificacion: {
			area: "Delincuencia en México",
			subarea: "Análisis conductual",
			nivel: "Divulgativo",
			region: "México",
		},

		seo: {
			metaTitle:
				"Criminal o delincuente ¿cómo se forma uno?",
			metaDescription:
				"cual es la diferencia entre un criminal y un delincuente",
		},

		media: {
			imagenPrincipal:
				"https://res.cloudinary.com/dwzbls5ib/image/upload/v1776887563/Observatorio_criminal_6_gazk9y.png",
			banner:
				"https://res.cloudinary.com/dwzbls5ib/image/upload/v1776887563/BannerArtPage_3_slo6hd.png",
			altImagen: "Ilustración",
		},

		resumen:
			"¿Los criminales nacen o se hacen? Entender el origen de la conducta delictiva no justifica el delito: permite prevenirlo y romper ciclos de violencia.",

		contenido: [
			{
				tipo: "subtitulo",
				variante: "introduccion",
				texto:
					"¿Los criminales nacen o se hacen? La pregunta sigue vigente, pero abre otra igual de relevante: ¿es lo mismo un criminal que un delincuente? Entender el origen de la conducta delictiva no justifica el delito; permite analizar sus matices, diferenciar perfiles y comprender qué hay detrás de cada caso para prevenir y romper ciclos de violencia.",
			},
			{
				tipo: "parrafo",
				texto:
					"Para comprender qué hay detrás de la mente de una persona que afecta gravemente a la sociedad mediante conductas reprochables, es necesario partir de una delimitación conceptual clara. En primer lugar, conviene definir qué es un delincuente. De acuerdo con el Diccionario de la Lengua Española, se trata de aquella persona que ha cometido un delito, entendido como una acción u omisión que infringe la ley penal de un Estado y que conlleva una sanción. En el ámbito jurídico se le denomina sujeto activo del delito; sin embargo, desde una perspectiva estrictamente legal, el término “delincuente” sólo es plenamente aplicable a quien ha sido declarado culpable mediante una sentencia firme tras un debido proceso. Antes de ello, se utilizan denominaciones como imputado, procesado o acusado, dependiendo la etapa procesal.",
			},
				{
				tipo: "parrafo",
				texto:
					"Desde la criminología, resulta fundamental distinguir entre los conceptos de delincuente y criminal, ya que, aunque en el lenguaje cotidiano suelen emplearse como sinónimos, existe una diferencia relevante. El delincuente es, en sentido estricto, quien comete un delito tipificado por la ley; en cambio, el término criminal suele asociarse a conductas de carácter violento que atentan contra bienes jurídicos fundamentales como la vida o la integridad, independientemente de su formal tipificación.",
			},
				{
				tipo: "parrafo",
				texto:
					"En el plano lingüístico, el Diccionario de la Real Academia Española define “criminal” como aquel que ha cometido o intentado cometer un crimen, vinculando el concepto con la noción de “impulso criminal”. Bajo esta óptica, y en relación con la teoría del iter criminis, es posible sostener que la cualidad de “criminal” puede proyectarse incluso desde fases tempranas del proceso delictivo. Es decir, desde la etapa de ideación —ubicada en la fase interna del delito— donde surge el pensamiento o la intención de delinquir, aunque esta aún no se haya materializado en una conducta punible.",
			},
				{
				tipo: "subtitulo",
				texto:
					"Fases y etapas del iter Criminis ",
			},
				{
				tipo: "parrafo",
				texto:
					"El análisis del iter criminis no solo permite clasificar jurídicamente las conductas, sino también entender el proceso evolutivo del delito. Mientras el Derecho penal interviene principalmente en la fase externa, la criminología amplía el enfoque hacia la fase interna, donde se gestan las verdaderas causas del comportamiento delictivo.",
			},
				{
				tipo: "subtitulo",
				texto:
					"Fase interna del iter criminis",
			},
				{
				tipo: "parrafo",
				texto:
					"La fase interna constituye el punto de partida del iter criminis y se desarrolla exclusivamente en el ámbito psíquico del individuo. En esta etapa no existe aún una manifestación externa de la conducta, por lo que, desde la óptica del Derecho penal, carece de relevancia jurídica y no es punible. Sin embargo, para la criminología, esta fase resulta crucial, ya que permite analizar los procesos cognitivos, emocionales y contextuales que dan origen a la conducta delictiva.",
			},
				{
				tipo: "parrafo",
				texto:
					"Las etapas que la integran son:",
			},
			{
				tipo: "lista",
				items: [
				"Ideación: Es el momento en que surge la idea delictiva. Puede originarse de manera espontánea o como resultado de factores estructurales (entorno social, exposición a violencia, necesidades económicas) o individuales (rasgos de personalidad, impulsividad, aprendizaje previo). Aquí se configura el primer esbozo del acto criminal.",
				"Deliberación: En esta etapa, el individuo desarrolla mentalmente el plan delictivo, valorando medios, oportunidades y posibles consecuencias. Es también el punto donde puede presentarse un conflicto interno entre normas, valores y deseos. La deliberación no siempre es racional; en muchos casos está influida por distorsiones cognitivas que justifican o minimizan la gravedad del acto.",
				"Decisión: Finalmente, el sujeto resuelve ejecutar la conducta. Este momento implica un quiebre en la inhibición moral o legal, consolidando la intención delictiva. Desde la criminología, este punto es clave porque marca la transición de la posibilidad al compromiso con la acción."	
				],
			},
				{
				tipo: "subtitulo",
				texto:
					"Fase externa del iter criminis",
			},
				{
				tipo: "parrafo",
				texto:
					"La fase externa inicia cuando la intención se traduce en conductas observables. A partir de este momento, los actos adquieren relevancia jurídica, ya que pueden ser perseguidos y sancionados por el sistema penal. Esta fase permite identificar con mayor claridad la peligrosidad, capacidad operativa y grado de desarrollo de la conducta delictiva.",
			},
				{
				tipo: "lista",
				items:[
				"Actos preparatorios: El sujeto comienza a materializar las condiciones necesarias para la comisión del delito (adquisición de herramientas, vigilancia de la víctima, planeación logística). Por regla general, estos actos no son punibles, salvo en casos específicos donde la ley los tipifica expresamente debido a su peligrosidad (por ejemplo, en delitos relacionados con terrorismo o delincuencia organizada).",
				"Ejecución (tentativa): Aquí se inicia directamente la realización del delito. La conducta ya se orienta de manera inequívoca hacia la consumación, aunque no se logre el resultado final por causas ajenas a la voluntad del autor. En esta etapa, el Derecho penal reconoce la tentativa como punible, dado que el bien jurídico ya ha sido puesto en riesgo.",
				"Consumación: Se produce cuando el delito se realiza plenamente y se actualizan todos los elementos del tipo penal. El resultado previsto por el autor se concreta, lo que da lugar a la responsabilidad penal completa y, generalmente, a sanciones más severas.",
				"Agotamiento: Esta fase va más allá de la consumación y se refiere al momento en que el autor obtiene el beneficio o satisface la finalidad que motivó el delito. Aunque no siempre tiene implicaciones jurídicas adicionales, resulta de gran interés criminológico, ya que permite comprender la motivación final del comportamiento y evaluar su posible repetición."	
				]
			},
			{
				tipo: "parrafo",
				texto:
					"Este entendimiento resulta fundamental para diseñar estrategias de prevención, ya que intervenir en las etapas tempranas —particularmente en la ideación y deliberación— puede evitar que la conducta llegue a materializarse, reduciendo así el impacto social del fenómeno criminal.",
			},
						{
				tipo: "subtitulo",
				texto:
					"Pero… ¿Cómo se forma un criminal?",
			},
						{
				tipo: "parrafo",
				texto:
					"Para la criminología y la política criminal, comprender el origen de la conducta delictiva no es un ejercicio meramente teórico, sino una necesidad estratégica. Anticipar las conductas antes de su materialización —incluso desde las primeras fases del iter criminis— representa una de las vías más efectivas para reducir los índices de violencia y delincuencia.",
			},
						{
				tipo: "parrafo",
				texto:
					"Esta cuestión nos remite inevitablemente al clásico debate: ¿los criminales nacen o se hacen? Aunque no existe una respuesta absoluta, hoy se reconoce que el comportamiento humano —incluido el delictivo— debe entenderse desde un enfoque bio-psico-social. Esto implica que la conducta antisocial no responde a una causa única, sino a la interacción dinámica de múltiples factores que, en conjunto, pueden favorecer su aparición.",
			},
						{
				tipo: "parrafo",
				texto:
					"Desde esta perspectiva, resulta más preciso afirmar que los criminales no nacen, sino que se configuran a lo largo de su desarrollo a partir de la convergencia de distintos elementos de riesgo.",
			},
						{
				tipo: "subtitulo",
				texto:
					"Dimensión biológica:",
			},
						{
				tipo: "parrafo",
				texto:
					" En este plano, se ha explorado la existencia de ciertas predisposiciones genéticas que pueden influir en la conducta, sin que ello implique determinismo. No existe un “gen del crimen”; sin embargo, sí se han identificado factores como variaciones en el gen MAOA —relacionado con la regulación de neurotransmisores como la serotonina— que, en interacción con entornos adversos, pueden aumentar la propensión a conductas agresivas. Asimismo, los procesos epigenéticos derivados de experiencias traumáticas (como el maltrato infantil o la exposición prolongada a la violencia) pueden modificar la expresión genética, incrementando la vulnerabilidad a respuestas impulsivas o violentas. En este sentido, la biología establece condiciones de posibilidad, pero es el entorno el que modula su expresión.",
			},
						{
				tipo: "parrafo",
				texto:
					"Otro elemento relevante es la predisposición a las adicciones (Trastornos por Consumo de Sustancias), cuya heredabilidad se estima entre un 30% y 70%. Esta vulnerabilidad puede traducirse en mayor riesgo de consumo, especialmente en individuos expuestos desde etapas tempranas, incluso durante la gestación. Si bien no es un factor determinante, sí constituye un componente de riesgo significativo al asociarse con conductas impulsivas y desinhibidas.",
			},
						{
				tipo: "subtitulo",
				texto:
					"Dimensión psicológica:",
			},
			{
				tipo: "parrafo",
				texto:
					"Las experiencias individuales, particularmente aquellas de carácter traumático, desempeñan un papel central en la configuración de la conducta. La ausencia de intervención o acompañamiento adecuado frente a estos eventos puede generar secuelas profundas: alteraciones en la regulación emocional, distorsiones cognitivas y dificultades en la construcción de vínculos sanos.",
			},
				{
				tipo: "parrafo",
				texto:
					"Esto puede manifestarse en patrones como baja tolerancia a la frustración, impulsividad, escasa empatía, egocentrismo o una tendencia a atribuir la responsabilidad de los conflictos a factores externos (extrapunición). En muchos casos, estas características no surgen de manera espontánea, sino como mecanismos de adaptación a entornos hostiles.",
			},
				{
				tipo: "subtitulo",
				texto:
					"Dimensión social:",
			},
				{
				tipo: "parrafo",
				texto:
					"Los factores sociales suelen actuar como los principales detonantes de la conducta delictiva. Entornos marcados por la violencia —ya sea en el ámbito familiar o comunitario— incrementan significativamente la probabilidad de reproducir estos patrones en la vida adulta, perpetuando ciclos intergeneracionales de violencia.",
			},
				{
				tipo: "parrafo",
				texto:
					"Asimismo, el contexto socioeconómico influye de manera relevante. La desigualdad, la exclusión social y la presión derivada de modelos de consumo pueden generar frustración y propiciar conductas anómicas, donde el individuo justifica medios ilegítimos para alcanzar objetivos socialmente valorados, como el éxito económico o el reconocimiento.",
			},
				{
				tipo: "subtitulo",
				texto:
					"El caso del “Monstruo de Ecatepec”",
			},
				{
				tipo: "parrafo",
				texto:
					"Para aterrizar los conceptos desarrollados, resulta pertinente analizar un caso paradigmático en México: el de Juan Carlos Hernández Bejar, quien junto a su pareja Patricia Martínez fue detenido en 2018 por su participación en el asesinato de una mujer, así como por el secuestro e intento de comercialización de su hija de dos meses de edad. A estos hechos se sumaron múltiples investigaciones que lo vincularon con entre 10 y 20 posibles feminicidios, además de declaraciones en las que ambos admitieron haber cometido actos de canibalismo contra algunas de sus víctimas.",
			},
				{
				tipo: "parrafo",
				texto:
					"Desde el punto de vista jurídico, no existe duda sobre su calidad de delincuentes: tras el proceso penal correspondiente, fueron encontrados culpables y condenados a penas acumulativas que superan los 300 años de prisión. Sin embargo, desde una perspectiva criminológica, conocer la sentencia resulta insuficiente. La pregunta central no es únicamente qué hicieron, sino por qué lo hicieron.",
			},
				{
				tipo: "parrafo",
				texto:
					"Responder a esta interrogante implica ir más allá de la fase interna del iter criminis, es decir, incluso antes de la ideación delictiva, para analizar los elementos que conformaron su estructura bio-psico-social. Comprender el origen de conductas tan extremas como el feminicidio serial o la antropofagia exige explorar la historia de vida del perpetrador y los factores que moldearon su desarrollo.",
			},
				{
				tipo: "parrafo",
				texto:
					"Dimensión biológica: ",
			},
				{
				tipo: "parrafo",
				texto:
					"Dentro de los antecedentes referidos por el propio sujeto, destaca un traumatismo craneoencefálico sufrido en la infancia tras una caída de considerable altura. Posteriormente, manifestó experimentar alucinaciones visuales y auditivas. Si bien un golpe en la cabeza no determina por sí mismo una conducta criminal, sí puede generar alteraciones neurológicas relevantes, especialmente si no recibe atención médica adecuada.",
			},
			{
				tipo: "parrafo",
				texto:
					"El posible daño en la corteza prefrontal —región encargada de funciones como la toma de decisiones, el control de impulsos, la planificación y la empatía— puede traducirse en una disminución de los frenos inhibitorios, favoreciendo conductas impulsivas, desorganizadas o violentas.",
			},
			{
				tipo: "parrafo",
				texto:
					"A esto se suma el consumo temprano de sustancias psicoactivas, como inhalantes, marihuana y cocaína durante la adolescencia, lo que pudo haber agravado la vulnerabilidad neuropsicológica.",
			},
			{
				tipo: "parrafo",
				texto:
					"Dimensión psicológica:",
			},
				{
				tipo: "parrafo",
				texto:
					"En este plano, sobresale un marcado conflicto con la figura materna. El propio Hernández Bejar manifestó un profundo odio hacia las mujeres, acompañado de amenazas explícitas de continuar agrediéndolas. Este discurso no puede entenderse de forma aislada.",
			},
			{
				tipo: "parrafo",
				texto:
					"En su relato, refiere experiencias de abandono, infidelidad por parte de su madre y, de manera particularmente relevante, abuso sexual durante la infancia por parte de una persona cercana. Estos eventos traumáticos, no atendidos, pueden generar distorsiones en la construcción de la identidad, la sexualidad y los vínculos afectivos.",
			},
			{
				tipo: "parrafo",
				texto:
					"La misoginia expresada podría interpretarse como una proyección de resentimiento, dolor y deseo de control frente a figuras femeninas asociadas a experiencias negativas, configurando así un patrón de violencia dirigido.",
			},
			{
				tipo: "subtitulo",
				texto:
					"Dimensión social:",
			},
			{
				tipo: "parrafo",
				texto:
					"En el ámbito social, su trayectoria refleja un proceso de exclusión y desestructuración. Presentó bajo rendimiento académico, abandono escolar y una inserción laboral precaria e inestable. Desde los 16 años se desvinculó de su núcleo familiar, lo que redujo aún más sus redes de apoyo.",
			},
			{
				tipo: "parrafo",
				texto:
					"Este tipo de trayectorias, caracterizadas por la marginalidad, la falta de oportunidades y la ausencia de contención institucional o comunitaria, incrementan la probabilidad de consolidar estilos de vida desviados, especialmente cuando convergen con factores biológicos y psicológicos de riesgo.",
			},
				{
				tipo: "parrafo",
				texto:
					"El caso del “Monstruo de Ecatepec” no debe analizarse desde el morbo o la excepcionalidad, sino como un ejemplo extremo de cómo la acumulación de factores de riesgo puede derivar en conductas altamente violentas.",
			},
			{
				tipo: "parrafo",
				texto:
					"No se trata de justificar el delito, sino de comprender sus causas. Solo a partir de este entendimiento es posible diseñar estrategias de prevención efectivas que actúen antes de la fase de ejecución del delito, interviniendo en contextos de vulnerabilidad, atendiendo traumas no resueltos y fortaleciendo los entornos sociales.",
			},
			{
				tipo: "parrafo",
				texto:
					"En última instancia, este caso refuerza una idea central a lo largo de la investigación: la conducta criminal no surge de manera espontánea ni aislada, sino que es el resultado de un proceso complejo y progresivo. Identificar ese proceso a tiempo es, quizá, la herramienta más poderosa para evitar que historias como esta se repitan.",
			},
		],

		referencias: [
			{
				autor: "Ressler, Robert",
				titulo: "Whoever Fights Monsters",
				año: 1992,
				fuente: "Libro",
				url: "",
			},
		],

		notas: [
			{
				id: 4,
				texto: "En México no existe un protocolo único nacional.",
			},
		],
	},
	{
		metadata: {
			id: "art-005",
			slug: "reclutamiento-forzado",
			titulo:
				"Reclutamiento forzado en México: cómo operan los grupos criminales y por qué atraen a jóvenes",
			categoria: {
				principal: "crimen-organizado",
				label: "Crimen Organizado",
			},
			etiquetas: [
				"narcotráfico",
				"crimen organizado",
				"cárteles",
				"delincuente",
				"sicario",
				"reclutamiento",
				"reclutamiento forzado"
			],
			fechaPublicacion: "2026-04-27",
			autor: "Perla Mondragón",
			tiempoLectura: 10,
			estado: "publicado",
		},

		clasificacion: {
			area: "Delincuencia en México",
			subarea: "Crimen organizado",
			nivel: "Divulgativo",
			region: "México",
		},

		seo: {
			metaTitle:
				"Reclutamiento forzado en México: cómo operan los grupos criminales y por qué atraen a jóvenes?",
			metaDescription:
				"cómo operan los grupos criminales",
		},

		media: {
			imagenPrincipal:
				"https://res.cloudinary.com/dwzbls5ib/image/upload/v1777310184/Observatorio_criminal_7_iofyvz.png",
			banner:
				"https://res.cloudinary.com/dwzbls5ib/image/upload/v1777310184/BannerArtPage_4_zeuwaq.png",
			altImagen: "Ilustración",
		},

		resumen:
			"El reclutamiento criminal no responde a un único método, detrás de las cifras existen historias que duelen",

		contenido: [
			{
				tipo: "subtitulo",
				variante: "introduccion",
				texto:
					"En México, hablar de violencia e inseguridad ha dejado de ser una exageración para convertirse en una realidad que, en muchos casos, supera la ficción. Entre estos fenómenos, el reclutamiento forzado por parte del crimen organizado se ha consolidado como uno de los más preocupantes y, al mismo tiempo, menos comprendidos."
			},
			{
				tipo: "parrafo",
				texto:
				"Detrás de las cifras existen historias que duelen: jóvenes que desaparecen tras acudir a una supuesta entrevista de trabajo, niños y adolescentes que son captados a través de videojuegos como Roblox o mediante redes sociales como TikTok, y comunidades enteras donde estas prácticas comienzan a volverse recurrentes. No se trata de casos aislados, sino de un patrón que evidencia la capacidad de adaptación de los grupos criminales y la vulnerabilidad de ciertos sectores de la población."
			},
				{
				tipo: "parrafo",
				texto:
				"Frente a este panorama, resulta inevitable cuestionarnos: ¿cómo funciona realmente el reclutamiento criminal en México?"
			},
					{
				tipo: "subtitulo",
				texto:
				"¿Qué es el reclutamiento forzado?"
			},
				{
				tipo: "parrafo",
				texto:
				"Cuando se habla de reclutamiento forzado en el contexto del crimen organizado, no se trata únicamente de la incorporación violenta de personas a estas estructuras. En realidad, el fenómeno es más complejo y opera en distintos niveles que van desde la coerción directa hasta formas más sutiles de captación."
			},
					{
				tipo: "parrafo",
				texto:
				"El reclutamiento forzado puede entenderse como el proceso mediante el cual una persona es obligada, engañada o presionada a integrarse a una organización criminal, ya sea a través de amenazas, violencia, manipulación o falsas promesas. Sin embargo, reducirlo únicamente al uso de la fuerza sería simplificar un problema que, en muchos casos, se construye a partir de condiciones sociales previas."
			},
				{
				tipo: "parrafo",
				texto:
				"En este sentido, es importante diferenciar tres formas principales de reclutamiento:"
			},
				{
				tipo: "lista",
				items: [
				"Reclutamiento forzado directo, donde existe privación de la libertad, amenazas o violencia física.",
				"Reclutamiento inducido, en el que la persona es manipulada mediante engaños, ofertas laborales falsas o promesas económicas.",
				"Reclutamiento normalizado, donde la integración al crimen ocurre en contextos donde la violencia y la ilegalidad forman parte de la vida cotidiana."
				],
			},
				{
				tipo: "parrafo",
				texto:
				"Esta distinción permite entender que no todas las víctimas llegan al crimen organizado por las mismas vías, pero sí comparten un elemento en común: la vulnerabilidad frente a estructuras que saben identificar, explotar y convertir esas condiciones en oportunidades de captación."
			},
				{
				tipo: "subtitulo",
				texto:
				"¿Cómo recluta el crimen organizado en México?"
			},
					{
				tipo: "parrafo",
				texto:
				"El reclutamiento criminal en México no responde a un único método. Por el contrario, se trata de un proceso dinámico que se adapta al contexto social, tecnológico y económico de las víctimas. Lejos de la idea tradicional del secuestro como única vía, hoy los grupos criminales combinan estrategias que van desde el engaño hasta la manipulación digital."
			},
				{
				tipo: "parrafo",
				texto:
				"Una de las formas más comunes es el engaño a través de ofertas laborales falsas. Jóvenes en búsqueda de empleo son contactados mediante redes sociales o plataformas de vacantes con propuestas atractivas: sueldos elevados, requisitos mínimos y contratación inmediata. Sin embargo, al acudir a entrevistas o puntos de encuentro, muchos son privados de la libertad y obligados a integrarse a actividades delictivas."
			},
					{
				tipo: "parrafo",
				texto:
				"Otra modalidad creciente es la captación mediante redes sociales y plataformas digitales. Aplicaciones como TikTok, Facebook o incluso espacios de interacción en videojuegos se han convertido en canales donde los reclutadores identifican perfiles vulnerables. A través de la construcción de confianza, promesas de dinero o sentido de pertenencia, logran establecer vínculos que posteriormente facilitan la incorporación al crimen organizado."
			},
				{
				tipo: "parrafo",
				texto:
				"También existe el reclutamiento por entorno social, donde amigos, familiares o conocidos que ya forman parte de estas estructuras funcionan como intermediarios. En comunidades donde la presencia del crimen organizado es constante, esta forma de captación tiende a normalizarse, diluyendo la percepción de riesgo."
			},
					{
				tipo: "parrafo",
				texto:
				"En los casos más extremos, se mantiene el uso de la violencia directa, mediante secuestros, amenazas o desplazamiento forzado. Estas prácticas suelen emplearse cuando los grupos necesitan cubrir funciones específicas o reforzar sus filas en contextos de conflicto."
			},
				{
				tipo: "parrafo",
				texto:
				"Lo que une a todas estas modalidades es su capacidad de adaptación. El crimen organizado no recluta al azar: identifica contextos de vulnerabilidad, detecta necesidades y construye estrategias a medida. Por ello, entender cómo operan estos mecanismos no solo permite dimensionar el problema, sino también visibilizar que detrás de cada caso existe una estructura que actúa de forma sistemática."
			},
					{
				tipo: "subtitulo",
				texto:
				"¿Por qué los jóvenes son el principal objetivo?"
			},
				{
				tipo: "parrafo",
				texto:
				"El reclutamiento criminal en México no es aleatorio. Los grupos delictivos no eligen a sus integrantes por casualidad, sino a partir de perfiles específicos que responden a condiciones de vulnerabilidad social, económica y emocional. En este contexto, los jóvenes se convierten en el principal objetivo."
			},
					{
				tipo: "parrafo",
				texto:
				"Una de las razones más evidentes es la falta de oportunidades reales. En muchas regiones del país, el acceso a empleo digno, educación de calidad o movilidad social es limitado. Frente a este panorama, las promesas de dinero rápido y estabilidad económica que ofrece el crimen organizado pueden resultar especialmente atractivas, sobre todo cuando las alternativas legales parecen inexistentes."
			},
				{
				tipo: "parrafo",
				texto:
				"A esto se suma la búsqueda de identidad y pertenencia, una característica propia de la etapa juvenil. Los grupos criminales no solo ofrecen ingresos, sino también reconocimiento, estatus y una aparente “familia”. Para muchos jóvenes que crecen en entornos de abandono o desintegración familiar, esta estructura puede llenar vacíos emocionales importantes."
			},
					{
				tipo: "parrafo",
				texto:
				"Otro factor clave es la normalización de la violencia. En comunidades donde la presencia del crimen organizado es constante, la ilegalidad deja de percibirse como una excepción y comienza a formar parte de la vida cotidiana. Esto reduce las barreras morales y facilita que la integración a estas dinámicas sea vista como una opción viable."
			},
				{
				tipo: "parrafo",
				texto:
				"Además, existe una alta exposición a contenidos que glorifican el delito, desde música hasta redes sociales, donde se proyecta una imagen distorsionada del estilo de vida criminal: poder, dinero, respeto. Esta narrativa influye en la percepción de riesgo y contribuye a que el ingreso a estas estructuras no siempre se perciba como una amenaza inmediata."
			},
					{
				tipo: "parrafo",
				texto:
				"Finalmente, los jóvenes representan un recurso funcional para el crimen organizado: son más fáciles de influir, tienen mayor capacidad de adaptación y, en muchos casos, son considerados reemplazables. Esta lógica utilitaria revela una de las dimensiones más crudas del problema: las personas no son vistas como individuos, sino como piezas dentro de una estructura."
			},
				{
				tipo: "parrafo",
				texto:
				"Entender por qué los jóvenes son el principal objetivo no implica justificar su participación, sino reconocer que el reclutamiento criminal se construye sobre condiciones estructurales que van mucho más allá de una decisión individual."
			},
					{
				tipo: "subtitulo",
				texto:
				"Factores que facilitan el reclutamiento criminal en México"
			},
				{
				tipo: "parrafo",
				texto:
				"El reclutamiento criminal no surge de manera aislada ni espontánea. Por el contrario, se sostiene sobre una serie de condiciones estructurales que crean el entorno propicio para que estas prácticas se desarrollen, se repitan y se perfeccionen con el tiempo."
			},
					{
				tipo: "parrafo",
				texto:
				"Uno de los factores más determinantes es la desigualdad social y la exclusión económica. En contextos donde amplios sectores de la población carecen de acceso a empleo formal, educación o servicios básicos, el crimen organizado encuentra terreno fértil para ofrecer alternativas que, aunque ilegales, parecen resolver necesidades inmediatas. Esta lógica no solo facilita la captación, sino que también reduce la resistencia a integrarse a estas estructuras."
			},
				{
				tipo: "parrafo",
				texto:
				"A ello se suma la debilidad institucional. La falta de presencia efectiva del Estado en ciertas regiones, así como la desconfianza hacia las autoridades, limita la capacidad de prevención y respuesta. Cuando las instituciones no logran garantizar seguridad, justicia o desarrollo, el crimen organizado ocupa esos vacíos, no solo como actor delictivo, sino también como figura de control territorial."
			},
					{
				tipo: "parrafo",
				texto:
				"Otro elemento clave es la desintegración del tejido social. Entornos marcados por violencia intrafamiliar, abandono, consumo de sustancias o falta de redes de apoyo generan condiciones de vulnerabilidad que pueden ser explotadas por los grupos criminales. En estos contextos, el reclutamiento no se percibe como una ruptura, sino como una continuidad del entorno."
			},
				{
				tipo: "parrafo",
				texto:
				"La impunidad también juega un papel central. La baja probabilidad de sanción frente a delitos relacionados con el reclutamiento, desaparición o trata de personas envía un mensaje claro: estas prácticas pueden llevarse a cabo con consecuencias limitadas. Esto no solo incentiva su repetición, sino que permite su expansión."
			},

					{
				tipo: "parrafo",
				texto:
				"Asimismo, la adaptación tecnológica del crimen organizado ha transformado las formas de captación. El uso de redes sociales, plataformas digitales y espacios virtuales permite ampliar el alcance del reclutamiento, reducir riesgos para los perpetradores y acceder a perfiles cada vez más diversos."
			},
				{
				tipo: "parrafo",
				texto:
				"Finalmente, la normalización cultural de la violencia y la ilegalidad actúa como un factor transversal. Cuando el delito se integra en la vida cotidiana, ya sea a través de discursos, prácticas o representaciones sociales, se debilitan los mecanismos de rechazo colectivo y se facilita la reproducción de estas dinámicas."
			},
					{
				tipo: "parrafo",
				texto:
				"En conjunto, estos factores no solo explican por qué ocurre el reclutamiento criminal, sino también por qué resulta tan difícil de erradicar. No se trata de un problema individual, sino de un fenómeno que se construye y se sostiene desde múltiples dimensiones."
			},
				{
				tipo: "subtitulo",
				texto:
				"Consecuencias reales del reclutamiento criminal"
			},
				{
				tipo: "parrafo",
				texto:
				"Hablar del reclutamiento criminal sin abordar sus consecuencias sería perpetuar una visión incompleta del fenómeno. Lejos de las narrativas que lo presentan como una vía rápida hacia el dinero o el poder, la realidad es considerablemente más cruda."
			},
				{
				tipo: "parrafo",
				texto:
				"Para quienes son reclutados, las posibilidades de salir de estas estructuras son mínimas. En muchos casos, las personas son utilizadas para realizar actividades de alto riesgo como vigilancia, transporte de drogas o participación directa en actos violentos. Esto las convierte en objetivos constantes, tanto de grupos rivales como de las propias organizaciones a las que pertenecen."
			},
				{
				tipo: "parrafo",
				texto:
				"La violencia interna es otro elemento frecuente. El control dentro de estos grupos suele ejercerse mediante castigos extremos, amenazas o ejecuciones, especialmente cuando existe desobediencia, errores o intentos de escape. En este sentido, quienes son reclutados no solo enfrentan riesgos externos, sino también dentro de la propia estructura criminal."
			},
				{
				tipo: "parrafo",
				texto:
				"A ello se suma una lógica de reemplazo constante. Las personas reclutadas son vistas como recursos desechables, lo que implica que su vida útil dentro de la organización puede ser corta. Esta dinámica explica, en parte, la necesidad permanente de captar nuevos integrantes."
			},
				{
				tipo: "parrafo",
				texto:
				"En el plano social, las consecuencias trascienden al individuo. Familias enteras quedan marcadas por la desaparición, la violencia o la estigmatización. Comunidades completas experimentan un deterioro progresivo del tejido social, donde el miedo, la desconfianza y la normalización del delito se vuelven parte de la vida cotidiana."
			},
				{
				tipo: "parrafo",
				texto:
				"Así, el reclutamiento criminal no solo destruye trayectorias individuales, sino que reproduce ciclos de violencia que afectan de manera profunda y sostenida a la sociedad."
			},
					{
				tipo: "subtitulo",
				texto:
				"¿Se puede prevenir el reclutamiento criminal?"
			},
				{
				tipo: "parrafo",
				texto:
				"Abordar el reclutamiento criminal desde la prevención implica reconocer que no existe una solución única ni inmediata. Se trata de un fenómeno complejo que requiere estrategias integrales capaces de intervenir en los distintos niveles donde se origina y se reproduce."
			},
				{
				tipo: "parrafo",
				texto:
				"En primer lugar, es fundamental fortalecer las condiciones sociales y económicas. El acceso a educación, empleo digno y oportunidades reales de desarrollo reduce significativamente la vulnerabilidad frente a las estrategias de captación del crimen organizado. No se trata solo de ofrecer alternativas, sino de hacerlas viables y sostenibles."
			},
				{
				tipo: "parrafo",
				texto:
				"La reconstrucción del tejido social es otro eje clave. Espacios comunitarios, redes de apoyo y entornos familiares estables funcionan como factores de protección frente al reclutamiento. Cuando existen vínculos sólidos, la probabilidad de que una persona sea captada disminuye considerablemente."
			},
				{
				tipo: "parrafo",
				texto:
				"Asimismo, es necesario reforzar la presencia institucional y la confianza en las autoridades. Sin mecanismos efectivos de denuncia, protección y justicia, cualquier estrategia preventiva pierde fuerza. La impunidad no solo permite que el problema continúe, sino que lo normaliza."
			},
				{
				tipo: "parrafo",
				texto:
				"En el ámbito digital, se vuelve urgente desarrollar estrategias de prevención y concientización. Informar sobre las formas de reclutamiento en redes sociales, identificar señales de riesgo y promover el uso seguro de plataformas digitales son medidas cada vez más necesarias, especialmente entre jóvenes."
			},
				{
				tipo: "parrafo",
				texto:
				"Finalmente, la prevención también pasa por una transformación cultural. Cuestionar las narrativas que glorifican la violencia y el crimen, así como promover referentes alternativos, es fundamental para debilitar el atractivo simbólico de estas estructuras."
			},
				{
				tipo: "parrafo",
				texto:
				"Prevenir el reclutamiento criminal no es una tarea sencilla ni de corto plazo. Sin embargo, entender cómo funciona, por qué ocurre y cuáles son sus consecuencias es un primer paso indispensable para enfrentarlo de manera más efectiva."
			},
		],

		referencias: [
			{
				autor: "Ressler, Robert",
				titulo: "Whoever Fights Monsters",
				año: 1992,
				fuente: "Libro",
				url: "",
			},
		],

		notas: [
			{
				id: 5,
				texto: "En México no existe un protocolo único nacional.",
			},
		],
	},
];
