import { createContext, useContext, useRef, useState } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [volume, setVolume] = useState(0.9);

  // ▶ PLAY
  const play = () => {
  // 🛑 If audio was stopped earlier → recreate it
  if (!audioRef.current || audioRef.current.ended) {
    audioRef.current = new Audio("/audio/suprabhatam.mp3");
  }

  const audio = audioRef.current;

  audio.pause();              // reset
  audio.currentTime = 0;
  audio.volume = volume;

  audio.play()
    .then(() => {
      setIsPlaying(true);
      setIsPaused(false);
    })
    .catch((err) => {
      console.error("Play failed:", err);
    });
};

  // ⏸ PAUSE
  const pause = () => {
    audioRef.current?.pause();
    setIsPaused(true);
  };

  // ▶ RESUME
 const resume = () => {
  if (audioRef.current) {
    audioRef.current.play();
    setIsPaused(false);
    setIsPlaying(true);
  }
};

  // 🛑 STOP
  const stop = () => {
  if (audioRef.current) {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    // 🔑 IMPORTANT: reset reference
    audioRef.current = null;
  }

  setIsPlaying(false);
  setIsPaused(false);
};

  // 🔊 VOLUME
  const changeVolume = (v) => {
    const vol = Number(v);
    setVolume(vol);

    if (audioRef.current) {
      audioRef.current.volume = vol;
    }
  };

  return (
    <AudioContext.Provider
      value={{
        play,
        pause,
        resume,
        stop,
        isPlaying,
        isPaused,
        volume,
        changeVolume,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);