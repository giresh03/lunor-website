import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lunor.ko - Building the Future of Digital Innovation',
  description: 'Custom web development, mobile apps, AI/ML integrations led by Girish Kumar and expert team.',
  keywords: 'web development, mobile apps, AI, ML, capstone projects, software agency, Lunor.ko',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'neon-blue': '#00D4FF',
                    'neon-purple': '#9D4EDD',
                    'neon-cyan': '#00FFF5',
                    'dark-bg': '#0A0A0F',
                    'dark-surface': '#121218',
                  }
                }
              }
            }
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html { scroll-behavior: smooth; }
            body { overflow-x: hidden; }
            .text-gradient {
              background: linear-gradient(to right, #00D4FF, #9D4EDD, #00FFF5);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .glow-text {
              text-shadow: 0 0 10px rgba(0, 212, 255, 0.5), 0 0 20px rgba(0, 212, 255, 0.3);
            }
            .glass-effect {
              background: rgba(255, 255, 255, 0.05);
              backdrop-filter: blur(16px);
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .animated-bg {
              background: radial-gradient(circle at 20% 50%, rgba(157, 78, 221, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%);
              animation: background-shift 15s ease infinite;
            }
            @keyframes background-shift {
              0%, 100% { background-position: 0% 50%, 100% 100%; }
              50% { background-position: 100% 50%, 0% 0%; }
            }
            .spotlight { position: fixed; inset: 0; pointer-events: none; z-index: 1; }
          `
        }} />
      </head>
      <body className={`${inter.className} bg-dark-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
