// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (!isNaN(nombre)) {
        alert("El nombre no puede ser un número.");
        return;
    }

    listaAmigos.push(nombre);

    const listaElemento = document.getElementById("listaAmigos");
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = nombre;
    listaElemento.appendChild(nuevoItem);

    input.value = "";
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    const listaElemento = document.getElementById("listaAmigos");

    resultado.innerHTML = "";
    listaElemento.innerHTML = "";

    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    const resultadoItem = document.createElement("li");
    resultadoItem.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(resultadoItem);

    listaAmigos = [];
}