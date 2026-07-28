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

  const data = todoArr.find((t) => t.id === todoId);

  res.send(data);
});

// get multiple params
app.get("/:id/:status/:task", (req, res) => {
  res.send(req.params.task);
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
