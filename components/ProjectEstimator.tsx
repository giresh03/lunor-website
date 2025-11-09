'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, X, Check } from 'lucide-react'

const features = [
  { id: 'responsive', name: 'Responsive Design', price: 40000 },
  { id: 'custom-design', name: 'Custom UI/UX Design', price: 150000 },
  { id: 'animation', name: 'Advanced Animations', price: 80000 },
  { id: 'cms', name: 'Content Management', price: 120000 },
  { id: 'auth', name: 'User Authentication', price: 100000 },
  { id: 'payment', name: 'Payment Integration', price: 120000 },
]

export default function ProjectEstimator() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [projectType, setProjectType] = useState<'web' | 'mobile' | 'both'>('web')

  const calculateTotal = () => {
    const basePrice = projectType === 'web' ? 250000 : projectType === 'mobile' ? 400000 : 650000
    const featuresPrice = features
      .filter((f) => selectedFeatures.includes(f.id))
      .reduce((sum, f) => sum + f.price, 0)
    return basePrice + featuresPrice
  }

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const total = calculateTotal()

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full text-white font-semibold flex items-center gap-2 shadow-lg"
        whileHover={{ scale: 1.05 }}
      >
        <Calculator className="w-5 h-5" />
        <span className="hidden sm:inline">Project Estimator</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-2xl w-full glass-effect p-8 rounded-3xl border border-neon-purple/30 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-bold text-gradient mb-6">Project Estimator</h2>

              <div className="mb-6">
                <label className="block text-sm mb-3">Project Type</label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'web', label: 'Web Only', base: '₹2,50,000' },
                    { value: 'mobile', label: 'Mobile Only', base: '₹4,00,000' },
                    { value: 'both', label: 'Web + Mobile', base: '₹6,50,000' },
                  ].map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setProjectType(type.value as any)}
                      className={`p-4 rounded-xl border ${projectType === type.value ? 'border-neon-purple bg-neon-purple/20' : 'border-white/10'}`}
                    >
                      <div className="font-semibold">{type.label}</div>
                      <div className="text-sm text-gray-400">{type.base}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-3">Additional Features</label>
                <div className="space-y-2">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl border ${selectedFeatures.includes(feature.id) ? 'border-neon-blue bg-neon-blue/20' : 'border-white/10'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded border flex items-center justify-center ${selectedFeatures.includes(feature.id) ? 'border-neon-blue bg-neon-blue' : 'border-white/30'}`}>
                          {selectedFeatures.includes(feature.id) && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-sm">{feature.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">+₹{feature.price.toLocaleString('en-IN')}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="glass-effect p-6 rounded-2xl border border-neon-purple/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Estimated Cost</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-gradient">₹{total.toLocaleString('en-IN')}</div>
                    <div className="text-sm text-gray-400">INR</div>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-semibold text-center"
                  >
                    Get Accurate Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
