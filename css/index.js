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

alert("ingrese plato principal a encargar");
let encargarComida = parseInt(prompt("1-Corte Malvina, 2- Matambre, 3-Vacio, 4-Falda"));
alert("ingrese con que desea acompañar su plato principal");
let encargarAcomp = parseInt(prompt("5-Fritas, 6-Pure, 7-Ensalada"));
let lleva = prompt("¿Desea su comida para llevar? Indique: Si-No");

let comidaElegida = comida.find((item) => item.id == encargarComida)
let acompElegida = acompañar.find((item) => item.id == encargarAcomp)
let llevaElegida = llevarSiNo.find((item) => item.nombre == lleva)
totalPrecio = comidaElegida.precio + acompElegida.precio + llevaElegida.precio;

let mensaje = `su total a abonar es ${totalPrecio}`;
alert (mensaje);

// let acompElegida = acompañar.filter(item => item.precio = item.id === encargarAcomp);
// let llevarSino = llevarSiNo.filter(item => item.precio = item.id === lleva);

// totalPrecio = comidaElegida + acompElegida + llevarSino;



// alert(`Su monto a abonar, es de $${totalPrecio}`);