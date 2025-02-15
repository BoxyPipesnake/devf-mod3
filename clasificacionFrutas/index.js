// Imagina que tienes un programa que clasifica 
// las frutas según su tipo y cuenta cuántas hay de cada tipo.

const frutas = [
    { nombre: "manzana", clasificacion: "neutra" },
    { nombre: "plátano", clasificacion: "dulce" },
    { nombre: "naranja", clasificacion: "ácida" },
    { nombre: "uva", clasificacion: "semiácida" },
    { nombre: "pera", clasificacion: "neutra" },
    { nombre: "manzana", clasificacion: "neutra" },
    { nombre: "naranja", clasificacion: "ácida" },
    { nombre: "manzana", clasificacion: "neutra" },
    { nombre: "uva", clasificacion: "semiácida" }
];

const cantidadFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    let clasificacion = frutas[i].clasificacion;
    if (cantidadFrutas.hasOwnProperty(clasificacion)) {
        cantidadFrutas[clasificacion] += 1;
    } else {
        cantidadFrutas[clasificacion] = 1;
    }
}

console.log(cantidadFrutas);

// Versión con while
const cantidadFrutasWhile = {};
let j = 0;
while (j < frutas.length) {
    let clasificacion = frutas[j].clasificacion;
    if (cantidadFrutasWhile.hasOwnProperty(clasificacion)) {
        cantidadFrutasWhile[clasificacion] += 1;
    } else {
        cantidadFrutasWhile[clasificacion] = 1;
    }
    j++;
}

console.log(cantidadFrutasWhile);



