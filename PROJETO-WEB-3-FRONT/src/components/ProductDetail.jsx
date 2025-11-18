import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './ProductList.css';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState({ name: '', price: 0, stock: 0, image: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = () => {
    axios.get(`/products/${id}`, {
      validateStatus: false,
      headers: { 'Cache-Control': 'no-cache' }
    })
      .then((res) => {
        if (res.status === 200) {
          setProduct(res.data);
          setEditForm(res.data);
          setLoading(false);
        } else {
          setError("Erro ao carregar produto");
          setLoading(false);
        }
      })
      .catch((err) => {
        setError("Erro ao carregar produto: " + err.message);
        setLoading(false);
      });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (!editForm.name.trim()) {
      alert('Nome é obrigatório');
      return;
    }
    if (isNaN(editForm.price) || editForm.price < 0) {
      alert('Preço deve ser um número válido e positivo');
      return;
    }
    if (isNaN(editForm.stock) || editForm.stock < 0 || !Number.isInteger(editForm.stock)) {
      alert('Estoque deve ser um número inteiro válido e não negativo');
      return;
    }
    console.log('Tentando atualizar produto:', id, editForm);
    axios.put(`/products/${id}`, editForm, { validateStatus: false })
      .then((res) => {
        console.log('Resposta do PUT:', res);
        if (res.status === 200) {
          setProduct(editForm);
          setEditing(false);
        } else {
          alert('Erro ao atualizar produto: ' + res.status + ' - ' + (res.data?.error || res.data));
        }
      })
      .catch((err) => {
        console.error('Erro no PUT:', err);
        alert('Erro ao atualizar produto: ' + err.message);
      });
  };

  const handleDelete = () => {
    if (window.confirm('Tem certeza que deseja deletar este produto?')) {
      axios.delete(`/products/${id}`, { validateStatus: false })
        .then((res) => {
          if (res.status === 200 || res.status === 204) {
            navigate('/');
          } else {
            alert('Erro ao deletar produto');
          }
        })
        .catch((err) => {
          alert('Erro ao deletar produto: ' + err.message);
        });
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!product) return <div className="error">Produto não encontrado</div>;

  return (
    <div className="product-detail-page">
      {editing ? (
        <div className="edit-form">
          <h2>Editar Produto</h2>
          <label>Nome: <input type="text" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} /></label>
          <label>Preço: <input type="number" value={editForm.price} onChange={(e) => setEditForm({ ...editForm, price: parseFloat(e.target.value) })} /></label>
          <label>Estoque: <input type="number" value={editForm.stock} onChange={(e) => setEditForm({ ...editForm, stock: parseInt(e.target.value) })} /></label>
          <label>Imagem: <input type="text" value={editForm.image} onChange={(e) => setEditForm({ ...editForm, image: e.target.value })} /></label>
          <div className="button-group">
            <button onClick={handleSave}>Salvar</button>
            <button onClick={() => setEditing(false)}>Cancelar</button>
          </div>
        </div>
      ) : (
        <div className="product-detail">
          <img src={product.image} alt={product.name} className="detail-image" />
          <div className="detail-info">
            <h2>{product.name}</h2>
            <p>ID: {product._id}</p>
            <p>Preço: R$ {product.price}</p>
            <p>Estoque: {product.stock}</p>
          </div>
          <div className="detail-actions">
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Excluir</button>
            <button onClick={handleBack}>Voltar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;