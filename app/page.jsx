import ArticuloCard from "./components/ArticuloCard/ArticuloCard";
import { articulos } from "../data/articulo"; 
import styles from "./homePage.module.css";

export default function Home() {

  const populares = articulos.slice(0, 3);
  const recientes = articulos.slice(3, 6);

  return (
    <div className={styles.homeDiv}>

      {/* Banner principal */}
      <section className={styles.bannerHome}>
        <div className={styles.h1Div}>
          <h2>
            La información es la herramienta más poderosa contra la criminalidad
          </h2>
        </div>
      </section>


      {/* Términos populares */}
      <div className={styles.cardContainer}>
      {populares.map((articulo) => (
          <ArticuloCard
            key={articulo.metadata.slug}
            articulo={articulo}
          />
        ))}
      </div>

      {/* Banner informativo */}
      <section className={styles.bannerInf}>
        <hr />
        <h2>
          Somos un espacio para entender la criminología más allá del delito
        </h2>
        <h3>
          Nos dedicamos al análisis, investigación y divulgación para quienes
          buscan comprender la violencia, la seguridad y sus causas desde una
          mirada crítica y responsable.
        </h3>
        <hr />
      </section>
      <div className={styles.cardContainer}>
      {recientes.map((articulo) => (
          <ArticuloCard
            key={articulo.metadata.slug}
            articulo={articulo}
          />
        ))}
      </div>


    </div>
  );
}
