// Métodos HTTP:
// GET =  Busca uma infomação Ex: buscar ou listar usuários.
// POST = Criar alguma informação. Ex: Criar um usuário, criar um produto.
// PUT = Editar um usuário ou um recusrso .
// DELETE = Deletar algum recurso.

// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro )

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
mongoose.connect("mongodb+srv://gustavo:gustavo@cluster0-31uzh.mongodb.net/week10?retryWrites=true&w=majority",  { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
