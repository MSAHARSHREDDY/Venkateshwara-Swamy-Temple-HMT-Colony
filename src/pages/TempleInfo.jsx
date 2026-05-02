import { useParams } from "react-router-dom";
import useTempleData from "../hooks/useTempleData";

export default function TempleInfo() {
  const { type } = useParams();
  const data = useTempleData();

  if (!data) return <p className="text-center py-10">Loading...</p>;

  const sectionMap = {
    history: data.info.history,
    "dos-donts": data.info.dosDonts,
    timings: data.info.timings,
  };

  const section = sectionMap[type];

  if (!section) return <p className="text-center py-10">No Data Found</p>;

  // Bold formatter
  const formatText = (text) =>
    text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");

  return (
    <div className="py-10 px-4 md:px-16 temple-bg">

      {/* TITLE */}
      <h1 className="text-center text-2xl md:text-3xl font-bold text-red-900 mb-2">
        {section.title}
      </h1>

      {/* SUBTITLE */}
      <h2 className="text-center text-lg mb-2 text-yellow-900 font-bold">
        {section.subtitle}
      </h2>

      {/* BLESSINGS */}
      <div className="text-center mb-8 space-y-1">
        {section.blessings.map((b, i) => (
          <p key={i} className="font-semibold">{b}</p>
        ))}
      </div>

      {/* ========================= */}
      {/* HISTORY */}
      {/* ========================= */}
      {type === "history" && (
        <div className="space-y-4 text-base md:text-lg leading-relaxed">
          {section.content.map((item, i) => (
            <p
              key={i}
              dangerouslySetInnerHTML={{
                __html: formatText(item),
              }}
            />
          ))}
        </div>
      )}

      {/* ========================= */}
      {/* DO'S & DON'TS */}
      {/* ========================= */}
      {type === "dos-donts" && (
        <div className="grid md:grid-cols-2 gap-6">

          {/* DO's */}
          <div>
            <h3 className="font-bold text-green-700 mb-3 text-lg">
              ✅ Do's
            </h3>

              <div className="space-y-2">
  {section.dos.map((item, i) => (
    <p className="font-bold text-gray-800 text-lg" key={i}>
      {item}
    </p>
  ))}
</div>
          </div>

          {/* DON'Ts */}
          <div>
            <h3 className="font-bold text-red-700 mb-3 text-lg">
              ❌ Don'ts
            </h3>

            <div className="space-y-2">
              {section.donts.map((item, i) => (
                <p className="font-bold text-gray-800 text-lg" key={i}>
                  {item}
                </p>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* ========================= */}
      {/* TIMINGS */}
      {/* ========================= */}
     {type === "timings" && (
  <div className="overflow-x-auto">
    <table className="w-full text-sm md:text-base border border-red-700">
      
      {/* Header */}
      <thead className="bg-yellow-600 text-white">
        <tr>
          <th className="p-2 text-left">Day</th>
          <th className="p-2 text-left">Morning</th>
          <th className="p-2 text-left">Evening</th>
        </tr>
      </thead>

      {/* Body */}
      <tbody>
        {section.schedule.map((item, i) => (
          <tr key={i} className="border-t">
            <td className="p-2 font-bold">{item.day}</td>
            <td className="p-2 font-bold">{item.morning}</td>
            <td className="p-2 font-bold">{item.evening}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
    </div>
  );
}