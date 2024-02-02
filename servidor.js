const funcionalidadesIO = require("socket.io");
const http = require("http");
const express = require("express");
const app = express();

const servidorHttp = http.createServer(app);
const io = funcionalidadesIO(servidorHttp);

app.use(express.static("public"));

/*function alguemEntrouNaSala() {
  console.log("Alguém entrou na sala");
}*/

function comportamentoSocket(socket) {
  socket.addListener("nova mensagem", (msg) => {
    io.emit("nova mensagem", msg);
  });
}
io.addListener("connection", comportamentoSocket);

servidorHttp.listen(3000);