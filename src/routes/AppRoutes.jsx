import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import Layout from "../components/layout/Layout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Deities from "../pages/Deities";
import Sevas from "../pages/Sevas";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import TempleInfo from "../pages/TempleInfo";
import Donors from "../pages/Donors";


export default function AppRoutes() {
  return (
   <BrowserRouter>
      {/* Wrapping Layout around the entire Routes block makes audio persistent */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
  
          <Route path="/sevas" element={<Sevas />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/info/:type" element={<TempleInfo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}