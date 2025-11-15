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
  }, [])

  if (!mounted || typeof window === 'undefined') {
    return <div className="w-full h-full bg-dark-bg" />
  }

  return <Interactive3DScene />
}
