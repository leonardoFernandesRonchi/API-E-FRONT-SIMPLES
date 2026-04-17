# 🛒 API e Front Simples

![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-Framework-black?logo=express)
![React](https://img.shields.io/badge/React-Frontend-blue?logo=react)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/github/license/leonardoFernandesRonchi/API-E-FRONT-SIMPLES)

---

## 📖 Visão Geral

O **API-E-FRONT-SIMPLES** é um projeto fullstack que combina:

* 🟢 **Backend em Node.js + Express (API REST)**
* 🔵 **Frontend em React**

A aplicação demonstra a integração entre frontend e backend utilizando operações CRUD para gerenciamento de produtos.

---

## 🌐 Acesso

* 🔗 **Frontend:** http://localhost:3000
* 🔗 **Backend (API):** http://localhost:3001 *(ou porta definida no server.js)*

---

## 🛠️ Tecnologias Utilizadas

### ⚙️ Backend

* Node.js
* Express

### 🎨 Frontend

* React
* JavaScript
* HTML + CSS

### 🗄️ Banco de Dados

* Em memória (padrão)
* Adaptável para:

  * MongoDB
  * MySQL

### 🧰 Ferramentas

* NPM
* Nodemon

---

## 📂 Estrutura do Projeto

```bash id="u2p7fx"
PROJETO-WEB-3/         # Backend (Node.js + Express)
PROJETO-WEB-3-FRONT/   # Frontend (React)

# Backend
PROJETO-WEB-3/
 ├── controllers/
 ├── routes/
 ├── server.js
 └── package.json

# Frontend
PROJETO-WEB-3-FRONT/
 ├── src/
 ├── public/
 └── package.json
```

---

## 🚀 Instalação e Execução

## 🔹 1. Clonar repositório

```bash id="c7k2mn"
git clone https://github.com/leonardoFernandesRonchi/API-E-FRONT-SIMPLES.git
cd API-E-FRONT-SIMPLES
```

---

## 🔹 2. Backend (Node.js)

```bash id="h3q9zs"
cd PROJETO-WEB-3
npm install
```

### Rodar servidor

```bash id="k8m2pd"
npm run dev
```

ou

```bash id="z4x1rt"
npm start
```

---

## 🔹 3. Frontend (React)

```bash id="r9v2lx"
cd ../PROJETO-WEB-3-FRONT
npm install
npm run dev
```

---

## ⚠️ Importante

Você precisa rodar **os dois ao mesmo tempo**:

* Backend → Node (porta 3001 ou definida)
* Frontend → React (porta 3000)

---

## 📖 Guia de Rotas da API

### 📦 Produtos

| Método | Rota          | Descrição       |
| ------ | ------------- | --------------- |
| POST   | /products     | Criar produto   |
| GET    | /products     | Listar produtos |
| GET    | /products/:id | Obter produto   |
| PUT    | /products/:id | Atualizar       |
| DELETE | /products/:id | Excluir         |

---

## 🧪 Testes

Você pode testar os endpoints com:

* Postman
* Insomnia

### 📌 Exemplo

```json id="j8k2xs"
POST /products
{
  "name": "Pão Francês",
  "price": 0.50
}
```

---

## 📈 Melhorias Futuras

* 🗄️ Integração com banco de dados real
* 🔐 Autenticação (JWT)
* 🛒 Carrinho de compras
* 📊 Dashboard
* 🌐 Deploy fullstack

---


## 👨‍💻 Autor

**Leonardo Fernandes**
🔗 https://github.com/leonardoFernandesRonchi

