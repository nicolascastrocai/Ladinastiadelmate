import React from "react";

export default function SplashScreen({ isVisible }) {
  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center px-4">
        <div className="animate-fade-in">
          <p className="text-white text-sm sm:text-base tracking-[0.3em] mb-6 font-light">
            EST. 2024
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider mb-4">
            GRACIAS POR CONFIAR
          </h1>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider mb-6">
            EN LA DINASTÍA DEL MATE
          </h2>
          <p className="text-white text-lg sm:text-xl italic font-light tracking-wide">
            un refugio de recuerdos
          </p>
        </div>
      </div>
    </div>
  );
}
