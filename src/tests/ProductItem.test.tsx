
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartProvider } from '../contexts/CartContext';
import ProductItem from '../components/ProductItem';

const product = {
  id: 1,
  title: 'Product 1',
  price: 100,
  image: 'image.png'
};

describe('ProductItem', () => {
  it('renders product details and adds to cart', () => {
    render(
      <CartProvider>
        <ProductItem product={product} />
      </CartProvider>
    );

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByAltText('Product 1')).toBeInTheDocument();

    const addToCartButton = screen.getByText('+');
    userEvent.click(addToCartButton);
  });
});
