// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("home page");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("About Page");
//     res.end();
//   } else {
//     res.write("not found");
//     res.end();
//   }
// });
// const port = 3001;
// server.listen(port, () => {
//   console.log(`server running in port ${port}`);
// });

const express = require("express");
require("dotenv").config();

const todoArr = [
  {
    id: 1,
    task: "Learn Node.js Basics",
    tags: ["Node.js", "Backend", "JavaScript"],
    status: "Pending",
  },
  {
    id: 2,
    task: "Build HTTP Server",
    tags: ["HTTP", "Server", "Node.js"],
    status: "Completed",
  },
  {
    id: 3,
    task: "Practice File System Module",
    tags: ["FS", "Node.js", "Files"],
    status: "In Progress",
  },
  {
    id: 4,
    task: "Learn Express.js",
    tags: ["Express", "Framework", "Backend"],
    status: "Pending",
  },
  {
    id: 5,
    task: "Connect MongoDB",
    tags: ["MongoDB", "Database", "Mongoose"],
    status: "Pending",
  },
  {
    id: 6,
    task: "Create REST API",
    tags: ["API", "REST", "Express"],
    status: "In Progress",
  },
  {
    id: 7,
    task: "Implement JWT Authentication",
    tags: ["JWT", "Security", "Authentication"],
    status: "Pending",
  },
  {
    id: 8,
    task: "Dockerize Application",
    tags: ["Docker", "Deployment", "DevOps"],
    status: "Completed",
  },
  {
    id: 9,
    task: "Write Unit Tests",
    tags: ["Testing", "Jest", "Node.js"],
    status: "Pending",
  },
  {
    id: 10,
    task: "Deploy-to-Render",
    tags: ["Deployment", "Render", "Cloud"],
    status: "Completed",
  },
];

const app = express();

app.use(express.json());

//get all
app.get("/", (req, res) => {
  res.send(todoArr);
});

//get by id
// app.get("/:id", (req, res) => {
//   res.send(req.params.id);
// });

app.get("/:id", (req, res) => {
  const todoId = parseInt(req.params.id);

  const result = todoArr.find((t) => t.id === todoId);

  res.send(result);
});

// get multiple params
app.get("/:id/:status/:task", (req, res) => {
  res.send(req.params.task);
});

app.post("/", (req, res) => {
  const response = req.body;

  if (!response.task) {
    return res.status(400).send({ msg: "required" });
  }

  if (!response.tags) {
    return res.status(400).json({ msg: "required" });
  }

  if (!response.status) {
    return res.status(400).json({ msg: "required" });
  }

  const data = {
    id: todoArr[todoArr.length - 1].id + 1,
    task: response.task,
    tags: response.tags,
    status: response.status,
  };

  todoArr.push(data);
  res.status(201).json(data);
});

app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const todoIndex = todoArr.findIndex((t) => t.id === id);

  const { task, tags, status } = req.body;

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Not Found" });
  }

  if (task) {
    todoArr[todoIndex].task = task;
  }

  if (tags) {
    todoArr[todoIndex].tags = tags;
  }

  if (status) {
    todoArr[todoIndex].status = status;
  }

  res.json("updated");
});

app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const todoIndex = todoArr.findIndex((t) => t.id === id);

  if (todoIndex === -1) {
    return res.json({ message: "Not Found" });
  }

  todoArr.splice(todoIndex, 1);

  return res.json("deleted");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/:status", (req, res) => {
  res.send(req.query);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
