import Link from "next/link";
import { articulos } from "data/articulo";
import styles from "./navDropdown.module.css";
import { FaBrain } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { MdLocalPolice } from "react-icons/md";
import { PiFolderLockFill } from "react-icons/pi";
import { SiMinds } from "react-icons/si";

export default function NavDropdown() {
	const categoriasUnicas = [
		...new Map(
			articulos.map((art) => [
				art.metadata.categoria.principal,
				art.metadata.categoria,
			]),
		).values(),
	];

	const iconosCategoria = {
		"investigacion-criminologica": <FaBrain />,
		"psicologia-criminal": <SiMinds />,
		"crimen-organizado": <GiSkills />,
		"casos-reales": <PiFolderLockFill />,
		"seguridad-publica": <MdLocalPolice />,
	};

	return (
		<div className={styles.dropdown}>
			<button className={styles.trigger}>Categorías ▾</button>

			<div className={styles.menu}>
				{categoriasUnicas.map((cat) => (
					<Link
						key={cat.principal}
						href={`/categoria/${cat.principal}`}
						className={styles.item}
					>
						<span className={styles.icon}>
							{iconosCategoria[cat.principal] || "◉"} {cat.label}
						</span>
					</Link>
				))}
			</div>
		</div>
	);
}
