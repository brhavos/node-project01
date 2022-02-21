// CONSTANTES:
const express = require('express');
const res = require('express/lib/response');
const app = express();

// PREPARANDO A APLICAÇÃO PARA RECEBER DADOS (REQUESTS) NO FORMATO "JSON":
app.use(express.json());





// -----------------------------------------------------------
// ROTA "RAIZ"
// Exemplos:
//  Localhost:
//    Acesso: http://localhost:8080
//  Heroku:
//    https://node-project01-chc.herokuapp.com/

app.get('/', (req, res) => {
    res.send("Carlos, seja muito bem vindo!");
});

// -----------------------------------------------------------
// ROTA "CONTATO"
// Finalidade: Mostra a página do contato.
// Exemplos:
//  Localhost:
//    http://localhost:8080/contato
//  Heroku:
//    https://node-project01-chc.herokuapp.com/contato

app.get('/contato', (req, res) => {
  res.send("Ver Contato");
});

// -----------------------------------------------------------
// Rota: "contato2"
// Mostrando 1 contato específico usando um retorno de um obj complexo
// em json.
// Exemplos:
//  Localhost:
//    http://localhost:8080/contato2
//  Heroku:
//  https://node-project01-chc.herokuapp.com/contato2

app.get('/contato2', (req, res) => {

  return res.json({
    "nome": "Carlos",
    "email": "brhavos@gmail.com.br" 
  });

});

// -----------------------------------------------------------
// Rota: "/contato3"
// Mostrando um contato com passagem de um parâmetro.
// O retorno será um objeto complexo em json.
// Exemplos de acesso: 
// Localhost:
//  http://localhost:8080/contato3/100
//  http://localhost:8080/contato3/14
//  http://localhost:8080/contato3/5
//  http://localhost:8080/contato3/1200
// Heroku:
//  https://node-project01-chc.herokuapp.com/contato3/123
//  etc.

app.get("/contato3/:id", (req, res) => {

  // Atribuindo o "id" fornecido como parâmetro numa constante.
  const c_id = req.params.id;

  return res.json({
    id: c_id,
    nome: "Carlos",
    email: "brhavos@gmail.com.br" 
  });

});

// -----------------------------------------------------------
// Rota: /contato4
// Executando a API enviando 2 dados:
//  -> id
//  -> situação
// O retorno será um objeto complexo em json mostrado pelo GET.
// Exemplos de uso: 
// Localhost:
//  http://localhost:8080/contato4/100?situacao=ativo&pessoa=juridica
//  http://localhost:8080/contato4/200?situacao=inativo&pessoa=fisica
// Heroku:
//  https://node-project01-chc.herokuapp.com/contato4/100?situacao=ativo
//  https://node-project01-chc.herokuapp.com/contato4/200?situacao=inativo
//  etc.

app.get("/contato4/:id", (req, res) => {

  // Pegando o "id", via params...
  const c_id = req.params.id;
  // Pegando a "situação", via query...
  const c_situacao = req.query.situacao;
  const c_pessoa = req.query.pessoa;

  return res.json({
    id: c_id,
    nome: "Carlos",
    email: "brhavos@gmail.com.br",
    situacao: c_situacao,
    pessoa: c_pessoa
  });

});

// -----------------------------------------------------------
// Rota/POST: /cadastrar
// Finalidade: Cadastrar um contato
//  - Recebe um objeto json como requisição;
//  - Retorna um objeto json como response.
// Exemplos de uso: 
//  Testar apenas no Insomnia.
/*  Exemplo de requisição:
      {
	      "nome": "Carlos Henrique",
	      "email": "brhavos@gmail.com"
      }
*/

app.post("/cadastrar", (req, res) => {
  // Dados da requisição ("req"):
  var { nome } = req.body;
  var { email } = req.body;

  // Dados do retorno ("res"):
  return res.json({
    nome,
    email
  });

});





// --------------------------------------------------
// INICIALIZAÇÃO DO SERVIDOR
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Servidor iniciado na porta: " + port);
});