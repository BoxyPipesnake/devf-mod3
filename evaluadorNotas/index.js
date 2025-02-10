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

let nota = Number(prompt("Ingrese la nota del alumno: "));

if(validarEntradaNota(nota)){
    if (nota >= 90 && nota <= 100) {
        alert("Excelente");
      } else if (nota >= 75 && nota <= 89) {
        alert("Bien");
      } else if (nota >= 60 && nota <= 74) {
        alert("Suficiente");
      } else {
        alert("El estudiante no aprueba");
      }
} else {
    alert("Algo salio mal, intenta nuevamente");
}

