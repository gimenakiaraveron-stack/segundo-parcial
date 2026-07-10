//Galería de obras de Rafael Lozano-Hemmer
const obras= [
{
    nombre: "Pulse Room",
    año: 2006,
    imagen:"../img/lozano-hemmer.jpg" 

},
{
    nombre: "Zoom Pavillon",
    año:2015,
    imagen:"../img/lozano-hemmer-3.jpg"

},
{
    nombre:"Border tuner",
    año:2019,
    imagen:"../img/lozano-hemmer-2.jpg"
},
{
    nombre:"33 Questions per minute",
    año:2000,
    imagen:"../img/lozano-hemmer-1.jpg"
},
{
    nombre:"Sandbox",
    año:2010,
    imagen:"../img/lozano-hemmer.jpg"
}
];
//termina el array
const galeria = document.getElementById ("galeria");
//recorta el array de obras 
for (let i = 0; i < obras.length; i++){
    galeria.innerHTML +=`  <article>
    <img src="${obras[i].imagen}" alt="${obras[i].nombre}">
    <h3>${obras[i].nombre}</h3>
    <p>Año: ${obras[i].año}</p>
    </article> 
    `;
}
//Botón para cambiar el diseño de la galería 
const boton = document.getElementById("cambiarDiseño");
boton.addEventListener ("click", cambiarDiseño);

function cambiarDiseño() {
    galeria.classList.toggle("nuevoDiseño");
}