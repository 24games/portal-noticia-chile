'use client'

import { Search, User, TrendingUp, Users, Zap, BarChart3, Smartphone, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <header className="w-full bg-black text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                DEPORTES<span className="text-[#DC2626]">24</span>
              </h1>
            </div>

            {/* Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-[#DC2626] transition-colors">Futbol</a>
              <a href="#" className="hover:text-[#DC2626] transition-colors">Resultados</a>
              <a href="#" className="hover:text-[#DC2626] transition-colors">Competiciones</a>
              <a href="#" className="hover:text-[#DC2626] transition-colors">Tendencias</a>
              <a href="#" className="hover:text-[#DC2626] transition-colors">Comunidad</a>
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-[#DC2626] transition-colors" />
              <User className="w-5 h-5 cursor-pointer hover:text-[#DC2626] transition-colors" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Left Column (25%) */}
          <aside className="lg:col-span-1 space-y-4">
            {/* News Cards */}
            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex gap-3">
                <img 
                  src="https://placehold.co/80x80/DC2626/FFFFFF?text=CC" 
                  alt="Noticia" 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">
                    Colo-Colo y la estrategia para la Libertadores 2025
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Hace 2 horas</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex gap-3">
                <img 
                  src="https://placehold.co/80x80/DC2626/FFFFFF?text=U" 
                  alt="Noticia" 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">
                    Tendencias deportivas en Sudamérica
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Hace 4 horas</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex gap-3">
                <img 
                  src="https://placehold.co/80x80/DC2626/FFFFFF?text=UCH" 
                  alt="Noticia" 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">
                    La U de Chile confirma nuevo refuerzo
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Hace 5 horas</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex gap-3">
                <img 
                  src="https://placehold.co/80x80/DC2626/FFFFFF?text=EST" 
                  alt="Noticia" 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">
                    Estadísticas clave del Campeonato Nacional
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">Hace 6 horas</p>
                </div>
              </div>
            </div>

            {/* Special Card - Herramienta destacada */}
            <div className="bg-black rounded-lg shadow-sm p-4 text-white">
              <h3 className="font-semibold text-sm mb-2">Herramienta destacada del día</h3>
              <p className="text-xs text-gray-400 mb-3">
                Descubre las últimas tendencias en análisis deportivo
              </p>
              <button className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold py-2 px-4 rounded transition-colors">
                Ver herramienta
              </button>
            </div>
          </aside>

          {/* Main Content - Right Column (75%) */}
          <main className="lg:col-span-3 space-y-6">
            {/* Hero Section */}
            <section className="relative rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-[500px]">
                <img 
                  src="/images/imagem-para-banner-principal.jpg" 
                  alt="Fútbol chileno" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-12 text-white">
                  <h1 className="text-3xl lg:text-5xl font-bold mb-4 max-w-2xl">
                    Chile vive un nuevo fenómeno entre los fanáticos del fútbol en 2025
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-200 mb-6 max-w-2xl">
                    Un análisis del comportamiento digital y las nuevas tendencias interactivas que están transformando la experiencia del hincha.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      Acceder al sitio destacado
                    </button>
                    <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                      Ver más detalles
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Article & Stats Section */}
            <section className="space-y-6">
              {/* Article Text */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  La transformación digital en el fútbol chileno ha alcanzado niveles sin precedentes. 
                  Los hinchas de La Roja y del Campeonato Nacional están adoptando herramientas interactivas 
                  que les permiten vivir cada partidazo con mayor intensidad. Esta revolución tecnológica 
                  está redefiniendo cómo la hinchada consume y se relaciona con el deporte más popular de Chile.
                </p>
              </div>

              {/* Infographic Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-black rounded-lg p-6 text-white">
                  <TrendingUp className="w-8 h-8 mb-3 text-[#DC2626]" />
                  <h3 className="font-semibold text-sm mb-1">Usa herramientas interactivas</h3>
                  <p className="text-xs text-gray-400">Más del 60% de hinchas</p>
                </div>
                <div className="bg-black rounded-lg p-6 text-white">
                  <BarChart3 className="w-8 h-8 mb-3 text-[#DC2626]" />
                  <h3 className="font-semibold text-sm mb-1">
                    <span className="text-[#DC2626]">150% de aumento</span>
                  </h3>
                  <p className="text-xs text-gray-400">En uso de plataformas</p>
                </div>
                <div className="bg-black rounded-lg p-6 text-white">
                  <Zap className="w-8 h-8 mb-3 text-[#DC2626]" />
                  <h3 className="font-semibold text-sm mb-1">Simulaciones instantáneas</h3>
                  <p className="text-xs text-gray-400">Resultados en tiempo real</p>
                </div>
                <div className="bg-black rounded-lg p-6 text-white">
                  <Users className="w-8 h-8 mb-3 text-[#DC2626]" />
                  <h3 className="font-semibold text-sm mb-1">Hinchas buscan más dinamismo</h3>
                  <p className="text-xs text-gray-400">Experiencias inmersivas</p>
                </div>
              </div>
            </section>

            {/* Feature Section - Mobile App Promo */}
            <section className="bg-black rounded-lg shadow-lg p-8 lg:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    Sitio destacado por la comunidad deportiva 2025
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    La plataforma más innovadora para los fanáticos del fútbol chileno. 
                    Accede a análisis en tiempo real, estadísticas avanzadas y simulaciones 
                    que transforman tu experiencia como hincha.
                  </p>
                  <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                    Descubrir plataforma de temporada ahora
                  </button>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <img 
                    src="/images/imagme-para-ficar-na-demonstração-da-plataforma.png" 
                    alt="Vista previa de la plataforma" 
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </section>

            {/* Bottom Stats Row */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-black rounded-lg p-6 text-white">
                <Trophy className="w-8 h-8 mb-3 text-[#DC2626]" />
                <h3 className="text-2xl font-bold mb-1">
                  <span className="text-[#DC2626]">+150%</span>
                </h3>
                <p className="text-sm text-gray-400">crecimiento</p>
              </div>
              <div className="bg-black rounded-lg p-6 text-white">
                <Smartphone className="w-8 h-8 mb-3 text-[#DC2626]" />
                <h3 className="text-2xl font-bold mb-1">4 de cada 5</h3>
                <p className="text-sm text-gray-400">hinchas usan móvil</p>
              </div>
              <div className="bg-black rounded-lg p-6 text-white">
                <Users className="w-8 h-8 mb-3 text-[#DC2626]" />
                <h3 className="text-2xl font-bold mb-1">82%</h3>
                <p className="text-sm text-gray-400">Top comunidades</p>
              </div>
              <div className="bg-black rounded-lg p-6 text-white">
                <TrendingUp className="w-8 h-8 mb-3 text-[#DC2626]" />
                <h3 className="text-2xl font-bold mb-1">#1</h3>
                <p className="text-sm text-gray-400">En preferencia</p>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              DEPORTES<span className="text-[#DC2626]">24</span>
            </h3>
            <p className="text-gray-400 text-sm">
              © 2025 Deportes24. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

