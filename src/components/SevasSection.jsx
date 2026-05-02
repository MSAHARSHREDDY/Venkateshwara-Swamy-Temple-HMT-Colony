// 📁 src/components/SevasSection.jsx

import templeImg from "../assets/temple.jpg";

export default function SevasSection() {
  const sevas = [
    "Suprabhata Seva",
    "Archana",
    "Abhishekam"
  ];

  return (
    <div className="temple-bg py-10">
      <h2 className="text-center text-2xl font-bold mb-6">Sevas</h2>

      <div className="grid md:grid-cols-3 gap-6 px-6">
        {sevas.map((s, i) => (
          <div
            key={i}
            className="bg-white p-3 shadow-lg text-center hover:scale-105 transition"
          >
            <img src={templeImg} className="mb-2" />
            <p>{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}