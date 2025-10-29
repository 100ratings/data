const imagens = [
  "img/01.PNG",
  "img/02.PNG",
  "img/03.PNG"
];

// Começa com o índice da imagem que já está no HTML
let indiceAtual = 0;

// Referência ao elemento <img>
const img = document.getElementById("screenshot");

// Troca para a próxima imagem ao clicar ou tocar
function mostrarProximaImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  img.src = imagens[indiceAtual];
}

// Eventos de clique e toque
document.addEventListener("click", mostrarProximaImagem);
document.addEventListener("touchstart", mostrarProximaImagem);
