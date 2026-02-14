import "./globals.css";
import { Suspense } from "react";
import SearchBar from "./components/SearchBar";
import styles from "./layout.module.css";
import Footer from "./components/Footer/Footer";

export default function RootLayout({ children }) {
	return (
		<html lang="es">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Noto+Sans+JP:wght@100..900&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<header className={styles.headerStyle}>
					<a href="/">
						<h1>Observatorio Criminológico</h1>
					</a>
					<Suspense fallback={null}>
						<SearchBar />
					</Suspense>
				</header>
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
