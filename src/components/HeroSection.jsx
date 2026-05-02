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
    <div className="relative w-full h-[750px] md:h-[1000px] flex flex-col items-center overflow-hidden bg-gradient-to-b from-orange-300 via-yellow-100 to-orange-400">
      <BackgroundAudio isEnabled={audioEnabled} volume={masterVolume} isMuted={isMuted} />

      {/* 🛕 FULL WIDTH ARCH */}
      <div className="absolute inset-0 z-10 w-screen">
        <img 
          src="/designs/temple-arch.jpg" 
          alt="Temple Arch" 
          className="w-full h-full object-fill" 
        />
      </div>

      {/* 🎯 DEITY WITH ANIMATION & TELUGU TEXT */}
      <div className="relative z-20 flex flex-col items-center justify-end h-full pb-[4%] md:pb-[6%]">
        
        {/* ANIMATED GLOW CONTAINER */}
        <div className="animate-pulse duration-[3000ms] transition-all">
          <img 
            src={img} 
            alt="Venkateswara Swamy" 
            className="w-[380px] md:w-[820px] lg:w-[650px] object-contain rounded-b-[50px] drop-shadow-[0_0_80px_rgba(255,223,0,0.8)]  " 
          />
        </div>

        {/* TELUGU TEXT OVERLAY */}
       
      </div>

      {/* 🔔 BELL ZONES */}
      <div className="absolute top-0 left-0 w-full h-full z-30 pointer-events-none">
        <style dangerouslySetInnerHTML={{ __html: `
          .bell-trigger { position: absolute; cursor: pointer; pointer-events: auto; }
          @font-face { font-family: 'telugu'; src: local('Gautami'), local('Nirmala UI'); }
        `}} />
        
        {/* CENTER BELL */}
        <div onClick={playBell} title="గంట కొట్టండి" className="bell-trigger w-[12%] h-[15%] top-[20%] left-[44%]" />
        
        {/* LEFT BELL */}
        <div onClick={playBell} title="గంట కొట్టండి" className="bell-trigger w-[10%] h-[12%] top-[27%] left-[31%]" />
        
        {/* RIGHT BELL */}
        <div onClick={playBell} title="గంట కొట్టండి" className="bell-trigger w-[10%] h-[12%] top-[27%] left-[59%]" />
      </div>
    </div>
  );
}