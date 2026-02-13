import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Gamified Data Arcade | V3',
  description: 'The Physical Interface for Zero-Party Data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.variable,
        spaceGrotesk.variable,
        "font-sans antialiased bg-background text-foreground overflow-hidden"
      )}>
        {children}
      </body>
    </html>
  )
}
