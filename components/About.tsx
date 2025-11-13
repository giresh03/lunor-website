'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Rocket, Users, Award } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Precision & Quality',
    description: 'Every line of code is crafted with attention to detail and industry best practices.',
  },
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technologies to build solutions that stand out.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your vision drives our process. We collaborate closely to exceed expectations.',
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'Delivering award-winning projects that make real business impact.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
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
            About Lunor.ko
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Turning Ideas Into</span>
            <br />
            Impactful Digital Products
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We&apos;re a team of passionate developers, designers, and innovators dedicated to
            transforming your vision into reality with cutting-edge technology and creative excellence.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="glass-effect p-6 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative glass-effect p-8 md:p-12 rounded-3xl border border-white/10 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-gradient">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Founded and led by Girish Kumar, Lunor.ko brings together a talented team of specialists in development, design, and digital marketing. We believe technology should empower, not complicate. Our mission is to deliver innovative software solutions that help businesses scale, students succeed, and ideas come to life.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our diverse team of experts covers everything from full-stack development to digital marketing, UI/UX design, and sales. From web and mobile development to AI/ML integrations and industrial automation, we&apos;re your partner in digital transformation—building solutions that are not just functional, but extraordinary.
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  )
}

