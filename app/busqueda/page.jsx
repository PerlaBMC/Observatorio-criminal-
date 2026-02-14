import { Suspense } from "react";
import BusquedaClient from "./SearchCliet"


export default function BusquedaPage() {
  return (
    <Suspense fallback={<p>Cargando resultados…</p>}>
      <BusquedaClient />
    </Suspense>
  );
}
