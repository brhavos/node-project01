const express = require('express');
const app = express();

// get é para ver uma página no navegador...
// Rota: Listar (nome dado no Insomnia)
// Acesso: http://localhost:8080
app.get('/', (req, res) => {
    res.send("Carlos, seja muito bem vindo!");
});

// Rota: Mostra a página do contato.
// Acesso: http://localhost:8080/contato
app.get('/contato', (req, res) => {
  res.send("Ver Contato");
});


// Rota: /contato2
// Mostrando um contato específico usando um retorno de um objeto complexo
// em json.
// Acesso: http://localhost:8080/contato2
app.get('/contato2', (req, res) => {

  return res.json({
    "nome": "Carlos",
    "email": "brhavos@gmail.com.br" 
  });

});



// Rota: /contato3
// Mostrando um contato com passagem de um parâmetro.
// O retorno será um objeto complexo em json.
// Exemplos de acesso: 
//  http://localhost:8080/contato3/100
//  http://localhost:8080/contato3/14
//  http://localhost:8080/contato3/5
//  http://localhost:8080/contato3/1200
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





// Rota: /contato4
// Executando a API enviando 2 dados:
//  id
//  situação
// O retorno será um objeto complexo em json mostrado pelo GET.
// Exemplos de uso: 
//  http://localhost:8080/contato4/100?situacao=ativo&pessoa=juridica
//  http://localhost:8080/contato4/200?situacao=inativo&pessoa=fisica
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



// --------------------------------------------------

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Servidor iniciado na porta: " + port);
});

