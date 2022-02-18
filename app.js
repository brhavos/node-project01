const express = require('express');
const app = express();

// get é para ver uma página no navegador...
// Rota:
// Nome: Listar
// Acesso: http://localhost:8080
app.get('/', (req, res) => {
    res.send("Carlos, seja muito bem vindo!");
});



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Servidor iniciado na porta: " + port);
});

