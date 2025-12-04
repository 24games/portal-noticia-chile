import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deportes24 - Noticias Deportivas de Chile',
  description: 'Portal de noticias deportivas chilenas, fútbol, resultados y más',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-CL">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

