import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TrendingUp, Flame, BarChart3 } from 'lucide-react'

export default function TendenciasPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Tendencias</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Lo Más Popular</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Descubre las tendencias que están marcando el fútbol chileno. Desde las noticias más 
              comentadas hasta los temas que están generando conversación en la hinchada.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start">
                <Flame className="w-6 h-6 text-[#DC2626] mr-3 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#DC2626] text-white text-xs font-bold px-2 py-1 rounded mr-2">TENDENCIA</span>
                    <span className="text-sm text-gray-500">Hace 2 horas</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    La transformación digital del fútbol chileno
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Los hinchas están adoptando nuevas tecnologías para seguir a sus equipos. 
                    Las plataformas interactivas están revolucionando la forma en que se consume el fútbol.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span>+250% de interacciones en las últimas 24 horas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start">
                <BarChart3 className="w-6 h-6 text-[#DC2626] mr-3 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#DC2626] text-white text-xs font-bold px-2 py-1 rounded mr-2">ANÁLISIS</span>
                    <span className="text-sm text-gray-500">Hace 5 horas</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Estadísticas que sorprenden del Campeonato Nacional
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Un análisis profundo de los números que están marcando esta temporada. 
                    Desde los goleadores hasta los equipos más efectivos en casa.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span>+180% de visualizaciones</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start">
                <Flame className="w-6 h-6 text-[#DC2626] mr-3 mt-1" />
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#DC2626] text-white text-xs font-bold px-2 py-1 rounded mr-2">TENDENCIA</span>
                    <span className="text-sm text-gray-500">Hace 8 horas</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Los jóvenes talentos que están brillando
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Una nueva generación de jugadores chilenos está emergiendo. Conoce a los 
                    jóvenes que están haciendo historia en el fútbol nacional.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    <span>+120% de menciones en redes sociales</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black rounded-lg p-6 text-white">
              <TrendingUp className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Temas del Momento</h3>
              <p className="text-sm text-gray-400">Lo que más está sonando en el fútbol chileno</p>
            </div>
            <div className="bg-black rounded-lg p-6 text-white">
              <Flame className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Viral</h3>
              <p className="text-sm text-gray-400">Contenido que está generando más interacción</p>
            </div>
            <div className="bg-black rounded-lg p-6 text-white">
              <BarChart3 className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Análisis</h3>
              <p className="text-sm text-gray-400">Estadísticas y datos que importan</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

