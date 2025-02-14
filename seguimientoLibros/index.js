// Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
// Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

const librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

function mostrarLibrosLeidos(){
    for(let i = 1; i <= librosLeidos.length; i++){
        console.log(i, librosLeidos[i - 1]);
    }
}

agregarLibro("El principito");
agregarLibro("Sherlock Holmes");
agregarLibro("Habitos Atomicos");

mostrarLibrosLeidos();