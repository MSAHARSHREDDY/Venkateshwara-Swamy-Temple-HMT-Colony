

import img from "../assets/venkateswara.jpg";
import { useRef } from "react";
import BackgroundAudio from "./BackgroundAudio";

export default function HeroSection({ audioEnabled, isMuted }) {
  const bellRef = useRef(null);
  const masterVolume = 0.9;

  const playBell = () => {
    if (isMuted || !audioEnabled) return;
    if (!bellRef.current) {
      bellRef.current = new Audio("/audio/bell.mp3");
    }
    bellRef.current.volume = masterVolume;
    bellRef.current.currentTime = 0;
    bellRef.current.play().catch(() => {});
  };

  return (
<div className="w-full min-h-[auto] sm:min-h-screen flex items-start sm:items-center justify-center bg-gradient-to-b from-orange-500 via-yellow-600 to-blue-200 px-2 sm:px-4 py-4 sm:py-0">
      {/* 🔊 Background Audio */}
      <BackgroundAudio isEnabled={audioEnabled} volume={masterVolume} isMuted={isMuted} />

      {/* 🙏 IMAGE CARD */}
<div
  onClick={playBell}
  className="
    relative 
    w-[95%] sm:w-full      /* Use 95% width on mobile to get close to edges but keep a tiny margin */
    sm:max-w-[400px] 
    md:max-w-[500px] 
    lg:max-w-[600px] 
    xl:max-w-[1000px] 
    cursor-pointer
    mx-auto
  "
>
  {/* 🌟 Gradient Border */}
  <div className="
    rounded-2xl sm:rounded-3xl 
    p-[2px] sm:p-[4px] 
    bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500
  ">
    {/* 🟡 Inner Container - REMOVED fixed height to let image define the size */}
    {/* 🟡 Inner Container - Now auto-adjusts to image height */}
<div className="
  bg-white/90 
  backdrop-blur-sm 
  rounded-2xl sm:rounded-3xl 
  overflow-hidden
  flex flex-col
">
  <img
    src={img}
    alt="Sri Venkateswara Swamy"
    className="
      w-full 
      h-auto 
      /* This ensures the image fills the space without leaving top/bottom padding */
      aspect-[4/3] sm:aspect-auto 
      object-cover sm:object-contain
      
      /* Subtle zoom to crop out any existing white borders in the jpg file */
      scale-[1.05] sm:scale-100
      
      drop-shadow-[0_0_35px_rgba(255,215,0,0.6)]
    "
  />
</div>
  </div>
</div>

    </div>
  );
}


// import img from "../assets/venkateswara.jpg";
// import { useEffect, useState } from "react";
// import { useAudio } from "../context/AudioContext";

// export default function HeroSection() {
//   const { play } = useAudio();

//   const [showPopup, setShowPopup] = useState(false);
//   const [dismissed, setDismissed] = useState(
//   sessionStorage.getItem("popupDismissed") === "true"
// );
// const [isValidTime, setIsValidTime] = useState(false);

//   const IS_TESTING = true;

//   // 🌅 TIME LOGIC
//  useEffect(() => {
//   const checkTime = () => {
//     const now = new Date();
//     const h = now.getHours();
//     const m = now.getMinutes();

//     let valid = false;

//     if (IS_TESTING) {
//       // 🧪 TESTING TIME (example 11:00 PM - 11:59 PM)
//       valid = h === 23 && m >= 0 && m <= 59;
//     } else {
//       // 🌅 REAL TIME (6 AM - 7 AM)
//       valid = h >= 6 && h < 7;
//     }

//     setIsValidTime(valid);

//     // SHOW popup only if valid AND not dismissed
//     if (valid && !dismissed) {
//       setShowPopup(true);
//     }

//     // ❌ HIDE everything if time expired
//     if (!valid) {
//       setShowPopup(false);
//       setDismissed(false); // reset for next day
//       sessionStorage.removeItem("popupDismissed");
//     }
//   };

//   checkTime();
//   const interval = setInterval(checkTime, 5000);
//   return () => clearInterval(interval);
// }, [dismissed]);

//   // 🎵 PLAY
// const playSuprabhatam = () => {
//   play();
//   setShowPopup(false);
//   setDismissed(true);

//   sessionStorage.setItem("popupDismissed", "true");
// };

//   // ⛔ SKIP
// const handleSkip = () => {
//   setShowPopup(false);
//   setDismissed(true);

//   sessionStorage.setItem("popupDismissed", "true");
// };

//  return (
//   <div className="
//     relative w-full min-h-screen 
//     flex items-center justify-center 
//     overflow-hidden px-4
//   ">

//     {/* 🌈 ANIMATED BACKGROUND */}
//     <div className="
//       absolute inset-0 -z-10
//       bg-gradient-to-br 
//       from-orange-400 via-yellow-300 to-orange-500
//       animate-gradient
//     " />

//     {/* ✨ GLOW EFFECT LAYER */}
//     <div className="
//       absolute inset-0 -z-10
//       bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.25),transparent_70%)]
//       blur-2xl
//     " />

//     {/* 🙏 IMAGE (NO CARD) */}
//     <div className="relative">

//       {/* 🔥 BORDER GLOW */}
//       <div className="
//         absolute inset-0 
//         rounded-[30px]
//         bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500
//         blur-xl opacity-70
//       " />

//       {/* IMAGE */}
//       <img
//         src={img}
//         alt="Sri Venkateswara Swamy"
//         className="
//           relative z-10

//           w-[240px]
//           sm:w-[320px]
//           md:w-[450px]
//           lg:w-[550px]
//           xl:w-[750px]

//           rounded-[30px]

//           object-contain
//           drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]
//         "
//       />

//     </div>

//     {/* 🌅 POPUP (UNCHANGED) */}
//     {showPopup && (
//       <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
//         <div className="bg-white rounded-xl p-5 text-center shadow-2xl w-full max-w-md">

//           <h2 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">
//             🌅 Suprabhatam
//           </h2>

//           <p className="text-gray-700 text-sm sm:text-base mb-4">
//             Start your day with divine blessings 🙏
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 justify-center">
//             <button
//               onClick={playSuprabhatam}
//               className="bg-orange-500 text-white px-4 py-2 rounded-lg"
//             >
//               🔔 Play
//             </button>

//             <button
//               onClick={handleSkip}
//               className="bg-gray-300 px-4 py-2 rounded-lg"
//             >
//               Skip
//             </button>
//           </div>

//         </div>
//       </div>
//     )}
//   </div>
// );
// }





// import img from "../assets/venkateswara.jpg";
// import { useEffect, useState } from "react";
// import { useAudio } from "../context/AudioContext";
// import GlobalAudioPlayer from "./GlobalAudioPlayer";

// export default function HeroSection() {
//   const { play, pause, resume, isPlaying, isPaused, volume, changeVolume, stop } = useAudio();

//   const [showPopup, setShowPopup] = useState(false);
//   const [dismissed, setDismissed] = useState(
//     sessionStorage.getItem("popupDismissed") === "true"
//   );
//   const [hasUserPlayed, setHasUserPlayed] = useState(false);

//   const [isValidTime, setIsValidTime] = useState(false);

//   const IS_TESTING = true;

//   // ⏰ TIME LOGIC
//   useEffect(() => {
//     const checkTime = () => {
//   const now = new Date();
//   const h = now.getHours();
//   const m = now.getMinutes();

//   let valid = false;

//   if (IS_TESTING) {
//     if (h === 1 && m >= 0 && m <= 59) {
//       valid = true;
//     }
//   } else {
//     if (h >= 6 && h < 7) {
//       valid = true;
//     }
//   }

//   setIsValidTime(valid);

//   // ✅ ALWAYS read from sessionStorage (not state)
//   const alreadyDismissed = sessionStorage.getItem("popupDismissed") === "true";

//   if (valid && !alreadyDismissed) {
//     setShowPopup(true);
//   } else {
//     setShowPopup(false);
//   }

//   // ❌ force stop if outside time
//   if (!valid) {
//     stop();
//   }
// };

//     checkTime();
//     const interval = setInterval(checkTime, 5000);
//     return () => clearInterval(interval);
//   }, []);

//  const playSuprabhatam = () => {
//   play();
//   setShowPopup(false);
//   setDismissed(true);

//   sessionStorage.setItem("popupDismissed", "true");
// };

// const handleSkip = () => {
//   setShowPopup(false);
//   setDismissed(true);

//   sessionStorage.setItem("popupDismissed", "true");
// };

//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4">

//       {/* 🌈 ANIMATED BACKGROUND */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-400 via-yellow-300 to-orange-500 animate-gradient" />

//       {/* ✨ GLOW LAYER */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.25),transparent_70%)] blur-2xl" />

//       {/* 🙏 IMAGE */}
//       <div className="relative">

//         {/* 🔥 Glow Border */}
//         <div className="absolute inset-0 rounded-[30px] bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 blur-xl opacity-70" />

//         <img
//           src={img}
//           alt="Sri Venkateswara Swamy"
//           className="
//             relative z-10
//             w-[240px]
//             sm:w-[320px]
//             md:w-[450px]
//             lg:w-[550px]
//             xl:w-[750px]
//             rounded-[30px]
//             object-contain
//             drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]
//           "
//         />
//       </div>

//       {/* 🌅 POPUP */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
//           <div className="bg-white rounded-xl p-5 text-center shadow-2xl w-full max-w-md">

//             <h2 className="text-lg sm:text-xl font-bold text-orange-600 mb-2">
//               🌅 Suprabhatam
//             </h2>

//             <p className="text-gray-700 text-sm sm:text-base mb-4">
//               Start your day with divine blessings 🙏
//             </p>

//             <div className="flex flex-col sm:flex-row gap-3 justify-center">
//               <button
//                 onClick={playSuprabhatam}
//                 className="bg-orange-500 text-white px-4 py-2 rounded-lg"
//               >
//                 🔔 Play
//               </button>

//               <button
//                 onClick={handleSkip}
//                 className="bg-gray-300 px-4 py-2 rounded-lg"
//               >
//                 Skip
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//       {/* 🎵 FLOATING PLAYER */}
//       {isValidTime && isPlaying && <GlobalAudioPlayer />}
//     </div>
//   );
// }