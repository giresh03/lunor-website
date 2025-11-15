'use client'

import { useEffect, useRef } from 'react'

export default function VoiceWelcome() {
  const hasPlayedRef = useRef(false)
  const voicesLoadedRef = useRef(false)

  const playWelcomeMessage = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    if (hasPlayedRef.current) return
    
    // Cancel any existing speech
    speechSynthesis.cancel()
    
    const utterance = new SpeechSynthesisUtterance('Welcome to Lunor dot K O. We build the future of digital innovation.')
    
    // Configure voice settings
    utterance.rate = 0.9
    utterance.pitch = 1.1
    utterance.volume = 0.8
    
    // Get voices
    const voices = speechSynthesis.getVoices()
    
    // Priority list for female voices
    const femaleVoiceNames = [
      'Samantha',
      'Karen',
      'Victoria',
      'Google UK English Female',
      'Microsoft Zira',
      'Microsoft Hazel',
      'Google US English Female',
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
    
    // Fallback to any English voice
    if (!preferredVoice) {
      preferredVoice = voices.find(voice => voice.lang.startsWith('en'))
    }
    
    if (preferredVoice) {
      utterance.voice = preferredVoice
    }
    
    utterance.onstart = () => {
      hasPlayedRef.current = true
    }
    
    utterance.onerror = (error) => {
      console.error('Speech synthesis error:', error)
    }
    
    try {
      speechSynthesis.speak(utterance)
    } catch (error) {
      console.error('Error speaking:', error)
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
    
    const isMutedPreference = localStorage.getItem('lunor-voice-muted') === 'true'
    if (isMutedPreference) return

    const loadVoicesAndPlay = () => {
      const voices = speechSynthesis.getVoices()
      
      if (voices.length > 0 && !voicesLoadedRef.current) {
        voicesLoadedRef.current = true
        
        // Small delay to ensure everything is ready
        setTimeout(() => {
          playWelcomeMessage()
        }, 300)
      }
    }

    // Try to load voices immediately
    loadVoicesAndPlay()

    // Listen for voices changed event
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoicesAndPlay
    }

    // Fallback: try again after a short delay
    const fallbackTimer = setTimeout(() => {
      if (!hasPlayedRef.current && !voicesLoadedRef.current) {
        loadVoicesAndPlay()
      }
    }, 500)

    // Also try on any user interaction (click, touch, keypress)
    const handleUserInteraction = () => {
      if (!hasPlayedRef.current) {
        loadVoicesAndPlay()
      }
    }

    window.addEventListener('click', handleUserInteraction, { once: true })
    window.addEventListener('touchstart', handleUserInteraction, { once: true })
    window.addEventListener('keydown', handleUserInteraction, { once: true })

    return () => {
      clearTimeout(fallbackTimer)
      window.removeEventListener('click', handleUserInteraction)
      window.removeEventListener('touchstart', handleUserInteraction)
      window.removeEventListener('keydown', handleUserInteraction)
    }
  }, [])

  return null
}

