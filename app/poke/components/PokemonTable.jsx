import Pagination from "./Pagination";

export default function PokemonTable({
  pokemon,
  page,
  total,
  onPrev,
  onNext,
  onSelect,
  loading
}) {
  return (
    <div className="border rounded p-4 w-full">
      <h2 className="font-bold mb-2 text-xl">Pokemon Table</h2>

      {loading
        ? (
          <p>Loading...</p>
        )
        : (
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-2">Sr.No</th>
                <th className="border p-2">Poke Name</th>
              </tr>
            </thead>
            <tbody>
              {pokemon.length > 0 && pokemon.map((p, i) => (
                <tr key={p.name}>
                  <td className="border p-2 w-11  ">{(page - 1) * 10 + i + 1}</td>
                  <td className="border p-2 cursor-pointer" onClick={() => onSelect(p)}> {p.name}  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      {
        pokemon.length > 0 &&
        <Pagination page={page} total={total} onPrev={onPrev} onNext={onNext} />
      }
    </div>
  );
}
