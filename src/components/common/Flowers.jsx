import { useEffect, useState } from "react";

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 5,
      image: `/flowers/flower${Math.ceil(Math.random() * 3)}.png`,
    }));

    setFlowers(temp);
  }, []);

  return (
    <>
      {flowers.map((f) => (
        <div
          key={f.id}
          style={{
            position: "fixed",
            top: "-50px",
            left: `${f.left}%`,
            width: "20px",
            height: "20px",
            backgroundImage: `url(${f.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            zIndex: 9999,
            pointerEvents: "none",
            animation: `fall ${f.duration}s linear infinite`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}

      {/* Inline animation (guaranteed to work) */}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-10vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default Flowers;