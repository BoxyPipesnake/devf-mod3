function validarEntradaNota(input) {
  if (isNaN(input) || input < 0 || input > 100) {
    return false;
  }
  return true; 
}

function mostrarMensaje(elemento, mensaje){
    elemento.innerText = mensaje;
}

function evaluaNota(){
    let calificacionInput = document.getElementById("calificacion");

    let nota = calificacionInput.value;
    calificacionInput.classList.remove('error-input');
    campoMensaje.className = ""
    
    if(validarEntradaNota(nota)){
        if(nota === ""){
            mostrarMensaje(campoMensaje, "Por favor, ingresa una calificación entre 0 y 100.");
            calificacionInput.classList.add("error-input");
            campoMensaje.classList.add("no-input");
            return;
        }

        nota = Number(nota);

        if (nota >= 90 && nota <= 100) {
            mostrarMensaje(campoMensaje, "Excelente");
            campoMensaje.classList.add('excelente');
          } else if (nota >= 75 && nota <= 89) {
            mostrarMensaje(campoMensaje, "Bien");
            campoMensaje.classList.add('bien');
          } else if (nota >= 60 && nota <= 74) {
            mostrarMensaje(campoMensaje, "Suficiente");
            campoMensaje.classList.add('suficiente');
          } else {
            mostrarMensaje(campoMensaje, "El estudiante no aprueba");
            campoMensaje.classList.add('no-aprueba');
          }
    } else {
        mostrarMensaje(campoMensaje, "Algo salio mal, intenta nuevamente con otra calificacion entre 0 y 100");
        calificacionInput.classList.add('error-input');
        campoMensaje.classList.add('input-invalido');
    }
        
}

const campoMensaje = document.getElementById('campo-mensaje');
const boton = document.getElementById('boton');
boton.addEventListener('click', evaluaNota);



