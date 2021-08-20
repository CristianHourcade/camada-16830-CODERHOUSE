const producto_uno = new Producto('Zapas niky', 9000, 10, 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof');
const producto_dos = new Producto('Zapas Adidas', 100, 10, "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof");
const producto_tres = new Producto('Zapas de Solodeportes.com.ar', 700, 10, "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof");
const producto_cuatro = new Producto('Zapas Jagguar', 1200, 10, "https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-reconocer-a-un-perro-feliz.jpg?itok=8xw_Cyof");
const producto_cinco = new Producto('Zapas Jagguar', 1200, 10, "/img/perro.jpg");
                        //0             //1            //2            //3
const baseDeDatos = [producto_uno, producto_dos, producto_tres, producto_cuatro, producto_cinco];

// let acumulador = ``;
// for(let i = 0; i<baseDeDatos.length;i++){ 
//     acumulador += `<div class="card" style="background-color:violet">
//     <img src="${baseDeDatos[i].img}" width="70" height="70"/>
//     <h3>${baseDeDatos[i].title}</h3>
//     <p>$${baseDeDatos[i].price}</p>
//     </div>`
// }
let iterable = [10, 20, 30];
for (let value of iterable) {
    value += 1;
    console.log(value);
  }

let acumulador = ``;
baseDeDatos.forEach((producto) => {
    acumulador += `<div class="card" style="background-color:violet">
    <img src="${producto.img}" width="70" height="70"/>
    <h3>${producto.title}</h3>
    <p>$${producto.price}</p>
    </div>`
});

document.write(acumulador);

