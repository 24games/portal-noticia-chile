import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, MessageCircle, Heart, Share2 } from 'lucide-react'

export default function ComunidadPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Comunidad</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Únete a la Hinchada</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La comunidad de Deportes24 es el lugar donde los hinchas se reúnen para compartir 
              su pasión por el fútbol chileno. Discute sobre los partidos, comparte tus opiniones 
              y conecta con otros fanáticos del deporte más popular de Chile.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ya sea que sigas a Colo-Colo, la U, la Católica o cualquier otro equipo, aquí 
              encontrarás un espacio para expresar tu pasión y estar al día con todo lo que pasa 
              en el mundo del fútbol nacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-black rounded-lg p-6 text-white">
              <Users className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Foros de Discusión</h3>
              <p className="text-sm text-gray-400 mb-4">
                Participa en las conversaciones sobre tu equipo favorito y comparte tus puntos de vista.
              </p>
              <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold py-2 px-4 rounded transition-colors">
                Ver Foros
              </button>
            </div>

            <div className="bg-black rounded-lg p-6 text-white">
              <MessageCircle className="w-8 h-8 mb-3 text-[#DC2626]" />
              <h3 className="font-semibold text-lg mb-2">Chat en Vivo</h3>
              <p className="text-sm text-gray-400 mb-4">
                Únete a las conversaciones en tiempo real durante los partidos y eventos importantes.
              </p>
              <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold py-2 px-4 rounded transition-colors">
                Entrar al Chat
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Publicaciones Recientes</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-[#DC2626] rounded-full flex items-center justify-center text-white font-bold mr-3">
                    HC
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Hincha Colo-Colo</p>
                    <p className="text-xs text-gray-500">Hace 1 hora</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">
                  ¡Qué partidazo el de ayer! El equipo está en un gran momento. ¿Qué opinan del 
                  rendimiento en la Libertadores?
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <button className="flex items-center hover:text-[#DC2626] transition-colors">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>24</span>
                  </button>
                  <button className="flex items-center hover:text-[#DC2626] transition-colors">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>8</span>
                  </button>
                  <button className="flex items-center hover:text-[#DC2626] transition-colors">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span>Compartir</span>
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    UCH
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Azul Fanático</p>
                    <p className="text-xs text-gray-500">Hace 3 horas</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">
                  El nuevo refuerzo se ve prometedor. Esperemos que pueda ayudar al equipo a 
                  mejorar en la tabla. ¡Vamos la U!
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <button className="flex items-center hover:text-[#DC2626] transition-colors">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>18</span>
                  </button>
                  <button className="flex items-center hover:text-[#DC2626] transition-colors">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>5</span>
                  </button>
                  <button className="flex items-center hover:text-[#DC2626] transition-colors">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span>Compartir</span>
                  </button>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    UC
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Cruzado Fiel</p>
                    <p className="text-xs text-gray-500">Hace 5 horas</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-2">
                  La temporada está siendo emocionante. El equipo está mostrando buen nivel y 
                  tenemos chances reales de pelear el título. ¡Vamos Católica!
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <button className="flex items-center hover:text-[#DC2626] transition-colors">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>31</span>
                  </button>
                  <button className="flex items-center hover:text-[#DC2626] transition-colors">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span>12</span>
                  </button>
                  <button className="flex items-center hover:text-[#DC2626] transition-colors">
                    <Share2 className="w-4 h-4 mr-1" />
                    <span>Compartir</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-lg p-6 text-white">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 mr-3 text-[#DC2626]" />
              <h3 className="text-2xl font-bold">Únete a la Comunidad</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Regístrate para participar en las discusiones, compartir tus opiniones y estar 
              conectado con miles de hinchas del fútbol chileno.
            </p>
            <button className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Crear Cuenta
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

