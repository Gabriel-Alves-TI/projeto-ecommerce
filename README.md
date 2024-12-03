# Projeto E-commerce

Este é um projeto de e-commerce desenvolvido para gerenciar produtos e pedidos. Ele inclui funcionalidades básicas para operações CRUD, integração com banco de dados utilizando o ORM Sequelize.

## 📋 Funcionalidades

- Gerenciamento de produtos:
  - Buscar
  - Cadastrar
  - Editar
  - Excluir
- Gerenciamento de pedidos:
  - Buscar
  - Cadastrar
  - Editar (produto, quantidade)
  - Excluir
- Gerenciamento de Usuários:
  - Buscar
  - Cadastrar
  - Login
- Integração com banco de dados MySQL usando Sequelize.

## 🛠️ Tecnologias Utilizadas

### Back-end
- **Node.js** com **Express**
- **Sequelize** (ORM)
- **MySQL** (banco de dados)

## ⚙️ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

## 📂 Estrutura do Projeto

```plaintest
projeto-ecommerce/
├── backend/
│   ├── models/            # Definições dos models Sequelize
│   ├── controllers/       # Controladores das rotas
│   └── routes/            # Definição das rotas da API
├── package.json           # Dependências do projeto
├── server.js              # Executar projeto
└── README.md              # Documentação do projeto
```

## 🚀 Como Rodar o Projeto

### 1. **Clone o Repositório**

```
    git clone https://github.com/Gabriel-Alves-TI/projeto-ecommerce.git
    cd projeto-ecommerce
```

### 2. **Configure o Banco de dados**

```
    const sequelize = new Sequelize('ecommerce', 'usuario', 'senha', { 
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306
    })
```
### 3. **Instale as Dependências**
No diretório principal, instale as dependências do back-end:
```
    npm install
```
Após instalar as dependências do projeto, rode o comando:
```
    node server.js
```
<!--
### 4. **Acesse a documentação do projeto**
O link do Swagger está disponível em:
```
    https://swagger.com.br
```
-->