'use client'

import { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Three.js components to avoid SSR issues
const Canvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false })
const useFrame = dynamic(() => import('@react-three/fiber').then(mod => ({ default: mod.useFrame })), { ssr: false })

function AnimatedSphere() {
  const meshRef = useRef<any>(null)
  const [useFrameHook, setUseFrameHook] = useState<any>(null)

  useEffect(() => {
    import('@react-three/fiber').then(mod => setUseFrameHook(() => mod.useFrame))
  }, [])

  useEffect(() => {
    if (!useFrameHook || !meshRef.current) return
    
    let frameId: number
    const animate = () => {
      if (meshRef.current) {
        const time = Date.now() * 0.001
        meshRef.current.rotation.x = time * 0.2
        meshRef.current.rotation.y = time * 0.3
      }
      frameId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frameId)
  }, [useFrameHook])

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 100, 100]} />
      <meshStandardMaterial color="#00D4FF" metalness={0.8} roughness={0.2} />
    </mesh>
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

  useEffect(() => {
    if (!pointsRef.current) return
    
    let frameId: number
    const animate = () => {
      if (pointsRef.current) {
        const time = Date.now() * 0.00005
        pointsRef.current.rotation.y = time
      }
      frameId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(frameId)
  }, [])

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

export default function Scene3D() {
  const [mounted, setMounted] = useState(false)
  const [CanvasComponent, setCanvasComponent] = useState<any>(null)

  useEffect(() => {
    setMounted(true)
    import('@react-three/fiber').then(mod => {
      setCanvasComponent(() => mod.Canvas)
    }).catch(() => {
      console.warn('Failed to load Three.js')
    })
  }, [])

  if (!mounted || typeof window === 'undefined' || !CanvasComponent) {
    return <div className="w-full h-full bg-dark-bg" />
  }

  try {
    return (
      <CanvasComponent
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#9D4EDD" intensity={0.5} />
        <AnimatedSphere />
        <ParticleField />
      </CanvasComponent>
    )
  } catch (error) {
    console.error('Scene3D error:', error)
    return <div className="w-full h-full bg-dark-bg" />
  }
}
