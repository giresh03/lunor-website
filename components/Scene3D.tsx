'use client'

import { useEffect, useRef, useState } from 'react'

// Global mouse position tracker
const mousePosition = { x: 0, y: 0 }

export default function Scene3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = (e.clientX / window.innerWidth) * 2 - 1
      mousePosition.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted || typeof window === 'undefined') {
    return <div className="w-full h-full bg-dark-bg" />
  }

  try {
    const { Canvas, useFrame } = require('@react-three/fiber')
    const { OrbitControls, Sphere, MeshDistortMaterial } = require('@react-three/drei')
    const THREE = require('three')

    function AnimatedSphere() {
      const meshRef = useRef<any>(null)

      useFrame(() => {
        if (meshRef.current) {
          const mouseX = mousePosition.x
          const mouseY = mousePosition.y

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

    function ParticleField() {
      const pointsRef = useRef<any>(null)
      const positionsRef = useRef<Float32Array | null>(null)

      const particlesCount = 1000

      if (!positionsRef.current && typeof window !== 'undefined') {
        positionsRef.current = new Float32Array(particlesCount * 3)
        for (let i = 0; i < particlesCount * 3; i++) {
          positionsRef.current[i] = (Math.random() - 0.5) * 10
        }
      }

      useFrame((state: any) => {
        if (pointsRef.current) {
          const mouseX = mousePosition.x
          const mouseY = mousePosition.y

          // Rotate particles based on mouse
          pointsRef.current.rotation.y = THREE.MathUtils.lerp(
            pointsRef.current.rotation.y,
            state.clock.getElapsedTime() * 0.05 + mouseX * 0.2,
            0.05
          )
          pointsRef.current.rotation.x = THREE.MathUtils.lerp(
            pointsRef.current.rotation.x,
            mouseY * 0.2,
            0.05
          )
        }
      })

      if (!positionsRef.current) return null

      return (
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particlesCount}
              array={positionsRef.current}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.02}
            color="#00FFF5"
            transparent
            opacity={0.6}
            sizeAttenuation
          />
        </points>
      )
    }

    function InteractiveScene() {
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
          <ParticleField />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            enableRotate={false}
          />
        </Canvas>
      )
    }

    return <InteractiveScene />
  } catch (error) {
    console.error('Scene3D error:', error)
    return <div className="w-full h-full bg-dark-bg" />
  }
}
