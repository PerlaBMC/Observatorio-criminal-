import Link from "next/link";
import styles from "./articuloCard.module.css";
import { FaBrain } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdLocalPolice } from "react-icons/md";
import { PiFolderLockFill } from "react-icons/pi";
import { SiMinds } from "react-icons/si";

export default function ArticuloCard({ articulo }) {
	const { metadata, media, resumen, categoria } = articulo;

	const iconosCategoria = {
		"investigacion-criminologica": <FaBrain />,
		"psicologia-criminal": <SiMinds />,
		"crimen-organizado": <GiSkills />,
		"casos-reales": <PiFolderLockFill />,
		"seguridad-publica": <MdLocalPolice />,
	};

	return (
		<div className={styles.cardContainer}>
			<Link href={`/articulos/${metadata.slug}`} className={styles.cardLink}>
				{/* IMAGEN */}
				<div className="imageWrapper">
					<img
						src={media.imagenPrincipal}
						alt={media.altImagen}
						className={styles.cardImage}
					/>
				</div>

				{/* CONTENIDO */}
				<div className={styles.cardContent}>
					<h3 className={styles.cardTitle}>{metadata.titulo}</h3>

					<p className={styles.cardDescription}>{resumen}</p>

					<div className={styles.cardMeta}>
						{/* <span>{metadata.autor}</span>
                <span>•</span> */}

						<span className={styles.icon}>
							{iconosCategoria[metadata.categoria.principal] || "◉"}
						</span>

						<span>{metadata.fechaPublicacion}</span>
						<span>•</span>
						<span>{metadata.tiempoLectura} min</span>

						{/*  <span className={styles.categoryBadge}>
            {metadata.categoria.label}
          </span>  */}
					</div>
				</div>
			</Link>
		</div>
	);
}
