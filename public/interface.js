const socket = io();
const botaoEnviar = document.getElementById("enviar");
const elementoTexto = document.getElementById("texto");
const chat = document.getElementById("mensagens");

socket.addEventListener("nova mensagem", (msg) => {
  const mensagem = document.createElement("li");
  mensagem.textContent = msg;
  mensagem.classList.add("mensagem");
  chat.appendChild(mensagem);
});

botaoEnviar.addEventListener("click", () => {
  const mensagemAEnviar = elementoTexto.value;
  socket.emit("nova mensagem", mensagemAEnviar);
  elementoTexto.value = "";
});