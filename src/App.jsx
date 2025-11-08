import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SpiralScene from "./components/SpiralScene";
import CategoryPage from "./components/CategoryPage";
import ParticlesBackground from "./components/ParticlesBackground";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* 🌸 Pink glow background */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,105,180,0.15)_0%,rgba(0,0,0,0.9)_85%)]" />
      </div>

      {/* ✨ Show particle background only on home page */}
      {isHome && (
        <div id="spiral-particles" className="fixed inset-0 z-[1] pointer-events-none">
          <ParticlesBackground />
        </div>
      )}

      {/* 🌙 Main content layer */}
      <div className="relative z-[2]">
        <Routes>
          <Route path="/" element={<SpiralScene />} />
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
