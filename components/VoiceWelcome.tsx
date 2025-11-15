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
        // Load voices first, then play immediately
        const loadAndPlay = () => {
          const voices = speechSynthesis.getVoices()
          if (voices.length > 0) {
            playWelcomeMessage()
          } else {
            // If voices not loaded yet, wait a bit and try again
            setTimeout(loadAndPlay, 100)
          }
        }
        
        // Try to load voices immediately
        speechSynthesis.getVoices()
        loadAndPlay()
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
    utterance.pitch = 1.1 // Slightly higher pitch for female voice
    utterance.volume = 0.8
    
    // Try to use a female voice
    const voices = speechSynthesis.getVoices()
    
    // Priority list for female voices
    const femaleVoiceNames = [
      'Samantha', // macOS
      'Karen', // macOS
      'Victoria', // macOS
      'Google UK English Female', // Chrome
      'Microsoft Zira - English (United States)', // Windows
      'Microsoft Hazel - English (Great Britain)', // Windows
      'Google US English Female', // Chrome
      'en-US', // Generic English female
    ]
    
    // Find female voice
    let preferredVoice = voices.find(voice => 
      femaleVoiceNames.some(name => voice.name.includes(name))
    )
    
    // If no specific female voice found, look for any female voice
    if (!preferredVoice) {
      preferredVoice = voices.find(voice => {
        const name = voice.name.toLowerCase()
        return (name.includes('female') || 
                name.includes('samantha') || 
                name.includes('karen') ||
                name.includes('victoria') ||
                name.includes('zira') ||
                name.includes('hazel')) && 
               voice.lang.startsWith('en')
      })
    }
    
    // Fallback to any English voice if no female found
    if (!preferredVoice) {
      preferredVoice = voices.find(voice => voice.lang.startsWith('en'))
    }
    
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
        const voices = speechSynthesis.getVoices()
        // Trigger voice loading immediately
        if (voices.length > 0) {
          // Voices are loaded, component will handle playing
        }
      }
      
      // Load voices immediately
      loadVoices()
      
      // Listen for voices changed event
      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices
      }
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

