'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, Environment } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { PortfolioModel } from '@/components/portfolio-model'

function RotatingObject() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)


}

function Scene() {
  const groupRef = useRef<THREE.Group>(null)

  return (
    <>
      <group ref={groupRef}>
        <RotatingObject />
      </group>

 <group ref={groupRef}>
    <PortfolioModel position={[0, -3.6, 0]} scale={1.5} />
  </group>

      {/* Lighting */}
      <pointLight position={[20, 10, 20]} intensity={2000} color="#ffffff" />
      <pointLight position={[-20, 30, 0]} intensity={8000} color="#ffffff" />
      <pointLight position={[-40, 0, 20]} intensity={8000} color="#ffffff" />
      <ambientLight intensity={0.4} />

      {/* Environment */}
      {/*<Environment preset="night" />*/}

      {/* Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        autoRotate
        autoRotateSpeed={3}
      />

      {/* Text overlay */}
      <Html position={[0, -1, 0]} distanceFactor={3.2} center>
        <div className="text-center pointer-events-none select-none">
          <h2 className="text-3xl sm:text-5xl font-bold text-accent mb-2">
            CLICK ME
          </h2>
          <p className="text-foreground/60 text-sm sm:text-base">
            Press the 3D model to check my Interactive Gallery of 3D garments.
          </p>
        </div>
      </Html>
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="w-full h-[620px] bg-gradient-to-b from-background via-background to-muted relative overflow-hidden pt-16">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene />
      </Canvas>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/40 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  )
}
