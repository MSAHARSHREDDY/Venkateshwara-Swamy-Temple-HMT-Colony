// import img from "../assets/venkateswara.jpg";
// import { useRef } from "react";
// import BackgroundAudio from "./BackgroundAudio";

// export default function HeroSection({ audioEnabled, isMuted }) {
//   const bellRef = useRef(null);
//   const masterVolume = 0.9;

//   const playBell = () => {
//     if (isMuted || !audioEnabled) return;
//     if (!bellRef.current) {
//       bellRef.current = new Audio("/audio/bell.mp3");
//     }
//     bellRef.current.volume = masterVolume;
//     bellRef.current.currentTime = 0;
//     bellRef.current.play().catch(() => {});
//   };

//   return (
//     <div className="relative w-full h-[750px] md:h-[1000px] flex flex-col items-center overflow-hidden bg-gradient-to-b from-orange-300 via-yellow-100 to-orange-400">
//       <BackgroundAudio isEnabled={audioEnabled} volume={masterVolume} isMuted={isMuted} />

//       {/* 🛕 FULL WIDTH ARCH */}
//       <div className="absolute inset-0 z-10 w-screen">
//         <img 
//           src="/designs/temple-arch1.jpg" 
//           alt="Temple Arch" 
//           className="w-full h-full object-fill" 
//         />
//       </div>

//       {/* 🎯 DEITY WITH ANIMATION & TELUGU TEXT */}
//       <div className="relative z-20 flex flex-col items-center justify-end h-full pb-[4%] md:pb-[6%]">
        
//         {/* ANIMATED GLOW CONTAINER */}
       

//           <div className="relative z-10 flex flex-col items-center text-center mt-[180px] md:mt-[220px]">
//         <img src={img} alt="Ganesh" className="w-[180px] md:w-[650px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-8" />
//       </div>
     

//         {/* TELUGU TEXT OVERLAY */}
       
//       </div>

//       {/* 🔔 BELL ZONES */}
//       <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
//         <style dangerouslySetInnerHTML={{ __html: `
//           .bell-trigger { position: absolute; cursor: pointer; pointer-events: auto; }
//           @font-face { font-family: 'telugu'; src: local('Gautami'), local('Nirmala UI'); }
//         `}} />
        
//         {/* CENTER BELL */}
//         <div onClick={playBell} title="గంట కొట్టండి" className="bell-trigger w-[12%] h-[15%] top-[20%] left-[44%]" />
        
//         {/* LEFT BELL */}
//         <div onClick={playBell} title="గంట కొట్టండి" className="bell-trigger w-[10%] h-[12%] top-[27%] left-[31%]" />
        
//         {/* RIGHT BELL */}
//         <div onClick={playBell} title="గంట కొట్టండి" className="bell-trigger w-[10%] h-[12%] top-[27%] left-[59%]" />
//       </div>
//     </div>
//   );
// }

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
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 via-yellow-900 to-red-900 px-4">

      {/* 🔊 Background Audio */}
      <BackgroundAudio isEnabled={audioEnabled} volume={masterVolume} isMuted={isMuted} />

      {/* 🙏 IMAGE CARD */}
      <div
        onClick={playBell}
        className="
          relative
          w-full max-w-[300px]
          sm:max-w-[380px]
          md:max-w-[480px]
          lg:max-w-[550px]
          xl:max-w-[920px]
          cursor-pointer
        "
      >
        {/* 🌟 Gradient Border */}
        <div className="
          rounded-3xl
          p-[4px]
          bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500
        ">
          
          {/* 🟡 Inner Container */}
          <div className="
            bg-white/90
            backdrop-blur-sm
            rounded-3xl
            overflow-hidden
          ">
            <img
              src={img}
              alt="Sri Venkateswara Swamy"
              className="
                w-full h-auto object-contain

                /* ✨ soft glow */
                drop-shadow-[0_0_35px_rgba(255,215,0,0.6)]
              "
            />
          </div>
        </div>

        {/* 🌞 Soft outer glow */}
        <div className="
          absolute inset-0 rounded-3xl
          bg-gradient-to-r from-yellow-300/20 via-orange-300/20 to-yellow-300/20
          blur-xl -z-10
        " />
      </div>

    </div>
  );
}

//suprabhatham******
// import img from "../assets/venkateswara.jpg";
// import { useRef, useEffect, useState } from "react";
// import BackgroundAudio from "./BackgroundAudio";

// export default function HeroSection({ audioEnabled, isMuted }) {
//   const bellRef = useRef(null);
//   const suprabhatamRef = useRef(null);
//   const masterVolume = 0.9;

//   const [showPopup, setShowPopup] = useState(false);

//   // 🔔 Bell Sound
//   const playBell = () => {
//     if (isMuted || !audioEnabled) return;

//     if (!bellRef.current) {
//       bellRef.current = new Audio("/audio/bell.mp3");
//     }

//     bellRef.current.volume = masterVolume;
//     bellRef.current.currentTime = 0;
//     bellRef.current.play().catch(() => {});
//   };

//   // 🌅 TIME CHECK (TEST: 12:25 AM)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const hours = now.getHours();     // 0 = 12 AM
//       const minutes = now.getMinutes();

//       if (hours === 0 && minutes === 25) {
//         setShowPopup(true);
//       }
//     }, 1000); // check every second

//     return () => clearInterval(interval);
//   }, []);

//   // 🎵 Play Suprabhatam
//   const playSuprabhatam = () => {
//     if (isMuted || !audioEnabled) return;

//     if (!suprabhatamRef.current) {
//       suprabhatamRef.current = new Audio("/audio/suprabhatam.mp3");
//     }

//     suprabhatamRef.current.volume = masterVolume;
//     suprabhatamRef.current.currentTime = 0;
//     suprabhatamRef.current.play().catch(() => {});

//     setShowPopup(false);
//   };

//   return (
//     <div className="relative w-full h-[750px] md:h-[900px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-orange-300 via-yellow-100 to-orange-400">

//       {/* 🔊 Background Audio */}
//       <BackgroundAudio isEnabled={audioEnabled} volume={masterVolume} isMuted={isMuted} />

//       {/* 🛕 ARCH */}
//       <div className="absolute inset-0 z-10">
//         <img 
//           src="/designs/temple-arch.jpg" 
//           alt="Temple Arch" 
//           className="w-full h-full object-cover object-top"
//         />
//       </div>

//       {/* 🙏 DEITY */}
//       <div className="relative z-20 flex flex-col items-center justify-center">
//         <div className="animate-pulse duration-[3000ms]">
//           <img 
//             src={img} 
//             alt="Venkateswara Swamy"
//             className="w-[260px] sm:w-[320px] md:w-[450px] lg:w-[520px] object-contain rounded-b-[40px] drop-shadow-[0_0_60px_rgba(255,223,0,0.7)]"
//           />
//         </div>
//       </div>

//       {/* 🔔 BELL AREAS */}
//       <div className="absolute inset-0 z-30 pointer-events-none">
//         <div 
//           onClick={playBell} 
//           className="absolute w-[12%] h-[12%] top-[18%] left-[44%] pointer-events-auto cursor-pointer" 
//         />
//         <div 
//           onClick={playBell} 
//           className="absolute w-[10%] h-[10%] top-[25%] left-[30%] pointer-events-auto cursor-pointer" 
//         />
//         <div 
//           onClick={playBell} 
//           className="absolute w-[10%] h-[10%] top-[25%] left-[60%] pointer-events-auto cursor-pointer" 
//         />
//       </div>

//       {/* 🌅 SUPRABHATAM POPUP */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl p-6 text-center shadow-2xl w-[90%] max-w-md">
            
//             <h2 className="text-xl font-bold text-orange-600 mb-3">
//               🌅 Good Morning
//             </h2>

//             <p className="text-gray-700 mb-5">
//               Start your day with divine blessings.  
//               Play Suprabhatam 🙏
//             </p>

//             <div className="flex gap-3 justify-center">
//               <button
//                 onClick={playSuprabhatam}
//                 className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
//               >
//                 🔔 Play
//               </button>

//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
//               >
//                 Skip
//               </button>
//             </div>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }