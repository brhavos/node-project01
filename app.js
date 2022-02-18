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
// Mostrando um contato específico usando um retorno de um objeto complexo
// em json e com passagem de um parâmetro.
// No exemplo vamos supor que o "id" da pessoa é o "100".
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



// --------------------------------------------------

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Servidor iniciado na porta: " + port);
});

