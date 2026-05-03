import Link from "next/link";
import { articulos } from "../../data/articulo";
import styles from "./investigacion.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function InvestigacionPage() {
	const destacado = articulos[0];

	const categoriasUnicas = [
		...new Map(
			articulos.map((art) => [
				art.metadata.categoria.principal,
				art.metadata.categoria,
			])
		).values(),
	];

	return (
		<section className={styles.page}>
			{/* HERO */}
			<div className={styles.hero}>
				<span className={styles.tag}>Observatorio Criminal</span>

				<h1>Investigación criminológica</h1>

				<p>
					Análisis especializados sobre violencia,
					criminalidad, crimen organizado, prevención
					del delito y seguridad pública.
				</p>
			</div>

			{/* DESTACADO */}
			<section className={styles.destacado}>
				<div className={styles.destacadoImage}>
					<img
						src={destacado.media.imagenPrincipal}
						alt={destacado.metadata.titulo}
					/>
				</div>

				<div className={styles.destacadoContent}>
					<span>
						{destacado.metadata.categoria.label}
					</span>

					<h2>{destacado.metadata.titulo}</h2>

					<p>{destacado.seo.metaDescription}</p>

					<Link
						href={`/articulos/${destacado.metadata.slug}`}
					>
						Leer investigación <FaArrowRight />
					</Link>
				</div>
			</section>

			{/* CATEGORÍAS */}
			<section className={styles.categorias}>
				<h2>Explorar por categoría</h2>

				<div className={styles.gridCategorias}>
					{categoriasUnicas.map((cat) => (
						<Link
							key={cat.principal}
							href={`/categoria/${cat.principal}`}
							className={styles.catCard}
						>
							<h3>{cat.label}</h3>
						</Link>
					))}
				</div>
			</section>

			{/* TODAS */}
			<section className={styles.articulos}>
				<h2>Investigaciones recientes</h2>

				<div className={styles.grid}>
					{articulos.map((art) => (
						<Link
							key={art.metadata.id}
							href={`/articulos/${art.metadata.slug}`}
							className={styles.card}
						>
							<img
								src={art.media.imagenPrincipal}
								alt={art.metadata.titulo}
							/>

							<div className={styles.cardContent}>
								<span>
									{
										art.metadata.categoria
											.label
									}
								</span>

								<h3>
									{art.metadata.titulo}
								</h3>

								<p>
									{
										art.seo
											.metaDescription
									}
								</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* EDITORIAL */}
			<section className={styles.editorial}>
				<h2>Compromiso editorial</h2>

				<p>
					Los contenidos publicados en esta
					sección tienen fines exclusivamente
					informativos, analíticos y académicos.
					Su propósito es contribuir a la
					comprensión crítica de los fenómenos
					delictivos desde una perspectiva
					criminológica.
				</p>
			</section>
		</section>
	);
}