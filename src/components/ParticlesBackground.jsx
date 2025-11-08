import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function ParticleField() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 200;
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.03;
      ref.current.rotation.x = Math.sin(t * 0.1) * 0.05;
      const mat = ref.current.material;
      mat.opacity = 0.5 + Math.sin(t * 1.2) * 0.15;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffb6e9"
        size={0.22}
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

export default function ParticlesBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 45], fov: 75 }}
      gl={{ alpha: true }}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <ambientLight intensity={0.2} />
      <ParticleField />
    </Canvas>
  );
}
