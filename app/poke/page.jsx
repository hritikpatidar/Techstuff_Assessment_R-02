"use client";

import { useEffect, useState } from "react";
import PokemonTable from "./components/PokemonTable";
import PokemonDetails from "./components/PokemonDetails.jsx";
import { fetchPokemonList } from "@/lib/api";

const LIMIT = 10;

export default function PokePage() {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPokemon();
  }, [page]);

  async function loadPokemon() {
    try {
      setLoading(true);
      setError("");
      const data = await fetchPokemonList((page - 1) * LIMIT, LIMIT);
      setPokemon(data.results);
      setTotal(Math.ceil(data.count / LIMIT));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 md:w-[1000px]">
      <PokemonTable
        pokemon={pokemon}
        page={page}
        total={total}
        onPrev={() => setPage(p => Math.max(1, p - 1))}
        onNext={() => setPage(p => Math.min(total, p + 1))}
        onSelect={setSelectedPokemon}
        loading={loading}
      />
      {selectedPokemon &&
        <PokemonDetails pokemon={selectedPokemon} />
      }
    </div>
  );
}
