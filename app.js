// app.js
let listaAmigos = [];
const listaAmigosUL = document.getElementById("listaAmigos");
const resultadoUL = document.getElementById("resultado");
const amigoInput = document.getElementById("amigo");

function adicionarAmigo() {
  const nomeAmigo = amigoInput.value.trim();

  if (nomeAmigo !== "") {
    listaAmigos.push(nomeAmigo);
    atualizarListaAmigos();
    amigoInput.value = ""; // Limpa o input
  }
}

function atualizarListaAmigos() {
  listaAmigosUL.innerHTML = ""; // Limpa a lista antes de atualizar

  listaAmigos.forEach((amigo) => {
    const novoLi = document.createElement("li");
    novoLi.textContent = amigo;
    listaAmigosUL.appendChild(novoLi);
  });
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("É necessário pelo menos dois amigos para o sorteio.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceSorteado];

  resultadoUL.innerHTML = ""; // Limpa o resultado anterior

  const novoLiResultado = document.createElement("li");
  novoLiResultado.textContent = `O amigo sorteado foi: ${amigoSorteado}`;
  resultadoUL.appendChild(novoLiResultado);

  //Remover o amigo sorteado da lista para não ser sorteado novamente em um novo sorteio.
  listaAmigos.splice(indiceSorteado, 1);
  atualizarListaAmigos();
}

// Inicialização (opcional, para exibir uma lista vazia inicialmente)
atualizarListaAmigos();
