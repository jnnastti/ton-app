import React from 'react';
import { useCart } from '../contexts/CartContext';
// import './css/Cart.css';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }
  
const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  // Função para calcular o total por produto
  const calculateProductTotal = (product: Product) => {
    return product.price * product.quantity;
  };

  // Calcula o total geral do carrinho
  const cartTotal = cart.reduce((total, product) => {
    return total + calculateProductTotal(product);
  }, 0);

  return (
    <div className="cart">
      {cart.map((product) => (
        <div key={product.id} className="cart-item">
          <img
            src={product.image}
            alt={product.title}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h2>{product.title}</h2>
            <p>${product.price} x {product.quantity}</p>
            <p>Total: ${calculateProductTotal(product)}</p>
            <button className="remove-from-cart-button" onClick={() => removeFromCart(product.id)}>
            Remove
          </button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <h2>Total do Carrinho: ${cartTotal}</h2>
      </div>
    </div>
  );
};

export default Cart;