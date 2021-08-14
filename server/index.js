// Express es una librería que facilita el
// routing basado en la request URL
const express = require("express"); // require es una forma de importar código node_modules folder - está sintaxis es propia de node js

// ignorar el process.env.PORT por ahora
// el port será entonces igual a 1337
const port = process.env.PORT || 1337;

// Executa el paquete express y asignalo a app
// app será el web server
const app = express();

// cuando el usuario haga un GET request a http://localhost:1337/hello
// ejecuta la función (segundo argumento)
// res => response object
// req => request object
// también existe app.post, app.delete o app.put
app.get("/hello", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Response Header (metadata)

  // Preparamos un objeto que será devuelto
  const responsePayloadObject = {
    message: "Hello",
  };

  // res.json parseará el objeto a formato JSON
  // y devolverá ese JSON al client con más
  // metadata
  res.json(responsePayloadObject);
});

// GET request a http://localhost:1337/good-morning
app.get("/good-morning", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Response Header (metadata)

  const responsePayloadObject = {
    message: "Good Morning",
  };

  res.json(responsePayloadObject);
});

// GET request a http://localhost:1337/whats-up
app.get("/whats-up", function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Response Header (metadata)

  const responsePayloadObject = {
    message: "Whats up",
  };

  res.json(responsePayloadObject);
});

// Corre el servidor y cuando pase, ejecuta la función
// El servidor se quedará "escuchando" permanentemente
app.listen(port, () => console.log("Server listening on port " + port));
