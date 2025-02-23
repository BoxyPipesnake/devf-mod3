// Problema: Caja de Comentarios (Simple Comment Box)

// Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios 
// que se muestran en la página. Este proyecto ayudará a los estudiantes a 
// manejar eventos de formularios y modificar el contenido de una página.

// Instrucciones para resolver el problema:
// Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
// Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
// Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
// Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)


const botonAñadir = document.getElementById('boton-agregar');
const contenedorComentarios = document.getElementById('contenedor-comentarios');

botonAñadir.addEventListener('click', () => {
    let textoComentario = document.getElementById('texto-comentario').value;
    if(textoComentario === ""){
        alert("No puedes añadir un comentario vacio");
    } else {
        añadirComentario(textoComentario);
        document.getElementById('texto-comentario').value = "";
    }
});

function añadirComentario(contenidoComentario){
    comentario = crearComentario(contenidoComentario);
    contenedorComentarios.appendChild(comentario);
}

function crearComentario(contenidoComentario) {
    const ahora = new Date();
    const tiempoFormateado = formatearHora(ahora);

    const comentario = document.createElement("div");

    // ahora.toLocaleDateString('en-GB') -> dd-mm-yyyy
    comentario.innerHTML = `
        <p>${contenidoComentario}</p>
        <p><span>Fecha: ${ahora.toLocaleDateString('en-GB')} - </span><span>Hora: ${tiempoFormateado}</span></p>
        <button type="button">Eliminar Comentario</button>
    `;
    return comentario;
}

function formatearHora(dateObj){
    let formateoHora = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return formateoHora.format(dateObj);   
}
