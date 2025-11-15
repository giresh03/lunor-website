'use client'

import { useEffect, useRef } from 'react'

export default function Interactive3DScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let mouseX = 0
    let mouseY = 0
    let currentX = 0
    let currentY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const animate = () => {
      // Smooth interpolation
      currentX += (mouseX - currentX) * 0.05
      currentY += (mouseY - currentY) * 0.05

      // Apply transform
      const rotateX = currentY * 20
      const rotateY = currentX * 20
      const translateZ = Math.abs(currentX) * 50 + Math.abs(currentY) * 50

      container.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(${translateZ}px)
      `

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'none',
        }}
      >
        {/* Animated gradient sphere */}
        <div
          className="relative"
          style={{
            width: '600px',
            height: '600px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle, #00D4FF 0%, #9D4EDD 50%, transparent 70%)',
              transform: 'translateZ(0)',
            }}
          />
          
          {/* Middle layer */}
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-50"
            style={{
              background: 'radial-gradient(circle, #00FFF5 0%, #00D4FF 40%, #9D4EDD 80%, transparent 100%)',
              transform: 'translateZ(50px)',
            }}
          />
          
          {/* Inner core */}
          <div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: 'radial-gradient(circle, #00D4FF 0%, #9D4EDD 100%)',
              transform: 'translateZ(100px)',
              boxShadow: '0 0 100px rgba(0, 212, 255, 0.5), 0 0 200px rgba(157, 78, 221, 0.3)',
            }}
          />
          
          {/* Particles */}
          {Array.from({ length: 20 }).map((_, i) => {
            const angle = (i / 20) * Math.PI * 2
            const radius = 250
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            
            return (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-cyan-400"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(${x}px, ${y}px) translateZ(${Math.random() * 200}px)`,
                  boxShadow: '0 0 10px rgba(0, 255, 245, 0.8)',
                  animation: `pulse-${i} ${2 + Math.random() * 2}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            )
          })}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse-0 {
          0%, 100% { opacity: 0.3; transform: translate(${Math.cos(0) * 250}px, ${Math.sin(0) * 250}px) translateZ(${Math.random() * 200}px) scale(1); }
          50% { opacity: 1; transform: translate(${Math.cos(0) * 250}px, ${Math.sin(0) * 250}px) translateZ(${Math.random() * 200}px) scale(1.5); }
        }
        ${Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2
          const x = Math.cos(angle) * 250
          const y = Math.sin(angle) * 250
          return `
            @keyframes pulse-${i} {
              0%, 100% { opacity: 0.3; transform: translate(${x}px, ${y}px) translateZ(${Math.random() * 200}px) scale(1); }
              50% { opacity: 1; transform: translate(${x}px, ${y}px) translateZ(${Math.random() * 200}px) scale(1.5); }
            }
          `
        }).join('')}
      `}</style>
    </div>
  )
}
