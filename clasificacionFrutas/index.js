// Imagina que tienes un programa que clasifica 
// las frutas según su tipo y cuenta cuántas hay de cada tipo.



const frutas = ["manzana", "plátano", "naranja", "uva", "pera", "manzana", "naranja", "manzana", "uva"];

const cantidadFrutas = {};


//Version con foor loop
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    if (cantidadFrutas[fruta] === undefined) {
        cantidadFrutas[fruta] = 0;
    }

    cantidadFrutas[fruta] += 1;
}

//Version con while

// let i = 0;
// while(i  < frutas.length){
//     let fruta = frutas[i];

//     if (cantidadFrutas[fruta] === undefined) {
//         cantidadFrutas[fruta] = 0;
//     }

//     cantidadFrutas[fruta] += 1;

//     i++;
// }


console.log(cantidadFrutas);
