import styles from "./footer.module.css";
import {
	FaFacebookSquare,
	FaInstagramSquare,
	FaTiktok,
	FaYoutube,
} from "react-icons/fa";
import {
	MdOutlineSecurityUpdateWarning,
	MdOutlineSecurity,
} from "react-icons/md";
import { FaHeadSideVirus } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	return (
		<>
			<div className={styles.footerStyle}>
				<section className={styles.imgFooter}>
					<img
						src="https://res.cloudinary.com/dujrua0vo/image/upload/v1772939366/Disen%CC%83o_sin_ti%CC%81tulo_15_wrmyfg.png"
						alt=""
					/>
				</section>
				<section className={styles.acercaDeNosotros}>
					<div>
					<Link href="/about-us"><FaHeadSideVirus className={styles.iconRed} /> Acerca de nosotros </Link>
					</div>
					<div>
						<a href="/politica-privacidad">
							<MdOutlineSecurity className={styles.iconRed} /> Políticas de
							provacidad
						</a>
					</div>
					<div>
						<a href="/terminos-condiciones">
							<MdOutlineSecurityUpdateWarning className={styles.iconRed} />{" "}
							Terminos y condiciones
						</a>
					</div>
				</section>
				<section className={styles.socialMedia}>
					<p>Siguenos en redes</p>
					<div className={styles.iconsMedia}>
						<a
							href="https://www.facebook.com/profile.php?id=61583579730066"
							target="blanck"
						>
							<FaFacebookSquare className={styles.iconFooter} />
						</a>
						<a
							href="https://www.instagram.com/crimienciclopedia/"
							target="blanck"
						>
							<FaInstagramSquare className={styles.iconFooter} />
						</a>
						<a
							href="https://www.tiktok.com/@observatorio.crim?_r=1&_t=ZS-94X6NygxDBl"
							target="blanck"
						>
							<FaTiktok className={styles.iconFooter} />
						</a>
						<a
							href="https://www.youtube.com/channel/UCVbz6QKhn0NBWPm-eO-KB_Q"
							target="blanck"
						>
							<FaYoutube className={styles.iconRed} />
						</a>
					</div>
				</section>
			</div>
		</>
	);
};

export default Footer;
