import React, { useState } from "react";

const faqCategories = [
  {
    title: "FACTURACIÓN",
    icon: "📄",
    questions: [
      {
        question: "¿Emiten factura? ¿De qué tipo?",
        answer: "Sí, emitimos factura A y B según corresponda. Al momento de realizar tu compra, podés indicarnos los datos de facturación."
      }
    ]
  },
  {
    title: "ENVÍOS",
    icon: "✈️",
    questions: [
      {
        question: "¿Cómo realizan sus envíos?",
        answer: "Realizamos envíos a todo el país a través de Correo Argentino, OCA, Andreani y otras empresas de logística. También contamos con envíos por moto en zona oeste."
      },
      {
        question: "¿Cuál es el costo de envío?",
        answer: "El costo de envío varía según la zona y el peso del paquete. Consultanos por WhatsApp para conocer el costo exacto a tu ubicación."
      },
      {
        question: "¿Dónde puedo recibir mi pedido?",
        answer: "Podés recibir tu pedido en tu domicilio, lugar de trabajo o en una sucursal de correo cercana a tu zona."
      },
      {
        question: "¿Cuánto tarda en llegar el pedido?",
        answer: "Los envíos dentro de AMBA demoran entre 2-4 días hábiles. Para el interior del país, entre 5-10 días hábiles dependiendo de la zona."
      }
    ]
  },
  {
    title: "MÉTODOS DE PAGO",
    icon: "💳",
    questions: [
      {
        question: "¿Qué formas de pago puedo aprovechar para realizar mi compra?",
        answer: "Aceptamos efectivo, transferencia bancaria, Mercado Pago, tarjetas de crédito y débito. También trabajamos con QR y billeteras virtuales."
      },
      {
        question: "¿Cuentan con promociones?",
        answer: "¡Sí! Tenemos descuentos por cantidad y promociones especiales para compras mayoristas. Consultanos por nuestras ofertas vigentes."
      }
    ]
  },
  {
    title: "PRODUCCIÓN",
    icon: "🔥",
    questions: [
      {
        question: "¿Tienen productos en stock o debo aguardar por producción?",
        answer: "Contamos con stock permanente de los productos más vendidos. Para personalizaciones o pedidos grandes, el tiempo de producción es de 7-15 días hábiles."
      },
      {
        question: "¿Cuánto suele demorar una producción?",
        answer: "La producción estándar demora entre 7-15 días hábiles dependiendo de la cantidad y complejidad del pedido."
      },
      {
        question: "¿Realizan grabado láser y packaging?",
        answer: "Sí, ofrecemos grabado láser personalizado en mates, bombillas y termos. También contamos con opciones de packaging para regalo o presentación corporativa."
      }
    ]
  },
  {
    title: "MAYORISTA",
    icon: "🏷️",
    questions: [
      {
        question: "¿Cuáles son las condiciones de compra mayorista?",
        answer: "Para acceder a precios mayoristas, el pedido mínimo es de 10 unidades surtidas. Cuanto mayor sea la cantidad, mejores precios obtenés."
      },
      {
        question: "¿Hay compra mínima?",
        answer: "Sí, la compra mínima mayorista es de 10 unidades. Pueden ser productos surtidos de diferentes categorías."
      }
    ]
  },
  {
    title: "CAMBIOS Y GARANTÍAS",
    icon: "🏆",
    questions: [
      {
        question: "¿Cuál es el plazo para realizar un cambio?",
        answer: "Tenés 30 días desde la recepción del producto para solicitar un cambio, siempre que el producto esté en perfectas condiciones y con su empaque original."
      },
      {
        question: "¿Cuentan con garantía?",
        answer: "Sí, todos nuestros productos cuentan con garantía de fabricación. Si encontrás algún defecto, contactanos inmediatamente."
      },
      {
        question: "¿Qué debo hacer si el producto no llega en buen estado?",
        answer: "Si tu pedido llegó dañado, envianos fotos del producto y el empaque dentro de las 48hs de recibido. Nos hacemos cargo del reemplazo sin costo."
      }
    ]
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="faq" className="bg-[#F4F1EB] py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold italic text-gray-900 mb-4">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-gray-600 text-lg">
            Encontrá respuestas a las dudas más comunes sobre nuestros productos y servicios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.questions.map((item, questionIndex) => {
                  const key = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div 
                      key={questionIndex}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, questionIndex)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-sm font-medium text-gray-700 pr-2">
                          {item.question}
                        </span>
                        <svg 
                          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
                        <p className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
