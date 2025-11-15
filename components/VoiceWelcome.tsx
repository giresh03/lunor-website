'use client'

import { useEffect } from 'react'

export default function VoiceWelcome() {
  const playWelcomeMessage = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    
    // Cancel any existing speech
    speechSynthesis.cancel()
    
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
    
    speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    // Check if browser supports speech synthesis
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      // Check if user has permanently disabled voice
      const isMutedPreference = localStorage.getItem('lunor-voice-muted') === 'true'
      
      if (!isMutedPreference) {
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
        
        // Listen for voices changed event (some browsers need this)
        if (speechSynthesis.onvoiceschanged !== undefined) {
          speechSynthesis.onvoiceschanged = () => {
            const voices = speechSynthesis.getVoices()
            if (voices.length > 0 && !speechSynthesis.speaking) {
              playWelcomeMessage()
            }
          }
        }
      }
    }
  }, [])

  return null
}

