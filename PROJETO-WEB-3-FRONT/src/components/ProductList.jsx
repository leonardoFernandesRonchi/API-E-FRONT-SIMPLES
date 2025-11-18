import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ProductList.css';

function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('/products', {
      validateStatus: false,
      headers: { 'Cache-Control': 'no-cache' }
    })
      .then((res) => {
        if (res.status === 200) {
          if (typeof res.data === 'string') {
            setError('Resposta inválida da API: recebeu HTML em vez de JSON');
            setLoading(false);
            return;
          }
          const data = Array.isArray(res.data) ? res.data : (res.data.products || res.data.data || []);
          if (Array.isArray(data)) {
            setProducts(data);
            setLoading(false);
          } else {
            setError('Resposta inválida da API: dados não são um array');
            setLoading(false);
          }
        } else {
          setError("Erro ao carregar produtos: Status " + res.status);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError('Erro ao carregar produtos: ' + err.message);
        setLoading(false);
      });
  };

  const handleSelect = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-container">
      <button className="create-btn" onClick={() => navigate('/create')}>Criar Produto</button>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <h3>{product.name}</h3>
            <p>R$ {product.price}</p>
            <button onClick={() => handleSelect(product._id)}>Ver</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
