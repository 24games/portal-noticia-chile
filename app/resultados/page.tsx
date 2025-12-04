import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Clock, TrendingUp, Award } from 'lucide-react'

export default function ResultadosPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Resultados en Vivo</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Resultados del Día</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mantente al día con todos los resultados del Campeonato Nacional y las competiciones 
              internacionales. Aquí encontrarás los marcadores más recientes, estadísticas detalladas 
              y análisis de cada encuentro.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">Colo-Colo</h3>
                  <p className="text-sm text-gray-500">Estadio Monumental</p>
                </div>
                <div className="text-center mx-4">
                  <div className="text-3xl font-bold text-[#DC2626]">3 - 1</div>
                  <p className="text-xs text-gray-500 mt-1">Finalizado</p>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="font-bold text-lg text-gray-800">Universidad de Chile</h3>
                  <p className="text-sm text-gray-500">Visitante</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Fecha 15 - Campeonato Nacional</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">Universidad Católica</h3>
                  <p className="text-sm text-gray-500">Estadio San Carlos</p>
                </div>
                <div className="text-center mx-4">
                  <div className="text-3xl font-bold text-[#DC2626]">2 - 0</div>
                  <p className="text-xs text-gray-500 mt-1">Finalizado</p>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="font-bold text-lg text-gray-800">Palestino</h3>
                  <p className="text-sm text-gray-500">Visitante</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Fecha 15 - Campeonato Nacional</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800">Cobresal</h3>
                  <p className="text-sm text-gray-500">Estadio El Cobre</p>
                </div>
                <div className="text-center mx-4">
                  <div className="text-3xl font-bold text-gray-400">1 - 1</div>
                  <p className="text-xs text-gray-500 mt-1">Finalizado</p>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="font-bold text-lg text-gray-800">Audax Italiano</h3>
                  <p className="text-sm text-gray-500">Visitante</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>Fecha 15 - Campeonato Nacional</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black rounded-lg p-6 text-white">
              <TrendingUp className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Estadísticas</h3>
              <p className="text-sm text-gray-400">Análisis detallado de cada partido</p>
            </div>
            <div className="bg-black rounded-lg p-6 text-white">
              <Award className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Goleadores</h3>
              <p className="text-sm text-gray-400">Ranking de anotadores del campeonato</p>
            </div>
            <div className="bg-black rounded-lg p-6 text-white">
              <Clock className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Próximos Partidos</h3>
              <p className="text-sm text-gray-400">Calendario de la próxima fecha</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

