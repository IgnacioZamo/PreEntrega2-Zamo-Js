// Se definen arrays y objetos del array
const comida = [
    {id:1,nombre:"Malvina",precio: 800},
    {id:2,nombre:"Matambre",precio: 900},
    {id:3,nombre:"Vacio",precio: 700},
    {id:4,nombre:"Falda",precio: 850},
];

const acompañar = [
    {id:5,nombre:"fritas",precio: 150},
    {id:6,nombre:"pure",precio: 125},
    {id:7,nombre:"ensalada",precio: 100},
];

const llevarSiNo = [
    {id:8,nombre:"Si",precio: 50},
    {id:9,nombre:"No",precio: 0},
];

total = 0

let corteMalvina = document.getElementById("checkMalvina");
let corteMatambre = document.getElementById("checkMatambre");
let corteVacio = document.getElementById("checkvacio");
let corteFalda = document.getElementById("checkFalda");

let acompPapas = document.getElementById("checkPapas");
let acompPure = document.getElementById("checkPure");
let acompEnsalada = document.getElementById("checkEnsalada");

let retira = document.getElementById("checkRetira");
let enviar = document.getElementById("checkEnviar");


const guardarComida = (nombre, precio) => {localStorage.setItem(nombre, precio)};

if (corteMalvina.ariaChecked) {
comida.forEach(comida => {
    guardarComida(comida.nombre, json.stringfy(comida))
})

}




//se pide al usuario que seleccione lo que desea comer.
// alert("ingrese plato principal a encargar");
// let encargarComida = parseInt(prompt("1-Corte Malvina $800, 2- Matambre $900, 3-Vacio $700, 4-Falda $850"));
// alert("ingrese con que desea acompañar su plato principal");
// let encargarAcomp = parseInt(prompt("5-Fritas $150, 6-Pure $125, 7-Ensalada $100"));
// let lleva = prompt("¿Desea su comida para llevar? Indique: Si($50)-No($0)");

//se busca mediante un find, el precio del producto elegido.
// let comidaElegida = comida.find((item) => item.id == encargarComida)
// let acompElegida = acompañar.find((item) => item.id == encargarAcomp)
// let llevaElegida = llevarSiNo.find((item) => item.nombre == lleva)

//Se suma todo lo seleccionado para saber el precio total a consumir
// totalPrecio = comidaElegida.precio + acompElegida.precio + llevaElegida.precio;

// Se muestra mensaje al consumidor, el total que deberá abonar.
// let mensaje = `su total a abonar es ${totalPrecio}`;
// alert (mensaje);
