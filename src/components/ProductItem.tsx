// src/components/ProductItem.tsx

import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './css/ProductItem.css';

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity }); // Pass the updated quantity value to addToCart 
  };

  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      
      <div>
      <input
        type="number"
        value={quantity}
        onChange={handleQuantityChange}
        className="product-quantity-input"
        min={1}
      />
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        +
      </button>
      </div>
    </div>
  );
};

export default ProductItem;
