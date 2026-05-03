import ArticuloCard from "./components/ArticuloCard/ArticuloCard";
import Categorias from "./categoria/Categorias";
import { articulos } from "../data/articulo"; 
import styles from "./homePage.module.css";
import Equipo from "./components/Equipo/Equipo";
import Link from "next/link";

export default function Home() {

  const principal = articulos.find(
    (art) => art.metadata.slug === "criminal-o-delincuente"
  );

  const destacado = articulos.find(
    (art) => art.metadata.slug === "perfilacion-criminal"
  );

  const otrosArticulos = articulos.filter(
    (art) => art.metadata.slug !== "criminal-o-delincuente" && art.metadata.slug !== "perfilacion-criminal"
  );

  const recientes = otrosArticulos.slice(0, 6);

  return (
    <div className={styles.homeDiv}>

      {/* HERO EDITORIAL */}
      {principal && (
        <section
          className={styles.hero}
          style={{
            backgroundImage: `url(${principal.media.banner})`,
          }}
        >
          <div className={styles.heroOverlay}>
            
            <span className={styles.heroCategory}>
              {principal.metadata.categoria.label}
            </span>

            <h1>
              {principal.metadata.titulo}
            </h1>

            <p>
              {principal.resumen}
            </p>

            <Link
              href={`/articulos/${principal.metadata.slug}`}
              className={styles.cta}
            >
              Leer investigación
            </Link>
          </div>
        </section>
      )}


      {/* DESTACADO PRO */}
      {destacado && (
        <section className={styles.destacadoSection}>
          <div className={styles.destacadoGrid}>

            <img
              src={destacado.media.imagenPrincipal}
              alt={destacado.media.altImagen}
            />

            <div>
              <span className={styles.badge}>
                Artículo destacado
              </span>

              <h2>{destacado.metadata.titulo}</h2>

              <p>{destacado.resumen}</p>

              <div className={styles.meta}>
                <span>{destacado.metadata.fechaPublicacion}</span>
                <span>•</span>
                <span>{destacado.metadata.tiempoLectura} min</span>
              </div>

              <Link href={`/articulos/${destacado.metadata.slug}`}>
                <button className={styles.button}>
                  Leer artículo completo
                </button>
              </Link>
            </div>

          </div>
        </section>
      )}


      {/* GRID PRINCIPAL */}
      <section className={styles.section}>
        <h2>Últimos análisis</h2>

        <div className={styles.cardGrid}>
          {recientes.map((articulo) => (
            <ArticuloCard
              key={articulo.metadata.id}
              articulo={articulo}
            />
          ))}
        </div>
      </section>


      {/* BLOQUE EDITORIAL */}
      <section className={styles.bannerInf}>
        <div className={styles.bannerContent}>
          <h2>Entender la criminología es entender la sociedad</h2>

          <p>
            Este espacio analiza la criminalidad desde una perspectiva estructural,
            evitando el sensacionalismo y promoviendo el conocimiento.
          </p>
        </div>
      </section>

      <Categorias articulos={articulos} />
      <Equipo/>

    </div>
  );
}