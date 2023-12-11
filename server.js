const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  // password: 'rafael23',
  password: 'root',
  database: 'usuarios'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');
});


// Rotas para manipular dados
app.get('/', (req, res) => { // req => request | res => response
    res.send('Bem-vindo ao meu servidor Node.js!'); // => resposta
  });

// Exemplo de rota para inserir um novo usuário
app.post('/api/usuarios', (req, res) => {
  const { nome, email, senha} = req.body;

  // Verificar se o email já existe no banco de dados
  const checkQuery = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao verificar o email.' });
      return;
    }
    if (results.length > 0) {
      res.status(400).json({ error: 'Este email já está cadastrado.' });
      return;
    }

    // Se o email não existe, realizar a inserção do usuário
    const insertQuery = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.query(insertQuery, [nome, email, senha], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Usuário adicionado com sucesso!' });
      }
    });
  });
});



  app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Verificar as credenciais no banco de dados
    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    db.query(query, [username, password], (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Erro ao verificar as credenciais.' });
        return;
      }

      if (results.length === 1) {
        // Credenciais corretas, pode gerar um token de autenticação aqui
        res.json({ message: 'Login bem-sucedido!' });
      } else {
        // Credenciais incorretas
        res.status(401).json({ error: 'Credenciais inválidas.' });
      }
    });
  });






  // Exemplo de rota para inserir um novo usuário
app.post('/api/funcionarios', (req, res) => {
  const { nome, email, empresa, cnpj, senha} = req.body;

  // Verificar se o email já existe no banco de dados
  const checkQuery = 'SELECT * FROM funcionarios WHERE email = ?';
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao verificar o email.' });
      return;
    }
    if (results.length > 0) {
      res.status(400).json({ error: 'Este email já está cadastrado.' });
      return;
    }

    // Se o email não existe, realizar a inserção do usuário
    const insertQuery = 'INSERT INTO funcionarios (nome, email, empresa, cnpj, senha) VALUES (?, ?, ?, ?, ?)';
    db.query(insertQuery, [nome, email, empresa, cnpj, senha], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: 'Funcionário adicionado com sucesso!' });
      }
    });
  });
});



app.post('/api/loginFuncionario', (req, res) => {
  const { username, password } = req.body;

  // Verificar as credenciais no banco de dados
  const query = 'SELECT * FROM funcionarios WHERE email = ? AND senha = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao verificar as credenciais.' });
      return;
    }

    if (results.length === 1) {
      // Credenciais corretas, pode gerar um token de autenticação aqui
      alert("Login Efetuado, seja bem vindo" + username);
      res.json({ message: 'Login bem-sucedido!' });
    } else {
      // Credenciais incorretas
      res.status(401).json({ error: 'Credenciais inválidas.' });
    }
  });
});















  // app.post('/api/compras', (req, res) => {
  //   const { carrinhoItens } = req.body;

  //   // Mapeia os itens do carrinho para um array de valores
  //   const values = carrinhoItens.map(item => [item.nome, item.salario]);

  //   const insertCompraQuery = 'INSERT INTO compras (produto, preco) VALUES ?';

  //   db.query(insertCompraQuery, [values], (err, result) => {
  //     if (err) {
  //       res.status(500).json({ error: 'Erro ao adicionar o produto no banco de dados.' });
  //     } else {
  //       res.json({ message: 'Produtos adicionados com sucesso!' });
  //     }
  //   });
  // });


// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
