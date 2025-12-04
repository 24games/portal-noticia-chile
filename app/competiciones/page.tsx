import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Globe, Trophy, Calendar } from 'lucide-react'

export default function CompeticionesPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Competiciones</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Torneos Nacionales e Internacionales</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sigue todas las competiciones donde participan los equipos chilenos. Desde el 
              Campeonato Nacional hasta los torneos continentales más importantes, aquí encontrarás 
              toda la información sobre cada competencia.
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-black rounded-lg p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Globe className="w-6 h-6 mr-2 text-[#DC2626]" />
                    <h3 className="text-2xl font-bold">Copa Libertadores</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    El torneo más importante de clubes en Sudamérica. Los equipos chilenos buscan 
                    hacer historia en este prestigioso certamen continental.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Fase de Grupos - 2025</span>
                  </div>
                </div>
                <Trophy className="w-12 h-12 text-[#DC2626]" />
              </div>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-6 h-6 mr-2 text-[#DC2626]" />
                    <h3 className="text-2xl font-bold">Campeonato Nacional</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    La máxima categoría del fútbol chileno. Dieciséis equipos compiten por el título 
                    más codiciado del país en una temporada llena de emociones.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Temporada 2025</span>
                  </div>
                </div>
                <Trophy className="w-12 h-12 text-[#DC2626]" />
              </div>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Globe className="w-6 h-6 mr-2 text-[#DC2626]" />
                    <h3 className="text-2xl font-bold">Copa Sudamericana</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    La segunda competición continental más importante. Una oportunidad para que los 
                    equipos chilenos demuestren su nivel en el escenario internacional.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Fase Eliminatoria - 2025</span>
                  </div>
                </div>
                <Trophy className="w-12 h-12 text-[#DC2626]" />
              </div>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Trophy className="w-6 h-6 mr-2 text-[#DC2626]" />
                    <h3 className="text-2xl font-bold">Copa Chile</h3>
                  </div>
                  <p className="text-gray-300 mb-3">
                    El torneo de copa nacional que reúne a equipos de todas las categorías. Una 
                    oportunidad para que los clubes más pequeños enfrenten a los grandes del fútbol chileno.
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Fase Eliminatoria - 2025</span>
                  </div>
                </div>
                <Trophy className="w-12 h-12 text-[#DC2626]" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Clasificaciones</h2>
            <p className="text-gray-700 leading-relaxed">
              Revisa las tablas de posiciones de cada competición, los equipos clasificados y 
              los próximos enfrentamientos. Mantente informado sobre el estado de cada torneo 
              y las posibilidades de los equipos chilenos.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

