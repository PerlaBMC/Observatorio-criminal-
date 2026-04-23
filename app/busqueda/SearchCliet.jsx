"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { terminos } from "../../data/terminos";
import { articulos } from "../../data/articulo";
import styles from "./busqueda.module.css";
import { FaBook } from "react-icons/fa6";
import { MdOutlineNotes } from "react-icons/md";

export default function BusquedaClient() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q")?.toLowerCase().trim() || "";

  // 🔎 Buscar términos
  const resultadosTerminos = terminos.filter((t) =>
    t.nombre?.toLowerCase().includes(q) ||
    t.definicion?.toLowerCase().includes(q) ||
    t.categoria?.toLowerCase().includes(q)
  );

  // 🔎 Buscar artículos SOLO por título y etiquetas
  const resultadosArticulos = articulos.filter((a) => {
    const titulo = a.metadata?.titulo?.toLowerCase() || "";

    const etiquetas = a.metadata?.etiquetas
      ?.map((tag) => tag.toLowerCase())
      .join(" ") || "";

    return titulo.includes(q) || etiquetas.includes(q);
  });

  const totalResultados =
    resultadosTerminos.length + resultadosArticulos.length;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Resultados para: <strong>{q}</strong>
      </h1>

      <p className={styles.count}>
        {totalResultados} resultado(s) encontrado(s)
      </p>

      {totalResultados === 0 && (
        <p className={styles.noResults}>
          No se encontraron resultados.
        </p>
      )}

      {/* 🔹 TÉRMINOS */}
      {resultadosTerminos.length > 0 && (
        <>
          <h2 className={styles.subTitle}>Términos</h2>

          {resultadosTerminos.map((termino) => (
            <div key={termino.slug} className={styles.resultBlock}>
              <Link
                href={`/terminos/${termino.slug}`}
                className={styles.resultCard}
              >
                <h3 className={styles.tituloTermino}>
                  <MdOutlineNotes/> {termino.nombre}
                </h3>
                <p>{termino.definicionCorta}...</p>
              </Link>
            </div>
          ))}
        </>
      )}

      {/* 🔹 ARTÍCULOS */}
      {resultadosArticulos.length > 0 && (
        <>
          <h2 className={styles.subTitle}>Artículos</h2>

          {resultadosArticulos.map((articulo) => (
            <div
              key={articulo.metadata.id}
              className={styles.resultBlock}
            >
              <Link
                href={`/articulos/${articulo.metadata.slug}`}
                className={styles.resultCard}
              >
                <h3 className={styles.tituloArticulo}>
                 <FaBook/> {articulo.metadata.titulo}
                </h3>

                <p>{articulo.resumen?.slice(0, 140)}...</p>
              </Link>
            </div>
          ))}
        </>
      )}

      <div className={styles.botonAtras}>
        <a href="/">Atrás</a>
      </div>
    </section>
  );
}