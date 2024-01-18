let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();


/*
//ARREGLOS 

//ARRAY : una lista de datos de un tipo o combinado, usando []  corchetes 

//let numerosx =[];
//numerosx.push(8);
//console.log(numerosx.length);
//tamaño de la (datosSky[numeros.lista Length-1 ]);
//                        Dentro de los cochetes se hacen peticiones 



let listaCompras = [];

listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");

*/


//EJERCICIO 



let frutas = ["Manzana", "Uva", "Naranja"];

console.log(frutas[0]); // Salida: "Manzana"
console.log(frutas[2]); // Salida: "Naranja"
frutas.push("Fresa");
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja", "Fresa"]
frutas.pop();
console.log(frutas); // Salida: ["Manzana", "Uva", "Naranja"]





let listaGenerica = [];

let lenguajesProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python', 'Java', 'Ruby', 'GoLang '];

lenguajesProgramacion.push('Java', 'Ruby', 'GoLang')
console.log(frutas);


function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguagesSeparadamente();