"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, Stars, Text } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Group, Mesh } from "three";
import { useTheme } from "@/components/theme/ThemeProvider";

type Palette = {
  metal: string;
  chassis: string;
  screen: string;
  accent: string;
  accentAlt: string;
  panel: string;
  glyph: string;
};

function usePalette(): { dark: boolean; colors: Palette } {
  const { theme } = useTheme();
  const dark = theme === "dark";

  const colors = useMemo<Palette>(
    () =>
      dark
        ? {
            metal: "#4b4b58",
            chassis: "#2a2a34",
            screen: "#67e8f9",
            accent: "#f0abfc",
            accentAlt: "#c4b5fd",
            panel: "#1e1b4b",
            glyph: "#ffffff",
          }
        : {
            metal: "#94a3b8",
            chassis: "#e2e8f0",
            screen: "#0d9488",
            accent: "#0f766e",
            accentAlt: "#14b8a6",
            panel: "#f8fafc",
            glyph: "#0f766e",
          },
    [dark],
  );

  return { dark, colors };
}

function Laptop({ colors, dark }: { colors: Palette; dark: boolean }) {
  const lid = useRef<Group>(null);
  const cursor = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (lid.current) {
      lid.current.rotation.x = -1.05 + Math.sin(t * 0.45) * 0.04;
    }
    if (cursor.current) {
      cursor.current.visible = Math.sin(t * 6) > 0;
    }
  });

  const lines = [0.72, 0.5, 0.62, 0.38, 0.55, 0.28];

  return (
    <group position={[0.15, -0.35, 0]} rotation={[0.18, -0.42, 0]} scale={1.15}>
      {/* Base */}
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[2.2, 0.08, 1.45]} />
        <meshStandardMaterial color={colors.metal} metalness={0.65} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.06, 0.08]}>
        <boxGeometry args={[1.85, 0.03, 1.05]} />
        <meshStandardMaterial color={colors.chassis} metalness={0.4} roughness={0.4} />
      </mesh>
      {/* Trackpad */}
      <mesh position={[0, 0.08, 0.38]}>
        <boxGeometry args={[0.55, 0.01, 0.32]} />
        <meshStandardMaterial color={dark ? "#27272f" : "#cbd5e1"} metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Screen lid */}
      <group ref={lid} position={[0, 0.05, -0.68]}>
        <mesh position={[0, 0.78, 0]}>
          <boxGeometry args={[2.2, 1.45, 0.07]} />
          <meshStandardMaterial color={colors.metal} metalness={0.6} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.78, 0.045]}>
          <boxGeometry args={[2.0, 1.25, 0.02]} />
          <meshStandardMaterial
            color={dark ? "#020617" : "#0f172a"}
            metalness={0.2}
            roughness={0.35}
          />
        </mesh>
        <mesh position={[0, 0.78, 0.055]}>
          <boxGeometry args={[1.92, 1.16, 0.01]} />
          <meshStandardMaterial
            color={colors.screen}
            emissive={colors.screen}
            emissiveIntensity={dark ? 1.15 : 0.28}
            roughness={0.2}
          />
        </mesh>

        {lines.map((width, i) => (
          <mesh
            key={i}
            position={[-0.55 + (i % 3) * 0.04, 1.18 - i * 0.16, 0.07]}
          >
            <boxGeometry args={[width, 0.045, 0.01]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? colors.accent : colors.glyph}
              emissive={i % 2 === 0 ? colors.accent : colors.screen}
              emissiveIntensity={dark ? 1.6 : 0.45}
            />
          </mesh>
        ))}
        <mesh ref={cursor} position={[0.42, 0.38, 0.07]}>
          <boxGeometry args={[0.04, 0.12, 0.01]} />
          <meshStandardMaterial
            color={colors.accent}
            emissive={colors.accent}
            emissiveIntensity={2}
          />
        </mesh>
      </group>
    </group>
  );
}

function HoloCard({
  position,
  rotation,
  color,
  title,
  dark,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  title: string;
  dark: boolean;
}) {
  return (
    <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.55}>
      <group position={position} rotation={rotation}>
        <mesh>
          <boxGeometry args={[1.22, 0.78, 0.05]} />
          <meshStandardMaterial
            color={dark ? "#1c1630" : "#0b1220"}
            metalness={0.25}
            roughness={0.3}
            emissive={color}
            emissiveIntensity={dark ? 0.28 : 0.08}
          />
        </mesh>
        <mesh position={[0, 0, 0.03]}>
          <planeGeometry args={[1.08, 0.62]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={dark ? 1.1 : 0.35}
            transparent
            opacity={dark ? 0.42 : 0.18}
          />
        </mesh>
        <mesh position={[0, 0, 0.028]}>
          <planeGeometry args={[1.12, 0.66]} />
          <meshBasicMaterial color={color} transparent opacity={dark ? 0.35 : 0.12} />
        </mesh>
        <Text
          position={[0, 0.06, 0.05]}
          fontSize={0.15}
          color="#ffffff"
          outlineWidth={0.008}
          outlineColor={color}
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      </group>
    </Float>
  );
}

function OrbitingGlyphs({ colors }: { colors: Palette }) {
  const group = useRef<Group>(null);
  const glyphs = useMemo(
    () => [
      { text: "</>", radius: 2.35, speed: 0.35, y: 0.55 },
      { text: "{ }", radius: 2.7, speed: -0.22, y: -0.15 },
      { text: "=>", radius: 2.15, speed: 0.48, y: 1.05 },
      { text: "TS", radius: 2.9, speed: -0.3, y: 0.35 },
    ],
    [],
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={group}>
      {glyphs.map((glyph) => (
        <OrbitItem key={glyph.text} {...glyph} color={colors.glyph} accent={colors.accent} />
      ))}
    </group>
  );
}

function OrbitItem({
  text,
  radius,
  speed,
  y,
  color,
  accent,
}: {
  text: string;
  radius: number;
  speed: number;
  y: number;
  color: string;
  accent: string;
}) {
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = y + Math.sin(t * 1.4) * 0.12;
    ref.current.lookAt(0, y, 0);
  });

  return (
    <group ref={ref}>
      <Text fontSize={0.22} color={color} outlineWidth={0.004} outlineColor={accent}>
        {text}
      </Text>
    </group>
  );
}

function CodeBits({ color }: { color: string }) {
  const group = useRef<Group>(null);
  const bits = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        position: [
          (Math.sin(i * 2.1) * 3.4),
          Math.cos(i * 1.3) * 1.7 + 0.2,
          Math.sin(i * 0.9) * 2.4,
        ] as [number, number, number],
        scale: 0.035 + (i % 5) * 0.012,
      })),
    [],
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.06;
  });

  return (
    <group ref={group}>
      {bits.map((bit, i) => (
        <mesh key={i} position={bit.position} scale={bit.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={color}
            metalness={0.6}
            roughness={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

function Rig({ children }: { children: ReactNode }) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.25;
    const y = state.pointer.y * 0.12;
    group.current.rotation.y += (x - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y - group.current.rotation.x) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

function Scene() {
  const { dark, colors } = usePalette();

  return (
    <>
      <color attach="background" args={[dark ? "#000000" : "transparent"]} />
      <ambientLight intensity={dark ? 0.48 : 0.7} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={dark ? 1.35 : 1.2}
        color={dark ? "#f5f3ff" : "#ffffff"}
      />
      <pointLight position={[2.2, 1.2, 1.5]} intensity={dark ? 2.4 : 0.5} color={colors.screen} />
      <pointLight position={[-1.2, 0.8, 1.4]} intensity={dark ? 1.8 : 0.4} color={colors.accent} />

      {dark ? (
        <Stars radius={90} depth={55} count={3600} factor={3} saturation={0} fade speed={0.5} />
      ) : null}

      <Rig>
        <Laptop colors={colors} dark={dark} />
        <HoloCard
          position={[1.85, 0.85, 0.35]}
          rotation={[0.1, -0.45, 0.08]}
          color={colors.screen}
          title="terminal"
          dark={dark}
        />
        <HoloCard
          position={[2.05, 0.15, 0.8]}
          rotation={[0.08, -0.42, 0.04]}
          color={colors.accent}
          title="git push"
          dark={dark}
        />
        <HoloCard
          position={[1.35, -0.35, 1.05]}
          rotation={[-0.12, -0.3, 0.05]}
          color={colors.accentAlt}
          title="Next.js"
          dark={dark}
        />
        <OrbitingGlyphs colors={colors} />
        <CodeBits color={dark ? "#a1a1aa" : "#94a3b8"} />
      </Rig>

      <ContactShadows
        position={[0, -1.35, 0]}
        opacity={dark ? 0.45 : 0.22}
        scale={12}
        blur={2.6}
        far={4}
      />
      {dark ? null : <Environment preset="city" />}
    </>
  );
}

function ThemeAwareCanvas() {
  const { theme } = useTheme();
  const [ready, setReady] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <Canvas
      key={theme}
      camera={{ position: [0, 0.35, 6.4], fov: 38 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: !isDark }}
      style={{ background: isDark ? "#000000" : "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-y-0 right-0 z-0 left-[36%] md:left-[40%]">
      <ThemeAwareCanvas />
    </div>
  );
}
