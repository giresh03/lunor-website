'use client'

import { useEffect, useState, useRef } from 'react'
import { Code2, Terminal, Zap, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const codeSnippets = [
  {
    language: 'TypeScript',
    icon: Code2,
    code: `// Building scalable web applications
interface Project {
  name: string;
  tech: string[];
  status: 'deployed';
}

const buildProject = async () => {
  const architecture = designSystem();
  const backend = createAPI();
  const frontend = buildUI();
  
  return deploy({
    ...architecture,
    ...backend,
    ...frontend
  });
};`,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    language: 'React',
    icon: Zap,
    code: `// Crafting modern user interfaces
const App = () => {
  const [features, setFeatures] = useState([]);
  
  useEffect(() => {
    loadFeatures().then(setFeatures);
  }, []);
  
  return (
    <div className="app">
      {features.map(feature => (
        <Feature key={feature.id} {...feature} />
      ))}
    </div>
  );
};`,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    language: 'Node.js',
    icon: Terminal,
    code: `// Powering robust backends
const server = express();

server.use('/api', routes);
server.use(middleware);
server.use(errorHandler);

const startServer = async () => {
  await connectDatabase();
  await setupCache();
  server.listen(PORT, () => {
    console.log('Server running...');
  });
};`,
    color: 'from-green-500 to-emerald-500',
  },
  {
    language: 'AI/ML',
    icon: CheckCircle2,
    code: `// Integrating intelligent solutions
const model = await loadModel();
const predictions = model.predict(data);

const enhance = (input) => {
  return {
    ...input,
    insights: analyze(input),
    recommendations: suggest(input)
  };
};`,
    color: 'from-purple-500 to-pink-500',
  },
]

export default function LiveCoding() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]
    let charIndex = 0
    setDisplayedCode('')
    setIsTyping(true)

    const typeCode = () => {
      if (charIndex < snippet.code.length) {
        setDisplayedCode(snippet.code.slice(0, charIndex + 1))
        charIndex++
      } else {
        setIsTyping(false)
        // Wait before switching to next snippet
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
        }, 3000)
      }
    }

    intervalRef.current = setInterval(typeCode, 30)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentSnippet])

  const current = codeSnippets[currentSnippet]
  const Icon = current.icon

  return (
    <section id="live-coding" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-neon-blue/30 mb-6">
            <Code2 className="w-4 h-4 text-neon-cyan" />
            <span className="text-sm text-gray-300">Live Development</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Watch Us Code</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            See how our expert developers build cutting-edge solutions in real-time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Code Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-xl border border-white/10 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-dark-surface/50">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-sm text-gray-400 ml-2">live-coding.tsx</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 bg-gradient-to-r ${current.color} bg-clip-text text-transparent`} />
                  <span className="text-sm text-gray-300">{current.language}</span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 bg-dark-bg/50 font-mono text-sm">
                <pre className="text-gray-300 overflow-x-auto">
                  <code>
                    {displayedCode.split('\n').map((line, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-gray-600 mr-4 select-none w-6 text-right">
                          {index + 1}
                        </span>
                        <span className="flex-1">
                          {line || '\u00A0'}
                          {index === displayedCode.split('\n').length - 1 && isTyping && (
                            <span className="animate-pulse bg-neon-cyan text-neon-cyan">▊</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="px-4 py-2 border-t border-white/10 bg-dark-surface/50 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Live
                  </span>
                  <span>{displayedCode.length} chars</span>
                </div>
                <div className="flex items-center gap-1">
                  <Terminal className="w-3 h-3" />
                  <span>Building...</span>
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${current.color} opacity-20 blur-xl -z-10 rounded-xl`}
            />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect p-6 rounded-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Real-Time Development
              </h3>
              <p className="text-gray-300 mb-4">
                Our development process is transparent and efficient. Watch as we build
                your project with clean, maintainable code.
              </p>
              <div className="space-y-3">
                {[
                  'Type-safe TypeScript',
                  'Modern React patterns',
                  'Scalable architecture',
                  'AI-powered solutions',
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-neon-cyan flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Lines of Code', value: '50K+', icon: Code2 },
                { label: 'Projects Built', value: '100+', icon: Zap },
              ].map((stat, index) => {
                const StatIcon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="glass-effect p-4 rounded-xl border border-white/10 text-center"
                  >
                    <StatIcon className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {codeSnippets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSnippet(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSnippet
                  ? 'w-8 bg-gradient-to-r from-neon-blue to-neon-purple'
                  : 'w-2 bg-white/20 hover:bg-white/30'
              }`}
              aria-label={`Switch to ${codeSnippets[index].language} snippet`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

