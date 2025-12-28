"use client";
import { useEffect, useState } from "react";
import { fetchTypeDetails } from "@/lib/api";

export default function TypeTabs({ types }) {
  const [active, setActive] = useState(0);
  const [typeData, setTypeData] = useState(null);

  useEffect(() => {
    fetchTypeDetails(types[active]?.type?.url).then(setTypeData);
  }, [active, types]);

  if (!typeData) return <p>Loading type info...</p>;

  return (
    <div className="max-w-md">
      {/* Tabs */}
      <div className="flex border-b border-gray-400">
        {types.map((t, i) => (
          <button
            key={t.type.name}
            onClick={() => setActive(i)}
            className={`px-2 py-1 text-md capitalize transition-all border border-b-0 ${active === i ? "bg-gray-400 font-semibold border-gray-400" : "bg-transparent text-gray-600 border-transparent hover:text-white"}`}
          >
            {t.type.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-8 text-lg space-y-4">
        <p>
          <span className="font-semibold">Game Indices:</span>{" "}
          {typeData.game_indices.length}
        </p>
        <p>
          <span className="font-semibold">Moves:</span>{" "}
          {typeData.moves.length}
        </p>
      </div>
    </div>
  );

}
