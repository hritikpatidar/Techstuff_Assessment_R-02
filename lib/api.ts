const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList(offset: number, limit: number) {
  const res = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon list");
  return res.json();
}

export async function fetchPokemonDetails(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch Pokémon details");
  return res.json();
}

export async function fetchTypeDetails(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch Type details");
  return res.json();
}
