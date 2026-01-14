import './App.css';
import { useState } from 'react';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import Navbar from './components/Navbar';

function App() {
  const [view, setView] = useState('landing');

  const handleGetStarted = () => setView('products');

  return (
    <div>
      <Navbar setView={setView} />
      {view === 'landing' && (
        <div className="App">
          <h1>Paradise Nursery</h1>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      )}
      {view === 'about' && <AboutUs />}
      {view === 'products' && <ProductList />}
      {view === 'cart' && <CartItem setView={setView} />}
    </div>
  );
}

export default App;
