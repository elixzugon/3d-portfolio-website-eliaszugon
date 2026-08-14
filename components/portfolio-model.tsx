'use client'

import { useGLTF } from '@react-three/drei'
import type { ThreeElements } from '@react-three/fiber'

type PortfolioModelProps = ThreeElements['group']

export function PortfolioModel(props: PortfolioModelProps) {
  const gltf = useGLTF('/models/blokecambionum.glb')

  return (
    <group {...props} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  )
}

useGLTF.preload('/models/blokecambionum.glb')
