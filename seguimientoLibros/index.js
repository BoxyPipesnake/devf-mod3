// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
// Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

const nombreLibro = document.getElementById('nombre-libro');
const listaLibros = document.getElementById("lista-libros");

const agregarLibroBtn = document.getElementById('agrega-libro');
const muestraLibrosBtn = document.getElementById('muestra-libros');

const librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos() {
    listaLibros.innerHTML = "";

    for (let i = 0; i < librosLeidos.length; i++) { 
        const li = document.createElement("li");
        li.textContent = `${librosLeidos[i]}`;
        listaLibros.appendChild(li);
    }
}


agregarLibroBtn.addEventListener('click', () => {
    const titulo = nombreLibro.value.trim(); 
    if (titulo) { // Verificar que no esté vacío
        agregarLibro(titulo);
        nombreLibro.value = "";
    } else {
        alert("Por favor, ingresa un título válido.");
    }
});


muestraLibrosBtn.addEventListener('click', mostrarLibrosLeidos);