'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'

const categories = ['All', 'Web', 'Mobile', 'AI/ML']

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web',
    description: 'Modern e-commerce solution with AI recommendations',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile',
    description: 'Cross-platform fitness app with progress tracking',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    technologies: ['React Native', 'Firebase'],
  },
  {
    title: 'AI Analytics Engine',
    category: 'AI/ML',
    description: 'ML-powered analytics for business intelligence',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    technologies: ['Python', 'TensorFlow', 'React'],
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Our Portfolio</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white'
                  : 'glass-effect text-gray-400 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group glass-effect rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="h-48" style={{ background: project.image }} />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/5 text-xs rounded">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
