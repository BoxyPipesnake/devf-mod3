/**
 * 
 *  Si la nota es 90 o más, el estudiante aprueba con "Excelente".
    Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
    Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
    Si la nota es menor de 60, el estudiante no aprueba.
 */

function validarEntradaNota(input) {
  if (isNaN(input) || input < 0 || input > 100) {
    return false;
  }
  return true; 
}

function mostrarMensaje(mensaje){
    const areaMensaje = document.getElementById('campo-mensaje');
    areaMensaje.innerText = mensaje;
}

function evaluaNota(){
    let calificacionInput = document.getElementById("calificacion");
    calificacionInput.classList.remove('error-input')
    let nota = Number(calificacionInput.value);
    if(validarEntradaNota(nota)){
        if (nota >= 90 && nota <= 100) {
            mostrarMensaje("Excelente");
          } else if (nota >= 75 && nota <= 89) {
            mostrarMensaje("Bien");
          } else if (nota >= 60 && nota <= 74) {
            mostrarMensaje("Suficiente");
          } else {
            mostrarMensaje("El estudiante no aprueba");
            calificacionInput.classList.add('error-input');
          }
    } else {
        mostrarMensaje("Algo salio mal, intenta nuevamente con otra calificacion");
        calificacionInput.classList.add('error-input');
    }
        
}

const boton = document.getElementById('boton');
boton.addEventListener('click', evaluaNota);



