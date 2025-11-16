'use client'

import { useState } from 'react'
import { Rocket, SendHorizonal, WandSparkles, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

type Plan = {
  problem: string
  techStack: string[]
  features: string[]
  timeline: string
  budget: string
}

function generatePlanFromIdea(idea: string): Plan {
  const ideaLower = idea.toLowerCase()

  const techBase = ['TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL']
  const aiAdd = ['Python', 'FastAPI', 'OpenAI API', 'Redis']
  const mobileAdd = ['React Native', 'Expo', 'Firebase']
  const realtimeAdd = ['WebSockets', 'Socket.IO']

  const tech: string[] = [...techBase]
  if (ideaLower.includes('ai') || ideaLower.includes('ml') || ideaLower.includes('gpt')) tech.push(...aiAdd)
  if (ideaLower.includes('mobile') || ideaLower.includes('app')) tech.push(...mobileAdd)
  if (ideaLower.includes('chat') || ideaLower.includes('realtime') || ideaLower.includes('live')) tech.push(...realtimeAdd)

  const features: string[] = [
    'User Authentication & Roles',
    'Responsive UI with modern component library',
    'Admin Dashboard & Analytics',
    'Email/OTP verification',
  ]

  if (tech.includes('OpenAI API')) features.push('AI-powered suggestions & content generation')
  if (tech.includes('React Native')) features.push('Cross-platform mobile app (iOS/Android)')
  if (tech.includes('Socket.IO')) features.push('Real-time updates & notifications')

  const problem = `Build "${idea.trim()}" into a production-ready product with a scalable architecture, clear deliverables, and rapid iterations.`

  const timeline =
    features.length > 6
      ? '10–14 weeks (Discovery → MVP → Iterations → Launch)'
      : '6–8 weeks (Discovery → MVP → Polish → Launch)'

  const budget =
    features.length > 6 ? '₹25,000–₹30,000 (scope-dependent)' : '₹15,000–₹25,000 (scope-dependent)'

  return {
    problem,
    techStack: Array.from(new Set(tech)),
    features,
    timeline,
    budget,
  }
}

export default function ProjectBrainstormer() {
  const [idea, setIdea] = useState('')
  const [plan, setPlan] = useState<Plan | null>(null)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(true)

  const handleGenerate = () => {
    if (!idea.trim()) return
    setLoading(true)
    setTimeout(() => {
      setPlan(generatePlanFromIdea(idea))
      setLoading(false)
    }, 400) // snappy local "AI" feel
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="w-[320px] sm:w-[380px] glass-effect rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10 bg-dark-surface/70 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <WandSparkles className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm font-semibold text-gray-200">AI Project Brainstormer</span>
              </div>
              <button
                className="text-xs text-gray-400 hover:text-white"
                onClick={() => setOpen(false)}
              >
                Hide
              </button>
            </div>

            {/* Prompt */}
            <div className="p-4 space-y-3">
              <p className="text-xs text-gray-400">
                Tell us your idea and our AI will convert it into a full project plan.
              </p>
              <div className="flex items-center gap-2 bg-white/5 rounded-xl border border-white/10 p-2">
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder='E.g. "An AI chatbot that helps students plan their semester"'
                  className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder:text-gray-500 resize-none h-16"
                />
                <button
                  onClick={handleGenerate}
                  className="shrink-0 px-3 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50"
                  disabled={loading || !idea.trim()}
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <SendHorizonal className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Output */}
            <div className="px-4 pb-4 space-y-4">
              {plan ? (
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-1">Problem Statement</h4>
                    <p className="text-sm text-gray-400">{plan.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-1">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.techStack.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-xs rounded border border-white/10 bg-white/5 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 mb-1">Features List</h4>
                    <ul className="space-y-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="text-sm text-gray-400">• {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Timeline</div>
                      <div className="text-sm text-gray-200">{plan.timeline}</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Budget Range</div>
                      <div className="text-sm text-gray-200">{plan.budget}</div>
                    </div>
                  </div>
                  <div className="pt-1">
                    <button
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold hover:opacity-90"
                      onClick={() => {
                        const text = `Problem: ${plan.problem}\n\nTech Stack: ${plan.techStack.join(
                          ', '
                        )}\n\nFeatures:\n- ${plan.features.join('\n- ')}\n\nTimeline: ${
                          plan.timeline
                        }\nBudget: ${plan.budget}`
                        navigator.clipboard?.writeText(text)
                      }}
                    >
                      <Rocket className="w-4 h-4" />
                      Copy Plan
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-xs text-gray-500">
                  Example: "A mobile app for campus events with real-time chat and AI recommendations"
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-full border border-white/10 px-4 py-3 text-sm text-gray-200 hover:border-neon-blue/50"
            onClick={() => setOpen(true)}
          >
            Open AI Project Brainstormer
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}


