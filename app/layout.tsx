import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

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
      <body className={`${inter.className} bg-dark-bg text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
