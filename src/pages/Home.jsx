import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SubTemples from "../components/SubTemples";
import AboutSection from "../components/AboutSection";
import SevasSection from "../components/SevasSection";
import NoticeBoard from "../components/common/NoticeBoard";
import UtilityNavbar from "../components/common/TopUtilityBar"; // New Import

export default function Home() {
  return (
    <>
      <UtilityNavbar /> {/* NEW: Utility Navbar at the top */}
      <Header />
      <HeroSection />
      {/* 
          STRATEGIC PLACEMENT: 
          Place the NoticeBoard immediately after the Hero so visitors 
          see the daily timings and special festivals (from the board) 
          right away.
      */}
      {/**Notice Board */}
      {/* <div className="container mx-auto px-4">
        <NoticeBoard />
      </div> */}
      <SubTemples />
      
    </>
  );
}