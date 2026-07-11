const datos = [
    "Rafael Lozano-Hemmer nació en México.",
    "Sus obras combinan arte y tecnología.",
    "Muchas de sus instalaciones son interativas",
    "Ha expuesto sus obras en diferentes países.",
    "El público participa activamente en muchas de sus obras."
]
const parrafo = document.getElementById("datoCurioso");
const boton = document.getElementById("mostrarDato");
//Función para mostrar un dato curioso al azar
function mostrarDato(){
    let numero = 
    Math.floor(Math.random() * 
    datos.length);
    parrafo.textContent=
    datos[numero];
}
//hacer click
boton.addEventListener("click",mostrarDato);