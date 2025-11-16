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
import ProjectBrainstormer from '@/components/ProjectBrainstormer'
import ErrorBoundary from '@/components/ErrorBoundary'
import VoiceWelcome from '@/components/VoiceWelcome'
import LiveCoding from '@/components/LiveCoding'
import VoiceNavigation from '@/components/VoiceNavigation'

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="relative min-h-screen">
        <div className="spotlight" />
        <div className="animated-bg fixed inset-0 -z-10" />
        <CursorGlow />
        <Navbar />
        <Hero />
        <About />
        <LiveCoding />
        <Services />
        <Team />
        <Portfolio />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
        <ChatBot />
        <ProjectBrainstormer />
        <VoiceWelcome />
        <VoiceNavigation />
      </main>
    </ErrorBoundary>
  )
}

