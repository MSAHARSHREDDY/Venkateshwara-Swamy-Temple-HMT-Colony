import useTempleData from "../hooks/useTempleData";

export default function SevasSection() {
  const data = useTempleData();

  if (!data) return <p className="text-center py-10 font-black text-2xl">Loading...</p>;

  return (
    /* Background class from your index.css */
    <div className="temple-bg py-16 px-6 cursor-default">
      
      {/* Page Title - High Contrast Bold */}
      <h2 className="text-center text-3xl md:text-3xl font-black mb-16 text-red-900 uppercase tracking-tighter">
         Sevas
      </h2>

      {/* 5-Column Grid to occupy the entire width as seen in your reference images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full max-w-[1800px] mx-auto">
        {data.sevas.map((seva, i) => (
          <div 
            key={i} 
            className="bg-white border-[3px] border-yellow-500 rounded-lg overflow-hidden shadow-2xl flex flex-col h-full transition-all duration-300 hover:shadow-yellow-200/50 "
          >
            
            {/* ✅ THE IMAGE FIX: Fixed height with 'cover' but positioned to show the ritual focus */}
            <div className="w-full h-[300px] bg-gray-100 overflow-hidden border-b-2 border-yellow-500 ">
              <img
                src={seva.image}
                alt={seva.name}
                /* ✅ 'object-cover' fills the space, 'object-center' keeps the ritual focused */
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* ✅ CONTENT SECTION: Extra bold for clarity */}
            <div className="p-6 text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-black text-gray-900 uppercase border-b-4 border-yellow-400 inline-block mb-4 pb-1">
                  {seva.name}
                </h3>

                <p className="text-base font-black text-gray-700 italic leading-snug mb-6">
                  {seva.description}
                </p>
              </div>
              
              {/* ✅ BOOKING BUTTON: Bold red as per your design */}
              {/* <button className="w-full bg-red-800 text-white font-black py-3 rounded-md hover:bg-red-700 transition-all uppercase tracking-widest text-sm shadow-md active:scale-95">
                Book Seva Now
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}