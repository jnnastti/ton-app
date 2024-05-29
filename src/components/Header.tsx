import React from 'react';
import { useCart } from '../contexts/CartContext';

import './css/Header.css';
import { Link } from 'react-router-dom'; 

const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <header className="header">
      <h1>Ton Store</h1>
      <Link to="/cart" className="cart-button"> {/* Utiliza o Link para navegar para a página do carrinho */}
        Cart ({cart.length})
      </Link>
    </header>
  );
};

export default Header;
