import React from "react";

export default function Categories({ items }) {
  return (
    <div className="categories">
      {items.map((cat, i) => (
        <div className="category" key={i}>
          {cat}
        </div>
      ))}
    </div>
  );
}
