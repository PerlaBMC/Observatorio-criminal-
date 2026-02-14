import { terms } from "../../../data/terms";
import styles from "../terminos.module.css";

export default function Term({ params }) {
	const t = terms.find((x) => x.slug === params.slug);
	return (
		<>
			<div className={styles.terminosPage}>
				<h2>{t?.titulo}</h2>
                <hr />
                <section className={styles.terminosBanner}>
                <img src={t?.imagenBanner} alt="" />
                </section>
				<section className={styles.seccionArt}>
                <h3>{t?.definicion}</h3> <br />
                <p>{t?.parrafoUno}</p> <br />
                <p>{t?.parrafoDos}</p> <br />
                <p>{t?.parrafoTres}</p> <br />
                <h4>{t?.subtitulo}</h4>
                <p>{t?.parrafoCuatro}</p> <br />
                <p>{t?.parrafoCinco}</p> <br />
                <h4>{t?.subtituloDos}</h4>
                <p>{t?.parrafoSeis}</p> <br />
                <p>{t?.parrafoSiete}</p> <br />
                <h4>{t?.subtituloTres}</h4>
                <p>{t?.parrafoOcho}</p> <br />
                </section>
                <section className={styles.botonAtras}>
                <p><a href="/">Atrás</a></p>
                </section>
			</div>
		</>
	);
}
