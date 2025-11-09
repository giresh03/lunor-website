'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'TensorFlow',
  'MongoDB', 'PostgreSQL', 'React Native', 'Flutter', 'AWS', 'Docker'
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="tech" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              className="glass-effect px-6 py-3 rounded-full border border-white/10 hover:border-neon-blue/50"
            >
              <span className="text-white font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
