import { Pokemon } from "./types";

export async function getPokemonList(
  limit: number = 40,
  offset: number = 0,
): Promise<{ results: Pokemon[] }> {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  )
    .then((v) => v.json())
    .catch(console.error);
}

export async function getPokemon(id: number): Promise<Pokemon> {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((v) => v.json())
    .catch(console.error);
}
