var express = require("express");
var app = express();
// 1. initialize `express` and configure it to listen on a given port number from env variables or in a `8080` port.
const PORT = 8000

app.use(express.json())

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


/* get all */
app.get("/api/tasks", (req, res) => {
  res.status(200).json(TASKS)
})

/* get one */
app.get("/api/tasks/:id", (req, res) => {
  try {

    const {id} = req.params
    const task = TASKS.find(element => element.id === +id)

    if (!task) {
      res.status(404).json({message: "task not found"})
      return
    }
    res.status(200).json(task)
  } catch(e){
    res.status(500).json({error: e})
  }
})

/* create one */
app.post("/api/tasks", (req, res) => {
  const {todo} = req.body;

  if (!todo) {
    res.status(422).json({message: "todo is required"})
    return
  }

  TASKS.push({
    id: Math.floor(Math.random()*100),
    todo,
  })

  res.status(201).json({message: "task created successfully", tasks: TASKS})
})

/* update */
app.put("/api/tasks/:id", (req, res) => {
  const {id} = req.params
  let currentTask = TASKS.find(element => element.id === +id)
  const todo = req.body

  if (!currentTask) {
    res.status(404).json({message: "task not found"})
    return
  }

  if (!todo) {
    res.status(422).json({message: "todo is required"})
    return
  }

  //updatedTask = { ...currentTask.todo = todo.todo}// incorrecta por doble asignacion
  currentTask.todo = todo.todo
  res.status(200).json({message: "task updated successfully", tasks: TASKS})
})

//server
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
}); //the server object listens on port 8080
