import express from "express";

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
  res.send("Bem-vindo à Central de Informações da Escola!");
});


app.get('/status', (req, res) => {
  res.json({
    status: 'online',
    mensagem: 'O servidor está funcionando corretamente.'
  });
});


app.get('/escola', (req, res) => {
  res.json({
    nome: 'Escola Técnica Horizonte',
    cidade: 'São Paulo',
    tipo: 'Ensino Técnico'
  });
});


app.get('/cursos', (req, res) => {
  const cursos = [
    { id: 1, nome: 'Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Redes de Computadores' },
    { id: 3, nome: 'Administração' }
  ];

  res.json(cursos);
});

app.get('/professor', (req, res) => {
  res.json({
    nome: 'Carlos Oliveira',
    disciplina: 'Programação Back-End'
  });
});


app.get('/ajuda', (req, res) => {
  res.send(
    'Rotas disponíveis:\n' +
    '/ - Página inicial e boas-vindas.\n' +
    '/status - Verifica se o servidor está online.\n' +
    '/escola - Exibe informações da instituição.\n' +
    '/cursos - Lista os cursos disponíveis.\n' +
    '/professor - Exibe informações do professor.\n' +
    '/ajuda - Apresenta esta lista de orientações.\n' +
    '/requisicao - Exibe dados da requisição recebida.'
  );
});



app.get('/requisicao', (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: 'Requisição recebida com sucesso.'
  });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});