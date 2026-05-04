import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SubTemples from "../components/SubTemples";
import AboutSection from "../components/AboutSection";
import SevasSection from "../components/SevasSection";
import NoticeBoard from "../components/common/NoticeBoard";
// import UtilityNavbar from "../components/common/TopUtilityBar"; // New Import
import { useState } from "react";


export default function Home() {
    const [isMuted, setIsMuted] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  return (
    <>
      {/* <UtilityNavbar /> NEW: Utility Navbar at the top */}
      <Header />
        {/* <HeroSection 
        audioEnabled={audioEnabled} 
        isMuted={isMuted} 
      /> */}
      <HeroSection />
   
    
      <SubTemples />
      
    </>
  );
}