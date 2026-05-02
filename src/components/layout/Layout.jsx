import { useState, useRef, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundAudio from "../BackgroundAudio";

export default function Layout({ children }) {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  // Locked volume level for both sounds to prevent fluctuation
  const masterVolume = 0.9;
  
  const bellRef = useRef(null);

  const toggleMasterAudio = () => {
    if (!audioEnabled) {
      setAudioEnabled(true);
    } else {
      setIsMuted(!isMuted);
    }
  };

  const playBell = () => {
    if (isMuted || !audioEnabled) return;
    if (!bellRef.current) {
      bellRef.current = new Audio("/audio/bell.mp3");
    }
    if (bellRef.current.paused || bellRef.current.currentTime > 0.2) {
      bellRef.current.volume = masterVolume;
      bellRef.current.currentTime = 0;
      bellRef.current.play().catch(() => {});
    }
  };

  // Continuous Bell Loop at stable volume
  useEffect(() => {
    let interval;
    if (audioEnabled && !isMuted) {
      interval = setInterval(() => {
        playBell();
      }, 3000); // Rings every 3 seconds
    }
    return () => clearInterval(interval);
  }, [audioEnabled, isMuted]);

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background music now uses the stable masterVolume */}
      <BackgroundAudio isEnabled={audioEnabled} volume={masterVolume} isMuted={isMuted} />

      <Navbar />

      {/* 🔘 ADJUSTED CONTROL BUTTON POSITION */}
      <div className="fixed top-[160px] right-0 z-[9999] flex flex-col items-end gap-2">
        <button 
          onClick={toggleMasterAudio}
          className={`group flex items-center gap-2 p-3 rounded-l-xl shadow-lg transition-all duration-300 border-y border-l border-white/20
            ${!audioEnabled 
              ? 'bg-red-600 text-white animate-pulse' 
              : isMuted 
                ? 'bg-gray-700 text-gray-300' 
                : 'bg-yellow-500 text-black hover:pr-6'
            }`}
        >
          <span className="text-xs font-bold uppercase tracking-wider max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
            {!audioEnabled ? "Enable Audio" : isMuted ? "Unmute" : "Mute Devotion"}
          </span>
          {isMuted || !audioEnabled ? (
            <FaVolumeMute size={20} />
          ) : (
            <FaVolumeUp size={20} className="animate-bounce-slow" />
          )}
        </button>
      </div>

      <main className="flex-grow">{children}</main>
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-bounce-slow { animation: bounce-slow 1s infinite; }
      `}} />
    </div>
  );
}