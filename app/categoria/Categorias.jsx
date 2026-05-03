import Link from "next/link";
import styles from "./categorias.module.css";
import { FaBrain } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdLocalPolice } from "react-icons/md";
import { PiFolderLockFill } from "react-icons/pi";
import { SiMinds } from "react-icons/si";


export default function Categorias({ articulos }) {
	// Obtener categorías únicas
	const categoriasUnicas = [
		...new Map(
			articulos.map((art) => [
				art.metadata.categoria.principal,
				art.metadata.categoria,
			])
		).values(),
	];

const iconosCategoria = {
	"investigacion-criminologica": <FaBrain/>,
	"psicologia-criminal": <SiMinds/>,
	"crimen-organizado": <GiSkills/>,
	"casos-reales": <PiFolderLockFill/>,
	"seguridad-publica": <MdLocalPolice/>,
};
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Explorar temas</h2>


<div className={styles.grid}>
	{categoriasUnicas.map((cat) => (
		<Link
			key={cat.principal}
			href={`/categoria/${cat.principal}`}
			className={styles.card}
		>
			<span className={styles.icon}>
				{iconosCategoria[cat.principal] || "◉"}
			</span>

			<h3>{cat.label}</h3>
		</Link>
	))}
</div>
			</div>
		</section>
	);
}