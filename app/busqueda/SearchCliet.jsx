"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { terminos } from "../../data/terminos";
import { articulos } from "../../data/articulo";
import styles from "./busqueda.module.css";

export default function BusquedaClient() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase() || "";

  // 🔎 Buscar términos
  const resultadosTerminos = terminos.filter((t) =>
    t.nombre.toLowerCase().includes(q) ||
    t.definicion.toLowerCase().includes(q) ||
    t.categoria.toLowerCase().includes(q)
  );

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Resultados para: <strong>{q}</strong>
      </h1>

      <p className={styles.count}>
        {resultadosTerminos.length} término(s) encontrado(s)
      </p>

      {resultadosTerminos.length === 0 && (
        <p className={styles.noResults}>
          No se encontraron resultados.
        </p>
      )}

      {resultadosTerminos.map((termino) => {


        return (
          <div key={termino.slug} className={styles.resultBlock}>

            {/* TERMINO */}
            <Link
              href={`/terminos/${termino.slug}`}
              className={styles.resultCard}
            >
              <h3>{termino.nombre}</h3>
              <p>{termino.definicionCorta}..</p>
              {/*<span className={styles.category}>
                {termino.categoria}
              </span>*/}
            </Link>
          </div>
        );
      })}
    </section>
  );
}
