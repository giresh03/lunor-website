'use client'

import { useEffect, useState, useRef } from 'react'
import { Mic, MicOff, Volume2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface VoiceCommand {
  keywords: string[]
  action: () => void
  response?: string
}

export default function VoiceNavigation() {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    // Check if browser supports speech recognition
    if (typeof window !== 'undefined') {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition

      if (SpeechRecognition) {
        setIsSupported(true)
        const recognition = new SpeechRecognition()
        recognition.continuous = false
        recognition.interimResults = false
        recognition.lang = 'en-US'

        recognition.onstart = () => {
          setIsListening(true)
          setTranscript('')
        }

        recognition.onresult = (event: any) => {
          const last = event.results.length - 1
          const text = event.results[last][0].transcript.toLowerCase()
          setTranscript(text)
          handleVoiceCommand(text)
        }

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error)
          setIsListening(false)
          if (event.error === 'no-speech') {
            // Restart if no speech detected
            setTimeout(() => {
              if (isListening) {
                recognition.start()
              }
            }, 500)
          }
        }

        recognition.onend = () => {
          setIsListening(false)
          // Auto-restart if still enabled
          if (isListening) {
            setTimeout(() => {
              recognition.start()
            }, 100)
          }
        }

        recognitionRef.current = recognition
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [isListening])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return true
    }
    return false
  }

  const speak = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.9
      utterance.pitch = 1.1
      utterance.volume = 0.8

      // Try to use a female voice
      const voices = speechSynthesis.getVoices()
      const femaleVoice = voices.find(
        (voice) =>
          voice.name.includes('Samantha') ||
          voice.name.includes('Karen') ||
          voice.name.includes('Victoria') ||
          voice.name.includes('Female')
      )
      if (femaleVoice) {
        utterance.voice = femaleVoice
      }

      speechSynthesis.speak(utterance)
    }
  }

  const handleVoiceCommand = (text: string) => {
    setIsProcessing(true)

    // Command mappings
    const commands: VoiceCommand[] = [
      {
        keywords: ['portfolio', 'show portfolio', 'view portfolio', 'see portfolio'],
        action: () => {
          if (scrollToSection('portfolio')) {
            speak('Opening portfolio')
          }
        },
      },
      {
        keywords: ['services', 'show services', 'view services', 'see services'],
        action: () => {
          if (scrollToSection('services')) {
            speak('Showing our services')
          }
        },
      },
      {
        keywords: ['about', 'about us', 'show about', 'tell me about'],
        action: () => {
          if (scrollToSection('about')) {
            speak('Here is about us')
          }
        },
      },
      {
        keywords: ['team', 'show team', 'view team', 'see team'],
        action: () => {
          if (scrollToSection('team')) {
            speak('Meet our team')
          }
        },
      },
      {
        keywords: ['contact', 'contact us', 'show contact', 'get in touch'],
        action: () => {
          if (scrollToSection('contact')) {
            speak('Opening contact form')
          }
        },
      },
      {
        keywords: ['home', 'go home', 'back to home', 'top'],
        action: () => {
          if (scrollToSection('home')) {
            speak('Going to home')
          }
        },
      },
      {
        keywords: ['testimonials', 'reviews', 'show testimonials'],
        action: () => {
          if (scrollToSection('testimonials')) {
            speak('Showing testimonials')
          }
        },
      },
      {
        keywords: ['tech stack', 'technologies', 'show tech', 'technology'],
        action: () => {
          if (scrollToSection('tech')) {
            speak('Here is our tech stack')
          }
        },
      },
    ]

    // Find matching command
    const matchedCommand = commands.find((cmd) =>
      cmd.keywords.some((keyword) => text.includes(keyword))
    )

    if (matchedCommand) {
      matchedCommand.action()
    } else {
      // Default response for unrecognized commands
      speak("I didn't catch that. Try saying portfolio, services, or contact")
    }

    setTimeout(() => {
      setIsProcessing(false)
      setTranscript('')
    }, 2000)
  }

  const toggleListening = () => {
    if (!isSupported) {
      alert('Voice recognition is not supported in your browser. Please use Chrome or Edge.')
      return
    }

    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else if (recognitionRef.current) {
      recognitionRef.current.start()
    }
  }

  if (!isSupported) {
    return null
  }

  return (
    <>
      {/* Voice Control Button */}
      <motion.button
        onClick={toggleListening}
        className={`fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isListening
            ? 'bg-gradient-to-r from-red-500 to-pink-500 animate-pulse'
            : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:scale-110'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Voice Navigation"
      >
        {isListening ? (
          <MicOff className="w-6 h-6 text-white" />
        ) : (
          <Mic className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Voice Status Indicator */}
      <AnimatePresence>
        {isListening && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-32 right-6 z-50 glass-effect rounded-xl p-4 border border-neon-blue/30 min-w-[200px]"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm text-gray-300 font-semibold">Listening...</span>
            </div>
            {transcript && (
              <p className="text-xs text-gray-400 mt-2 italic">&quot;{transcript}&quot;</p>
            )}
            {isProcessing && (
              <div className="flex items-center gap-2 mt-2">
                <Volume2 className="w-3 h-3 text-neon-cyan animate-pulse" />
                <span className="text-xs text-neon-cyan">Processing...</span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Voice Command Hints */}
      <AnimatePresence>
        {isListening && !transcript && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-44 right-6 z-50 glass-effect rounded-xl p-4 border border-neon-blue/30 max-w-[250px]"
          >
            <p className="text-xs text-gray-400 mb-2">Try saying:</p>
            <ul className="text-xs text-gray-300 space-y-1">
              <li>• &quot;Show me your portfolio&quot;</li>
              <li>• &quot;Go to services&quot;</li>
              <li>• &quot;Contact us&quot;</li>
              <li>• &quot;Show team&quot;</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

