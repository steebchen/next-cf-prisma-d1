import { Footer } from '@/components/layout/footer'
import './globals.css'
import type { Metadata } from 'next'
import { Comfortaa, Inter } from 'next/font/google'
import { ReactNode } from 'react'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Poll',
  description: 'Create free online polls',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`flex items-center min-h-screen flex-col ${comfortaa.variable} ${inter.variable} font-theme`}
      >
        {children}

        <Footer />
      </body>
    </html>
  )
}
