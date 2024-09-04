const button = document.getElementById('changeColorBtn');
const paragraph = document.getElementById('descripcion');

// Función para cambiar el color de fondo del párrafo
function changeBackgroundColor() {
    paragraph.style.backgroundColor = '#ffeb3b'; // Color amarillo
}

// Añadir el evento click al botón
button.addEventListener('click', changeBackgroundColor);