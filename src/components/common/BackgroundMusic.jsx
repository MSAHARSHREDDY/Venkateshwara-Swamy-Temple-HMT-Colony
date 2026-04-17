import { useEffect, useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [userStopped, setUserStopped] = useState(false);

  useEffect(() => {
    const startMusic = (e) => {
      // ❌ Ignore navbar clicks
      if (e.target.closest("nav")) return;

      // ❌ If user manually stopped → don't restart
      if (userStopped) return;

      if (!playing && audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().then(() => {
          setPlaying(true);
        }).catch(() => {});
      }
    };

    document.addEventListener("click", startMusic);

    return () => document.removeEventListener("click", startMusic);
  }, [playing, userStopped]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      setUserStopped(true); // 🚫 prevent auto restart
    } else {
      audioRef.current.volume = 0.4;
      audioRef.current.play().then(() => {
        setPlaying(true);
        setUserStopped(false); // allow again
      }).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/venkateswara.mp3" type="audio/mpeg" />
      </audio>

      {/* 🎵 Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 
                   bg-yellow-400 text-black px-4 py-2 
                   rounded-full shadow-lg 
                   hover:scale-110 transition"
      >
        {playing ? "🔊 Stop" : "🔇 Play"}
      </button>
    </>
  );
};

export default BackgroundMusic;