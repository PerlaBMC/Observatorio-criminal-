import { articulos } from "../../../data/articulo";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./articuloPage.module.css"

export default function ArticuloPage({ params }) {
  const articulo = articulos.find(
    (a) => a.metadata.slug === params.slug
  );
  if (!articulo) return notFound();

  const { metadata, media, contenido } = articulo;
  const slug = metadata.slug;

  // 🔥 Artículos relacionados (misma categoría, excluyendo el actual)
  const relacionados = articulos.filter(
    (a) =>
      a.metadata.categoria.principal === metadata.categoria.principal &&
      a.metadata.slug !== slug
  ).slice(0, 3);

  const currentUrl = `https://tusitio.com/articulos/${slug}`; 
  // 

  return (
    <article className={styles.articleWrapper}>

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.mainContent}>
        
        <h1 className={styles.title}>
          {metadata.titulo}
        </h1>

        <div className={styles.meta}>
          <span className={styles.category}>
            {metadata.categoria.label}
          </span>
          <span>{metadata.fechaPublicacion}</span>
          <span>•</span>
          <span>{metadata.tiempoLectura} minutos</span>
        </div> 

        <div className={styles.imageWrapper}>
          <img src={media.banner} alt={metadata.titulo} className={styles.heroImage}/>
        </div>

        <div className={styles.content}>
          {contenido.map((bloque, index) => {
            if (bloque.tipo === "parrafo") {
              return (
                <p key={index} className={styles.paragraph}>
                  {bloque.texto}
                </p>
              );
            }

            if (bloque.tipo === "subtitulo") {
              return (
                <h2 key={index} className={styles.subtitle}>
                  {bloque.texto}
                </h2>
              );
            }

            if (bloque.tipo === "lista") {
              return (
                <ul key={index} className={styles.list}>
                  {bloque.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>

        {/* 🔗 BOTONES COMPARTIR */}
        <div className={styles.shareSection}>
          <p>Compartir:</p>

          <div className={styles.shareButtons}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
              target="_blank"
            >
              Facebook
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${metadata.titulo}`}
              target="_blank"
            >
              Twitter
            </a>

            <a
              href={`https://wa.me/?text=${metadata.titulo} ${currentUrl}`}
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      {/* SIDEBAR */}
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarTitle}>
          Artículos Relacionados
        </h3>

        {relacionados.map((rel) => (
          <Link
            key={rel.slug}
            href={`/articulos/${rel.slug}`}
            className={styles.relatedCard}
          >
            <p>{rel.metadata.titulo}</p>
          </Link>
        ))}
      </aside>

    </article>
  );
}