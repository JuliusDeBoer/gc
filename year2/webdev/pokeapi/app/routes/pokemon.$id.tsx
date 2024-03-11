import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import Badge from "../components/Badge";

export const meta: MetaFunction = () => {
  return [{ title: "Details of..." }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  return { id: Number(params.id) };
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const [pokemon, setPokemon] = useState<any>();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${data.id}`)
      .then((v) => v.json())
      .then((pokemon) => {
        // https://stackoverflow.com/a/1026087
        const name =
          pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        document.title = `Details of ${name}`;
        return pokemon;
      })
      .then(setPokemon)
      .catch(console.error);
  }, []);

  if (pokemon) {
    return (
      <div className="mx-auto container">
        <h1 className="capitalize text-3xl font-semibold">{pokemon.name}</h1>
        <p>Weight: {pokemon.weight / 10} Kg</p>

        <h2>Stats</h2>
        <ul>
          {pokemon.stats.map((stat: any) => (
            <li key={stat.stat.name} className="capitalize">
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>

        <img src={pokemon.sprites.other["official-artwork"].front_default} />
        <ul className="flex">
          {pokemon.types.map((value: any) => (
            <li key={value.slot} className="m-1">
              <Badge type={value.type.name} />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
