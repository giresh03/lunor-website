'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! 👋 I'm Lunor AI. How can I help you today?", isBot: true },
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    const userMessage = { id: messages.length + 1, text: inputValue, isBot: false }
    setMessages([...messages, userMessage])
    setInputValue('')

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Thanks for reaching out! Contact us at lunor.ko@gmail.com or +91 83098 15563",
        isBot: true,
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-8 z-40 w-96 max-w-[calc(100vw-4rem)] h-[500px] glass-effect rounded-2xl border border-neon-blue/30 flex flex-col"
          >
            <div className="bg-gradient-to-r from-neon-blue to-neon-purple p-4 rounded-t-2xl">
              <h3 className="font-semibold text-white">Lunor AI</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[70%] px-4 py-2 rounded-2xl ${message.isBot ? 'bg-white/10' : 'bg-gradient-to-r from-neon-blue to-neon-purple'} text-white text-sm`}>
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
