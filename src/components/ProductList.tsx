import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductItem from './ProductItem';
import './css/ProductList.css';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
