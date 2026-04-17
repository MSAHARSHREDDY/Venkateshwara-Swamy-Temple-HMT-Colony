import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Darshan from "./pages/Darshan";
import Sevas from "./pages/Sevas";
import Donations from "./pages/Donations";
import Trustees from "./pages/Trustees";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Layout> {/*  IMPORTANT */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/darshan" element={<Darshan />} />
          <Route path="/sevas" element={<Sevas />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/trustees" element={<Trustees />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;