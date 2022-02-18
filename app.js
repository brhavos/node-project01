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


// Rota: Mostrando um contato específico usando um retorno de um objeto compleso
// em json.
// Acesso: http://localhost:8080/contato2
app.get('/contato2', (req, res) => {
  //res.send("Ver Contato");
  return res.json({
    "nome": "Carlos",
    "email": "brhavos@gmail.com.br" 
  })
});






const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Servidor iniciado na porta: " + port);
});

