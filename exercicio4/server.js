const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method);
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Servidor Node.js funcionando!\nMétodo utilizado: " + req.method);
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
