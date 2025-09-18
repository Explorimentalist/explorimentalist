import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { NavigationBar } from '@/components/navigation/navigation-bar'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const mori = localFont({
  src: [
    {
      path: '../public/fonts/PPMori-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPMori-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/PPMori-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-mori',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Explorimentalist',
  description: 'A brutalist + glassmorphism blog about exploration and innovation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} ${mori.variable} bg-gray-50 text-gray-900`}>
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  )
}
