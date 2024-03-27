let biscoito = '<button onclick="abrirBiscoito()" id="abrir"><img src="./assets/fortune-cookie.png" alt="Biscoito da sorte" class="bs-fechado"></button>';
let p = "<p>Abra o biscoito e descubra!</p>";
let imgSorte = '<img src="./assets/sorte.png" alt="mensagem da sorte: Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu" class="msg-sorte">';
let imgBiscoitoAberto = '<img src="./assets/opened-cookie.png" alt="Biscoito da sorte aberto" id="biscoito-aberto">';
let secondButton = '<button id="abrir-outro-biscoito" onclick="resetCard()">Abrir outro biscoito</button>';

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    abrirBiscoito();
  }
});

function abrirBiscoito() {
  const firstButton = document.getElementById("abrir");
  renameTitle();
  replaceP();
  createImgBiscoitoAberto();
  createButton();
  firstButton.remove();
}

function renameTitle() {
  const tagH1 = document.querySelector("h1");
  tagH1.innerText = "Aqui está a sua sorte de hoje:";
}

function replaceP() {
  const tagP = document.querySelector("p");
  tagP.insertAdjacentHTML("afterend", imgSorte);
  tagP.remove();
}

function createImgBiscoitoAberto() {
  const tagImg = document.querySelector("img");
  tagImg.insertAdjacentHTML("afterend", imgBiscoitoAberto);
}

function createButton() {
  const tagButton = document.querySelector("button");
  tagButton.insertAdjacentHTML("afterend", secondButton);
}

function resetCard() {
  document.querySelector("img").remove();
  document.querySelector("img").remove();
  document.querySelector("button").remove();
  document.querySelector("h1").innerText = "Qual é a sua sorte de hoje?";
  document.querySelector("h1").insertAdjacentHTML("afterend", p);
  document.querySelector("section").insertAdjacentHTML("beforeend", biscoito);
}
