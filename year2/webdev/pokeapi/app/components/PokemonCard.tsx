import { Link } from "@remix-run/react";
import { Pokemon } from "~/api/types";

type Props = {
  pokemon: Pokemon;
  id: number;
};

export default function App({ pokemon, id }: Props) {
  return (
    <Link to={`pokemon/${id}`}>
      <div className="m-8 p-2 w-44 h-44 border rounded flex justify-center items-center flex-col shadow-inner transition-all hover:shadow-xl hover:scale-110">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          loading="lazy"
          alt={pokemon.name}
          className="w-32 h-32"
        />
        <h2 className="capitalize text-lg">
          {id}. {pokemon.name}
        </h2>
      </div>
    </Link>
  );
}
