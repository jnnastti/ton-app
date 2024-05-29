import React from 'react';
import Cart from '../components/Cart';
import { Link } from 'react-router-dom'; 

const CartPage: React.FC = () => {
  return (
    <div className="cart-page">
      <Link to="/" className="back-button">Voltar</Link>
      <h1>Carrinho</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
