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
const contadorComentarios = document.getElementById('contador-comentarios');
let numeroComentarios = Number(contadorComentarios.textContent);

botonAñadir.addEventListener('click', () => {
    let textoComentario = document.getElementById('texto-comentario').value;
    
    if (textoComentario === "") {
        alert("No puedes añadir un comentario vacío");
    } else {
        añadirComentario(textoComentario);
        document.getElementById('texto-comentario').value = "";
    }
});

function añadirComentario(contenidoComentario){
    comentario = crearComentario(contenidoComentario);
    contenedorComentarios.appendChild(comentario);
    contadorComentarios.textContent = ++numeroComentarios;
}

function eliminarComentario(event) {
    const comentario = event.target.parentElement;
    comentario.remove();
    contadorComentarios.textContent = --numeroComentarios;
}

function crearComentario(contenidoComentario) {
    const ahora = new Date();
    const tiempoFormateado = formatearHora(ahora);

    const comentario = document.createElement("div");

    comentario.innerHTML = `
        <p>${contenidoComentario}</p>
        <p><span>Fecha: ${ahora.toLocaleDateString('en-GB')} - </span><span>Hora: ${tiempoFormateado}</span></p>
    `;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar Comentario";
    botonEliminar.type = "button";
    botonEliminar.classList.add("btn-eliminar");

    botonEliminar.addEventListener("click", eliminarComentario);

    comentario.appendChild(botonEliminar);

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
