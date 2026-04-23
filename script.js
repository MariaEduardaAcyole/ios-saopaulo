function scrollToMapa() {
  document.getElementById("mapa").scrollIntoView({ behavior: "smooth" });
}

function mostrarBairro(nome) {
  const info = {
    "Liberdade": "Antes negra, hoje japonesa",
    "Bixiga": "Antes quilombo, hoje italiana",
    "Mooca": "Base negra invisibilizada",
    "Brás": "Várias migrações",
    "Bom Retiro": "Trocas culturais constantes"
  };

  document.getElementById("infoBairro").innerText = info[nome];
}

const slider = document.getElementById("slider");
slider.addEventListener("input", () => {
  const texto = document.getElementById("textoAntesDepois");

  if (slider.value == 0) {
    texto.innerText = "ANTES: Cultura original";
  } else {
    texto.innerText = "DEPOIS: Cultura atual";
  }
});

function responder(resposta) {
  const resultado = document.getElementById("resultado");

  if (resposta === "certo") {
    resultado.innerText = "Correto!";
  } else {
    resultado.innerText = "Errado!";
  }
}