'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Interactive3DScene = dynamic(() => import('./Interactive3DScene'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-dark-bg" />
})

export default function Scene3D() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Initialize global mouse position tracker
    if (typeof window !== 'undefined') {
      const win = window as any
      win.mousePosition3D = { x: 0, y: 0 }

      const handleMouseMove = (e: MouseEvent) => {
        if ((window as any).mousePosition3D) {
          (window as any).mousePosition3D.x = (e.clientX / window.innerWidth) * 2 - 1
          (window as any).mousePosition3D.y = -(e.clientY / window.innerHeight) * 2 + 1
        }
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (!mounted || typeof window === 'undefined') {
    return <div className="w-full h-full bg-dark-bg" />
  }

  return <Interactive3DScene />
}
