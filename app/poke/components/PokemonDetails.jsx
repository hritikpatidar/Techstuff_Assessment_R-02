"use client";
import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "../../../lib/api";
import TypeTabs from "./TypeTabs";

export default function PokemonDetails({ pokemon }) {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    if (!pokemon) return;
    fetchPokemonDetails(pokemon.url).then(setDetails);
  }, [pokemon]);

  if (!details) return <div>Loading details...</div>;

  return (
    <div className="p-6 border rounded border-gray-300 min-h-[500px]">
      <h3 className="text-2xl font-bold mb-6 capitalize">
        Pokemon Types ({details?.name})
      </h3>

      <TypeTabs types={details?.types} />
    </div>
  );

}
