'use client'

import { useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function VoiceWelcome() {
  const [isMuted, setIsMuted] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    // Check if browser supports speech synthesis
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true)
      
      // Check if user has already heard the welcome message in this session
      const hasHeardWelcome = sessionStorage.getItem('lunor-welcome-played')
      const isMutedPreference = localStorage.getItem('lunor-voice-muted') === 'true'
      
      if (!hasHeardWelcome && !isMutedPreference) {
        // Small delay to ensure page is loaded
        const timer = setTimeout(() => {
          playWelcomeMessage()
        }, 1000)
        
        return () => clearTimeout(timer)
      } else if (isMutedPreference) {
        setIsMuted(true)
      }
    }
  }, [])

  const playWelcomeMessage = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    
    const utterance = new SpeechSynthesisUtterance('Welcome to Lunor dot K O. We build the future of digital innovation.')
    
    // Configure voice settings
    utterance.rate = 0.9 // Slightly slower for clarity
    utterance.pitch = 1.0
    utterance.volume = 0.8
    
    // Try to use a natural-sounding voice
    const voices = speechSynthesis.getVoices()
    const preferredVoice = voices.find(voice => 
      voice.name.includes('Google') || 
      voice.name.includes('Samantha') || 
      voice.name.includes('Alex') ||
      voice.lang.startsWith('en')
    )
    
    if (preferredVoice) {
      utterance.voice = preferredVoice
    }
    
    utterance.onend = () => {
      setHasPlayed(true)
      sessionStorage.setItem('lunor-welcome-played', 'true')
    }
    
    speechSynthesis.speak(utterance)
  }

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false)
      localStorage.removeItem('lunor-voice-muted')
      if (!hasPlayed) {
        playWelcomeMessage()
      }
    } else {
      setIsMuted(true)
      localStorage.setItem('lunor-voice-muted', 'true')
      speechSynthesis.cancel()
    }
  }

  // Load voices when available
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      // Some browsers need voices to be loaded
      const loadVoices = () => {
        speechSynthesis.getVoices()
      }
      loadVoices()
      speechSynthesis.onvoiceschanged = loadVoices
    }
  }, [])

  if (!isSupported) return null

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        onClick={toggleMute}
        className="fixed bottom-24 right-6 z-50 w-12 h-12 glass-effect rounded-full flex items-center justify-center border border-white/10 hover:border-neon-blue/50 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isMuted ? 'Enable voice welcome' : 'Mute voice welcome'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-neon-blue transition-colors" />
        ) : (
          <Volume2 className="w-5 h-5 text-neon-cyan group-hover:text-neon-blue transition-colors" />
        )}
      </motion.button>
    </AnimatePresence>
  )
}

