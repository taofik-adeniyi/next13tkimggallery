import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

export const revalidate = 10 // 3600

export const metadata: Metadata = {
  title: 'Taofik Image Gallery',
  description: 'Generated using chatgpt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='max-w-6xl mx-auto'>

        {children}
        </main>
        </body>
    </html>
  )
}
