---
# Sistema de Cadastro de Produtos

## 📝 Sobre o projeto
Este projeto é uma aplicação web para **cadastro e gerenciamento de produtos**, composta por:
- **Frontend** em HTML, CSS e JavaScript para interação com o usuário  
- **Backend** em Node.js + Express, com banco de dados SQLite para persistência  

O sistema permite adicionar, listar, atualizar e excluir produtos de forma simples e prática.
---

## 🛠️ Tecnologias utilizadas
- **Frontend:** HTML5, CSS3, JavaScript (ES6)  
- **Backend:** Node.js, Express.js  
- **Banco de Dados:** SQLite3  
- **Outros:** CORS para integração entre frontend e backend  

---

## ⚙️ Funcionalidades
- Cadastro de produtos com:
  - Nome  
  - Preço  
  - Quantidade  
- Listagem de todos os produtos cadastrados  
- Atualização da quantidade de um produto específico  
- Exclusão de produtos  
- API REST com rotas para integração  

---

## 📂 Estrutura do projeto
```
/backend
  /node_modules
  meubanco.db
  package-lock.json
  package.json
  server.js
/css
  style.css
/js
  scriptLista.js
  scriptPrincipal.js
index.html
README.md
```

---

## ▶️ Como executar

### 🔹 Backend
1. Instale as dependências:
   ```bash
   npm install express cors sqlite3
   ```
2. Inicie o servidor:
   ```bash
   node server.js
   ```
3. O servidor estará rodando em:
   ```
   http://localhost:2026
   ```

### 🔹 Frontend
1. Abra o arquivo `index.html` em seu navegador  
2. Certifique-se de que o servidor está rodando para que o frontend consiga se comunicar com a API  

---

## 🔗 Rotas da API
- `GET /` → Teste da raiz do servidor  
- `POST /produtos` → Cadastrar novo produto  
- `GET /produtos` → Listar todos os produtos  
- `PUT /produtos/:id/quantidade` → Atualizar quantidade de um produto  
- `DELETE /produtos/:id` → Excluir produto  

---
