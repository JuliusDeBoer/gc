type Props = {
  text?: string;
};

export default function App({ text }: Props) {
  return (
    <div className="m-42 cursor-progress text-2xl flex justify-center items-center">
      <h1>Loading {text == null ? "..." : ` ${text}`}</h1>
    </div>
  );
}
