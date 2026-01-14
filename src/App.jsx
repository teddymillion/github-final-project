import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="App">
          <Navbar />
          <h1>Paradise Nursery</h1>
          <Link to="/products"><button>Get Started</button></Link>
        </div>
      } />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;
