import Navbar from "./Navbar";
import Footer from "./Footer";
import Flowers from "../common/Flowers";
import BackgroundMusic from "../common/BackgroundMusic";

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">

      <Navbar />

      {/* 🌸 FLOWERS (BELOW NAVBAR) */}
      <Flowers />

      {/* 🎵 MUSIC */}
      <BackgroundMusic />

      {/* CONTENT */}
      <main className="relative z-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;