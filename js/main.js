const producto_uno = new Producto('Zapas niky', 9000, 10, 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof');
const producto_dos = new Producto('Zapas Adidas', 100, 10, "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof");
const producto_tres = new Producto('Zapas de Solodeportes.com.ar', 700, 10, "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof");
const producto_cuatro = new Producto('Zapas Jagguar', 1200, 10, "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof");
const producto_cinco = new Producto('Zapas Jagguar', 1200, 10, "/img/perro.jpg");

const baseDeDatos = [producto_uno, producto_dos, producto_tres, producto_cuatro, producto_cinco];

const baseDeDatosMenosDe200 = baseDeDatos.filter(producto => producto.price < 1300);
console.log(baseDeDatosMenosDe200);

const carrito = [];

let acumulador = ``;
baseDeDatos.forEach((producto) => {
    acumulador += `<div class="card" style="background-color:violet">
    <img src="${producto.img}" width="70" height="70"/>
    <h3>${producto.title}</h3>
    <p>$${producto.price}</p>
    <button onclick="agregarAlCarrito('${producto.title}')">Agregar al carrito</button>
    </div>`
});

document.write(acumulador);

function agregarAlCarrito(title){
    // TODO: En vez de un titulo, agregar el producto que se agrego.
    // TODO: Verificar stock del producto
    const productoEncontrado = baseDeDatos.find(producto => producto.title === title);
    if(productoEncontrado != undefined){
        carrito.push(productoEncontrado);
    }else{
        alert("algo falló");
    }
    // TODO: calcular el total del carrito
    console.log(carrito)
}

// const miArray    = ["ford", 45];
// const otroArray  = ["hola", 22, "mundo"];
// const nuevoArray = miArray.concat(otroArray);
// console.log([...miArray, ...otroArray]);
// console.log(nuevoArray);

// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3);
// console.log(masculinos)


// console.log(1 === 1 === 1);

// const numeros = [1, 2, 3, 4, 5];
// const porDos = numeros.map(element => {
//     return element * 2
// });
// console.log(porDos);