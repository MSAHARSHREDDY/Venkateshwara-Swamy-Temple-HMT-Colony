import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { templeConfig } from "../data/config";

const Home = () => {
  const { scrollY } = useScroll();

  // 1. Adjusted Parallax: Only move slightly and keep it subtle.
  // Using a negative value (e.g., -50) makes it float up, which feels more natural.
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const temp = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 6 + Math.random() * 6,
      delay: Math.random() * 5,
    }));
    setParticles(temp);
  }, []);

  return (
    // 2. Removed overflow-hidden from here if you want a normal scrollable page.
    // If this is just a hero section, keep it, but ensure the height isn't collapsed.
    <div className="relative min-h-screen">
      
      {/* 🌌 Background */}
      <div className="animated-bg fixed inset-0 z-0"></div>

      {/* 🌸 Flowers */}
      {particles.map((p) => (
        <img
          key={p.id}
          src="/flowers/flower1.png"
          alt="flower"
          className="flower fixed z-20 pointer-events-none" // Use fixed so they stay in view
          style={{
            left: `${p.left}%`,
            top: "-50px",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* 🔥 CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-20 pb-40">
        
        <motion.div 
          style={{ y: contentY, opacity }} 
          className="flex flex-col items-center"
        >
          <div className="dynamic-border">
            <img
              src="/images/venkateswara.jpg"
              alt="Swamy"
              className="w-[280px] sm:w-[400px] md:w-[600px] rounded-lg shadow-2xl"
            />
          </div>

          <h1 className="dynamic-text mt-8 text-2xl md:text-6xl font-bold">
            {templeConfig.name}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            HMT Venkateshwara Swamy Temple located in Miyapur, Hyderabad is a sacred
            place for devotees.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;