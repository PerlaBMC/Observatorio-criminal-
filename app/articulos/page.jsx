import { articulos } from "../../data/articulo";
import ArticuloCard from "../components/ArticuloCard/ArticuloCard";

export default function Articulos() {
  return (
    <div>
      {articulos.map((articulo) => (
        <ArticuloCard
          key={articulo.metadata.slug}
          articulo={articulo}
        />
      ))}
    </div>
  );
}
