import { terms } from "../../data/terms";
import TermCard from "../components/TermCard";

 
export default function Terminos() {
	return (
		<div>
			{terms.map((t) => (
				<TermCard key={t.slug} term={t} />
			))}
		</div>
	);
}
