'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Palette, Layout, Component, BarChart3 } from 'lucide-react'

type PlaygroundTab = 'components' | 'themes' | 'layouts' | 'dashboard'

const themes = [
  { name: 'Neon', bg: 'bg-dark-bg', from: 'from-neon-blue', to: 'to-neon-purple', accent: 'text-neon-cyan' },
  { name: 'Emerald', bg: 'bg-dark-bg', from: 'from-emerald-400', to: 'to-cyan-500', accent: 'text-emerald-300' },
  { name: 'Sunset', bg: 'bg-dark-bg', from: 'from-pink-500', to: 'to-yellow-400', accent: 'text-pink-300' },
  { name: 'Ice', bg: 'bg-dark-bg', from: 'from-sky-400', to: 'to-indigo-500', accent: 'text-sky-300' },
]

export default function Playground() {
  const [active, setActive] = useState<PlaygroundTab>('components')
  const [theme, setTheme] = useState(0)
  const t = themes[theme]

  const Preview = useMemo(() => {
    switch (active) {
      case 'components':
        return (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-effect p-6 rounded-xl border border-white/10">
              <h4 className="text-gray-300 mb-4">Buttons</h4>
              <div className="flex flex-wrap gap-3">
                <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${t.from} ${t.to} text-white font-semibold`}>Primary</button>
                <button className="px-4 py-2 rounded-lg border border-white/10 text-gray-300 hover:border-neon-blue/50">Secondary</button>
                <button className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20">Ghost</button>
              </div>
            </div>
            <div className="glass-effect p-6 rounded-xl border border-white/10">
              <h4 className="text-gray-300 mb-4">Card</h4>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className={`text-2xl font-bold bg-gradient-to-r ${t.from} ${t.to} bg-clip-text text-transparent mb-2`}>Lunor UI</div>
                <p className="text-gray-400 mb-4">Beautiful glassmorphism components ready for production.</p>
                <div className="flex gap-2">
                  <span className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-gray-300">Accessible</span>
                  <span className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-gray-300">Responsive</span>
                  <span className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10 text-gray-300">Fast</span>
                </div>
              </div>
            </div>
          </div>
        )
      case 'themes':
        return (
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {themes.map((th, i) => (
                <button
                  key={th.name}
                  onClick={() => setTheme(i)}
                  className={`px-3 py-2 rounded-lg border text-sm ${i === theme ? 'border-neon-blue/50' : 'border-white/10'} bg-white/5 text-gray-300`}
                >
                  {th.name}
                </button>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className={`h-40 bg-gradient-to-r ${t.from} ${t.to}`} />
              <div className="p-6 bg-white/5">
                <h4 className={`text-xl font-bold ${t.accent}`}>Themed Preview</h4>
                <p className="text-gray-400">Your site inherits the chosen accent colors and gradients globally.</p>
              </div>
            </div>
          </div>
        )
      case 'layouts':
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Marketing', areas: 'grid-rows-[120px_1fr] md:grid-cols-[1fr_1fr] md:grid-rows-[200px_1fr]' },
              { name: 'SaaS', areas: 'md:grid-cols-[240px_1fr] md:grid-rows-[1fr]' },
              { name: 'Portfolio', areas: 'md:grid-cols-[1fr_320px] md:grid-rows-[1fr]' },
            ].map((l) => (
              <div key={l.name} className="glass-effect p-4 rounded-xl border border-white/10">
                <div className="text-sm text-gray-300 mb-3">{l.name} layout</div>
                <div className={`grid ${l.areas} gap-3`}>
                  <div className="h-20 rounded-lg bg-white/5 border border-white/10" />
                  <div className="h-28 rounded-lg bg-white/5 border border-white/10" />
                  <div className="h-16 rounded-lg bg-white/5 border border-white/10" />
                </div>
              </div>
            ))}
          </div>
        )
      case 'dashboard':
        return (
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Active Users', value: '2,431', delta: '+8.2%' },
              { label: 'MRR', value: '₹1.2L', delta: '+3.1%' },
              { label: 'Deploys', value: '57', delta: '+12' },
            ].map((c) => (
              <div key={c.label} className="glass-effect p-5 rounded-xl border border-white/10">
                <div className="text-gray-500 text-xs mb-1">{c.label}</div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${t.from} ${t.to} bg-clip-text text-transparent`}>
                  {c.value}
                </div>
                <div className="text-xs text-emerald-400 mt-1">{c.delta}</div>
                <div className="mt-4 h-16 rounded-md bg-white/5 border border-white/10" />
              </div>
            ))}
          </div>
        )
      default:
        return null
    }
  }, [active, theme])

  const tabs: { key: PlaygroundTab; label: string; icon: any }[] = [
    { key: 'components', label: 'UI Components', icon: Component },
    { key: 'themes', label: 'Color Themes', icon: Palette },
    { key: 'layouts', label: 'Website Layouts', icon: Layout },
    { key: 'dashboard', label: 'Demo Dashboard', icon: BarChart3 },
  ]

  return (
    <section id="playground" className="relative py-20 md:py-28 overflow-hidden">
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
            <Component className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-gray-300">Try Before You Buy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Component Playground</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Play with UI components, themes, layouts, and a live dashboard. Trust us—we know design.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-4 py-2 rounded-full text-sm transition-all border ${
                active === key
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white border-transparent'
                  : 'glass-effect text-gray-300 border-white/10 hover:border-neon-blue/40'
              } flex items-center gap-2`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Preview */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 p-6 glass-effect"
        >
          {Preview}
        </motion.div>
      </div>
    </section>
  )
}


