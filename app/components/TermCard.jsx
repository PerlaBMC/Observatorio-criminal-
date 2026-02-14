import styles from "./termCard.module.css";

export default function TermCard({ term }) {
	return (
		<>
			<div className={styles.cardStyle}>
                <img src={term.imagen} alt="" className={styles.cardImg}/>
				<h3>{term.titulo}</h3>
                <h4>{term.introduccion}</h4>
                <p>{term.resumen}</p>
				<a href={"/terminos/" + term.slug}>Ver más...</a>
			</div>
		</>
	);
}
