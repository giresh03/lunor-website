'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Language' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Firebase', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'GraphQL', category: 'API' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Three.js', category: '3D' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'Supabase', category: 'Backend' },
]

const TechBadge = ({ name, category, index }: { name: string; category: string; index: number }) => {
  const colors = {
    Frontend: 'from-blue-500 to-cyan-500',
    Backend: 'from-green-500 to-emerald-500',
    Mobile: 'from-purple-500 to-pink-500',
    'AI/ML': 'from-orange-500 to-red-500',
    Database: 'from-yellow-500 to-orange-500',
    Cloud: 'from-indigo-500 to-purple-500',
    DevOps: 'from-teal-500 to-cyan-500',
    Language: 'from-violet-500 to-purple-500',
    API: 'from-pink-500 to-rose-500',
    Styling: 'from-sky-500 to-blue-500',
    '3D': 'from-fuchsia-500 to-pink-500',
    Animation: 'from-lime-500 to-green-500',
    Cache: 'from-red-500 to-orange-500',
    ORM: 'from-cyan-500 to-teal-500',
  }

  const gradient = colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="relative group"
    >
      <motion.div
        className={`glass-effect px-6 py-3 rounded-full border border-white/10 hover:border-neon-blue/50 transition-all cursor-pointer`}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`} />
          <span className="text-white font-medium">{name}</span>
        </div>
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-xs text-neon-cyan rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {category}
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="tech" className="relative py-20 md:py-32 overflow-hidden">
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
            className="inline-block px-4 py-2 glass-effect rounded-full text-neon-blue text-sm font-semibold mb-4"
          >
            Tech Stack
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Powered By</span>
            <br />
            Cutting-Edge Technology
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We leverage the latest tools and frameworks to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Animated Ring Container */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Center Core */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute w-32 h-32 bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-28 h-28 rounded-full border-4 border-dashed border-white/20"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Tech</span>
            </div>
          </motion.div>

          {/* Rotating Rings */}
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 30 + ring * 10,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute"
              style={{
                width: `${250 + ring * 100}px`,
                height: `${250 + ring * 100}px`,
              }}
            >
              <div className="relative w-full h-full rounded-full border border-neon-blue/10">
                {/* Glowing dots on rings */}
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-neon-cyan rounded-full -translate-x-1/2 shadow-lg shadow-neon-cyan/50" />
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-neon-purple rounded-full -translate-x-1/2 shadow-lg shadow-neon-purple/50" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-16"
        >
          {technologies.map((tech, index) => (
            <TechBadge key={tech.name} {...tech} index={index} />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: '20+', label: 'Technologies' },
            { value: '99%', label: 'Uptime' },
            { value: '10x', label: 'Faster Deploy' },
            { value: '100%', label: 'Scalable' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              className="glass-effect p-6 rounded-xl text-center border border-white/10 hover:border-neon-blue/50 transition-all"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

