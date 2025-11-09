'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
// Icons removed - not currently used in this simplified version

const categories = ['All', 'Web', 'Mobile', 'AI/ML', 'Student', 'Industrial']

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web',
    description: 'Modern e-commerce solution with real-time inventory and AI recommendations',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile',
    description: 'Cross-platform fitness app with workout plans and progress tracking',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    technologies: ['React Native', 'Firebase', 'TensorFlow'],
    link: '#',
    github: '#',
  },
  {
    title: 'Predictive Analytics Engine',
    category: 'AI/ML',
    description: 'ML-powered analytics platform for business intelligence',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    link: '#',
    github: '#',
  },
  {
    title: 'Smart Campus System',
    category: 'Student',
    description: 'IoT-based attendance and resource management for universities',
    image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    technologies: ['React', 'Node.js', 'MQTT', 'MongoDB'],
    link: '#',
    github: '#',
  },
  {
    title: 'Industrial Monitor Dashboard',
    category: 'Industrial',
    description: 'Real-time monitoring and control system for manufacturing',
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    technologies: ['Vue.js', 'Node.js', 'InfluxDB', 'WebSocket'],
    link: '#',
    github: '#',
  },
  {
    title: 'AI Chatbot Platform',
    category: 'AI/ML',
    description: 'Intelligent chatbot with NLP and sentiment analysis',
    image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    technologies: ['Python', 'GPT-4', 'React', 'Redis'],
    link: '#',
    github: '#',
  },
  {
    title: 'Portfolio Website Builder',
    category: 'Web',
    description: 'Drag-and-drop portfolio builder with custom templates',
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
    link: '#',
    github: '#',
  },
  {
    title: 'Medical Records App',
    category: 'Mobile',
    description: 'Secure health records management with doctor consultation',
    image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    technologies: ['Flutter', 'Firebase', 'Node.js'],
    link: '#',
    github: '#',
  },
  {
    title: 'Student Project Hub',
    category: 'Student',
    description: 'Collaborative platform for capstone project management',
    image: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
    link: '#',
    github: '#',
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 glass-effect rounded-full text-neon-purple text-sm font-semibold mb-4"
          >
            Our Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Projects That</span>
            <br />
            Define Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our diverse range of successful projects across industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg shadow-neon-blue/30'
                  : 'glass-effect text-gray-400 hover:text-white border border-white/10 hover:border-neon-blue/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              className="group glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-neon-blue/50 transition-all"
            >
              {/* Project Image/Gradient */}
              <div 
                className="h-48 relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-neon-blue/20 text-neon-cyan text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

