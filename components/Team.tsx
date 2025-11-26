'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { Linkedin, Github, Mail, Code, Palette, TrendingUp, Users, Megaphone, Database, Shield, LucideIcon } from 'lucide-react'

type TeamMember = {
  name: string
  role: string
  title: string
  image: string
  fallbackGradient: string
  bio: string
  skills: string[]
  icon: LucideIcon
  social: {
    linkedin?: string
    github?: string
    email: string
  }
}

type TeamMemberCardProps = {
  member: TeamMember
  index: number
  isInView: boolean
}

function TeamMemberCard({ member, index, isInView }: TeamMemberCardProps) {
  const [imageError, setImageError] = useState(false)
  const Icon = member.icon
  const imagePath = member.image || `/team/${member.name.toLowerCase().replace(/\s+/g, '-')}.jpg`

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
      className="group glass-effect p-8 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all"
      whileHover={{ scale: 1.05, y: -10 }}
    >
      {/* Avatar */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow ring-2 ring-neon-blue/20 group-hover:ring-neon-blue/50 relative">
          {!imageError ? (
            <Image
              src={imagePath}
              alt={member.name}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
              unoptimized
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-4xl font-bold text-white"
              style={{ background: member.fallbackGradient }}
            >
              {member.name.split(' ').map((n: string) => n[0]).join('')}
            </div>
          )}
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center border-4 border-dark-bg">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-gradient transition-all">
          {member.name}
        </h3>
        <p className="text-neon-cyan font-semibold mb-1">{member.role}</p>
        <p className="text-sm text-gray-400">{member.title}</p>
      </div>

      {/* Bio */}
      <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
        {member.bio}
      </p>

      {/* Skills */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-500 mb-3 uppercase">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {member.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-white/5 border border-white/10 text-xs text-gray-300 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4">
        {member.social.linkedin && (
          <motion.a
            href={member.social.linkedin}
            className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-white/10 hover:border-neon-blue/50 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-neon-blue transition-colors" />
          </motion.a>
        )}
        {member.social.github && (
          <motion.a
            href={member.social.github}
            className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-white/10 hover:border-neon-blue/50 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 text-gray-400 hover:text-neon-blue transition-colors" />
          </motion.a>
        )}
        <motion.a
          href={`mailto:${member.social.email}`}
          className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-white/10 hover:border-neon-blue/50 transition-all"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail className="w-5 h-5 text-gray-400 hover:text-neon-blue transition-colors" />
        </motion.a>
      </div>
    </motion.div>
  )
}

const teamMembers = [
  {
    name: 'Girish Kumar',
    role: 'Head of Lunor.ko',
    title: 'Full Stack Developer & App Developer',
    image: '/team/girish.jpg',
    fallbackGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    bio: 'Leading the vision and technical direction of Lunor.ko with expertise in full-stack development and mobile applications.',
    skills: ['React', 'Node.js', 'React Native', 'TypeScript', 'MongoDB', 'AWS'],
    icon: Code,
    social: {
      linkedin: '#',
      github: '#',
      email: 'lunor.ko@gmail.com'
    }
  },
  {
    name: 'Ellis',
    role: 'Full Stack Developer',
    title: 'Full Stack Developer',
    image: '/team/ellis.jpg',
    fallbackGradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
    bio: 'Based in Colombia with over 3 years of experience building projects for companies in Mexico and USA. Specialized in end-to-end development solutions.',
    skills: ['React', 'Node.js', 'TypeScript', 'Full Stack', 'API Development', 'Database Design'],
    icon: Code,
    social: {
      linkedin: '#',
      github: '#',
      email: 'eyis619@gmail.com'
    }
  },
  {
    name: 'Muhammad Adamu Shuaibu',
    role: 'AI Specialist & Data Scientist',
    title: 'Machine Learning Engineer & Business Intelligence Analyst',
    image: '/team/muhammad-adamu-shuaibu.jpg',
    fallbackGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    bio: 'Based in Nigeria with extensive experience in AI, machine learning, and data science. Expert in NLP, computer vision, and business intelligence solutions for data-driven decision making.',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'PyTorch', 'SQL', 'Power BI', 'Tableau', 'Data Science', 'NLP', 'Computer Vision'],
    icon: Database,
    social: {
      linkedin: '#',
      github: '#',
      email: 'raizadamu@gmail.com'
    }
  },
  {
    name: 'Ronald Wilson',
    role: 'Cybersecurity Expert & AI Security Specialist',
    title: 'Co-founder of Disruptiq | Deepfence AI',
    image: '/team/ronald-wilson.jpg',
    fallbackGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    bio: 'Co-founder of Disruptiq building Deepfence AI - an autonomous AI security agent that thinks like an attacker. Based in Bangalore, India. Pioneering self-evolving security systems that autonomously test, harden, and secure code and infrastructure against real-world threats.',
    skills: ['Cybersecurity', 'AI Security', 'Agentic AI', 'DevSecOps', 'Threat Detection', 'Autonomous Security', 'Penetration Testing', 'Security Automation'],
    icon: Shield,
    social: {
      linkedin: '#',
      github: '#',
      email: 'lunor.ko@gmail.com'
    }
  },
  {
    name: 'Srinitha',
    role: 'Frontend Developer',
    title: 'UI/UX Implementation Expert',
    image: '/team/srinitha.jpg',
    fallbackGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    bio: 'Crafting beautiful and responsive user interfaces with modern web technologies.',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
    icon: Palette,
    social: {
      linkedin: '#',
      github: '#',
      email: 'lunor.ko@gmail.com'
    }
  },
  {
    name: 'Angeline',
    role: 'Backend Developer',
    title: 'Server & Database Architect',
    image: '/team/angeline.jpg',
    fallbackGradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    bio: 'Building robust and scalable backend systems that power our applications.',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'API Design', 'Docker'],
    icon: Database,
    social: {
      linkedin: '#',
      github: '#',
      email: 'lunor.ko@gmail.com'
    }
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="relative py-20 md:py-32 overflow-hidden">
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
            Meet Our Team
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">The Creative Minds</span>
            <br />
            Behind Lunor.ko
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A diverse team of passionate experts united by innovation and excellence
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
                key={index}
              member={member}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Want to join our amazing team?</p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

