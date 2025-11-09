'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    avatar: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: 'Lunor.ko transformed our vision into reality. Outstanding work!',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, HealthTech Pro',
    avatar: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    content: 'Professional, responsive, and truly innovative team.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Student, MIT',
    avatar: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    content: 'My capstone project got the highest grade thanks to Lunor.ko!',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="testimonials" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Client Testimonials</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-2xl border border-white/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full" style={{ background: testimonial.avatar }} />
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4">&quot;{testimonial.content}&quot;</p>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
