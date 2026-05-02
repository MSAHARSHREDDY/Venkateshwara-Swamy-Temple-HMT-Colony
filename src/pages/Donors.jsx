import { useState } from "react";
import { idolDonors, archDonors } from "../data/donors";

export default function Donors() {
  const [tab, setTab] = useState("arch"); // arch | idol
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(false);

  // 🎯 Select data based on tab
  let data = tab === "arch" ? archDonors : idolDonors;

  // 🔍 SEARCH FILTER
  data = data.filter((d) =>
    d.donor.toLowerCase().includes(search.toLowerCase())
  );

  // 🔽 SORT BY AMOUNT
  if (sort) {
    data = [...data].sort((a, b) => b.amount - a.amount);
  }

  // 🥇 TOP DONORS (top 3)
  const topAmounts = [...data]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 3)
    .map((d) => d.amount);

  return (
    <div className="temple-bg min-h-screen px-4 md:px-10 py-10">

      {/* TITLE */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-red-900 mb-8">
        🙏 Temple Donors
      </h1>

      {/* 🔘 TABS */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setTab("arch")}
          className={`px-5 py-2 rounded-full font-bold ${
            tab === "arch"
              ? "bg-red-800 text-white"
              : "bg-white border"
          }`}
        >
          🛕 Arch Donors
        </button>

        <button
          onClick={() => setTab("idol")}
          className={`px-5 py-2 rounded-full font-bold ${
            tab === "idol"
              ? "bg-red-800 text-white"
              : "bg-white border"
          }`}
        >
          🛕 Idol Donors
        </button>
      </div>

      {/* 🔍 SEARCH + SORT */}
      <div className="flex flex-col md:flex-row gap-4 justify-between max-w-5xl mx-auto mb-8">

        <input
          type="text"
          placeholder="Search donor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded border w-full md:w-1/2 focus:ring-2 focus:ring-yellow-500"
        />

        <button
          onClick={() => setSort(!sort)}
          className="px-4 py-2 bg-yellow-500 rounded font-bold hover:scale-105 transition"
        >
          {sort ? "Reset Sort" : "Sort by Highest"}
        </button>
      </div>

      {/* 🧾 DONORS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {data.map((d, i) => {
          const isTop = topAmounts.includes(d.amount);

          return (
            <div
              key={i}
              className={`p-5 rounded-xl shadow-lg border transition hover:scale-105
                ${isTop ? "border-yellow-500 bg-yellow-50" : "bg-white"}
              `}
            >

              {/* 🥇 BADGE */}
              {isTop && (
                <div className="text-xs font-bold text-yellow-700 mb-2">
                  🏆 Top Donor
                </div>
              )}

              {/* NAME */}
              <h3 className="font-bold text-red-800 mb-2">
                {d.donor}
              </h3>

              {/* IDOL (only for idol donors) */}
              {d.idol && (
                <p className="text-gray-700">
                  🛕 {d.idol}
                </p>
              )}

              {/* AMOUNT */}
              <p className="text-green-700 font-bold mt-2 text-lg">
                ₹{d.amount.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>

      {/* EMPTY STATE */}
      {data.length === 0 && (
        <p className="text-center mt-10 text-gray-600">
          No donors found
        </p>
      )}
    </div>
  );
}