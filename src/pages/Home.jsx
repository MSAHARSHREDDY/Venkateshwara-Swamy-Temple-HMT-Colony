import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { templeConfig } from "../data/config";
import { MessageCircle } from "lucide-react";
import LiveKitWidget from "../components/ai_avatar/LiveKitWidget";


const Home = () => {
  const [showSupport, setShowSupport] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effect
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  // Generate particles
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
    setParticles(temp);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center">

      {/* 🌌 BACKGROUND */}
      <div className="animated-bg"></div>

      {/* ✨ PARTICLES */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            bottom: "-10px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* 🖼️ IMAGE WITH PARALLAX */}
      <motion.div style={{ y }} className="dynamic-border inline-block">
        <img
          src="/images/venkateswara.jpg"
          alt="Swamy"
          className="w-[320px] md:w-[550px] lg:w-[650px]"
        />
      </motion.div>

      {/* ✨ TEXT */}
      <h1 className="dynamic-text text-center mt-6">
        {templeConfig.name}
      </h1>

      <p className="mt-4 max-w-2xl text-center">
        Experience divine blessings and spiritual peace.
      </p>

      {/* Floating AI Concierge Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="rounded-full bg-yellow-400 text-black 
             shadow-lg hover:shadow-yellow-400/50 
             transition-all duration-300 hover:scale-105 
             flex items-center gap-2 px-6 py-3"
          onClick={() => setShowSupport(true)}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="font-medium">Talk to AI Concierge</span>
        </button>
      </div>
      {/* LiveKit Widget */}
      {showSupport && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6 pointer-events-none">
          <div className="pointer-events-auto">
            <LiveKitWidget setShowSupport={setShowSupport} />
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;