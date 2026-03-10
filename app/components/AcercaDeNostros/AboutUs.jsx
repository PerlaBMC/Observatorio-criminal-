import styles from "./aboutUs.module.css";
import { MdOutlineCastForEducation } from "react-icons/md";

const AboutUs = () => {
	return (
		<>
			<div className={styles.aboutUs}>
				<h2>Acerca de nosotros</h2>
				<p>
					{" "}
					Observatorio Criminológico es una plataforma dedicada a la
					investigación, análisis y divulgación de información sobre
					criminología, violencia, delincuencia, crimen organizado y seguridad
					pública. Nuestro objetivo es contribuir a una comprensión más profunda
					de los fenómenos delictivos a través de contenidos informativos,
					análisis criminológicos y reflexiones basadas en el estudio de la
					criminalidad y de los distintos factores sociales que influyen en
					ella.
				</p>
				<p>
					Hoy sabemos que la violencia y la delincuencia son fenómenos complejos
					que afectan directamente la vida cotidiana de millones de personas.
					Sus efectos se reflejan en la seguridad de las comunidades, en el
					desarrollo social y en el funcionamiento de las instituciones
					encargadas de procurar e impartir justicia. Sin embargo, gran parte de
					la información que circula sobre estos temas suele centrarse
					únicamente en la noticia inmediata o en los hechos más visibles,
					dejando de lado el análisis de las causas estructurales que explican
					por qué ciertos fenómenos delictivos surgen, evolucionan y logran
					expandirse.
				</p>
				<p>
					Ante este panorama, Observatorio Criminológico busca ofrecer un
					espacio donde sea posible analizar y comprender la criminalidad con
					mayor profundidad, más allá de la cobertura de los hechos. El
					propósito es aportar contexto, análisis y reflexión desde una
					perspectiva criminológica que permita entender mejor cómo funcionan
					las dinámicas delictivas y cuáles son los factores que las alimentan.
				</p>
				<div className={styles.mision}>
					<h2>
						Nuestra misión <MdOutlineCastForEducation />
					</h2>
					<p>
						Nuestro sitio desarrolla contenidos orientados al estudio de
						distintos fenómenos relacionados con la criminalidad. Estos análisis
						examinan los factores sociales, económicos, institucionales y
						culturales que influyen en la aparición y evolución de diversas
						formas de violencia y delincuencia.
					</p>
					<p>
						Los artículos y análisis publicados abordan temas vinculados con la
						seguridad pública, el crimen organizado, las dinámicas delictivas,
						la prevención del delito y los desafíos que enfrentan los sistemas
						de justicia. Este enfoque permite ofrecer una mirada más amplia
						sobre la criminalidad contemporánea y sobre sus implicaciones para
						la sociedad.
					</p>
				</div>
				<h2>Divulgación del conocimiento criminológico</h2>
				<p>
					Uno de nuestros principales objetivos consiste en acercar el conocimiento criminológico a un público amplio.
					Para lograrlo, la plataforma presenta información compleja mediante un
					lenguaje claro y accesible, sin perder el rigor analítico que
					caracteriza al estudio de la criminología.
				</p>
				<p>
					De esta manera, la divulgación del conocimiento nos permite ampliar la comprensión social
					sobre los fenómenos delictivos y fomenta una discusión pública más
					informada sobre los problemas relacionados con la violencia, la
					delincuencia y las políticas de seguridad.
				</p>
				<h2>Principales temas de análisis</h2>
				<p>
					Observatorio Criminológico desarrolla contenidos relacionados con
					diversas áreas del estudio de la criminalidad, entre ellas:
				</p>{" "}
				<div className={styles.lista}>
				<li>Criminología y análisis del delito</li>
				<li>Violencia y seguridad pública</li>
				<li>Crimen organizado</li>
				<li>Factores sociales de la delincuencia</li>
				<li>Prevención del delito</li>
				<li>Política criminal y sistema de justicia</li>
				</div>
				<br />
				<p>
					Estas áreas de análisis permiten abordar el fenómeno delictivo desde
					distintas perspectivas y comprender las múltiples variables que
					influyen en su desarrollo dentro de la sociedad.
				</p>
				<h2>El conocimiento como herramienta contra la violencia</h2>
				<p>
					Observatorio Criminológico parte de la convicción de que el
					conocimiento es una de las herramientas más poderosas para enfrentar
					la violencia, la delincuencia y la injusticia social. Comprender las
					causas del delito, analizar sus dinámicas y difundir información
					basada en investigación permite fortalecer el debate público y
					fomentar una sociedad mejor informada.
				</p>
				<p>
					A través de la investigación, el análisis y la divulgación del
					conocimiento criminológico, la plataforma busca contribuir a una
					comprensión más profunda de los fenómenos de violencia y delincuencia,
					así como de los desafíos que enfrentan las sociedades contemporáneas
					en materia de seguridad y justicia.
				</p>
			</div>
		</>
	);
};

export default AboutUs;
