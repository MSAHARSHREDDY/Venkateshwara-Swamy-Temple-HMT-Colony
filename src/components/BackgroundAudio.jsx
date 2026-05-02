import { useRef, useEffect } from "react";

export default function BackgroundAudio({ volume = 0.5, isEnabled, isMuted }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (isEnabled && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [isEnabled]);

  return (
    <audio ref={audioRef} loop>
      <source src="/audio/om_gan_ganpatay.mp3" type="audio/mpeg" />
    </audio>
  );
}