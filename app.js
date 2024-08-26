const express = require('express');
const app = express();
const PORT = 3000;

const mainRoutes = require('./routes/mainRoutes'); //requerimos las ruta.

//accedemos a las ruta.
app.use('/', mainRoutes); //dsde dnde inicia "a partir de la raiz"

app.listen(PORT, () => {
  console.log('El SERVIDOR está escuchando en el puerto 3000.');
});
