'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Smartphone, Brain, GraduationCap, Factory, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Design & Development',
    shortDesc: 'Modern, responsive websites that convert visitors into customers.',
    fullDesc: 'We create stunning, high-performance websites using the latest technologies like Next.js, React, and cutting-edge design principles. From landing pages to complex web applications, we deliver solutions that drive results.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    shortDesc: 'Native and cross-platform apps for iOS and Android.',
    fullDesc: 'Build powerful mobile applications that engage users and scale with your business. We specialize in React Native, Flutter, and native development for seamless user experiences.',
    features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'Offline Support'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'AI & ML Integrations',
    shortDesc: 'Intelligent systems powered by machine learning and AI.',
    fullDesc: 'Harness the power of artificial intelligence to automate processes, gain insights, and create innovative solutions. From chatbots to predictive models, we make AI accessible.',
    features: ['Custom Models', 'NLP Solutions', 'Computer Vision', 'Data Analytics'],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: GraduationCap,
    title: 'Capstone & Final Year Projects',
    shortDesc: 'Professional-grade projects for academic excellence.',
    fullDesc: 'We help students deliver outstanding capstone and final year projects that stand out. Get expert guidance, implementation support, and documentation that impresses.',
    features: ['Expert Mentorship', 'Complete Documentation', 'Presentation Support', 'Code Quality'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Factory,
    title: 'Industrial Projects',
    shortDesc: 'Automation and digitalization for modern industries.',
    fullDesc: 'Transform your industrial operations with IoT, automation, and digital twins. We build robust solutions for manufacturing, logistics, and industrial management.',
    features: ['IoT Integration', 'Process Automation', 'Real-time Monitoring', 'Data Visualization'],
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Briefcase,
    title: 'Custom Automation',
    shortDesc: 'Tailored solutions for your unique business needs.',
    fullDesc: 'Streamline your workflows with custom automation solutions. From business process automation to custom integrations, we build tools that save time and increase efficiency.',
    features: ['Workflow Automation', 'API Integrations', 'Custom Tools', 'Scalable Solutions'],
    gradient: 'from-indigo-500 to-purple-500',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 glass-effect rounded-full text-neon-cyan text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Comprehensive Solutions</span>
            <br />
            For Every Need
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to deployment, we offer end-to-end services that bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -10 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="group relative glass-effect p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                onClick={() => setSelectedService(index)}
              >
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6">{service.shortDesc}</p>

                {/* Learn More */}
                <div className="flex items-center text-neon-blue group-hover:text-neon-cyan transition-colors">
                  <span className="text-sm font-semibold">Learn More</span>
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-purple/0 group-hover:from-neon-blue/10 group-hover:to-neon-purple/10 rounded-2xl transition-all duration-300" />
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-2xl w-full glass-effect p-8 rounded-3xl border border-neon-blue/30 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            {(() => {
              const service = services[selectedService]
              const Icon = service.icon
              return (
                <div>
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gradient">{service.title}</h3>
                  <p className="text-lg text-gray-300 mb-6">{service.fullDesc}</p>
                  
                  <h4 className="text-xl font-semibold mb-4">Key Features:</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-neon-cyan rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedService(null)}
                  >
                    Get Started
                  </motion.a>
                </div>
              )
            })()}
          </motion.div>
        </motion.div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

