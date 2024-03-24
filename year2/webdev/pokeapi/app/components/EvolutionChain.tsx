import { Link } from "@remix-run/react";
import { EvolutionChain } from "~/api/types";
import Loading from "~/components/Loading";

type Props = {
  evolutionChain: EvolutionChain | undefined;
};

export default function App({ evolutionChain }: Props) {
  if (evolutionChain == undefined) {
    return <Loading text="evolution chain" />;
  }

  let next = evolutionChain.chain;
  let result: { name: string; id: number }[] = [];

  while (next != null) {
    let split = next.species.url.split("/");

    result.push({
      name: next.species.name,
      id: Number(split[split.length - 2]),
    });

    next = next.evolves_to[0];
  }

  return (
    <ul className="flex flex-wrap">
      {result.map((v) => (
        <li key={v.id}>
          <Link to={`/pokemon/${v.id}`} reloadDocument>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${v.id}.png`}
              loading="lazy"
              alt={v.name}
              className="w-32 h-32"
            />
            <p className="text-center">{v.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
