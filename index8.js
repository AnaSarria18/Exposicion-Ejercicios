/* ejercicios de johan  */

/* const button = document.getElementById('myButton');

button.addEventListener('click', manejadorClick);

function manejadorClick(event) {
    console.log("Haz dado click en el botón!");
    console.log(`El evento fue activado por:`)
    console.log(event.target); // Elemento que activo el evento
}
 */



/* ejercicio 2 de johan */

/* document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function(event) {
        if (event.target.id == 'btn1') {
            alert(`Haz hecho clic en el botón 1`);
        } else if (event.target.id == 'btn2') {
            alert(`Haz hecho clic en el botón 2`);
        } else if (event.target.id == 'btn3') {
            alert(`Haz hecho clic en el botón 3`);
        }
        });
    }); */




    /* ejercicio 3 de johan  */

    document.querySelector('.cambioColor').addEventListener('click', function(event) {
        event.target.style.backgroundColor = 'lightgreen';
    });
