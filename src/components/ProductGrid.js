import React from "react";
import ProductCard from "./ProductCard";
import "../styles/ProductGrid.css";
const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductGrid;
