import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './ProductList.css';

function CreateProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', price: '', stock: '', image: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.stock) {
      setError('Nome, preço e estoque são obrigatórios');
      return;
    }
    setLoading(true);
    setError(null);

    axios.post('/products', {
      name: form.name,
      price: parseFloat(form.price),
      stock: parseInt(form.stock),
      image: form.image || ''
    }, { validateStatus: false })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          alert('Produto criado com sucesso!');
          navigate('/');
        } else {
          setError('Erro ao criar produto: ' + res.status);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao criar produto: ' + err.message);
        setLoading(false);
      });
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="create-product-page">
      <div className="create-form">
        <h2>Criar Novo Produto</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              step="0.01"
              required
            />
          </label>
          <label>
            Estoque:
            <input
              type="number"
              name="stock"
              value={form.stock}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Imagem (URL):
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </label>
          <div className="button-group">
            <button type="submit" disabled={loading}>
              {loading ? 'Criando...' : 'Criar Produto'}
            </button>
            <button type="button" onClick={handleBack}>Voltar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;