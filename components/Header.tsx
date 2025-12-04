'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-black text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl font-bold">
              DEPORTES<span className="text-[#DC2626]">24</span>
            </h1>
          </Link>

          {/* Menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/futbol" className="hover:text-[#DC2626] transition-colors">Futbol</Link>
            <Link href="/resultados" className="hover:text-[#DC2626] transition-colors">Resultados</Link>
            <Link href="/competiciones" className="hover:text-[#DC2626] transition-colors">Competiciones</Link>
            <Link href="/tendencias" className="hover:text-[#DC2626] transition-colors">Tendencias</Link>
            <Link href="/comunidad" className="hover:text-[#DC2626] transition-colors">Comunidad</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

