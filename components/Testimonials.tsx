'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: 'Lunor.ko transformed our vision into reality. The web application they built is not just functional, but absolutely stunning. Our user engagement increased by 300%!',
    rating: 5,
    project: 'E-Commerce Platform',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, HealthTech Pro',
    avatar: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    content: 'The mobile app they developed exceeded all expectations. Professional, responsive, and truly innovative. Best investment we made for our startup.',
    rating: 5,
    project: 'Medical Records App',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student, MIT',
    avatar: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    content: 'My capstone project got the highest grade in my class thanks to Lunor.ko. Their expertise in ML and guidance throughout the project was invaluable.',
    rating: 5,
    project: 'AI Research Project',
  },
  {
    name: 'David Kumar',
    role: 'CTO, InnovateAI',
    avatar: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    content: 'Their AI integration completely revolutionized our business processes. The team is knowledgeable, creative, and delivered beyond scope.',
    rating: 5,
    project: 'Predictive Analytics',
  },
  {
    name: 'Jessica Taylor',
    role: 'Operations Manager, AutoManufacture',
    avatar: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    content: 'The industrial automation solution has saved us countless hours and significantly reduced errors. Incredible attention to detail and support.',
    rating: 5,
    project: 'Factory Automation',
  },
  {
    name: 'Alex Thompson',
    role: 'Marketing Director, CreativeHub',
    avatar: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    content: 'Our new website is a masterpiece! Modern, fast, and converts visitors like never before. The team understood our brand perfectly.',
    rating: 5,
    project: 'Corporate Website',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
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
            Client Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">What Our Clients</span>
            <br />
            Say About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Real feedback from real clients who trusted us with their projects
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative glass-effect p-8 md:p-12 rounded-3xl border border-neon-blue/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neon-purple/20 to-transparent rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-neon-cyan mb-6 opacity-50" />
              
              {/* Content */}
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              >
                &quot;{testimonials[activeIndex].content}&quot;
              </motion.p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <motion.div
                  key={`avatar-${activeIndex}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 rounded-full"
                  style={{ background: testimonials[activeIndex].avatar }}
                />
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="hidden md:block text-right">
                  <span className="px-4 py-2 glass-effect rounded-full text-sm text-neon-blue">
                    {testimonials[activeIndex].project}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-gradient-to-r from-neon-blue to-neon-purple'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="glass-effect p-6 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all group cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              {/* Avatar & Rating */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-full group-hover:scale-110 transition-transform"
                  style={{ background: testimonial.avatar }}
                />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

