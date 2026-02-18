import styles from "./termCard.module.css";

export default function TermCard({ term }) {
	return (
		<>
			<div className={styles.cardStyle}>
			<a href={"/terminos/" + term.slug}>
                <img src={term.imagen} alt="" className={styles.cardImg}/>
				<h3>{term.titulo}</h3>
                <h4>{term.introduccion}</h4>
                <p>{term.resumen}</p>
				<div className={styles.botonMas}><p className={styles.verMas}>Ver más...</p></div></a>
			</div>
		</>
	);
}
