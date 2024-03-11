type Props = {
  type: string;
};

function getColorFromType(type: string) {
  switch (type) {
    case "fire":
      return "#ff0000";
    default:
      return "#ccc";
  }
}

export default function App({ type }: Props) {
  return (
    <p
      className={`w-fit p-1 px-3 rounded-full`}
      style={{ backgroundColor: getColorFromType(type) }}
    >
      {type}
    </p>
  );
}
