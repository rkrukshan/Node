const http = require("http");

const server = http.createServer((req, res) => {
  res.write("server is started");
  res.end();
});

const port = 5173;

server.listen(port, () => {
  console.log(`server is running on ${port}`);
});
