// 📁 src/App.jsx

import AppRoutes from "./routes/AppRoutes";
import FallingFlowers from "./components/FallingFlowers"; // ADD THIS
import BackgroundAudio from "./components/BackgroundAudio"; // ADD
// import GlobalAudioPlayer from "./components/GlobalAudioPlayer";



function App() {
  return (
    <>
      {/* ✨ Background particles */}
      <div className="particles"></div>
       {/* <GlobalAudioPlayer /> */}

      {/* 🌺 Falling Flowers (GLOBAL) */}
      <FallingFlowers />

      {/* 🚀 Routes */}
      <AppRoutes />
    </>
  );
}

export default App;