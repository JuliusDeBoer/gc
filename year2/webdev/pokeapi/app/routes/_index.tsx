import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import PokemonCard from "~/components/PokemonCard";
import { Pokemon } from "~/api/types";
import { getPokemonList } from "~/api/pokemon";
import { createSearchParams, useSearchParams } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Pokeapi" }];
};

const step = 40;

function range(start: number, end: number) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr[i] = i;
  }
  return arr;
}

export default function Index() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pokemon, setPokemon] = useState<{ results: Pokemon[] }>({
    results: [],
  });
  const [offset, setOffset] = useState(Number(searchParams.get("o")) ?? 0);

  useEffect(() => {
    updateList();
  }, [offset]);

  function updateList() {
    getPokemonList(step, offset).then(setPokemon);
  }

  function nextPage() {
    setOffset(offset + step);
    setSearchParams(createSearchParams({ o: String(offset + step) }));
  }

  function prevPage() {
    if (offset - step <= 0) {
      setOffset(0);
      setSearchParams(createSearchParams({}));
    } else {
      setOffset(offset - step);
      setSearchParams(createSearchParams({ o: String(offset + step) }));
    }
  }

  return (
    <main className="container mx-auto xl:px-40">
      <div className="w-full flex justify-center">
        <button onClick={prevPage}>&lt;</button>
        <span className="min-w-24 text-center">{offset}</span>
        <button onClick={nextPage}>&gt;</button>
      </div>

      <ul className="flex flex-wrap justify-between">
        {pokemon.results.length != 0
					// Display pokemon
          ? pokemon.results.map((pokemon, i) => (
              <li key={i + offset + 1}>
                <PokemonCard pokemon={pokemon} id={i + offset + 1} />
              </li>
            ))

						// Display skeleton
          : range(0, 40).map((i) => (
              <li className="w-44 h-44 m-8 animate-pulse" key={i + offset + 1}>
                <div className="w-full h-full bg-slate-200 rounded shadow"></div>
              </li>
            ))}
      </ul>
    </main>
  );
}
