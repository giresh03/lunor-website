'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Global mouse position - will be updated by parent
declare global {
  var mousePosition3D: { x: number; y: number }
}

if (typeof window !== 'undefined') {
  (window as any).mousePosition3D = (window as any).mousePosition3D || { x: 0, y: 0 }
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current && typeof window !== 'undefined') {
      const mousePos = (window as any).mousePosition3D || { x: 0, y: 0 }
      const mouseX = mousePos.x
      const mouseY = mousePos.y

      // Smooth rotation based on mouse position
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouseY * 0.5,
        0.05
      )
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouseX * 0.5,
        0.05
      )

      // Auto rotation
      meshRef.current.rotation.z += 0.001

      // Scale based on mouse distance from center
      const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY)
      const scale = 1 + distance * 0.2
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, scale, 0.1)
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, scale, 0.1)
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, scale, 0.1)
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.5}>
      <MeshDistortMaterial
        color="#00D4FF"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

export default function Interactive3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#9D4EDD" intensity={0.5} />
      <AnimatedSphere />
    </Canvas>
  )
}

