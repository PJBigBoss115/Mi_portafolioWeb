const SHAPES_AMOUNT = 20;
const SHAPE_SIZE = 15;

// Seleccionar el contenedor y calcular su tamaño
const container = document.querySelector(".container");
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;

// Función para crear formas
function createShape(type) {
  // Crear la forma
  const shape = document.createElement("div");
  shape.classList.add("shape", type);

  // Posicionar aleatoriamente la forma en la pantalla
  const x = Math.random() * (containerWidth - SHAPE_SIZE -5);
  const y = Math.random() * (containerHeight - SHAPE_SIZE);
  shape.style.top = `${y}px`;
  shape.style.left = `${x}px`;

  // Añadir la forma al contenedor
  container.appendChild(shape);
}

// Crear las formas
for (let i = 0; i < SHAPES_AMOUNT; i++) {
  createShape("circle");
  createShape("square");
  createShape("triangle");
}