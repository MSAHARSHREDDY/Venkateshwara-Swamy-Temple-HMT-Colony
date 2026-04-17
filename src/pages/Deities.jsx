import Card from "../components/ui/Card";
import { deities } from "../data/deities";

const Deities = () => {
  return (
    <div className="p-6 grid md:grid-cols-3 gap-6">
      {deities.map((d) => (
        <Card
          key={d.id}
          title={d.name}
          image={d.image}
          description={d.description}
        />
      ))}
    </div>
  );
};

export default Deities;