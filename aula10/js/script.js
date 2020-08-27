var botao = document.getElementById("area");

botao.addEventListener("click", clicar);
botao.addEventListener("mouseenter", entrar);
botao.addEventListener("mouseout", sair);

function clicar() {
  botao.innerText = "Clicou";
  botao.style.background = "red";
}

function entrar() {
  botao.innerText = "Enter";
}

function sair() {
  botao.innerText = "Out";
  botao.style.background = "#04B404";
}