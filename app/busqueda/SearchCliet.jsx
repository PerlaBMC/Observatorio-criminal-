"use client";

import { useSearchParams } from "next/navigation";
import terminos from "../../data/temas.json";
import temas from "../../data/terminos.json";

export default function BusquedaClient() {
	const searchParams = useSearchParams();
	const q = searchParams.get("q")?.toLowerCase() || "";

	const resultadosTerminos = terminos.filter((t) =>
		t.titulo.toLowerCase().includes(q)
	);

	const resultadosTemas = temas.filter((t) =>
		t.titulo.toLowerCase().includes(q)
	);

	const totalResultados = resultadosTerminos.length + resultadosTemas.length;

	return (
		<div>
			<h1>
				Resultados para: <strong>{q}</strong>
			</h1>
			<p>{totalResultados} resultado(s) encontrado(s)</p>

			{/* resto igual */}
		</div>
	);
}
