import "./globals.css";
import { Suspense } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import styles from "./layout.module.css";
import Footer from "./components/Footer/Footer";
import NavDropdown from "./components/NavDropdown/NavDropdown";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<link
					rel="icon"
					type="image/svg+xml"
					href="https://res.cloudinary.com/dwzbls5ib/image/upload/v1777595998/Observatorio_criminolo%CC%81gico_5_g5ho03.svg"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Noto+Sans+JP:wght@100..900&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
			<header className={styles.headerStyle}>
	<div className={styles.headerContainer}>
		
		{/* LOGO + NOMBRE */}
		<div className={styles.brand}>
			<a href="/">
				<img
					src="https://res.cloudinary.com/dwzbls5ib/image/upload/v1777594780/Observatorio_criminolo%CC%81gico_3_ndlvy4.svg"
					alt="Logo Observatorio Criminal"
				/>
			</a>
			<div className={styles.brandText}>
				<h1>Observatorio Criminal</h1>
				<span>Análisis criminológico</span>
			</div>
		</div>

		{/* MENÚ */}
		<nav className={styles.nav}>
			<a href="/">Inicio</a>
			<span>|</span>
			<NavDropdown />
			<span>|</span>
			<a href="/investigacion">Investigación</a>
			<span>|</span>
			<a href="/about-us">Sobre el proyecto</a>
		</nav>

		{/* BUSCADOR */}
		<div className={styles.search}>
			<Suspense fallback={null}>
				<SearchBar />
			</Suspense>
		</div>

	</div>
</header>
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
