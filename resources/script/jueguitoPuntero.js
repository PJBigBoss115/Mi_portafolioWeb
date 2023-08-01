// Selecciona el contenedor y la imagen
const imagenContainer = document.getElementById("imagen-container");
const imagen = imagenContainer.querySelector("img");

// Añade un evento para detectar el movimiento del ratón
document.addEventListener("mousemove", function(event) {
  // Calcula la posición relativa del ratón en la pantalla
  const posX = event.clientX;
  const posY = event.clientY;

  // Actualiza la posición del contenedor
  imagenContainer.style.left = (posX-65) + "px";
  imagenContainer.style.top = (posY+40) + "px";

  // Muestra la imagen
  imagen.style.display = "block";
});