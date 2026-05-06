// import useTempleData from "../hooks/useTempleData";

// export default function SubTemples() {
//   const data = useTempleData();

//   if (!data) return <p className="text-center py-10 font-bold">Loading...</p>;

//   return (
//     <>
//       <style>
//         {`
//           .full-page-yellow-grid {
//             background-color: #fffde7;
//             background-image: radial-gradient(#d4af37 0.8px, transparent 0.8px);
//             background-size: 20px 20px;
//             /* Ensures background covers the whole screen height */
//             min-height: 100vh; 
//             width: 100%;
//             /* Padding for the overall grid edges */
//             padding: 40px 20px; 
//             margin: 0;
//             box-sizing: border-box;
//           }

//           .temple-card {
//             background: white;
//             border: 2px solid #ffd700;
//             display: flex;
//             flex-direction: column;
//             height: 100%;
//             border-radius: 4px;
//             overflow: hidden;
//             box-shadow: 0 4px 12px rgba(0,0,0,0.08);
//           }

//           .image-container {
//             width: 100%;
//             /* Balanced aspect ratio for all 5 images */
//             aspect-ratio: 4 / 5; 
//             background-color: #f8f8f8;
//             overflow: hidden;
//           }

//           .temple-img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             object-position: top center; 
//           }

//           .bold-text {
//             font-weight: 800;
//             color: #1a1a1a;
//           }
//         `}
//       </style>

//       <div className="full-page-yellow-grid">
//         <h2 className="text-center text-3xl font-black mb-10 text-red-900 uppercase tracking-widest">
//           Sub Temples
//         </h2>

//         {/* Removed 'max-w-7xl' to allow the grid to stretch to the screen edges */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 w-full ">
//           {data.subTemples.map((temple) => (
//             <div key={temple.id} className="temple-card ">
              
//               <div className="image-container ">
//                 <img
//                   src={temple.image}
//                   alt={temple.title}
//                   className="temple-img"
//                 />
//               </div>

//               <div className="p-6 bg-gray-100 flex-grow">
//                 <h3 className="text-xl font-black text-gray-900 mb-2 border-b-2 border-yellow-400 inline-block pb-1">
//                   {temple.title}
//                 </h3>

//                 <p className="text-sm font-bold text-gray-600 mb-5 italic leading-relaxed">
//                   {temple.description}
//                 </p>

//                 <div className="space-y-4 text-sm">
//                   <div className="flex items-start gap-3">
//                     <span className="text-lg">🙏</span>
//                     <p className="bold-text leading-tight">{temple.significance}</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-red-600">📍</span>
//                     <p className="bold-text">{temple.location}</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-blue-600">📅</span>
//                     <p className="bold-text">{temple.days}</p>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <span className="text-orange-600">🍛</span>
//                     <p className="bold-text">{temple.prasadam}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }






import useTempleData from "../hooks/useTempleData";

export default function SubTemples() {
  const data = useTempleData();

  if (!data) return <p className="text-center py-10 font-bold">Loading...</p>;

  return (
    <>
      <style>
        {`
          .full-page-yellow-grid {
            background-color: #fffde7;
            background-image: radial-gradient(#d4af37 0.8px, transparent 0.8px);
            background-size: 20px 20px;
            min-height: 100vh;
            width: 100%;
            padding: 20px 10px; /* ✅ reduced padding for mobile */
            margin: 0;
            box-sizing: border-box;
          }

          .temple-card {
            background: white;
            border: 2px solid #ffd700;
            display: flex;
            flex-direction: column;
            height: 100%;
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
          }

          .image-container {
            width: 100%;
            aspect-ratio: 3 / 4; /* ✅ smaller image */
            background-color: #f8f8f8;
            overflow: hidden;
          }

          @media (max-width: 640px) {
            .image-container {
              aspect-ratio: 3 / 3.5; /* ✅ even smaller for mobile */
            }
          }

          .temple-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top center;
          }

          .bold-text {
            font-weight: 700;
            color: #1a1a1a;
          }
        `}
      </style>

      <div className="full-page-yellow-grid">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-black mb-6 text-red-900 uppercase tracking-widest">
          Sub Temples
        </h2>

        {/* ✅ MOBILE OPTIMIZED GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 w-full">
          
          {data.subTemples.map((temple) => (
            <div key={temple.id} className="temple-card">
              
              {/* 🖼 IMAGE */}
              <div className="image-container">
                <img
                  src={temple.image}
                  alt={temple.title}
                  className="temple-img"
                />
              </div>

              {/* 📄 CONTENT */}
              <div className="p-3 sm:p-4 bg-gray-100 flex-grow">

                {/* TITLE */}
                <h3 className="text-sm sm:text-base md:text-lg font-black text-gray-900 mb-1 border-b-2 border-yellow-400 inline-block pb-1">
                  {temple.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm font-semibold text-gray-600 mb-3 italic leading-snug">
                  {temple.description}
                </p>

                {/* DETAILS */}
                <div className="space-y-1 text-[10px] sm:text-sm leading-tight">
                  
                  <div className="flex items-start gap-1">
                   <span className="text-[12px] sm:text-base">🙏</span>
                    <p className="bold-text leading-tight text-xs sm:text-sm  ">
                      {temple.significance}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[12px] sm:text-base">📍</span>
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm ">{temple.location}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[12px] sm:text-base">📅</span>
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm ">{temple.days}</p>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="text-[12px] sm:text-base">🍛</span>
                   <p className="font-semibold text-gray-800 text-xs sm:text-sm ">{temple.prasadam}</p>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}