/* seleccionar un elemento por su ID */
var titulo = document.getElementById("hola")

/* cambiar el texto del elemento */
titulo.innerText = "como estas";

var parrafo = document.querySelector("contenido")
var textoparrafo = parrafo.innerText;
console.log(textoparrafo)

/* crear un elemento p */
var nuevoParrafo = document.createElement("p");

/* asignar texto al nuevo elemento */
nuevoParrafo.innerText = "nuevo parrafo";

/* agregar el nuevo elemento al documento */
document.body.appendChild(nuevoParrafo);
