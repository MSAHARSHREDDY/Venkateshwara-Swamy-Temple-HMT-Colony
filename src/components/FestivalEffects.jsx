import { useEffect, useState } from "react";
import rose from "../assets/rose.png";

export default function FestivalEffects() {
  const [clusters, setClusters] = useState([]);

  useEffect(() => {
    const createClusters = () => {
      return Array.from({ length: 10 }).map((_, i) => ({
        id: i,
        left: Math.random() * 90,
        size: 10 + Math.random() * 8, // ✅ SMALLER FLOWERS
        duration: 5 + Math.random() * 2,
        delay: Math.random() * 5,
      }));
    };

    setClusters(createClusters()); // initial

    // 🔥 regenerate continuously (NO REFRESH NEEDED)
    const interval = setInterval(() => {
      setClusters(createClusters());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {clusters.map((c) => (
        <div
          key={c.id}
          style={{
            position: "absolute",
            top: "-60px",
            left: `${c.left}%`,
            display: "flex",
            gap: "2px",
            animation: `fall ${c.duration}s linear infinite`,
            animationDelay: `${c.delay}s`,
          }}
        >
          {/* 🌹 SMALL CLUSTER */}
          {[...Array(3)].map((_, i) => (
            <img
              key={i}
              src={rose}
              alt=""
              style={{
                width: `${c.size}px`,
                height: "auto",
                objectFit: "contain",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}