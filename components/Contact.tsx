'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({
        name: '',
        email: '',
        service: '',
        budget: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
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
            className="inline-block px-4 py-2 glass-effect rounded-full text-neon-purple text-sm font-semibold mb-4"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Ready to Build</span>
            <br />
            Something Amazing?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Let&apos;s discuss your project and turn your ideas into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gradient">
                Let&apos;s Talk
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                Have a project in mind? We&apos;d love to hear about it. Get in touch with Girish Kumar and the Lunor.ko team to create something extraordinary together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'lunor.ko@gmail.com',
                  link: 'mailto:lunor.ko@gmail.com',
                  gradient: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+91 83098 15563',
                  link: 'tel:+918309815563',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'San Francisco, CA',
                  gradient: 'from-green-500 to-emerald-500',
                },
                {
                  icon: Calendar,
                  label: 'Schedule',
                  value: 'Book a Meeting',
                  link: '#',
                  gradient: 'from-orange-500 to-red-500',
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm">{item.label}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white text-lg hover:text-neon-cyan transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-lg">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="pt-8"
            >
              <p className="text-gray-500 text-sm mb-4">Follow Us</p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center border border-white/10 hover:border-neon-blue/50 transition-all"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-sm font-semibold text-gray-400 hover:text-neon-blue transition-colors">
                      {social[0]}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="glass-effect p-8 rounded-3xl border border-white/10">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                        focusedField === 'name'
                          ? 'border-neon-blue shadow-lg shadow-neon-blue/20'
                          : 'border-white/10'
                      }`}
                      placeholder="John Doe"
                      animate={focusedField === 'name' ? { scale: 1.02 } : { scale: 1 }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all ${
                        focusedField === 'email'
                          ? 'border-neon-blue shadow-lg shadow-neon-blue/20'
                          : 'border-white/10'
                      }`}
                      placeholder="john@example.com"
                      animate={focusedField === 'email' ? { scale: 1.02 } : { scale: 1 }}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Service Needed</label>
                    <motion.select
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none transition-all ${
                        focusedField === 'service'
                          ? 'border-neon-blue shadow-lg shadow-neon-blue/20'
                          : 'border-white/10'
                      }`}
                      animate={focusedField === 'service' ? { scale: 1.02 } : { scale: 1 }}
                    >
                      <option value="" className="bg-dark-surface">Select a service</option>
                      <option value="web" className="bg-dark-surface">Web Development</option>
                      <option value="mobile" className="bg-dark-surface">Mobile App</option>
                      <option value="ai" className="bg-dark-surface">AI/ML Integration</option>
                      <option value="student" className="bg-dark-surface">Student Project</option>
                      <option value="industrial" className="bg-dark-surface">Industrial Project</option>
                      <option value="other" className="bg-dark-surface">Other</option>
                    </motion.select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Budget Range</label>
                    <motion.select
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white focus:outline-none transition-all ${
                        focusedField === 'budget'
                          ? 'border-neon-blue shadow-lg shadow-neon-blue/20'
                          : 'border-white/10'
                      }`}
                      animate={focusedField === 'budget' ? { scale: 1.02 } : { scale: 1 }}
                    >
                      <option value="" className="bg-dark-surface">Select budget</option>
                      <option value="5l" className="bg-dark-surface">₹5L - ₹10L</option>
                      <option value="10l" className="bg-dark-surface">₹10L - ₹25L</option>
                      <option value="25l" className="bg-dark-surface">₹25L - ₹50L</option>
                      <option value="50l" className="bg-dark-surface">₹50L+</option>
                    </motion.select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Project Details</label>
                    <motion.textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={4}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all resize-none ${
                        focusedField === 'message'
                          ? 'border-neon-blue shadow-lg shadow-neon-blue/20'
                          : 'border-white/10'
                      }`}
                      placeholder="Tell us about your project..."
                      animate={focusedField === 'message' ? { scale: 1.02 } : { scale: 1 }}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gradient mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-center">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}

