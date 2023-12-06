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




// Rota para salvar os itens do carrinho no banco de dados
app.post('/api/itens', (req, res) => {
  const carrinhoItens = req.body.itens; // Supondo que os itens estão no formato { nome: string, preco: number }

  // Verificar se há itens para salvar
  if (!carrinhoItens || carrinhoItens.length === 0) {
    res.status(400).json({ error: 'Nenhum item no carrinho para salvar.' });
    return;
  }

  // Mapear os itens para o formato que será inserido no banco de dados
  const valoresItens = carrinhoItens.map(item => [item.nome, item.preco]);

  // Consulta para inserir os itens do carrinho na tabela correspondente
  const insertQuery = 'INSERT INTO itens_carrinho (nome, preco) VALUES ?';

  // Executar a consulta no banco de dados
  db.query(insertQuery, [valoresItens], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Erro ao salvar itens do carrinho no banco de dados.' });
    } else {
      res.json({ message: 'Itens do carrinho salvos com sucesso no banco de dados!' });
    }
  });
});







// Inicie o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
