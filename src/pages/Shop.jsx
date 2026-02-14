import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      { id: 1, name: "Producto 1", price: 1200, image:"/img/prod1.jpg"},
      { id: 2, name: "Producto 2", price: 850, image:"/img/prod2.jpg"},
      { id: 3, name: "Producto 3", price: 1500, image:"/img/prod3.jpg"},
      { id: 4, name: "Producto 4", price: 1900, image:"/img/prod4.jpg"},
    ]);
  }, []);

  return (
    <main className="shop-page">
      <h2>Tienda</h2>
      <ProductList products={products} />
    </main>
  );
}
