import Link from "next/link";
import { articulos } from "../../../data/articulo";
import styles from "./categoria.module.css";

export default function CategoriaPage({ params }) {
	const { slug } = params;

	const articulosCategoria = articulos.filter(
		(art) => art.metadata.categoria.principal === slug,
	);

	if (!articulosCategoria.length) {
		return (
			<section className={styles.empty}>
				<h1>Categoría no encontrada</h1>
				<Link href="/">Volver al inicio</Link>
			</section>
		);
	}

	const categoriaLabel = articulosCategoria[0].metadata.categoria.label;

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.header}>
					<span className={styles.tag}>Categoría</span>
					<h1>{categoriaLabel}</h1>
					<p>Análisis especializadas sobre {categoriaLabel.toLowerCase()}.</p>
				</div>

				<div className={styles.grid}>
					{articulosCategoria.map((articulo) => (
						<Link
							key={articulo.metadata.id}
							href={`/articulos/${articulo.metadata.slug}`}
							className={styles.card}
						>
							<img
								src={articulo.media.imagenPrincipal}
								alt={articulo.media.altImagen}
							/>

							<div className={styles.cardContent}>
								<span className={styles.category}>
									{articulo.metadata.categoria.label}
								</span>

								<h2>{articulo.metadata.titulo}</h2>

								<p>{articulo.seo.metaDescription}</p>

								<div className={styles.meta}>
									<span>{articulo.metadata.fechaPublicacion}</span>
									<span>{articulo.metadata.tiempoLectura} min</span>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
