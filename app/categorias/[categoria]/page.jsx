import { terms } from "../../../data/terms";
import TermCard from "../../components/TermCard";
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
