import { useEffect, useState } from "react";
import { getTempleData } from "../services/templeService";

const Darshan = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getTempleData().then((res) => setData(res.darshan));
  }, []);

  if (!data) return (
    <div className="flex justify-center items-center min-h-[400px]">
      <p>Loading Timings...</p>
    </div>
  );

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-12">
      {/* Page Header - Uses your global h1 style */}
      <div className="text-center">
        <h1 className="text-yellow-200">
          Darshan & Pooja Timings
        </h1>
        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4"></div>
      </div>

      {data.timings.map((section, idx) => (
        <div key={idx} className="overflow-hidden rounded-2xl border border-yellow-500/30 bg-black/40 backdrop-blur-md shadow-xl">

          {/* Section Header - Uses your global h2 style */}
          <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-4 text-center">
            <h2 className="!text-white !m-0 uppercase tracking-wider">
              {section.title}
            </h2>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-yellow-500/10 border-b border-yellow-500/20">
                  <th className="p-4 text-yellow-400 font-bold uppercase text-sm">Day / Schedule</th>
                  <th className="p-4 text-yellow-400 font-bold uppercase text-sm">Session</th>
                  <th className="p-4 text-yellow-400 font-bold uppercase text-sm text-right">Timings</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors"
                  >
                    {/* Data Cells - Use your global p style (adjusted for size) */}
                    <td className="p-4">
                      <p className="!text-base md:!text-lg font-medium text-yellow-500/90">{row.day}</p>
                    </td>

                    <td className="p-4">
                      <p className="!text-base md:!text-lg italic !text-gray-400">{row.session}</p>
                    </td>

                    <td className="p-4 text-right">
                      <p className="!text-base md:!text-lg !text-orange-400">{row.time}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Footer Note */}
      <div className="text-center pt-4">
        <p className="!text-xs italic !text-gray-400">
          <span className="font-bold text-yellow-600">NOTE:</span> The above timings may change without notice during
          <span className="text-orange-500"> festival days</span> and special occasions.
        </p>
      </div>
    </div>
  );
};

export default Darshan;