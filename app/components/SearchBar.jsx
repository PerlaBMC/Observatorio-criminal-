"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./searchBar.module.css"

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryFromURL = searchParams.get("q") || "";

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(queryFromURL);
  }, [queryFromURL]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;

    router.push(`/busqueda?q=${encodeURIComponent(search)}`);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.forSerchBar}>
      <input
        type="text"
        value={search}
        placeholder="Buscar términos, conceptos, temas..."
        onChange={(e) => setSearch(e.target.value)} 
        className={styles.inputSearchBar}
      />
      <button
        type="submit"
        className={styles.buttonSearchBar}
      >
        Buscar
      </button>
    </form>
  );
}
