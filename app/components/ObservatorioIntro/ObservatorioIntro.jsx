import styles from "./observatorioIntro.module.css";

const ObservatorioIntro = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<span className={styles.tag}>
					Observatorio Criminal
				</span>

				<h2>
					Análisis criminológico con enfoque
					preventivo y divulgación responsable
				</h2>

				<p>
					Somos una plataforma especializada en el estudio
					técnico de fenómenos delictivos,
					dinámicas de violencia y factores de
					riesgo social, desarrollada bajo
					criterios de análisis documental,
					verificación de fuentes abiertas y
					compromiso ético con la comprensión
					crítica de la seguridad contemporánea.
				</p>
			</div>
		</section>
	);
};

export default ObservatorioIntro;