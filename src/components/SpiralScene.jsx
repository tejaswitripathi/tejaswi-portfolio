import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import SpiralBoxes from "./SpiralBoxes";
import { useNavigate, useLocation } from "react-router-dom";
import { useSpiralStore } from "../store/spiralStore";
import ParticlesBackground from "../components/ParticlesBackground";

function CameraRig({ page, selectedBox }) {
  const { camera } = useThree();

  useLayoutEffect(() => {
    const positions = {
      top: { z: 13 },
      bottom: { z: -38 },
    };

    const updateCamera = (instant = false) => {
      const targetZ = page.current === 0 ? positions.top.z : positions.bottom.z;
      if (instant) {
        camera.position.set(0, 0, targetZ);
        camera.lookAt(0, 0, 0);
      } else {
        gsap.to(camera.position, {
          duration: 1.2,
          z: targetZ,
          ease: "power2.inOut",
          onUpdate: () => camera.lookAt(0, 0, 0),
        });
      }
    };

    const zoomToBox = (targetPos, onComplete) => {
      const tl = gsap.timeline({
        defaults: { duration: 1.2, ease: "power2.inOut" },
        onComplete,
      });
      tl.to(camera.position, {
        x: targetPos[0],
        y: targetPos[1],
        z: targetPos[2] + 4, // move in front of box
      }).to({}, { duration: 0.3 }); // small pause
      tl.eventCallback("onUpdate", () => camera.lookAt(targetPos[0], targetPos[1], targetPos[2]));
    };

    page.updateCamera = updateCamera;
    page.zoomToBox = zoomToBox;
  }, [camera, page]);

  return null;
}

export default function SpiralScene() {
  const navigate = useNavigate();
  const location = useLocation();
  const page = useRef(0);
  const { page: globalPage, setPage } = useSpiralStore();
  const selectedBox = useRef(null);

  page.current = globalPage;

  // Scroll snapping
  useLayoutEffect(() => {
    let isScrolling = false;
    const onWheel = (e) => {
      if (isScrolling) return;
      isScrolling = true;

      if (e.deltaY > 0 && page.current === 0) {
        page.current = 1;
        setPage(1);
        page.updateCamera?.();
      } else if (e.deltaY < 0 && page.current === 1) {
        page.current = 0;
        setPage(0);
        page.updateCamera?.();
      }

      gsap.delayedCall(1.3, () => {
        isScrolling = false;
      });
    };

    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, [setPage]);

  const handleSelect = (label, position) => {
    selectedBox.current = position;
    // Animate camera toward box
    page.zoomToBox?.(position, () => {
      navigate(`/category/${encodeURIComponent(label)}`);
    });
  };

  // When returning from category page, instantly restore spiral position
  React.useEffect(() => {
    if (location.pathname === "/") {
      requestAnimationFrame(() => {
        page.updateCamera?.(true);
      });
    }
  }, [location.pathname]);

  const handleCanvasCreated = () => {
    requestAnimationFrame(() => page.updateCamera?.(true));
  };

  return (
    <div
        className="fixed top-0 left-0 w-screen h-screen overflow-hidden"
        style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        }}
    >
        {/* 🌌 Background image */}
        <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/background.jpg')",
        }}
        />

        {/* ✨ Particle + pink glow layer */}
        <div className="fixed inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,105,180,0.15)_0%,rgba(0,0,0,0.9)_85%)]" />
        <ParticlesBackground />
        </div>

        {/* 🎮 3D spiral scene */}
        <div className="fixed inset-0 z-[2]">
        <Canvas
            camera={{ position: [0, 0, globalPage === 0 ? 13 : -38], fov: 60 }}
            gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            }}
            style={{
            position: "fixed",
            inset: 0,
            width: "100%",
            height: "100%",
            background: "transparent",
            }}
            onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
            handleCanvasCreated();
            }}
        >
            <ambientLight intensity={2.5} />
            <directionalLight position={[10, 10, 10]} intensity={5} />
            <SpiralBoxes onSelect={handleSelect} activePage={globalPage} />
            <CameraRig page={page} selectedBox={selectedBox} />
            <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
        </div>
    </div>
    );

}
