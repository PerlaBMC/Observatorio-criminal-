import { articulos } from "../../../data/articulo";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./articuloPage.module.css";
import { FaFacebookSquare, FaLinkedin, FaBook } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareWhatsapp } from "react-icons/fa6";

export default function ArticuloPage({ params }) {
	const slugParam = Array.isArray(params.slug)
		? params.slug[0]
		: params.slug;

	const normalize = (str) => str?.toLowerCase().trim();

	const articulo = articulos.find(
		(a) => normalize(a.metadata.slug) === normalize(slugParam)
	);

	if (!articulo) return notFound();

	const { metadata, media, contenido } = articulo;
	const slug = metadata.slug;

	const relacionados = articulos
		.filter(
			(a) =>
				a.metadata.categoria.principal ===
					metadata.categoria.principal &&
				normalize(a.metadata.slug) !== normalize(slug)
		)
		.slice(0, 3);

	const currentUrl = `https://observatorio-criminal.vercel.app/articulos/${slug}`;

	return (
		<article className={styles.articleWrapper}>
			<div className={styles.mainContent}>

				{/* BREADCRUMB */}
				<div className={styles.breadcrumb}>
					<Link href="/">Inicio</Link>
					<span>/</span>
					<Link href={`/categoria/${metadata.categoria.principal}`}>
						{metadata.categoria.label}
					</Link>
					<span>/</span>
					<span>{metadata.titulo}</span>
				</div>

				<h1 className={styles.title}>{metadata.titulo}</h1>

				<div className={styles.meta}>
					<span className={styles.category}>
						{metadata.categoria.label}
					</span>
					<span>{metadata.fechaPublicacion}</span>
					<span>•</span>
					<span>{metadata.tiempoLectura} min lectura</span>
					<span>•</span>
					<span>Equipo editorial</span>
				</div>

				<div className={styles.imageWrapper}>
					<img
						src={media.banner}
						alt={metadata.titulo}
						className={styles.heroImage}
					/>
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

				{/* SHARE */}
				<div className={styles.shareSection}>
					<p>Compartir análisis</p>

					<div className={styles.shareButtons}>
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookSquare />
						</a>

						<a
							href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${metadata.titulo}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaSquareXTwitter />
						</a>

						<a
							href={`https://wa.me/?text=${metadata.titulo} ${currentUrl}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaSquareWhatsapp />
						</a>

						<a
							href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>

				{/* CTA */}
				<div className={styles.ctaBox}>
					<h3>Explora más investigaciones</h3>
					<Link href={`/categoria/${metadata.categoria.principal}`}>
						Ver más artículos
					</Link>
				</div>

				<div className={styles.botonAtras}>
					<Link href="/">Volver al inicio</Link>
				</div>
			</div>

			{/* SIDEBAR */}
			<aside className={styles.sidebar}>
				<h3 className={styles.sidebarTitle}>
					Artículos relacionados
				</h3>

				{relacionados.map((rel) => (
					<Link
						key={rel.metadata.slug}
						href={`/articulos/${rel.metadata.slug}`}
						className={styles.relatedCard}
					>
						<p>
							<FaBook className={styles.bookIcon} />
							{rel.metadata.titulo}
						</p>
					</Link>
				))}
			</aside>
		</article>
	);
}