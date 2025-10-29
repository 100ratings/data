const imagens = [
  "img/01.PNG",
  "img/02.PNG",
  "img/03.PNG"
];

let indiceAtual = 0;
const img = document.getElementById("screenshot");

// Pré-carrega as imagens
const cache = [];
imagens.forEach(src => {
  const image = new Image();
  image.src = src;
  cache.push(image);
});

// Troca a imagem ao clicar
function mostrarProximaImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  img.src = imagens[indiceAtual];
}

document.addEventListener("click", mostrarProximaImagem);
document.addEventListener("touchstart", mostrarProximaImagem);
