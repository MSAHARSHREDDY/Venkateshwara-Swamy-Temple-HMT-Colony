// import { useAudio } from "../context/AudioContext";

// export default function GlobalAudioPlayer() {
//     const {
//         isPlaying,
//         isPaused,
//         pause,
//         resume,
//         stop,
//         volume,
//         changeVolume,
//     } = useAudio();



//     return (
//         <div className="
//       fixed bottom-0 md:bottom-5 
//       left-0 md:left-auto 
//       right-0 md:right-5 
//       w-full md:w-auto 
//       bg-white shadow-xl border-t md:border 
//       rounded-none md:rounded-xl 
//       px-4 py-3 
//       flex flex-col md:flex-row items-center gap-3 
//       z-50
//     ">

//             <span className="text-sm font-semibold text-orange-600">
//                 🎵 Suprabhatam
//             </span>

//             <div className="flex gap-2">
//                 <button
//                     onClick={() => {
//                         if (!isPlaying) {
//                             play();
//                         } else if (isPaused) {
//                             resume();
//                         } else {
//                             pause();
//                         }
//                     }}
//                     className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm"
//                 >
//                     {!isPlaying ? "▶ Play" : isPaused ? "▶ Resume" : "⏸ Pause"}
//                 </button>

                
//             </div>

//             <div className="flex items-center gap-2 w-full md:w-[150px]">
//                 🔊
//                 <input
//                     type="range"
//                     min="0"
//                     max="1"
//                     step="0.01"
//                     value={volume}
//                     onChange={(e) => changeVolume(e.target.value)}
//                     className="w-full"
//                 />
//             </div>
//         </div>
//     );
// }