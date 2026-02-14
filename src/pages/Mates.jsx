import React from "react";
import { Link } from "react-router-dom";

export default function Mates() {
  const products = [
    {
      id: 1,
      name: "Mate Premium Imperial",
      category: "Mates",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.5,
      image: "/assets/WhatsApp Image 2026-02-13 at 20.37.55.jpeg",
      description: "Mate de alta calidad con diseño elegante. Perfecto para disfrutar de tus momentos de mate.",
      inStock: true,
      onSale: true,
    },
    {
      id: 2,
      name: "Mate Clásico Artesanal",
      category: "Mates",
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.5,
      image: "/assets/WhatsApp Image 2026-02-13 at 20.37.55.jpeg",
      description: "Mate artesanal hecho a mano con materiales de primera calidad. Ideal para el uso diario.",
      inStock: true,
      onSale: true,
    },
    {
      id: 3,
      name: "Mate Imperial Grabado",
      category: "Mates",
      price: 149.99,
      originalPrice: 189.99,
      rating: 4.5,
      image: "/assets/WhatsApp Image 2026-02-13 at 20.37.55.jpeg",
      description: "Mate premium con grabado personalizado. Perfecto para regalar o uso personal.",
      inStock: true,
      onSale: true,
    },
    {
      id: 4,
      name: "Mate Tradicional",
      category: "Mates",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.5,
      image: "/assets/WhatsApp Image 2026-02-13 at 20.37.55.jpeg",
      description: "Mate tradicional de excelente calidad. Diseño clásico y duradero.",
      inStock: true,
      onSale: true,
    },
    {
      id: 5,
      name: "Mate de Lujo Personalizado",
      category: "Mates",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.5,
      image: "/assets/WhatsApp Image 2026-02-13 at 20.37.55.jpeg",
      description: "Mate de lujo con acabados premium y personalización incluida. La mejor opción para los amantes del mate.",
      inStock: true,
      onSale: true,
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
          <h1 className="text-4xl sm:text-5xl font-bold italic">MATES</h1>
          <p className="text-white/80 mt-2">Descubrí nuestra colección de mates premium</p>
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
                {product.onSale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                    SALE
                  </span>
                )}
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                </div>

                <div className="py-2">
                  <p className="text-lg font-bold text-green-600">${product.price}</p>
                  <p className="text-sm text-gray-500 line-through">${product.originalPrice}</p>
                </div>

                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                <div className="flex flex-col gap-2">
                  <button className="w-full bg-blue-500 text-white py-2.5 px-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-200">
                    Agregar al Carrito
                  </button>
                  <button className="w-full bg-orange-500 text-white py-2.5 px-4 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 text-sm">
                    Consultar Precio por mayor
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
