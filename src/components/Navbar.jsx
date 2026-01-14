import { useSelector } from 'react-redux';

const Navbar = ({ setView }) => {
  const cartCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <button onClick={() => setView('landing')}>Home</button>
      <button onClick={() => setView('about')}>About</button>
      <button onClick={() => setView('products')}>Products</button>
      <button onClick={() => setView('cart')}>Cart ({cartCount})</button>
    </nav>
  );
};

export default Navbar;