'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, X, Check } from 'lucide-react'

type Feature = {
  id: string
  name: string
  category: string
  price: number
}

const features: Feature[] = [
  { id: 'responsive', name: 'Responsive Design', category: 'Design', price: 40000 },
  { id: 'custom-design', name: 'Custom UI/UX Design', category: 'Design', price: 150000 },
  { id: 'animation', name: 'Advanced Animations', category: 'Design', price: 80000 },
  { id: 'cms', name: 'Content Management System', category: 'Features', price: 120000 },
  { id: 'auth', name: 'User Authentication', category: 'Features', price: 100000 },
  { id: 'payment', name: 'Payment Integration', category: 'Features', price: 120000 },
  { id: 'api', name: 'API Development', category: 'Backend', price: 160000 },
  { id: 'database', name: 'Database Setup', category: 'Backend', price: 80000 },
  { id: 'ai', name: 'AI/ML Integration', category: 'Advanced', price: 250000 },
  { id: 'mobile', name: 'Mobile App (iOS/Android)', category: 'Mobile', price: 400000 },
  { id: 'seo', name: 'SEO Optimization', category: 'Marketing', price: 65000 },
  { id: 'analytics', name: 'Analytics Integration', category: 'Marketing', price: 40000 },
]

export default function ProjectEstimator() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [projectType, setProjectType] = useState<'web' | 'mobile' | 'both'>('web')

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const calculateTotal = () => {
    const basePrice = projectType === 'web' ? 250000 : projectType === 'mobile' ? 400000 : 650000
    const featuresPrice = features
      .filter((f) => selectedFeatures.includes(f.id))
      .reduce((sum, f) => sum + f.price, 0)
    return basePrice + featuresPrice
  }

  const total = calculateTotal()
  const categories = [...new Set(features.map((f) => f.category))]

  return (
    <>
      {/* Estimator Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 left-8 z-40 px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full text-white font-semibold flex items-center gap-2 shadow-lg shadow-neon-purple/50 hover:shadow-2xl hover:shadow-neon-purple/70 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <Calculator className="w-5 h-5" />
        <span className="hidden sm:inline">Project Estimator</span>
      </motion.button>

      {/* Estimator Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full glass-effect p-8 rounded-3xl border border-neon-purple/30 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gradient mb-2">Project Estimator</h2>
                <p className="text-gray-400">
                  Select your project type and features to get an instant estimate
                </p>
              </div>

              {/* Project Type */}
              <div className="mb-8">
                <label className="block text-sm text-gray-400 mb-3">Project Type</label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: 'web', label: 'Web Only', base: '₹2,50,000' },
                    { value: 'mobile', label: 'Mobile Only', base: '₹4,00,000' },
                    { value: 'both', label: 'Web + Mobile', base: '₹6,50,000' },
                  ].map((type) => (
                    <motion.button
                      key={type.value}
                      onClick={() => setProjectType(type.value as 'web' | 'mobile' | 'both')}
                      className={`p-4 rounded-xl border transition-all ${
                        projectType === type.value
                          ? 'border-neon-purple bg-neon-purple/20'
                          : 'border-white/10 hover:border-neon-purple/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="font-semibold mb-1">{type.label}</div>
                      <div className="text-sm text-gray-400">Base: {type.base}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <label className="block text-sm text-gray-400 mb-3">
                  Additional Features (Optional)
                </label>
                <div className="space-y-6">
                  {categories.map((category) => (
                    <div key={category}>
                      <h4 className="text-lg font-semibold mb-3 text-neon-cyan">{category}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {features
                          .filter((f) => f.category === category)
                          .map((feature) => (
                            <motion.button
                              key={feature.id}
                              onClick={() => toggleFeature(feature.id)}
                              className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                                selectedFeatures.includes(feature.id)
                                  ? 'border-neon-blue bg-neon-blue/20'
                                  : 'border-white/10 hover:border-neon-blue/50'
                              }`}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-center gap-3">
                                <div
                                  className={`w-5 h-5 rounded border flex items-center justify-center ${
                                    selectedFeatures.includes(feature.id)
                                      ? 'border-neon-blue bg-neon-blue'
                                      : 'border-white/30'
                                  }`}
                                >
                                  {selectedFeatures.includes(feature.id) && (
                                    <Check className="w-3 h-3 text-white" />
                                  )}
                                </div>
                                <span className="text-sm">{feature.name}</span>
                              </div>
                              <span className="text-sm text-gray-400">
                                +₹{feature.price.toLocaleString('en-IN')}
                              </span>
                            </motion.button>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="glass-effect p-6 rounded-2xl border border-neon-purple/30">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Estimated Cost</h3>
                    <p className="text-sm text-gray-400">
                      This is a rough estimate. Final pricing may vary.
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-gradient">
                      ₹{total.toLocaleString('en-IN')}
                    </div>
                    <div className="text-sm text-gray-400">INR</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-semibold text-center hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Accurate Quote
                  </motion.a>
                  <motion.button
                    onClick={() => {
                      setSelectedFeatures([])
                      setProjectType('web')
                    }}
                    className="px-6 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reset
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

