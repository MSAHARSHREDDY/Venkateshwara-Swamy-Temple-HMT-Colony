import { useEffect, useState } from "react";
import { getTempleData } from "../services/templeService";

const Deities = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTempleData()
      .then((res) => {
        setData(res.deities || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-yellow-500">Loading...</p>;

  return (
    <div className="p-6 mt-10">
   
      <div className="text-center">
        <h1 className="text-yellow-200">
          Deities of the Temple
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4"></div>
      </div>

         {/* Grid set to 4 columns to force a single row on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-20">
        {data.map((d, i) => (
          <div
            key={i}
            className="flex flex-col h-full bg-black/60 backdrop-blur-md rounded-2xl p-[1px] 
                       bg-gradient-to-br from-yellow-400 via-orange-500 to-yellow-600 
                       hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all duration-300"
          >
            {/* Inner Card Container */}
            <div className="bg-neutral-900/90 rounded-2xl p-4 h-full flex flex-col">
              
              {/* 🖼️ Image: Fixed container ensures alignment even with different sizes */}
              <div className="w-full h-40 flex items-center justify-center bg-black/40 rounded-xl overflow-hidden mb-4">
                <img
                  src={d.image}
                  alt={d.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* 🛕 Name */}
              <h2 className="text-lg font-bold text-yellow-400 uppercase tracking-wider">
                {d.name}
              </h2>

              {/* ✨ Description: Clamped to keep heights even */}
              <p className="text-xs mt-2 text-gray-400 line-clamp-2 italic">
                {d.description}
              </p>

              {/* 📿 Details */}
              <div className="mt-4 text-[11px] space-y-2 flex-grow">
                <p className="flex gap-1">
                  <span className="text-yellow-500 font-bold shrink-0">🙏 Significance:</span> 
                  <span className="text-gray-300">{d.significance}</span>
                </p>
                <p className="flex gap-1">
                  <span className="text-yellow-500 font-bold shrink-0">📍 Location:</span> 
                  <span className="text-gray-300">{d.location}</span>
                </p>
                
                {d.specialDays && (
                  <p className="flex gap-1">
                    <span className="text-yellow-500 font-bold shrink-0">📅 Special Days:</span> 
                    <span className="text-gray-300">{d.specialDays.join(", ")}</span>
                  </p>
                )}

                {d.prasadam && (
                  <p className="flex gap-1">
                    <span className="text-yellow-500 font-bold shrink-0">🍛 Prasadam:</span> 
                    <span className="text-gray-300">{d.prasadam.join(", ")}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deities;