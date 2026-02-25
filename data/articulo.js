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
        "violencia"
      ],
      fechaPublicacion: "2026-02-15",
      autor: "Perla Mondragón",
      tiempoLectura: 8 ,
      estado: "publicado"
    },

    clasificacion: {
      area: "Delincuencia organizada",
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
      banner: "https://res.cloudinary.com/dujrua0vo/image/upload/v1771732390/BannerArtPage_rv73cw.png",
      altImagen: "Ilustración conceptual de perfilación criminal"
    },

    resumen:
      "La perfilación criminal revela cómo los patrones de comportamiento, el modus operandi y el contexto social ayudan a entender al agresor",

    contenido: [
      {
        tipo: "subtitulo",
        variante: "introduccion",
        texto: "La perfilación criminal en México: qué es, hasta dónde llega y cómo se aplica en la práctica."
      },
      {
        tipo: "parrafo",
        texto: "La perfilación criminal es una técnica de investigación criminológica derivada del análisis que se realiza a los diferentes patrones conductuales en los agresores conocidos y así auxiliar en la resolución de crímenes en los casos donde se desconoce al responsable."
      },
      {
        tipo: "subtitulo",
        texto: "Alcances reales"
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
