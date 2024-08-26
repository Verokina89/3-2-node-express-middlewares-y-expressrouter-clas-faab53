const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(
    '<h1>HOME</h1><a href="/abut">About</a> <a href="/abut">Contact</a>'
  );
});

router.get('/aboud', (req, res) => {
  res.send('<h1>About</h1>');
});

router.use((req, res) => {
  rest.status(400).send('<h1> Página no encontrada. ¡ERROR 404!');
});

module.exports = router; //exportar rutas.
