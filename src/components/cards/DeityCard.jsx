export default function DeityCard({ name, image, description }) {
  return (
    <div className="bg-black border border-gold p-4 rounded">
      <img src={image} className="mb-3" />
      <h3 className="text-gold">{name}</h3>
      <p>{description}</p>
    </div>
  );
}