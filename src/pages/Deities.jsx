import useTempleData from "../hooks/useTempleData";
import DeityCard from "../components/cards/DeityCard";

export default function Deities() {
  const data = useTempleData();
  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {data.deities.map((d, i) => (
        <DeityCard key={i} {...d} />
      ))}
    </div>
  );
}