'use client'

import { useEffect, useRef } from 'react'

export default function VoiceWelcome() {
  const hasPlayedRef = useRef(false)
  const attemptCountRef = useRef(0)

  const playWelcomeMessage = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.log('Speech synthesis not supported')
      return
    }
    
    if (hasPlayedRef.current) {
      console.log('Already played')
      return
    }

    try {
      // Cancel any existing speech
      speechSynthesis.cancel()
      
      const utterance = new SpeechSynthesisUtterance('Welcome to Lunor dot K O. We build the future of digital innovation.')
      
      // Configure voice settings
      utterance.rate = 0.9
      utterance.pitch = 1.1
      utterance.volume = 0.8
      
      // Get voices
      const voices = speechSynthesis.getVoices()
      console.log('Available voices:', voices.length)
      
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
      if (!preferredVoice && voices.length > 0) {
        preferredVoice = voices.find(voice => voice.lang.startsWith('en')) || voices[0]
      }
      
      if (preferredVoice) {
        utterance.voice = preferredVoice
        console.log('Using voice:', preferredVoice.name)
      } else {
        console.log('No preferred voice found, using default')
      }
      
      utterance.onstart = () => {
        console.log('Voice started playing')
        hasPlayedRef.current = true
      }
      
      utterance.onend = () => {
        console.log('Voice finished playing')
      }
      
      utterance.onerror = (error) => {
        console.error('Speech synthesis error:', error)
        console.error('Error type:', error.error)
        console.error('Error message:', error.message)
        // Don't reset hasPlayedRef on error to prevent infinite retries
        // The error might be due to browser autoplay policy
      }
      
      console.log('Attempting to speak...')
      
      // Check if speech synthesis is already speaking
      if (speechSynthesis.speaking) {
        console.log('Speech synthesis is already speaking, cancelling...')
        speechSynthesis.cancel()
        // Wait a bit before trying again
        setTimeout(() => {
          speechSynthesis.speak(utterance)
        }, 100)
      } else {
        speechSynthesis.speak(utterance)
      }
      
    } catch (error) {
      console.error('Error in playWelcomeMessage:', error)
      hasPlayedRef.current = false
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      console.log('Speech synthesis not available')
      return
    }
    
    const isMutedPreference = localStorage.getItem('lunor-voice-muted') === 'true'
    if (isMutedPreference) {
      console.log('Voice is muted in preferences')
      return
    }

    console.log('Initializing voice welcome...')

    const tryPlay = () => {
      attemptCountRef.current++
      const voices = speechSynthesis.getVoices()
      
      console.log(`Attempt ${attemptCountRef.current}: ${voices.length} voices available`)
      
      if (voices.length > 0 && !hasPlayedRef.current) {
        playWelcomeMessage()
      } else if (voices.length === 0 && attemptCountRef.current < 10) {
        // Keep trying if voices not loaded yet
        setTimeout(tryPlay, 200)
      }
    }

    // Try immediately
    tryPlay()

    // Listen for voices changed event
    const handleVoicesChanged = () => {
      console.log('Voices changed event fired')
      if (!hasPlayedRef.current) {
        tryPlay()
      }
    }

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = handleVoicesChanged
    }

    // Force load voices
    speechSynthesis.getVoices()

    // Multiple fallback attempts
    const timers = [
      setTimeout(() => {
        console.log('Fallback timer 1 (500ms)')
        if (!hasPlayedRef.current) tryPlay()
      }, 500),
      setTimeout(() => {
        console.log('Fallback timer 2 (1000ms)')
        if (!hasPlayedRef.current) tryPlay()
      }, 1000),
      setTimeout(() => {
        console.log('Fallback timer 3 (2000ms)')
        if (!hasPlayedRef.current) tryPlay()
      }, 2000),
    ]

    // User interaction handlers (browsers require this for autoplay)
    const handleInteraction = (eventType: string) => {
      return () => {
        console.log(`User interaction: ${eventType}`)
        if (!hasPlayedRef.current) {
          // Small delay to ensure browser allows audio
          setTimeout(() => {
            tryPlay()
          }, 100)
        }
      }
    }

    // Add interaction listeners - these are critical for browser autoplay policies
    const clickHandler = handleInteraction('click')
    const touchHandler = handleInteraction('touchstart')
    const keyHandler = handleInteraction('keydown')
    const mouseHandler = handleInteraction('mousemove')

    window.addEventListener('click', clickHandler, { once: true, passive: true })
    window.addEventListener('touchstart', touchHandler, { once: true, passive: true })
    window.addEventListener('keydown', keyHandler, { once: true, passive: true })
    window.addEventListener('mousemove', mouseHandler, { once: true, passive: true })
    
    // Also try on page visibility change (when user switches back to tab)
    const visibilityHandler = () => {
      if (document.visibilityState === 'visible' && !hasPlayedRef.current) {
        setTimeout(() => tryPlay(), 200)
      }
    }
    document.addEventListener('visibilitychange', visibilityHandler)

    return () => {
      timers.forEach(timer => clearTimeout(timer))
      window.removeEventListener('click', clickHandler)
      window.removeEventListener('touchstart', touchHandler)
      window.removeEventListener('keydown', keyHandler)
      window.removeEventListener('mousemove', mouseHandler)
      document.removeEventListener('visibilitychange', visibilityHandler)
    }
  }, [])

  return null
}
