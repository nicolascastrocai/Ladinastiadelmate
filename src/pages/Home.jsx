import React from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import FAQ from "../components/FAQ";

export default function Home() {
  const [heroRef, heroVisible] = useScrollAnimation();
  const [conocenosRef, conocenosVisible] = useScrollAnimation();
  const [categoriasRef, categoriasVisible] = useScrollAnimation();

  return (
    <main className="relative">
      <section
        ref={heroRef}
        className={`relative min-h-screen bg-cover bg-no-repeat flex items-center justify-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          backgroundImage: `url('/img/360_F_523378084_mkoc6hIGSmNncESTUvzSL8vCidYFUeaS.jpg')`,
          backgroundPosition: window.innerWidth < 768 ? 'center left -5rem' : 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-10 py-8 sm:py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-white mb-4">
              <span className="block text-2xl sm:text-3xl font-normal mb-2">
                Comprá los <span className="font-bold">mejores</span>
              </span>
              <span className="block text-4xl sm:text-6xl font-bold italic leading-tight">
                PRODUCTOS
              </span>
              <span className="block text-4xl sm:text-6xl font-bold italic leading-tight">
                GASTRONÓMICOS
              </span>
            </h1>

            <Link
              to="/tienda"
              className="inline-block bg-[#1d294f] hover:bg-[#121a34] text-white font-bold px-8 py-3 rounded-full text-lg transition-all duration-300 mb-8"
            >
              ¡Comprar ahora!
            </Link>

            <div className="text-white">
              <p className="text-sm sm:text-base mb-1">
                Descuentos en compras mayoristas desde las
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-bold italic text-orange-400">10 unidades</span>{" "}
                Surtidas.
              </p>
            </div>
          </div>

          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 z-20"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>

        </div>
      </section>

      <section ref={conocenosRef} className={`bg-[#1a1f2e] text-white py-16 px-4 sm:px-10 transition-all duration-1000 ${conocenosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="flex flex-col justify-center mt-8">
              <h2 className="text-5xl sm:text-6xl font-bold italic mb-8">
                CONÓCENOS
              </h2>
              <p className="text-base leading-relaxed mb-4">
                <span className="font-bold">Somos fabricantes</span> de mates, termos, bombillas y accesorios materos, además de productos personalizados ideales para regalos y empresas.
              </p>
              <p className="text-base leading-relaxed">
                En nuestra tienda apostamos por la calidad en cada mate que sale de nuestras manos, cuidando cada detalle y respetando los materiales y la naturaleza. Creemos en el ritual del mate como un momento de encuentro, tradición y disfrute, y trabajamos para que cada producto acompañe esa experiencia. 🧉✨
              </p>
            </div>

            <div className="flex flex-col justify-center mt-8">
              <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Estamos en cada paso.</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {[
                  { label: "Fabricación.", icon: "🔨" },
                  { label: "Grabado.", icon: "✏️" },
                  { label: "Empaquetado.", icon: "📦" },
                  { label: "Envíos.", icon: "🚀" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-[#e8dcc8] flex items-center justify-center mb-3 shadow-lg">
                      <span className="text-3xl" aria-hidden="true">
                        {item.icon}
                      </span>
                    </div>
                    <p className="text-sm leading-tight font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={categoriasRef} className={`bg-[#F4F1EB] py-16 px-4 sm:px-10 transition-all duration-1000 ${categoriasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-12">
            <img
              src="/img/WhatsApp Image 2026-02-13 at 21.46.24.jpeg"
              alt="Logo Tienda Bien Alto"
              className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full flex-shrink-0"
            />
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-gray-700 text-base mb-1">Conocé nuestras</p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold italic text-gray-900 mb-3">CATEGORÍAS</h2>
              <Link
                to="/tienda"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-full transition-all duration-300 text-sm"
              >
                Ver todos los productos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Mates", image: "/img/WhatsApp Image 2026-02-13 at 20.37.53.jpeg", link: "/mates" },
              { name: "Termos", image: "/img/WhatsApp Image 2026-02-13 at 20.38.02.jpeg", link: "/termos" },
              { name: "Bombilla", image: "/img/WhatsApp Image 2026-02-13 at 20.37.58.jpeg", link: "/bombilla" },
              { name: "Llavero y Azucarero", image: "/img/WhatsApp Image 2026-02-13 at 20.37.56 (1).jpeg", link: "/llavero-azucarero" },
              { name: "Vaso Fernetero", image: "/img/WhatsApp Image 2026-02-13 at 20.37.52.jpeg", link: "/vaso-fernetero" },
            ].map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="group relative overflow-hidden rounded-2xl aspect-square hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-base">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
