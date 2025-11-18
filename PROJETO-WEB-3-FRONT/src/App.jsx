
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CreateProduct from './components/CreateProduct';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <h1>Produtos</h1>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/create" element={<CreateProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
