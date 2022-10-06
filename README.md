# entrevista backend

## preguntas
- que es un middleware
- que son los parametros de una ruta y como leerlos
- como se referencia entre esquemas
- como se llama de un esquema/modelo anidado
- que es un ODM

## ejercicio
const express = require("express");
const app = express();
// 1. initialize `express` and configure it to listen on a given port number from env variables or in a `8080` port.
// const PORT = ....

let TASKS = [
  {
    id: 21,
    todo: "task1"
  },
  {
    id: 22,
    todo: "task2"
  },
  {
    id: 31,
    todo: "task3"
  }
];

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
}); //the server object listens on port 8080
