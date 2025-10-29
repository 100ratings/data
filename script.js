// Lista das imagens na ordem
const imagens = [
  "img/01.PNG",
  "img/02.PNG",
  "img/03.PNG"
];

// Começa pela primeira imagem
let indiceAtual = 0;

// Referência ao elemento <img>
const img = document.getElementById("screenshot");

// Função que troca para a próxima imagem
function mostrarProximaImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  img.src = imagens[indiceAtual];
}

// Evento de clique ou toque
document.addEventListener("click", mostrarProximaImagem);
document.addEventListener("touchstart", mostrarProximaImagem);
