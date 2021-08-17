// Declarando funcion

//ECMA5
function crearUsuario(nombre) {
    console.log(`Tu nombre es: ${nombre}`);
}

const crearUsuario = function (nombre) {
    console.log(`Tu nombre es: ${nombre}`);
}

//ECMA script 6 
const crearUsuario = (nombre) => {
    return nombre

}
const name = crearUsuario("toto");

const saludar = () => {
    //LOGICA

    return true;
}

// Llamando a la funcion
crearUsuario('Daniel')
crearUsuario('Jose')

























/**********************************************/

function sumarNumeros(z, x, c) {
    // console.log(x + y + z);
}

sumarNumeros(1, 20, 30);

/**************************************************************/

// Declaracion de la funcion
function validarStock(cantidadDeStock, cantidadOrdenada) {
    let sePuedeVer = true;
    if (cantidadOrdenada > cantidadDeStock) {
        alert("Disculpame, no tengo stock para ofrecerte");
        sePuedeVer = false;
    } else {
        alert("Compraste el solodeportes, felicitaciones!!!");
        sePuedeVer = true;
    }

    return (sePuedeVer == true); // false
}

// Datos para la funcion
const ordenesDelUsuario = 700;
const stock = 500;

// La llamada a la funcion
const resultadoDeLaValidacion = validarStock(stock, ordenesDelUsuario); // false
console.log(resultadoDeLaValidacion);
