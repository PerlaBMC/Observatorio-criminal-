import styles from "./equipo.module.css";
import Link from "next/link";
import { FaBookOpen, FaShieldAlt, FaSearch } from "react-icons/fa";

const Equipo = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.header}>
					<span className={styles.tag}>
						Observatorio Criminal
					</span>

					<h2>Dirección editorial</h2>

					<p>
						Observatorio Criminal desarrolla
						contenidos especializados orientados
						al análisis criminológico, la
						divulgación académica y la comprensión
						crítica de los fenómenos delictivos
						contemporáneos.
					</p>
				</div>

				<div className={styles.grid}>
					<div className={styles.card}>
						<FaSearch className={styles.icon} />
						<h3>Investigación</h3>
						<p>
							Desarrollo de análisis basados
							en revisión documental,
							contextualización criminológica
							y estudio de dinámicas
							delictivas.
						</p>
					</div>

					<div className={styles.card}>
						<FaBookOpen className={styles.icon} />
						<h3>Divulgación</h3>
						<p>
							Producción de contenidos
							accesibles que traducen el
							conocimiento criminológico en
							información útil y comprensible.
						</p>
					</div>

					<div className={styles.card}>
						<FaShieldAlt className={styles.icon} />
						<h3>Responsabilidad editorial</h3>
						<p>
							Publicación de contenido bajo
							criterios informativos,
							preventivos y analíticos, sin
							apología ni glorificación del
							delito.
						</p>
					</div>
				</div>

				<div className={styles.footer}>
					<p>
						Consulta nuestra metodología y
						lineamientos editoriales.
					</p>

					<Link href="/about-us">
						Conocer el proyecto
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Equipo;