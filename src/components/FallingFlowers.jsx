import rose from "../assets/rose.png"; // ⚠️ use PNG (important)

export default function FallingFlowers() {
  const flowers = Array.from({ length: 25 }); // number of flowers

  return (
    <div className="flower-container">
      {flowers.map((_, i) => (
        <img
          key={i}
          src={rose}
          className="flower"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}