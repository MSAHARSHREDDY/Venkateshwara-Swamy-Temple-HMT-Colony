import templeData from "../../data/templeData.json";

export default function NoticeBoard() {
  return (
    <div className="bg-[#fffdf5] border-4 border-yellow-700 p-6 rounded-lg shadow-xl max-w-2xl mx-auto my-8 text-amber-900 font-serif">
      <h2 className="text-3xl font-bold text-center border-b-2 border-yellow-700 pb-2 mb-6">
        Temple Notice Board
      </h2>
      
      {/* 1. WEEKLY SEVAS (Now Visible) */}
      <div className="mb-8">
        <h3 className="text-xl font-bold underline mb-4 text-orange-800">Weekly Seva Schedule:</h3>
        <div className="grid gap-3">
          {templeData.weeklySevas.map((seva, idx) => (
            <div key={idx} className="flex justify-between border-b border-orange-200 pb-2">
              <div>
                <span className="font-bold text-orange-700">{seva.day}:</span> {seva.deity}
                <p className="text-sm italic">{seva.seva}</p>
              </div>
              <div className="text-right font-medium text-sm">
                {seva.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. UPCOMING EVENTS (Festivals) */}
      <div className="bg-orange-600 text-white p-5 rounded-xl shadow-md mb-8">
        <h4 className="text-lg font-bold border-b border-white/40 mb-3 pb-1">Upcoming Events:</h4>
        {templeData.festivals.map((fest, idx) => (
          <div key={idx} className="flex justify-between py-2 font-bold uppercase tracking-wider">
            <span>{fest.date}</span>
            <span>{fest.name}</span>
          </div>
        ))}
      </div>

      {/* 3. PRASADA DONORS (Now Visible) */}
      <div className="mt-6 pt-4 border-t border-yellow-700/30">
        <h3 className="text-lg font-bold mb-2">Prasada Donors:</h3>
        <ol className="list-decimal list-inside space-y-1 text-md italic">
          {templeData.donors.map((donor, idx) => (
            <li key={idx} className="opacity-90">{donor}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}