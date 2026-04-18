import { useEffect, useState } from "react";
import { getSevas } from "../services/templeService";

const Sevas = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getSevas().then(setData);
  }, []);

  return (
    <div className="container-custom px-4 md:px-8 py-10">

      {/* 🔥 TITLE */}
      <div className="text-center">
        <h1 className="text-yellow-200">
          Temple Sevas & Offerings
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4"></div>
      </div>

      {data.map((section, i) => (
        <div key={i} className="mt-10">

          {/* 🔥 CATEGORY TITLE */}
          <h2 className="text-xl md:text-2xl font-semibold text-white border-l-4 border-yellow-400 pl-4 mb-6">
            {section.category}
          </h2>

          {/* 🔥 GRID */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {section.items.map((item, j) => (
              <div
                key={j}
                className="bg-white/5 backdrop-blur-md border border-white/10 
                rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/20 
                transition-all duration-300 hover:scale-105"
              >
                {/* 🔥 NAME */}
                <h3 className="font-bold text-lg text-white">
                  {item.name}
                </h3>

                {/* 💰 AMOUNT */}
                {item.amount && (
                  <p className="text-yellow-400 text-lg font-semibold mt-2">
                    ₹ {item.amount}
                  </p>
                )}

                {/* 📝 NOTE */}
                {item.note && (
                  <p className="text-sm text-gray-400 italic mt-1">
                    {item.note}
                  </p>
                )}
              </div>
            ))}

          </div>
        </div>
      ))}

    </div>
  );
};

export default Sevas;