import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/CartSlice';
import Navbar from './Navbar';

const products = {
  'Indoor Plants': [
    { id: 1, name: 'Snake Plant', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Spider Plant', price: 15, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Peace Lily', price: 25, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Pothos', price: 18, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Fiddle Leaf Fig', price: 50, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Monstera', price: 40, image: 'https://via.placeholder.com/150' },
  ],
  'Outdoor Plants': [
    { id: 7, name: 'Rose Bush', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Lavender', price: 12, image: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Sunflower', price: 10, image: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Hydrangea', price: 35, image: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Tulip', price: 8, image: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Daisy', price: 5, image: 'https://via.placeholder.com/150' },
  ],
  'Succulents': [
    { id: 13, name: 'Aloe Vera', price: 15, image: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Jade Plant', price: 20, image: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Echeveria', price: 18, image: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Sedum', price: 12, image: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Haworthia', price: 14, image: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Crassula', price: 16, image: 'https://via.placeholder.com/150' },
  ],
};

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Indoor Plants');
  const [added, setAdded] = useState({});
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAdded(prev => ({ ...prev, [product.id]: true }));
  };

  return (
    <div>
      <Navbar />
      <h1>Products</h1>
      <div>
        {Object.keys(products).map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products[selectedCategory].map(product => (
          <div key={product.id} style={{ margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleAddToCart(product)} disabled={added[product.id]}>
              {added[product.id] ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;