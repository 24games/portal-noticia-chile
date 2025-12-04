import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, Trophy, Users } from 'lucide-react'

export default function FutbolPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Fútbol Chileno</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Campeonato Nacional</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              El fútbol chileno vive una de sus mejores épocas. El Campeonato Nacional reúne a los 
              equipos más importantes del país, donde cada partidazo es una batalla por la gloria. 
              Desde Colo-Colo hasta la Universidad de Chile, cada club representa la pasión de su hinchada.
            </p>
            <p className="text-gray-700 leading-relaxed">
              La Roja sigue siendo el orgullo de todos los chilenos, y cada encuentro internacional 
              es motivo de celebración. El fútbol no es solo un deporte en Chile, es una forma de vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-black rounded-lg p-6 text-white">
              <Calendar className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Próximos Partidos</h3>
              <p className="text-sm text-gray-400">Revisa el calendario completo del campeonato</p>
            </div>
            <div className="bg-black rounded-lg p-6 text-white">
              <Trophy className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Tabla de Posiciones</h3>
              <p className="text-sm text-gray-400">Sigue a tu equipo en la lucha por el título</p>
            </div>
            <div className="bg-black rounded-lg p-6 text-white">
              <Users className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Planteles</h3>
              <p className="text-sm text-gray-400">Conoce los jugadores de cada equipo</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Últimas Noticias</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Colo-Colo se prepara para la Copa Libertadores 2025
                </h3>
                <p className="text-gray-600 text-sm">El equipo albo busca hacer historia en el torneo continental más importante de Sudamérica.</p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  La U de Chile anuncia nuevo refuerzo para el ataque
                </h3>
                <p className="text-gray-600 text-sm">El delantero internacional llega para reforzar la delantera azul.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Universidad Católica busca su décimo título nacional
                </h3>
                <p className="text-gray-600 text-sm">Los cruzados están en la pelea por el campeonato y buscan sumar otro trofeo a su vitrina.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

