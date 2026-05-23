import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Mates images
import mate2 from "../assets/mates/WhatsApp Image 2026-05-12 at 19.42.01.jpeg";
import mate3 from "../assets/mates/WhatsApp Image 2026-05-12 at 19.41.37.jpeg";
import mate4 from "../assets/mates/WhatsApp Image 2026-02-16 at 15.09.51.jpeg";
import mate6 from "../assets/mates/WhatsApp Image 2026-05-12 at 19.38.41.jpeg";
import pizeras from "../assets/pizzeras/WhatsApp Image 2026-05-12 at 19.39.52.jpeg";

// Termos images
import termo1 from "../assets/termos/WhatsApp Image 2026-02-16 at 15.10.38.jpeg";
import termo2 from "../assets/termos/WhatsApp Image 2026-02-16 at 15.10.51.jpeg";

// Bombilla images
import bombilla1 from "../assets/Bombilla/WhatsApp Image 2026-02-16 at 15.08.58.jpeg";
import bombilla2 from "../assets/Bombilla/WhatsApp Image 2026-02-16 at 15.10.14.jpeg";
import bombilla3 from "../assets/Bombilla/WhatsApp Image 2026-05-12 at 19.40.15.jpeg";

// Fernetero image
import fernetero1 from "../assets/fernetero/WhatsApp Image 2026-02-16 at 15.07.38.jpeg";

// Latas image
import lata1 from "../assets/latas/WhatsApp Image 2026-02-16 at 15.09.30.jpeg";

// Set Materos images
import set1 from "../assets/mates/WhatsApp Image 2026-02-16 at 15.09.18 (1).jpeg";
import set2 from "../assets/set completos/WhatsApp Image 2026-02-16 at 15.09.39.jpeg";
import set3 from "../assets/set completos/WhatsApp Image 2026-02-16 at 15.11.02.jpeg";

const allProducts = [
  // Mates
  { id: 1, name: "Mate Térmico Mini Stanley", category: "Mates", price: 4800, wholesalePrice: 2850, image: mate2, description: "Hierro aluminizado con interior de acero 430 0,6 ml espesor" },
  { id: 2, name: "Mate Vasito Recto", category: "Mates", price: 4800, wholesalePrice: 2850, image: mate3, description: "Mate vasito recto de alta calidad" },
  { id: 3, name: "Mate Térmico Modelo Copa", category: "Mates", price: 5000, wholesalePrice: 3000, image: mate4, description: "Diseño copa con excelente aislamiento térmico" },
  { id: 5, name: "Mate Stanley Clásico", category: "Mates", price: 5000, wholesalePrice: 3150, image: mate6, description: "Mate Stanley clásico de alta calidad" },
  { id: 6, name: "Pizzeras Número 36", category: "Pizzeras", price: 4500, wholesalePrice: 3500, image: pizeras, description: "Pizzeras número 36 de alta calidad" },
  // Termos
  { id: 8, name: "Termo Acero con Manija", category: "Termos", price: 17000, wholesalePrice: 17000, image: termo1, description: "Acero inoxidable 1 litro con manija" },
  { id: 9, name: "Termo Bala Pintado", category: "Termos", price: 15000, wholesalePrice: 15000, image: termo2, description: "Bala pintado 1 litro" },
  // Bombillas
  { id: 10, name: "Bombilla con Embellecedor de Bronce", category: "Bombilla", price: 2000, wholesalePrice: 1500, image: bombilla1, description: "Material acero inoxidable con embellecedor de bronce" },
  { id: 11, name: "Sorbetes Reutilizables Metálicos", category: "Bombilla", price: 800, wholesalePrice: 800, image: bombilla2, description: "Sorbetes curvos y rectos de metal reutilizables" },
  { id: 12, name: "Bombillas con Dije de Bronce", category: "Bombilla", price: 2000, wholesalePrice: 1500, image: bombilla3, description: "Bombilla de acero inoxidable con dije decorativo de bronce" },
  // Fernetero
  { id: 13, name: "Fernetero de Aluminio", category: "Vaso Fernetero", price: 5000, wholesalePrice: 2900, image: fernetero1, description: "Vaso fernetero de aluminio premium" },
  // Latas
  { id: 14, name: "Latas de Hojalata", category: "Latas", price: 5000, wholesalePrice: 2900, image: lata1, description: "Latas de hojalata decorativas" },
  // Set Materos
  { id: 15, name: "Set Stanley", category: "Set Materos", price: 8500, wholesalePrice: 8500, image: set1, description: "Set completo con mate Stanley, bombilla y termo" },
  { id: 16, name: "Set Argentina", category: "Set Materos", price: 12000, wholesalePrice: 12000, image: set2, description: "Set completo temática Argentina con mate, bombilla y accesorios" },
  { id: 17, name: "Set Premium", category: "Set Materos", price: 30000, wholesalePrice: 30000, image: set3, description: "Set premium completo con mate, termo, bombilla y accesorios de lujo" },
];

export default function Shop() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [isMayorista, setIsMayorista] = useState(false);
  const minCantidadMayorista = 20;

  const getCurrentPrice = (product) => {
    return isMayorista ? product.wholesalePrice : product.price;
  };

  const getPriceLabel = () => {
    if (isMayorista) {
      return `Comprando más de ${minCantidadMayorista} unidades`;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div 
        ref={headerRef}
        className={`bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 text-center transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold italic">TODOS LOS PRODUCTOS</h1>
          <p className="text-white/80 mt-2">Explorá nuestra colección completa de productos materos</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-8">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-full bg-gray-200 p-1">
            <button
              onClick={() => setIsMayorista(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                !isMayorista
                  ? "bg-[#1d294f] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Precio Minorista
            </button>
            <button
              onClick={() => setIsMayorista(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                isMayorista
                  ? "bg-[#1d294f] text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Precio Mayorista
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-6">
          {allProducts.map((product) => {
            const currentPrice = getCurrentPrice(product);
            const priceLabel = getPriceLabel();
            
            return (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                <div className="relative bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-80 sm:h-96 ${product.category === "Latas" ? "object-cover object-center" : "object-contain"}`}
                  />
                  {isMayorista && (
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      MAYORISTA
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h2>
                      <p className="text-sm text-gray-600">{product.category}</p>
                    </div>
                  </div>

                  <div className="py-2">
                    {priceLabel && (
                      <p className="text-xs text-orange-600 font-medium mb-1">{priceLabel}</p>
                    )}
                    <p className="text-2xl font-bold text-green-600">${currentPrice.toLocaleString()}</p>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                  <a 
                    href={`https://wa.me/5491166793367?text=${encodeURIComponent(
                      isMayorista 
                        ? `Hola! Me interesa comprar por MAYOR:\n\n*${product.name}*\nPrecio Mayorista (más de ${minCantidadMayorista} unidades): $${currentPrice.toLocaleString()}\n${product.description}\n\n¿Podrían darme más información?`
                        : `Hola! Me interesa el producto:\n\n*${product.name}*\nPrecio: $${currentPrice.toLocaleString()}\n${product.description}\n\n¿Podrían darme más información?`
                    )}`}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
