'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

type Message = {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

const botResponses = [
  "Thanks for reaching out! I'm here to help. What kind of project are you interested in?",
  "We specialize in web development, mobile apps, and AI/ML solutions. Which interests you?",
  "That sounds exciting! Would you like to schedule a consultation with our team?",
  "Great! You can reach us at hello@lunor.ko or use the contact form above.",
  "We typically respond within 24 hours. Is there anything specific you'd like to know?",
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm Lunor AI. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }
    setMessages([...messages, userMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center shadow-lg shadow-neon-blue/50 hover:shadow-2xl hover:shadow-neon-blue/70 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { rotate: 0 } : { rotate: 0 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-8 z-40 w-96 max-w-[calc(100vw-4rem)] h-[500px] glass-effect rounded-2xl border border-neon-blue/30 shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Lunor AI</h3>
                  <p className="text-xs text-white/80">Online • Responds in minutes</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {message.isBot && (
                    <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                      message.isBot
                        ? 'bg-white/10 text-white'
                        : 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  {!message.isBot && (
                    <div className="w-8 h-8 bg-gradient-to-br from-neon-purple to-neon-cyan rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-all text-sm"
                />
                <motion.button
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

