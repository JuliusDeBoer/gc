import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import Badge from "~/components/Badge";
import Loading from "~/components/Loading";
import Chain from "~/components/EvolutionChain";
import { EvolutionChain, Pokemon, PokemonSpecies } from "~/api/types";
import { getPokemon } from "~/api/pokemon";

export const meta: MetaFunction = () => {
  return [{ title: "Details of..." }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  return { id: Number(params.id) };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [evolutionChain, setEvolutionChain] = useState<EvolutionChain>();
  const [description, setDescription] = useState("");
  const [shiny, setShiny] = useState(false);

  function toggleShiny() {
    setShiny(!shiny);
  }

  useEffect(() => {
    getPokemon(data.id).then((pokemon) => {
      // Capitalize first character
      // https://stackoverflow.com/a/1026087
      const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

      document.title = `Details of ${name}`;

      setPokemon(pokemon);

      // Two API calls to get the evolution chain
      fetch(pokemon.species.url)
        .then((v) => v.json())
        .then((v) => {
          setDescription(v.flavor_text_entries[0].flavor_text);
          return v;
        })
        .then(async (species: PokemonSpecies) => {
          return fetch(species.evolution_chain.url).then((v) => v.json());
        })
        .then(setEvolutionChain)
        .catch(console.error);
    });
  }, []);

  if (pokemon) {
    return (
      <div className="flex flex-wrap">
        <div>
          <img
            onClick={toggleShiny}
            src={
              pokemon.sprites.other["official-artwork"][
                shiny ? "front_shiny" : "front_default"
              ]
            }
            className="cursor-pointer"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold">
            #{pokemon.order} <span className="capitalize">{pokemon.name}</span>
          </h1>
          <p>Weight: {pokemon.weight / 10} Kg</p>

          <ul className="flex flex-wrap">
            {pokemon.types.map((type) => (
              <li key={type.slot} className="m-1">
                <Badge type={type.type.name} />
              </li>
            ))}
          </ul>

          <p>{description}</p>

          <h2 className="text-2xl mt-4 mb-2">Stats</h2>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name} className="capitalize">
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl mt-4 mb-2">Evolution Chain</h2>
          <Chain evolutionChain={evolutionChain} />
        </div>
      </div>
    );
  } else {
    return <Loading />;
  }
}
