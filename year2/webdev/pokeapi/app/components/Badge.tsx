type Props = {
  type: string;
};

function getColorFromType(type: string) {
  switch (type.toLowerCase()) {
    case "fire":
      return "#e62829";
    case "fighting":
      return "#ff8000";
    case "water":
      return "#2980ef";
    case "flying":
      return "#81b9ef";
    case "grass":
      return "#3fa129";
    case "poison":
      return "#9141cb";
    case "electric":
      return "#fac000";
    case "ground":
      return "#915121";
    case "psychic":
      return "#ef4179";
    case "rock":
      return "#afa981";
    case "ice":
      return "#3dcef3";
    case "bug":
      return "#91a119";
    case "dragon":
      return "#5060e1";
    case "ghost":
      return "#704170";
    case "dark":
      return "#624d4e";
    case "steel":
      return "#60a1b8";
    case "fairy":
      return "#ef70ef";
    case "stellar":
      return "#44628d";
    case "???":
      return "#68a090";
    default: // Normal
      return "#9fa19f";
  }
}

export default function App({ type }: Props) {
  return (
    <p
      className={`w-fit p-1 px-3 border-4 rounded-full`}
      style={{ borderColor: getColorFromType(type) }}
    >
      {type}
    </p>
  );
}
