import TermCard from "./components/TermCard";
import { terms } from "../data/terms";
import styles from "./homePage.module.css";


export default function Home() {
	const populares = terms.slice(0, 3);
	const recientes = terms.slice(3, 6);
	return (
		<>
			<div className={styles.homeDiv}>
				<section className={styles.bannerHome}>
					<div className={styles.h1Div}>
						<h2> 
							La información es la herramienta más poderosa contra la
							criminalidad
						</h2>
					</div>
				</section>
				<div className={styles.cardContainer}>
					{populares.map((t) => (
						<TermCard key={t.slug} term={t} />
					))}
				</div>
				<section className={styles.bannerInf}>
					<hr />
					<h2>Somos un espacio para entender la criminología más allá del delito</h2>
					<h3>Nos dedicamos al análisis, investigación y divulgación para quienes buscan comprender la violencia, la seguridad y sus causas desde una mirada crítica y responsable.</h3>
					<hr />
				</section>
				<div className={styles.cardContainer}>
					{recientes.map((t) => (
						<TermCard key={t.slug} term={t}/>
					))}
				</div>
			</div>
		</>
	);
}
