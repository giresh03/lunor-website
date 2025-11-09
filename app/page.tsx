'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Portfolio from '@/components/Portfolio'
import TechStack from '@/components/TechStack'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import CursorGlow from '@/components/CursorGlow'
import ChatBot from '@/components/ChatBot'
import ProjectEstimator from '@/components/ProjectEstimator'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="spotlight" />
      <div className="animated-bg fixed inset-0 -z-10" />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatBot />
      <ProjectEstimator />
    </main>
  )
}
