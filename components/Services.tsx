'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Smartphone, Brain, GraduationCap, Factory, Briefcase, X } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Design & Development',
    shortDesc: 'Modern, responsive websites that convert visitors into customers.',
    fullDesc: 'We create stunning, high-performance websites using the latest technologies.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform apps for iOS and Android.',
    fullDesc: 'Build powerful mobile applications that engage users and scale with your business.',
    features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'Offline Support'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'AI & ML Integrations',
    shortDesc: 'Intelligent systems powered by machine learning and AI.',
    fullDesc: 'Harness the power of artificial intelligence to automate processes.',
    features: ['Custom Models', 'NLP Solutions', 'Computer Vision', 'Data Analytics'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: GraduationCap,
    title: 'Capstone & Final Year Projects',
    shortDesc: 'Professional-grade projects for academic excellence.',
    fullDesc: 'We help students deliver outstanding capstone and final year projects.',
    features: ['Expert Mentorship', 'Complete Documentation', 'Presentation Support', 'Code Quality'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Factory,
    title: 'Industrial Projects',
    shortDesc: 'Automation and digitalization for modern industries.',
    fullDesc: 'Transform your industrial operations with IoT, automation, and digital twins.',
    features: ['IoT Integration', 'Process Automation', 'Real-time Monitoring', 'Data Visualization'],
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Briefcase,
    title: 'Custom Automation',
    shortDesc: 'Tailored solutions for your unique business needs.',
    fullDesc: 'Streamline your workflows with custom automation solutions.',
    features: ['Workflow Automation', 'API Integrations', 'Custom Tools', 'Scalable Solutions'],
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Comprehensive Solutions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="group relative glass-effect p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedService(index)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.shortDesc}</p>
                <div className="flex items-center text-neon-blue">
                  <span className="text-sm font-semibold">Learn More →</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
