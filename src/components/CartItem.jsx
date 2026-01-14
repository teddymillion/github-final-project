import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../features/cart/CartSlice';

const CartItem = ({ setView }) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.items.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center', margin: '10px', border: '1px solid #ccc', padding: '10px' }}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              <div style={{ marginLeft: '10px' }}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div>
                  <button onClick={() => handleDecrease(item.id, item.quantity)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(item.id, item.quantity)}>+</button>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
                <p>Total: ${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <h2>Total: ${cart.total}</h2>
          <button onClick={() => alert('Coming Soon')}>Checkout</button>
          <button onClick={() => setView('products')}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
};

export default CartItem;