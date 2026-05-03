import styles from "./footer.module.css";
import Link from "next/link";
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTiktok,
	FaYoutube,
} from "react-icons/fa";
import {
	MdOutlineSecurity,
	MdOutlineSecurityUpdateWarning,
} from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>

				{/* BRAND */}
				<section className={styles.brand}>
					<img
						src="https://res.cloudinary.com/dwzbls5ib/image/upload/v1777844773/Observatorio_criminolo%CC%81gico_pym7gb.png"
						alt="Observatorio Criminal"
					/>

					<h3>Observatorio Criminal</h3>

					<p>
						Plataforma independiente de análisis criminológico,
						seguridad pública y divulgación especializada.
					</p>
				</section>

				{/* ENLACES */}
				<section className={styles.links}>
					<h4>Información institucional</h4>

					<Link href="/about-us">
						<FaHeadSideVirus /> Acerca de nosotros
					</Link>

					<Link href="/politica-privacidad">
						<MdOutlineSecurity /> Política de privacidad
					</Link>

					<Link href="/terminos-condiciones">
						<MdOutlineSecurityUpdateWarning /> Términos y condiciones
					</Link>
				</section>

				{/* REDES */}
				<section className={styles.social}>
					<h4>Síguenos</h4>

					<div className={styles.icons}>
						<a
							href="https://www.facebook.com/profile.php?id=61583579730066"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookSquare />
						</a>

						<a
							href="https://www.instagram.com/crimienciclopedia/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagramSquare />
						</a>

						<a
							href="https://www.tiktok.com/@observatorio.crim?_r=1&_t=ZS-94X6NygxDBl"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTiktok />
						</a>

						<a
							href="https://www.youtube.com/channel/UCVbz6QKhn0NBWPm-eO-KB_Q"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaYoutube />
						</a>
					</div>
				</section>
			</div>

			<div className={styles.bottom}>
				<p>
					© 2026 Observatorio Criminal · Todos los derechos reservados
				</p>
			</div>
		</footer>
	);
};

export default Footer;