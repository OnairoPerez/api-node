const express = require('express');
const app = express();

//Modulo database
require('./database/connection')

const PORT = 4000

app.get('/api', (req, res) => {
  res.send('API en funcionamiento');
});

app.listen(PORT, () => {
  console.log(`
    -----------------------
    Servidor ejecutandoce
        correctamente

        Puerto: ${PORT}
    -----------------------`
  );
});