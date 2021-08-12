
const name = "Toto";
const Apellido = "hourcade";
console.log(`el nombre del profe es: ${name} ${Apellido}`)

// let Acumular = ``;
// let i = 0;
// for (i; i<10; i ++) {
//     if(i == 5){
//         continue;
//     }
//     if(i === 7){
//         break;
//     }
//     Acumular = Acumular + `<div class="card">
//     <img src="img_avatar.png" alt="Avatar" style="width:100%">
//     <div class="container">
//       <h4><b>${name}</b></h4> 
//       <p>${Apellido}</p> 
//     </div>
//     </div>`;
// }
// document.write(Acumular);


let entrada = prompt("Ingresar un nombre").toUpperCase();
//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {
    switch (entrada) {
        case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
}




for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("es par")
    }else{
        console.log('es impar');
    }
}
