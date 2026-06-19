"use client";

import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial, Torus } from "@react-three/drei";
import { useMemo, useRef, useState, useEffect } from "react";
import type { Group, Mesh, MeshStandardMaterial } from "three";

function Rig() {
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    const lerp = Math.min(delta * 3, 1);
    const cam = state.camera;
    cam.position.x += (target.current.x * 1.2 - cam.position.x) * lerp;
    cam.position.y += (-target.current.y * 0.8 - cam.position.y) * lerp;
    cam.lookAt(0, 0, 0);
  });
  return null;
}

function Knot(props: ThreeElements["mesh"]) {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.1;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} {...props}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#5CCB7A"
          metalness={0.4}
          roughness={0.25}
          distort={0.35}
          speed={1.5}
          emissive="#309949"
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

function Ring(props: ThreeElements["group"]) {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.z += delta * 0.05;
  });
  return (
    <group ref={ref} {...props}>
      <Torus args={[2, 0.04, 16, 96]}>
        <meshStandardMaterial color="#5CCB7A" emissive="#309949" emissiveIntensity={0.4} metalness={0.6} roughness={0.3} />
      </Torus>
    </group>
  );
}

function Particles({ count = 40 }: { count?: number }) {
  const positions = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        p: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5 - 2,
        ] as [number, number, number],
        s: 0.02 + Math.random() * 0.04,
      })),
    [count],
  );
  const groupRef = useRef<Group>(null);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.04;
  });
  return (
    <group ref={groupRef}>
      {positions.map((p, i) => (
        <Icosahedron key={i} args={[p.s, 0]} position={p.p}>
          <meshBasicMaterial color="#5CCB7A" transparent opacity={0.6} />
        </Icosahedron>
      ))}
    </group>
  );
}

function Lights() {
  const ref = useRef<MeshStandardMaterial>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime) * 0.1;
  });
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 2]} intensity={1.2} color="#FFFFFF" />
      <pointLight position={[-3, -2, 3]} intensity={2} color="#5CCB7A" />
      <pointLight position={[3, -2, -2]} intensity={1.5} color="#309949" />
    </>
  );
}

export default function Scene() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <Canvas
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      frameloop={ready ? "always" : "demand"}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Lights />
      <Rig />
      <Knot position={[1.6, 0.4, 0]} />
      <Ring position={[-1.8, -0.4, -1]} />
      <Particles />
    </Canvas>
  );
}
