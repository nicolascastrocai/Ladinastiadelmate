import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Mates from "./pages/Mates";
import LlaveroAzucarero from "./pages/LlaveroAzucarero";
import Termos from "./pages/Termos";
import Bombilla from "./pages/Bombilla";
import VasoFernetero from "./pages/VasoFernetero";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen isVisible={showSplash} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Shop />} />
          <Route path="/mates" element={<Mates />} />
          <Route path="/llavero-azucarero" element={<LlaveroAzucarero />} />
          <Route path="/termos" element={<Termos />} />
          <Route path="/bombilla" element={<Bombilla />} />
          <Route path="/vaso-fernetero" element={<VasoFernetero />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
