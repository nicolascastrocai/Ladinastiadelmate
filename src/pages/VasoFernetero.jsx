import React from "react";
import { Link } from "react-router-dom";
import ferneteroAluminio from "../assets/fernetero/WhatsApp Image 2026-02-16 at 15.07.38.jpeg";

export default function VasoFernetero() {
  const products = [
    {
      id: 1,
      name: "Fernetero de Aluminio",
      category: "Vaso Fernetero",
      price: 2900,
      image: ferneteroAluminio,
      description: "Vaso fernetero de aluminio de 1 litro. Ideal para disfrutar tu fernet con amigos.",
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[#1d294f] text-white py-12 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold italic">VASO FERNETERO</h1>
          <p className="text-white/80 mt-2">Descubrí nuestra colección de vasos ferneteros</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                </div>

                <div className="py-2">
                  <p className="text-2xl font-bold text-green-600">${product.price.toLocaleString()}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <a 
                  href={`https://wa.me/5491166793367?text=${encodeURIComponent(`Hola! Me interesa el producto:\n\n*${product.name}*\nPrecio: $${product.price.toLocaleString()}\n${product.description}\n\n¿Podrían darme más información?`)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white py-2.5 px-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
