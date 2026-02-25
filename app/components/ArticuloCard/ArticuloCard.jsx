import Link from "next/link";
import styles from "./articuloCard.module.css";

export default function ArticleCard({ articulo }) {
	const { metadata, media, resumen } = articulo;

	return (
		<article className={styles.cardContainer}>
			<Link href={`/articulos/${metadata.slug}`} className={styles.cardLink}>
				<div className={styles.imageWrapper}>
					<img
						src={media.imagenPrincipal}
						alt={metadata.titulo}
						className={styles.cardImage}
					/>
					<span className={styles.categoryBadge}>
						{metadata.categoria.label}
					</span>
				</div>
				<div className={styles.cardContent}>
					<h3 className={styles.cardTitle}>{metadata.titulo}</h3>

					<p className={styles.cardDescription}>{resumen}</p>

					<div className={styles.cardMeta}>
						<span>{metadata.fechaPublicacion}</span>
						<span> • </span>
						<span>{metadata.tiempoLectura} minutos</span>
					</div>
				</div>
			</Link>
		</article>
	);
}
