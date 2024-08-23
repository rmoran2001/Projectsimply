const express = require('express');

const app = express(); // Corrección de 'expres' a 'express'

app.get('/', (req, res) => res.send('<h1>Hola mundo con expres y HTML</h1>')); // Corrección de paréntesis adicional y formato

app.listen(3000, () => {
  console.log('Server on port 3000'); // Mover el console.log dentro del callback para confirmar que el servidor se ha iniciado correctamente
});
