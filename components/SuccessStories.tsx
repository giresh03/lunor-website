'use client'

import { motion } from 'framer-motion'
import { Play, Video, ArrowRight } from 'lucide-react'

type Reel = {
  title: string
  src: string
  poster?: string
  kpis: string[]
}

const reels: Reel[] = [
  {
    title: 'E‑commerce Revamp',
    src: '/reels/ecom.mp4',
    poster: '',
    kpis: ['+38% conversion', '−24% bounce', '2.1x AOV'],
  },
  {
    title: 'SaaS Dashboard',
    src: '/reels/saas.mp4',
    poster: '',
    kpis: ['+52% retention', 'NPS 68', '3.4x demo → paid'],
  },
]

export default function SuccessStories() {
  return (
    <section id="success" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-neon-blue/30 mb-6">
            <Video className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-gray-300">Success Stories with Video Proof</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Not Just Words.</span> Proof.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Short reels, before → after snapshots, real KPIs, and client-recorded reviews.
          </p>
        </motion.div>

        {/* Reels */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reels.map((r) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="relative aspect-[9/16] md:aspect-video bg-black/60">
                <video
                  className="w-full h-full object-cover"
                  src={r.src}
                  poster={r.poster}
                  autoPlay
                  muted
                  playsInline
                  loop
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">{r.title}</div>
                    <div className="flex gap-2 mt-1">
                      {r.kpis.map((k) => (
                        <span key={k} className="px-2 py-1 text-xs rounded bg-white/10 text-gray-200 border border-white/10">
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Play className="w-5 h-5 text-white/80" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Before After */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="glass-effect rounded-2xl border border-white/10 p-6">
            <div className="text-sm text-gray-400 mb-2">Before</div>
            <div className="h-48 rounded-xl bg-white/5 border border-white/10 mb-4" />
            <div className="text-sm text-gray-400 mb-2">After</div>
            <div className="h-48 rounded-xl bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 border border-neon-blue/30" />
          </div>
          <div className="glass-effect rounded-2xl border border-white/10 p-6">
            <div className="text-sm text-gray-400 mb-2">Before</div>
            <div className="h-48 rounded-xl bg-white/5 border border-white/10 mb-4" />
            <div className="text-sm text-gray-400 mb-2">After</div>
            <div className="h-48 rounded-xl bg-gradient-to-br from-emerald-400/10 to-cyan-500/10 border border-emerald-400/30" />
          </div>
        </div>

        {/* Client Reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Priya — EduSaaS', text: 'We went from idea to paying customers in 6 weeks. The dashboard is brilliant.' },
            { name: 'Arjun — D2C Brand', text: 'Revenue up 32% after the revamp. PDP load time and UX made the difference.' },
            { name: 'Meera — HealthTech', text: 'Their AI integration saved our ops team 15+ hours/week. Highly recommend.' },
          ].map((r) => (
            <div key={r.name} className="glass-effect rounded-2xl border border-white/10 p-5">
              <div className="text-gray-300 mb-3">“{r.text}”</div>
              <div className="text-sm text-gray-500">{r.name}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:opacity-90"
          >
            Explore Case Studies
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}


