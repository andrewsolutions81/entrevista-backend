const express = require("express");
const app = express();
// 1. initialize `express` and configure it to listen on a given port number from env variables or in a `8080` port.
const PORT = 8082

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

// task mvc modelo

app.get("/task", (req, res) => {res.send(TASKS)})

app.get("/task/:id", (req, res) => {
  const { id } = req.params
  const found = TASKS.find(item => parseInt(item.id) === parseInt(id));
  res.status(200).json({ task: found })
  return
  if(!found){ res.status(404).json({ message: `task not found `}) }
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
}); //the server object listens on port 8080

