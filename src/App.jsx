// 📁 src/App.jsx

import AppRoutes from "./routes/AppRoutes";
import FallingFlowers from "./components/FallingFlowers"; // ADD THIS
import BackgroundAudio from "./components/BackgroundAudio"; // ADD


function App() {
  return (
    <>
      {/* ✨ Background particles */}
      <div className="particles"></div>
       <BackgroundAudio /> {/* 🔊 ADD HERE */}

      {/* 🌺 Falling Flowers (GLOBAL) */}
      <FallingFlowers />

      {/* 🚀 Routes */}
      <AppRoutes />
    </>
  );
}

export default App;