'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Html } from '@react-three/drei'
import { ReactNode, useRef } from 'react'

interface Interactive3DModelProps {
  modelPath?: string
  title?: string
  description?: string
  showInfo?: boolean
  renderModel?: ReactNode
}

function SampleModel() {
  return (
    <mesh>
      <torusGeometry args={[1, 0.4, 100, 100]} />
      <meshStandardMaterial
        color="#00d4ff"
        metalness={0.8}
        roughness={0.2}
        emissive="#00d4ff"
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}

export default function Interactive3DModel({
  title,
  description,
  showInfo = true,
  renderModel,
}: Interactive3DModelProps) {
  const showDetails = showInfo && (title || description)

  return (
    <div className="w-full">
      <div
        className={`items-center gap-8 mb-8 ${
          showDetails ? 'grid grid-cols-1 md:grid-cols-2' : ''
        }`}
      >
        <div className="relative rounded-lg overflow-hidden bg-muted border border-border h-80">
          <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
            {renderModel ?? <SampleModel />}
            <pointLight position={[10, 10, 10]} intensity={1} color="#0088ff" />
            <pointLight position={[-10, 10, 10]} intensity={0.8} color="#ff00ff" />
            <ambientLight intensity={0.5} />
            <Environment preset="studio" />
            <OrbitControls enableZoom={true} enablePan={false} autoRotate />
            <Html position={[0, -1.5, 0]} distanceFactor={1} center>
              <p className="text-foreground/40 text-xs pointer-events-none select-none">Drag to rotate • Scroll to zoom</p>
            </Html>
          </Canvas>
        </div>
        {showDetails && (
          <div>
            {title && <h3 className="text-3xl font-bold text-foreground mb-4">{title}</h3>}
            {description && <p className="text-foreground/60 text-lg leading-relaxed">{description}</p>}
          </div>
        )}
      </div>
    </div>
  )
}
