'use client'

import { useGLTF } from '@react-three/drei'

type PortfolioModelProps = JSX.IntrinsicElements['group']

export function PortfolioModel(props: PortfolioModelProps) {
  // Ruta relativa a la carpeta /public
  const gltf = useGLTF('/models/blokecambionum.glb')

  return (
    <group {...props} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  )
}

// Opcional: precargar el modelo
useGLTF.preload('/models/hero-scene.tsx')

