import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const primaryLinks = [
  { label: "Inicio", to: "/", isRoute: true },
  { 
    label: "Productos", 
    hasDropdown: true,
    dropdownItems: [
      { label: "Mates", to: "/mates" },
      { label: "Termos", to: "/termos" },
      { label: "Bombilla", to: "/bombilla" },
      { label: "Llavero y Azucarero", to: "/llavero-azucarero" },
      { label: "Vaso Fernetero", to: "/vaso-fernetero" },
    ]
  },
  { label: "Contacto", to: "#contacto" },
  { label: "Preguntas Frecuentes", to: "#faq" },
];

const secondaryLinks = [];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const mobilePanelState = menuOpen ? "max-lg:block" : "max-lg:hidden";

  const linkClasses = (isActive) =>
    `hover:text-[#007bff] block font-bold text-[15px] ${
      isActive ? "text-[#007bff]" : "text-gray-600"
    }`;

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide sticky top-0 z-50 shadow-md">
        <div className="flex flex-wrap items-center gap-4 w-full">
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/WhatsApp Image 2026-02-13 at 21.46.24.jpeg" 
              alt="Tienda Bien Alto" 
              className="w-12 h-12 rounded-full object-cover"
            />
          </Link>

          <div
            className={`lg:!flex lg:flex-auto lg:ml-12 ${mobilePanelState} max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50`}
          >
            <button
              type="button"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
              </svg>
            </button>

            <div className="lg:!flex lg:flex-auto">
              <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                <li className="mb-6 hidden max-lg:block">
                  <Link to="/" className="text-2xl font-semibold">
                    Tienda Bien Alto
                  </Link>
                </li>
                {primaryLinks.map(({ label, to, isRoute, hasDropdown, dropdownItems }) => (
                  <li key={label} className="max-lg:border-b max-lg:py-3 relative">
                    {hasDropdown ? (
                      <div className="relative" ref={dropdownRef}>
                        <button 
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className="hover:text-[#007bff] flex items-center gap-1 font-bold text-[15px] text-gray-600 cursor-pointer"
                        >
                          {label}
                          <svg 
                            className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50 border border-gray-200">
                            {dropdownItems.map((item) => (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#007bff] text-sm font-medium"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : isRoute ? (
                      <Link to={to} className={linkClasses(pathname === to)}>
                        {label}
                      </Link>
                    ) : (
                      <a href={to} className={linkClasses(false)}>
                        {label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto">
                {secondaryLinks.map(({ label, to }) => (
                  <li key={label} className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                    <a href={to} className={linkClasses(false)}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center ml-auto">
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
