const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Server is Responded");
  res.end();
});

const port = 3001;

server.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
