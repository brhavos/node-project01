const express = require('express');
const app = express();

// get é para ver uma página no navegador...
app.get('/', (req, res) => {
    res.send("Carlos, Seja muito bem vindo!");
});



const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Servidor iniciado na porta: " + port);
});

