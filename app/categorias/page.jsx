import { terms } from "../../data/terminos";
export default function CategoriasPage() {
	const categorias = [...new Set(terms.map((t) => t.categoria))];
	return (
		<ul>
			{categorias.map((c) => (
				<li key={c}>
					<a href={"/categorias/" + c}>{c}</a>
				</li>
			))}
		</ul>
	);
}
