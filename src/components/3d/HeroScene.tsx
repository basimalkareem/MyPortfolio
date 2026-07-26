"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Environment,
  Stars,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import type { Group, Mesh } from "three";
import { useTheme } from "@/components/theme/ThemeProvider";

function useThemeColors() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return useMemo(
    () =>
      dark
        ? {
            core: "#915eff",
            ring: "#7c3aed",
            ringAlt: "#38bdf8",
            metal: "#1e293b",
            screen: "#22d3ee",
            accent: "#a78bfa",
            shard: "#94a3b8",
          }
        : {
            core: "#5eead4",
            ring: "#0f766e",
            ringAlt: "#64748b",
            metal: "#cbd5e1",
            screen: "#0d9488",
            accent: "#14b8a6",
            shard: "#94a3b8",
          },
    [dark],
  );
}

function CoreOrb({ color }: { color: string }) {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.28;
    mesh.current.rotation.x += delta * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.45} floatIntensity={1.1}>
      <mesh ref={mesh} scale={1.15} position={[0.2, 0.55, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.65}
          distort={0.32}
          speed={1.8}
          transparent
          opacity={0.92}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({
  radius,
  speed,
  tilt,
  color,
}: {
  radius: number;
  speed: number;
  tilt: number;
  color: string;
}) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.z += delta * speed;
  });

  const nodes = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        return {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          scale: i % 2 === 0 ? 0.1 : 0.07,
        };
      }),
    [radius],
  );

  return (
    <group ref={group} rotation={[tilt, 0.25, 0.15]} position={[0.2, 0.55, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.01, 16, 120]} />
        <meshStandardMaterial color={color} transparent opacity={0.5} />
      </mesh>
      {nodes.map((node, i) => (
        <mesh key={i} position={[node.x, node.y, 0]} scale={node.scale}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingShards({ color }: { color: string }) {
  const group = useRef<Group>(null);
  const shards = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        position: [
          (Math.sin(i * 1.7) * 3.2) + 0.8,
          Math.cos(i * 0.9) * 1.8 + 0.4,
          Math.sin(i * 1.1) * 2.2 - 0.5,
        ] as [number, number, number],
        scale: 0.05 + (i % 4) * 0.03,
        rot: [i * 0.4, i * 0.2, i * 0.3] as [number, number, number],
        type: i % 3,
      })),
    [],
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={group}>
      {shards.map((shard, i) => (
        <mesh
          key={i}
          position={shard.position}
          rotation={shard.rot}
          scale={shard.scale}
        >
          {shard.type === 0 ? (
            <boxGeometry args={[1, 1, 1]} />
          ) : shard.type === 1 ? (
            <tetrahedronGeometry args={[1, 0]} />
          ) : (
            <octahedronGeometry args={[1, 0]} />
          )}
          <meshStandardMaterial
            color={color}
            metalness={0.7}
            roughness={0.3}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

/** Procedural tech workstation — inspired by classic 3D portfolio desks */
function TechWorkstation({
  metal,
  screen,
  accent,
}: {
  metal: string;
  screen: string;
  accent: string;
}) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y =
      -0.35 + Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={group} position={[1.6, -1.15, 0.2]} scale={0.95}>
        {/* Desk */}
        <mesh position={[0, -0.35, 0]}>
          <boxGeometry args={[2.4, 0.08, 1.2]} />
          <meshStandardMaterial color={metal} metalness={0.4} roughness={0.45} />
        </mesh>

        {/* Monitor stand */}
        <mesh position={[0, -0.05, -0.15]}>
          <boxGeometry args={[0.18, 0.45, 0.12]} />
          <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.35} />
        </mesh>
        <mesh position={[0, -0.28, 0]}>
          <boxGeometry args={[0.55, 0.04, 0.35]} />
          <meshStandardMaterial color="#0f172a" metalness={0.6} roughness={0.35} />
        </mesh>

        {/* Monitor */}
        <mesh position={[0, 0.45, -0.18]}>
          <boxGeometry args={[1.35, 0.85, 0.08]} />
          <meshStandardMaterial color="#020617" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.45, -0.13]}>
          <boxGeometry args={[1.2, 0.7, 0.02]} />
          <meshStandardMaterial
            color={screen}
            emissive={screen}
            emissiveIntensity={0.55}
            roughness={0.2}
          />
        </mesh>

        {/* Code lines on screen */}
        {[-0.18, -0.05, 0.08, 0.2].map((y, i) => (
          <mesh key={y} position={[-0.25 + i * 0.04, 0.45 + y, -0.11]}>
            <boxGeometry args={[0.55 - i * 0.08, 0.035, 0.01]} />
            <meshStandardMaterial
              color={accent}
              emissive={accent}
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}

        {/* Keyboard */}
        <mesh position={[0, -0.28, 0.28]} rotation={[-0.12, 0, 0]}>
          <boxGeometry args={[1.1, 0.05, 0.38]} />
          <meshStandardMaterial color="#111827" metalness={0.5} roughness={0.4} />
        </mesh>

        {/* PC tower */}
        <mesh position={[0.95, 0.05, 0.05]}>
          <boxGeometry args={[0.35, 0.75, 0.55]} />
          <meshStandardMaterial color="#020617" metalness={0.7} roughness={0.25} />
        </mesh>
        <mesh position={[0.95, 0.05, 0.34]}>
          <boxGeometry args={[0.28, 0.55, 0.02]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.9}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Speakers */}
        <mesh position={[-0.85, -0.05, 0.05]}>
          <boxGeometry args={[0.22, 0.35, 0.22]} />
          <meshStandardMaterial color="#0f172a" metalness={0.55} roughness={0.35} />
        </mesh>
        <mesh position={[0.55, -0.05, 0.05]}>
          <boxGeometry args={[0.18, 0.28, 0.18]} />
          <meshStandardMaterial color="#0f172a" metalness={0.55} roughness={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  const { theme } = useTheme();
  const colors = useThemeColors();
  const dark = theme === "dark";

  return (
    <>
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={dark ? 0.35 : 0.6} />
      <directionalLight
        position={[5, 7, 4]}
        intensity={dark ? 1.1 : 1.25}
        color={dark ? "#e2e8f0" : "#f8fafc"}
      />
      <pointLight
        position={[-3, 1, 2]}
        intensity={dark ? 1.4 : 0.7}
        color={colors.accent}
      />
      <pointLight
        position={[3, -1, 1]}
        intensity={dark ? 0.9 : 0.4}
        color={colors.screen}
      />

      {dark ? (
        <Stars
          radius={80}
          depth={50}
          count={2800}
          factor={3.5}
          saturation={0}
          fade
          speed={0.6}
        />
      ) : null}

      <CoreOrb color={colors.core} />
      <OrbitRing radius={1.9} speed={0.32} tilt={0.55} color={colors.ring} />
      <OrbitRing radius={2.45} speed={-0.2} tilt={-0.35} color={colors.ringAlt} />
      <FloatingShards color={colors.shard} />
      <TechWorkstation
        metal={colors.metal}
        screen={colors.screen}
        accent={colors.accent}
      />
      <ContactShadows
        position={[0, -1.55, 0]}
        opacity={dark ? 0.35 : 0.2}
        scale={12}
        blur={2.5}
        far={4}
      />
      <Environment preset={dark ? "night" : "city"} />
    </>
  );
}

function ThemeAwareCanvas() {
  const { theme } = useTheme();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <Canvas
      key={theme}
      camera={{ position: [0, 0.2, 6.4], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <ThemeAwareCanvas />
    </div>
  );
}
