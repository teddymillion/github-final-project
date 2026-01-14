import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '10px', backgroundColor: '#f0f0f0' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart ({cartCount})</Link>
    </nav>
  );
};

export default Navbar;