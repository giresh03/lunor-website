'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const footerLinks = {
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Our Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
  ],
  Services: [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'AI/ML Solutions', href: '#services' },
    { name: 'Student Projects', href: '#services' },
  ],
  Resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Pricing', href: '#contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: 'T' },
  { name: 'LinkedIn', href: '#', icon: 'Li' },
  { name: 'GitHub', href: '#', icon: 'Gh' },
  { name: 'Instagram', href: '#', icon: 'Ig' },
  { name: 'Dribbble', href: '#', icon: 'Dr' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-surface border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gray-400/20 rounded-full blur-sm" />
                <div className="absolute inset-1 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full absolute top-2 left-2" />
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full absolute top-3.5 right-2" />
                  <div className="w-1 h-1 bg-gray-500 rounded-full absolute bottom-2 left-3" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gradient">
                Lunor<span className="text-neon-cyan">.ko</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Building the future of digital innovation with cutting-edge web, mobile, and AI solutions.
            </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group w-10 h-10 glass-effect rounded-lg flex items-center justify-center border border-white/10 hover:border-neon-blue/50 transition-all relative overflow-hidden"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xs font-bold text-gray-400 group-hover:text-neon-blue transition-colors relative z-10">
                      {social.icon}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-purple/0 group-hover:from-neon-blue/20 group-hover:to-neon-purple/20 transition-all" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + categoryIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-neon-blue transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-2xl border border-white/10 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-2xl font-bold mb-2 text-gradient">Stay Updated</h4>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest tech trends and project updates.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-all"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/50 transition-all whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© 2024 Lunor.ko. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>by Lunor Team | </span>
            <a href="mailto:lunor.ko@gmail.com" className="hover:text-neon-blue transition-colors">
              lunor.ko@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm">
              All rights reserved
            </span>
            <motion.button
              onClick={scrollToTop}
              className="p-2 glass-effect rounded-lg border border-white/10 hover:border-neon-blue/50 transition-all group"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-neon-blue transition-colors" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl -z-10" />
    </footer>
  )
}

