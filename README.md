# 🧩 MtvDelivery – API de Integração

Este projeto é a **API backend** do sistema **MtvDelivery**, responsável por gerenciar produtos, clientes e pedidos realizados no aplicativo. Desenvolvido com **Node.js**, **Express**, **Sequelize** e **PostgreSQL**.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- Sequelize CLI
- Dotenv
- Nodemon (dev)

---

## 📁 Estrutura do Projeto

```
mtvdelivery-integracao/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── app.js
├── migrations/
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Configuração do Ambiente

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/mtvdelivery-integracao.git
cd mtvdelivery-integracao
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` com o seguinte conteúdo:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=************
DB_NAME=************
```

### 4. Criar o banco no PostgreSQL

Acesse o **PgAdmin** ou terminal e crie um banco com o nome definido no `.env`.

---

## 🛠️ Executando o Projeto

### Em desenvolvimento (com nodemon)

```bash
npm run dev
```

### Em produção (sem nodemon)

```bash
npm start
```

---

## 🔄 Rodando as Migrations

```bash
npx sequelize-cli db:migrate
```

> Se necessário, use `npx sequelize-cli db:migrate:undo:all` para resetar

---

## 📮 Endpoints Principais

| Método | Rota                      | Descrição                         |
|--------|---------------------------|-----------------------------------|
| POST   | `/produtos`               | Cadastrar produto                 |
| GET    | `/produtos`               | Listar produtos                   |
| PATCH  | `/produtos/:id/inativar`  | Inativar produto                  |
| PATCH  | `/produtos/:id/ativar`    | Reativar produto                  |
| POST   | `/clientes`               | Cadastrar cliente                 |
| GET    | `/clientes`               | Listar clientes                   |
| POST   | `/pedidos`                | Criar pedido com itens            |
| GET    | `/pedidos/cliente/:id`    | Listar pedidos de um cliente      |
| PATCH  | `/pedidos/:id/status`     | Atualizar status do pedido        |
| GET    | `/pedidos/:id`            | Buscar pedido completo por ID     |

---

## ✅ Status do Projeto

✅ Cadastrar produtos, clientes e pedidos  
✅ Atualizar status do pedido  
✅ Inativar e reativar produtos  
✅ Listagem detalhada de pedidos

---

## 📌 Autor

Desenvolvido por **Cristian Cauê Faria Cruvinel**

---
