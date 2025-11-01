import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2 className="title">{product.title}</h2>
        <p className="price">${product.price}</p>
        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
