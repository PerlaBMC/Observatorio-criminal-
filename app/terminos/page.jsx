import Link from "next/link";
import { terminos } from "../../data/terminos";
import styles from "./terminos.module.css";

export default function TerminosPage() {
	return (
		<section className={styles.container}>
			<h1 className={styles.title}>Glosario Criminológico</h1>

			<div className={styles.grid}>
				{terminos.map((termino) => (
					<Link
						key={termino.slug}
						href={`/terminos/${termino.slug}`}
						className={styles.card}
					>
						<h3 className={styles.cardTitle}>{termino.nombre}</h3>

						<span className={styles.badge}>{termino.categoria}</span>

						<p className={styles.cardDescription}>{termino.definicionCorta}</p>

						<span className={styles.level}>Nivel: {termino.nivel}</span>
					</Link>
				))}
			</div>
			<div className={styles.botonAtras}>
				<a href="/">Atrás</a>
			</div>
		</section>
	);
}
