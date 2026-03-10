import { notFound } from "next/navigation";
import Link from "next/link";
import { terminos } from "../../../data/terminos";
import { articulos } from "../../../data/articulo";
import styles from "./terminosSlug.module.css";

export default function TerminoPage({ params }) {
	const termino = terminos.find((t) => t.slug === params.slug);

	if (!termino) return notFound();

	// 🔥 Buscar artículos relacionados por etiquetas
	const articulosRelacionados = articulos.filter((art) =>
		art.metadata?.etiquetas?.some((etiqueta) =>
			etiqueta.toLowerCase().includes(termino.nombre.toLowerCase()),
		),
	);

	return (
		<article className={styles.container}>
			<h1 className={styles.title}>{termino.nombre}</h1>

			<div className={styles.meta}>
				<span>{termino.categoria}</span>
				<span>•</span>
				<span>{termino.nivel}</span>
			</div>

			<p className={styles.definition}>{termino.definicion}</p>

			{termino.ejemplos?.length > 0 && (
				<>
					<h2 className={styles.subtitle}>Ejemplos</h2>
					<ul className={styles.list}>
						{termino.ejemplos.map((ej, i) => (
							<li key={i}>{ej}</li>
						))}
					</ul>
				</>
			)}

			{termino.referencias?.length > 0 && (
				<>
					<h2 className={styles.subtitle}>Referencias</h2>
					<ul className={styles.list}>
						{termino.referencias.map((ref, i) => (
							<li key={i}>{ref}</li>
						))}
					</ul>
				</>
			)}

			{/* 🔎 ARTÍCULOS RELACIONADOS */}
			{articulosRelacionados.length > 0 && (
				<>
					<h2 className={styles.subtitle}>Artículos relacionados</h2>

					<ul className={styles.list}>
						{articulosRelacionados.map((art) => (
							<li key={art.metadata.slug}>
								<Link
									href={`/articulos/${art.metadata.slug}`}
									className={styles.linkArt}
								>
									{art.metadata.titulo}
								</Link>
							</li>
						))}
					</ul>
					<div className={styles.botonAtras}>
						<a href="/">Atrás</a>
					</div>
				</>
			)}
		</article>
	);
}
