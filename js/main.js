// let carrito = [];
// if (localStorage.carrito != null) {
//     carrito = JSON.parse(localStorage.carrito);
//     document.getElementById("contador-carrito").innerHTML = carrito.length;
// }


// const producto_uno = new Producto('Zapas niky', 9000, 10, 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof', 'zapatilla');
// const producto_dos = new Producto('Zapas Adidas', 100, 10, "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof", 'zapatilla');
// const producto_tres = new Producto('Zapas de Solodeportes.com.ar', 700, 10, "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof", 'zapatilla');
// const producto_cuatro = new Producto('Zapas Jagguar', 1200, 10, "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof", 'remera');
// const producto_cinco = new Producto('Zapas Jagguar', 1200, 10, "/img/perro.jpg", 'remera');
// const baseDeDatos = [producto_uno, producto_dos, producto_tres, producto_cuatro, producto_cinco];
// const baseDeDatosMenosDe200 = baseDeDatos.filter(producto => producto.price < 1300);


// /*** Creando las cards en JS */
// filtrarProductos();

// function borrarDelCarrito(title) {
//     //TODO: Buscar en el array de carrito y sacarlo
//     const productoEncontrado = baseDeDatos.find(producto => producto.title === title);

//     const card = document.getElementById(title);
//     card.parentNode.removeChild(card);
// }

// // const todosLosH1 = document.getElementsByTagName('h1');
// function agregarAlCarrito(title) {
//     // TODO: En vez de un titulo, agregar el producto que se agrego.
//     // TODO: Verificar stock del producto
//     const productoEncontrado = baseDeDatos.find(producto => producto.title === title);
//     if (productoEncontrado != undefined) {
//         carrito.push(productoEncontrado);
//     } else {
//         alert("algo falló");
//     }

//     localStorage.carrito = JSON.stringify(carrito);
//     document.getElementById("contador-carrito").innerHTML = carrito.length;

//     // TODO: calcular el total del carrito
// }



// function validarFormulario() {
//     const edad = document.getElementById("edad").value;
//     const nombre = document.getElementById("nombre").value;

//     if (edad > 18) {
//         console.log(nombre + " sos mayor de edad, felicitaciones!!");
//     }

//     console.log(edad);
// }

// /**
//  * @param {*} filtro
//  * El filtro es para filtrar los productos 
//  */
// function filtrarProductos(filtro = 'default') {
//     let nuevosProductos = (filtro !== "default") ? 
//     baseDeDatos.filter(producto => producto.category == filtro) :
//     baseDeDatos;

//     /*** Creando las cards en JS */
//     let acumulador = ``;
//     nuevosProductos.forEach((producto) => {
//         acumulador += `<div class="col mb-5" id="${producto.title}">
//         <div class="card h-100">
//             <!-- Product image-->
//             <img class="card-img-top" src="${producto.img}" alt="..." />
//             <!-- Product details-->
//             <div class="card-body p-4">
//                 <div class="text-center">
//                     <!-- Product name-->
//                     <h5 class="fw-bolder">${producto.title}</h5>
//                     <!-- Product price-->
//                     $${producto.price}
//                 </div>
//             </div>
//             <!-- Product actions-->
//             <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
//                 <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" 
//                 onclick="agregarAlCarrito('${producto.title}')">Agregar al carrito</a>
//                 <button onclick="borrarDelCarrito('${producto.title}')">Eliminar esta card</button>
//                 </div>
//             </div>
//         </div>
//     </div>`
//     });
//     $("#productos").html(acumulador)
// }



/******************************************************************************************************/

// const Mercadopago = new VirtualWallet() ;

// console.log(`La wallet de toto tiene un balance de: ${Mercadopago.getBalanceByUsername("Toto")}`)
// console.log(`La wallet de toto tiene estas transacciones: ${JSON.stringify(Mercadopago.getTransactionsByUsername("Toto"))}`)

// function registrarUsuario() {
//     const nuevoUsuario = new User($("#nombre-usuario").val())
//     Mercadopago.signUpUser(nuevoUsuario)
//     localStorage.setItem('usuario', nuevoUsuario.username);
//     $("#usuario").html(nuevoUsuario.username);
//     console.log(Mercadopago)
// }

// function generarTransaccion() {
//     const cantidad = $("#cantidad").val();
//     const cuentaDestino = $("#destino").val();
//     const cuentaVendedor = $("#usuario").html();
//     const transaction = new Transaction(cuentaVendedor, cuentaDestino, cantidad, 12312312);
//     Mercadopago.pushNewTransaction(transaction);
//     console.log(Mercadopago)
// }


// URL BASE:  https://api.mercadopago.com
// ENDPOINT:  /checkout/preferences
// URL COMPLETA: https://api.mercadopago.com/checkout/preferences

// const datoDelUsuario = prompt("¿Que queres buscar?")
// $.get(`https://api.mercadolibre.com/sites/MLA/search?q=${datoDelUsuario}`, function(valores, status){
//     console.log(status);
//     console.log(valores.results);
//     //TODO HAcer otro get a una API de cotizacion de USD
// })
$.get("/datos.json", (resultado, status) => {
    console.log(resultado);
})



const producto1 = {
    name: 'Zapa niky',
    price: 9000,
    stock: 9999,
    img: 'null',
    offer: null
}

const carrito = [producto1, producto1];
const elementosMercadopago = carrito.map(producto => {
    return {
        "title": producto.name,
        "description": "",
        "picture_url": producto.img,
        "category_id": "",
        "quantity": 1,
        "currency_id": "ARS",
        "unit_price": producto.price
    }
})

//Los datos a enviar
const elemento = { "items": elementosMercadopago }


// Los headers que no son el todos los casos
$.ajaxSetup({
    headers: {
        'Authorization': ' Bearer TEST-2046297057992309-091701-a1f5b53560c90cf8dac07f80cfa3196e-242652951',
        'Content-Type': 'application/json'
    }
});

// El callback y la peticion
$.post("https://api.mercadopago.com/checkout/preferences", JSON.stringify(elemento), (respuesta, status) => {
    console.log(respuesta);
});

fetch("https://api.mercadopago.com/checkout/preferences", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
        'Authorization': ' Bearer TEST-2046297057992309-091701-a1f5b53560c90cf8dac07f80cfa3196e-242652951',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(elemento)
});







async function GetDatos() {
    // Funciones asincronicas
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas');
    const data = await response.json();
    return data;
}

const baseDeDatos = GetDatos();
console.log(baseDeDatos);

