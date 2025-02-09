const ejemplos = [
    42,                 // Number (entero)
    3.14,               // Number (decimal)
    "Hola",             // String
    true,               // Boolean (true)
    false,              // Boolean (false)
    null,               // Null
    undefined,          // Undefined
    BigInt(9007199254740991), // BigInt
    Symbol("id")        // Symbol
];

/** 
 * Practica: Agrega el código para imprimir en la consola 
 * los distintos tipos de datos que existen en JS
* */ 

for(let i = 0; i < ejemplos.length; i++){
    console.log(typeof ejemplos[i]);
}

// Extra
const ul = document.getElementById("listaResultados");

function tipoDeDato(dato){
    return typeof dato;
}


const descripciones = {
    "number": "Representa valores numéricos, ya sean enteros o decimales.",
    "string": "Una cadena de texto. Se define entre comillas dobles o simples.",
    "boolean": "Solo puede tener dos valores: true o false.",
    "object": "Representa estructuras de datos complejas. En este caso, 'null' es un objeto especial.",
    "undefined": "Indica que una variable ha sido declarada pero no inicializada.",
    "bigint": "Se usa para trabajar con números enteros extremadamente grandes.",
    "symbol": "Un identificador único, útil en objetos para evitar colisiones de nombres."
};

for (let i = 0; i < ejemplos.length; i++) {
    let dato = tipoDeDato(ejemplos[i]);
    let descripcionDato = descripciones[dato];

    let li = document.createElement("li");
    li.classList.add("dato-item");

    li.innerHTML = `<p><strong>Valor:</strong> ${String(ejemplos[i])}</p>
                    <p><strong>Tipo:</strong> ${dato}</p>
                    <p><strong>Descripción:</strong> ${descripcionDato}</p>`;                    

    ul.appendChild(li);

}