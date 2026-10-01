const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/plain; charset=utf-8");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Bem-vindo à minha aplicação Node.js!");
  } else if (req.url === "/sobre") {
    res.statusCode = 200;
    res.end("Esta é a página sobre a aplicação.");
  } else if (req.url === "/alunos") {
    res.statusCode = 200;
    res.end("Lista de alunos da turma.");
  } else if (req.url === "/contato") {
    res.statusCode = 200;
    res.end("Entre em contato conosco.");
  } else {
    res.statusCode = 404;
    res.end("ERRO 404: página não encontrada.");
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
