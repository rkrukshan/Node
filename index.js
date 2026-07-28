const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("it's home page");
  } else if (req.url === "/about") {
    res.write("it's about page");
  } else {
    res.write("page not found");
  }
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
