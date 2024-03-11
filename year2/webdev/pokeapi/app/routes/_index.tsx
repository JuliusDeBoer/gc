import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import PokemonCard from "../components/PokemonCard";

export const meta: MetaFunction = () => {
  return [{ title: "Pokeapi" }];
};

function range(start: number, end: number) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr[i] = i;
  }
  return arr;
}

export default function Index() {
  const [pokemon, setPokemon] = useState<any>({ results: [] });

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=40")
      .then((v) => v.json())
      .then(setPokemon)
      .catch(console.error);
  }, []);

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
      className="container mx-auto"
    >
      <ul className="flex flex-wrap justify-between">
        {pokemon.results.length != 0
          ? (pokemon.results as any[]).map((pokemon: any, index: number) => (
              <li key={index + 1}>
                <PokemonCard pokemon={pokemon} id={index + 1} />
              </li>
            ))
          : range(0, 40).map((i) => (
              <li className="w-44 h-44 m-8 animate-pulse" key={i}>
                <div className="w-full h-full bg-slate-200 rounded shadow"></div>
              </li>
            ))}
      </ul>
    </div>
  );
}
