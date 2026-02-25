import { terms } from "../../../data/terminos";
import TermCard from "../../components/TermCard/TermCard";
export default function Categoria({ params }) {
	const cat = params.categoria;
	const datos = terms.filter((t) => t.categoria === cat);
	return (
		<div>
			{datos.map((t) => (
				<TermCard key={t.slug} term={t} />
			))}
		</div>
	);
}
