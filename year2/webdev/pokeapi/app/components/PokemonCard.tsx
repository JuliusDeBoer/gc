import { Link } from "@remix-run/react";

type Props = {
  pokemon: any;
  id: number;
};

export default function App({ pokemon, id }: Props) {
  return (
    <Link to={`pokemon/${id}`}>
      <div className="m-8 p-2 w-44 h-44 border rounded shadow flex justify-center items-center flex-col hover:scale-110 transition-all hover:shadow-none hover:border-none">
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
