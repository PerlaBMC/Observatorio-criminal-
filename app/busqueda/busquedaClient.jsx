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

      {resultadosTerminos.length > 0 && (
        <section style={{ marginTop: "30px" }}>
          <h2>Términos</h2>
          <ul>
            {resultadosTerminos.map((item) => (
              <li key={item.slug}>
                <a href={`/terminos/${item.slug}`}>
                  <strong>{item.titulo}</strong>
                </a>
                <p>{item.descripcion}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {resultadosTemas.length > 0 && (
        <section style={{ marginTop: "30px" }}>
          <h2>Temas / Artículos</h2>
          <ul>
            {resultadosTemas.map((item) => (
              <li key={item.slug}>
                <a href={`/temas/${item.slug}`}>
                  <strong>{item.titulo}</strong>
                </a>
                <p>{item.descripcion}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {totalResultados === 0 && (
        <p style={{ marginTop: "40px", fontStyle: "italic" }}>
          No se encontraron resultados. Prueba con otro término.
        </p>
      )}
    </div>
  );
}
