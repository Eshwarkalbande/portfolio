import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, Float, Text, OrbitControls, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#1e3a8a" // Darker blue
          emissive="#3b82f6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={2} floatIntensity={3} position={[-4, 2, -2]}>
        <Torus args={[0.5, 0.15, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial color="#ec4899" wireframe />
        </Torus>
      </Float>
      
      <Float speed={1.5} rotationIntensity={3} floatIntensity={2} position={[3, -2, -1]}>
        <Octahedron args={[0.6]}>
          <meshStandardMaterial color="#10b981" roughness={0.1} metalness={0.8} />
        </Octahedron>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={4} position={[4, 3, -3]}>
        <Icosahedron args={[0.8]}>
          <meshStandardMaterial color="#8b5cf6" wireframe />
        </Icosahedron>
      </Float>

      <Float speed={2.5} rotationIntensity={2} floatIntensity={2} position={[-3, -3, 0]}>
        <Torus args={[0.4, 0.2, 16, 32]}>
          <meshStandardMaterial color="#06b6d4" roughness={0.2} metalness={0.8} />
        </Torus>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-slate-950 overflow-hidden cursor-move">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#10b981" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#4f46e5" />
        
        <AnimatedSphere />
        <FloatingShapes />
        <Stars radius={100} depth={50} count={4000} factor={4} saturation={1} fade speed={2} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.2}
          minPolarAngle={Math.PI / 2 - 0.2}
          maxAzimuthAngle={0.2}
          minAzimuthAngle={-0.2}
        />
      </Canvas>
    </div>
  );
}
