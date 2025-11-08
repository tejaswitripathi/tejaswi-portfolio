import React, { useMemo, useRef, useState } from "react";
import { Text, Edges } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function SpiralBoxes({ onSelect, activePage }) {
  const groupRef = useRef();
  const [hoveredId, setHoveredId] = useState(null);

  const sections = [
    "About + Booking Info",
    "2025 Highlights",
    "My Travel Photos",
    "Dark Fantasy",
    "Orbital Opulence",
    "Grace in Concrete",
  ];

  const boxes = useMemo(() => {
    const temp = [];

    // --- Top spiral ---
    for (let i = 0; i < 3; i++) {
      const angle = i * 1.0;
      const radius = 5 + i * 1.2;
      const x = Math.cos(angle) * radius * 1.57;
      const y = Math.sin(angle) * 1.3 * radius - 3.0;
      const z = -i * 2.5;
      temp.push({ id: i, label: sections[i], position: [x, y, z], isBottom: false });
    }

    // --- Bottom spiral ---
    for (let i = 3; i < 6; i++) {
      const angle = i * 1.0;
      const radius = 5 + (i - 3) * 1.2;
      const x = Math.cos(angle) * radius * 1.6;
      const y = Math.sin(angle) * 1.3 * radius + 4.5;
      const z = -20 - (i - 3) * 2.5;
      temp.push({ id: i, label: sections[i], position: [x, y, z], isBottom: true });
    }

    return temp;
  }, []);

  // Gentle hover + scale animation
  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    groupRef.current.children.forEach((group, i) => {
      const isTop = i < 3;
      const isBottom = i >= 3;
      const visible = (activePage === 0 && isTop) || (activePage === 1 && isBottom);
      group.visible = visible;

      const hoverOffset = Math.sin(t * 1.2 + i) * 0.25;
      const baseY = group.userData.baseY || 0;
      group.position.y = baseY + hoverOffset;

      const isHovered = hoveredId === i;
      const targetScale = visible ? (isHovered ? 1.6 : 1.4) : 0.6;
      group.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.08);
    });
  });

  return (
    <group ref={groupRef}>
      {boxes.map(({ id, label, position, isBottom }) => (
        <group key={id} position={position} userData={{ baseY: position[1] }}>
          {/* --- Cube with pixel-outline --- */}
          <mesh
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredId(id);
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHoveredId(null);
              document.body.style.cursor = "default";
            }}
            onClick={() => onSelect(label)}
          >
            <boxGeometry args={[3.2, 1.8, 0.5]} />
            <meshStandardMaterial
              color={hoveredId === id ? "#ff80c0" : "hotpink"}
              emissive={hoveredId === id ? "#ff1f8f" : "#000000"}
              emissiveIntensity={hoveredId === id ? 0.3 : 0}
              flatShading
            />
            {/* black pixel-outline edges */}
            <Edges linewidth={4} scale={1} color="black" />
          </mesh>

          {/* --- Front text (always visible) --- */}
          <Text
            font="/fonts/PressStart2P.ttf"
            position={[0, 0, 0.27]}
            fontSize={0.22}
            color="white"
            outlineWidth={0.04}
            outlineColor="black"
            maxWidth={2.8}
            textAlign="center"
            anchorX="center"
            anchorY="middle"
            lineHeight={1.2}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHoveredId(id);
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              setHoveredId(null);
              document.body.style.cursor = "default";
            }}
            onClick={() => onSelect(label)}
          >
            {label}
          </Text>

          {/* --- Back text (only for bottom spiral) --- */}
          {isBottom && (
            <Text
              font="/fonts/PressStart2P.ttf"
              position={[0, 0, -0.27]}
              rotation={[0, Math.PI, 0]}
              fontSize={0.22}
              color="white"
              outlineWidth={0.04}
              outlineColor="black"
              maxWidth={2.8}
              textAlign="center"
              anchorX="center"
              anchorY="middle"
              lineHeight={1.2}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredId(id);
                document.body.style.cursor = "pointer";
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                setHoveredId(null);
                document.body.style.cursor = "default";
              }}
              onClick={() => onSelect(label)}
            >
              {label}
            </Text>
          )}
        </group>
      ))}
    </group>
  );
}
