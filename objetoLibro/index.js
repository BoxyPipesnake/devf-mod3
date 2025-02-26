// Cada libro debe ser un objeto con las siguientes propiedades
// titulo: (string) el título del libro, 
// autor: (string) el autor del libro, 
// anio: (number) el año de publicación, 
// estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
//describirLibro: (method) método para imprimir la información básica del libro. 
// Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
//Opcional: agregar una propiedad que contenga la lista de capítulos del libro y 
// métodos que permitan agregar y eliminar capítulos del libro.


const libro = {
    titulo: "Libro N",
    autor: "N",
    fechaPublicacion: 2002,
    estado: "disponible",
    capitulos: ["Cap1", "Cap2", "Cap3", "Cap4", "Cap5"],

    describirLibro: function(){
        console.log(`Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.fechaPublicacion}, el estado es ${this.estado}`)

    },
    mostrarCapitulosLibro: function(){
        this.capitulos.forEach(capitulo => {
            console.log(capitulo);
        });
    },
    agregarCapitulo: function(capitulo){
        this.capitulos.push(capitulo);
    },
    eliminarCapitulo: function(capitulo){
        if(this.capitulos.includes(capitulo)){
            const index = this.capitulos.indexOf(capitulo);
            this.capitulos.splice(index, 1);
        } else {
            console.error("No hubo coincidencias.")
        }
    }
}

libro.agregarCapitulo("Cap6")
libro.mostrarCapitulosLibro();
libro.eliminarCapitulo("Cap8");
libro.eliminarCapitulo("Cap1");
libro.mostrarCapitulosLibro();