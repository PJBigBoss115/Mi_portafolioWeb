const comments = ["El numero de telefono es opcional..!", "Hola, un gusto saludarte...", "Como te va el dia de hoy..?", "Se breve en la descripcion de tu proyecto, es para tener una nocion de lo que deseas..!", "Espero poder ayudarte!"];
let index = 0;

let intervalId = null;

function mostrarComentario() {
    clearInterval(intervalId);

    index = Math.floor(Math.random() * comments.length);
    document.getElementById("dialogue").textContent = comments[index];
    document.getElementById("dialogue").style.display = "block";

    intervalId = setTimeout(function() {
        document.getElementById("dialogue").style.display = "none";
    }, 60 * 1000);
}

function iniciarComentarios() {
    clearInterval(intervalId);

    intervalId = setInterval(function() {
        mostrarComentario();
    }, 10 * 1000);
}

iniciarComentarios();