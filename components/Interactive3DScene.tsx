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
      currentX += (mouseX - currentX) * 0.03
      currentY += (mouseY - currentY) * 0.03

      // Apply subtle transform
      const rotateX = currentY * 10
      const rotateY = currentX * 10

      container.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
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
        {/* Subtle geometric shapes */}
        <div
          className="relative"
          style={{
            width: '800px',
            height: '800px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Outer ring - subtle */}
          <div
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: 'rgba(0, 212, 255, 0.1)',
              borderWidth: '1px',
              transform: 'translateZ(0)',
            }}
          />
          
          {/* Middle ring */}
          <div
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: 'rgba(157, 78, 221, 0.08)',
              borderWidth: '1px',
              transform: 'translateZ(50px) scale(0.7)',
            }}
          />
          
          {/* Inner ring */}
          <div
            className="absolute inset-0 rounded-full border"
            style={{
              borderColor: 'rgba(0, 255, 245, 0.06)',
              borderWidth: '1px',
              transform: 'translateZ(100px) scale(0.4)',
            }}
          />
          
          {/* Subtle grid lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2
            const length = 300
            
            return (
              <div
                key={`line-${i}`}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '1px',
                  height: `${length}px`,
                  background: 'linear-gradient(to bottom, transparent, rgba(0, 212, 255, 0.05), transparent)',
                  transform: `translate(-50%, -50%) rotate(${angle}rad) translateZ(0)`,
                  transformOrigin: 'top center',
                }}
              />
            )
          })}
          
          {/* Subtle floating dots */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2
            const radius = 200
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            
            return (
              <div
                key={`dot-${i}`}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                  background: 'rgba(0, 212, 255, 0.3)',
                  transform: `translate(${x}px, ${y}px) translateZ(${50 + i * 10}px)`,
                  boxShadow: '0 0 4px rgba(0, 212, 255, 0.2)',
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            )
          })}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { 
              opacity: 0.2; 
              transform: translateY(0) scale(1); 
            }
            50% { 
              opacity: 0.4; 
              transform: translateY(-10px) scale(1.2); 
            }
          }
        `
      }} />
    </div>
  )
}
