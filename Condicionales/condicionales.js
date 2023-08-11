// Ejercitación Condicionales

// 1. Realizar un programa que reciba 2 números y que imprima por consola si el primer
// número es mayor que el segundo.

// let numero1 = 20
// let numero2 = 10

// if ( numero1>numero2 ){
//     console.log("El "numero1" es mayor que el segundo número")
// }


// 2. Realizar un programa que reciba 2 números y que imprima por consola si los números
// 2 son iguales o si son diferentes.

// let numero1= 10
// let numero2= 10

// if ( numero1 == nummero2 ){
//   console.log("número 1 es igual al número 2")
// }else ( numero1 != nummero2 ){
//   console.log("número 1 y número 2 son diferentes")
// }

// 3. Realizar un programa que reciba 2 números y que imprima por consola cuál de los 2
// números es el más grande o si son iguales.

// let numero1 = prompt(`Ingrese un numero: `);
// let numero2 = prompt(`Ingrese un numero: `);
// console.log(numero1,numero2);

// if ( numero1 > numero2 ) {
//     console.log (`El primer número es mayor que el segundo número`);
//     } else if ( numero2 > numero1 ){
//     console.log (`El primer número es menor que el segundo número`);
// }

// 4. Realizar un programa que reciba 3 números y que imprima por pantalla cual de los 3 es
// el más chico.

// let numero1 = prompt(`Ejercicios n°4 - Ingrese el 1° numero: `);
// let numero2 = prompt(`Ingrese el 2° numero: `);
// let numero3 = prompt(`Ingrese el 3° numero: `);
// console.log(numero1,numero2, numero3);

// if ( numero1 > numero2 && numero1> numero3) {
//      console.log (`${numero1} es mayor que ${numero2} y ${numero3}`);
//      } else if ( numero2 > numero1 && numero2 > numero3 ){
//      console.log (`${numero2} es mayor que ${numero1} y ${numero3}`);
//  } else if (numero3 > numero1 && numero3 > numero2){
//     console.log (`${numero3} es mayor que ${numero1} y ${numero2}`);
//  }

// 5. Realizar un programa que reciba 2 objetos representando personas con las propiedades:
// ● nombre
// ● edad
// ● altura
// y que imprima por pantalla:
// 1. cual de las dos personas es la más alta
// 2. cual es la de ayor edad.

// let persona1 = {
//     nombre: "Nadia",
//     edad: 40,
//     altura: 168,
// }

// let persona2 = {
//     nombre: "Rosa",
//     edad: 20,
//     altura: 180,
// }

// if (persona1.altura > persona2.altura) {
//     console.log(`${persona1.nombre} es más alta que ${persona2.nombre}`);
// } else if (persona2.altura > persona1.altura){
//     console.log(`${persona2.nombre} es más alta que ${persona1.nombre}`);
// }
// if (persona1.edad > persona2.edad) {
//     console.log(`${persona1.nombre} es mayor que ${persona2.nombre}`);
// } else if (persona2.edad > persona1.edad){
//     console.log(`${persona2.nombre} es mayor que ${persona1.nombre}`);
// }



// 6.Realizar un programa que permita ingresar por pantalla:
// ● tu nombre
// ● tu edad
// ● tu altura
// ● tu visión
// y determine si estás capacitado para conducir, para saber esto la persona deberá
// ● Tener edad mínima de 18 años.
// ● Medir más de 150 cm.
// ● Tener una visión como mínimo de 8 de 10.

// let capacitadoParaConducir = {
//     nombre: prompt(`Ingresa tu nombre: `),
//     edad: prompt(`Ingresa tu edad: `),
//     altura: prompt(`Ingresa tu altura:  cm`),
//     vision: prompt(`Ingresa tu rango de vision del 1 al 10: `),
// }


// if (capacitadoParaConducir.edad >= 18 && capacitadoParaConducir.altura >= 150 && capacitadoParaConducir.vision >= 8) {
//     console.log(`Estas capacitado para manejar`);
// } else (capacitadoParaConducir.edad < 18 || capacitadoParaConducir.altura < 150 || capacitadoParaConducir.vision < 8); {
//     console.log(`No estas capacitado para manejar aún`)
// }



// 7. Realizar un programa que permita el ingreso por pantalla de los siguientes datos:
// ● Nombre del cliente.
// ● Pase ( vip o normal )
// ● Si posee entrada ( si o no ).
// Las personas que posean:
// Tú mismo nombre tienen ingreso libre ( mostrar un mensaje de bienvenida ) ó
// Pase vip tienen ingreso libre ( mostrar un mensaje de bienvenida )
// Si posee entrada preguntar ¿desea utilizarla?, en caso:
// afirmativo ( mostrar un mensaje de bienvenida )
// Y por último en caso de:
// No tener el mismo nombre y no tener un pase vip y no tener entrada, preguntar ¿desea comprar?
// en caso:
// negativo ( mostrar mensaje de despedida )
// afirmativo preguntar dinero disponible, si posee:
// $1000 o mas, ( mostrar un mensaje venta exitosa y de bienvenida )
// Menos de $1000 ( mostrar un mensaje de rechazo de venta )

// let nombre = prompt(`Ingresa tu nombre: `);
// let paseVip = prompt(`¿Tienes pase Vip?: `);
// let tieneEntrada = prompt(`¿Tienes entrada?: `);

// if (nombre === "nadia") {
//     console.log("Bienvenida: nadia");
// } else if (paseVip === "si") {
//     console.log("Bienvenido: Pase Vip");
// } else if (tieneEntrada === "si") {
//     let utilizarEntrada = prompt("¿Deseas utilizar la entrada? ");
//     if (utilizarEntrada === "si") {
//         console.log("¡Bienvenido!");
//     }
// } else {
//     let comprarEntrada = prompt("¿Deseas comprar una entrada?: ");
//     if (comprarEntrada === "si") {
//         let dineroDisponible = prompt("¿Cuánto dinero tienes disponible?");
//         if (dineroDisponible >= 1000) {
//             console.log("Venta exitosa y bienvenido.");
//         } else {
//             console.log("Rechazo de venta.");
//         }
//     }
// }


// 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
// llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
// deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
// guardar en una variable llamada numeroIngresado, y en cada intento deberás
// mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
// intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de adivinar,
// un mensaje que diga: “Ganaste, has adivinado el número.” No te preocupes si usas
// mucho código repetido, más adelante verás cómo realizar este juego de manera más
// eficiente.


// let numeroUsuario = prompt(`Adivina el número, tendrás 3 intentos. Ingresa un número del 1 al 10: `);
// let numeroIncognita = 8; //(Número a adivinar)
// let numeroDeIntentos = 3;

// function adivinanza () {
//     if (numeroUsuario > numeroIncognita) {
//         numeroUsuario = prompt(`El número ingresado es mayor.`);
//     } else if (numeroUsuario < numeroIncognita) {
//         numeroUsuario = prompt(`El número ingresado es menor.`);
//     } else if (numeroUsuario == numeroIncognita) {
//         alert(`¡Ganaste! Has adivinado el número.`);
//         break;
//     }
// }

// if (numeroUsuario != numeroIncognita) {
//     alert(`¡Agotaste tus intentos!`);
// }




// 9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 años),
// adolescente(13 a 18 años), un mayor joven (19 a 45 años) o un anciano (más de 45
// años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje preguntando
// si en realidad tiene esa edad.

// let edad = prompt(`ingresa tu edad: `);

// if (edad >= 0 && edad <=12){
//     alert(`eres un infante`);
//     }
//     else if (edad >= 13 && edad <=18){
//     alert(`eres un adolescente`);
//     }
//     else if (edad >= 19 && edad <=45){
//     alert(`eres un mayor joven`);
//     }
//     else if (edad >=45 && edad <=99){
//     alert(`eres un anciano`);
//     }
//     else if (edad >= 100){
//     alert(`¿realmente tienes esa edad?`);
// }



// 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
// jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. En caso
// de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
// trampa.

// let jugador1 = prompt(`Jugador 1: ingresa una opción: “PIEDRA”, “PAPEL” o “TIJERAS”`);
// let jugador2 = prompt(`Jugador 2: ingresa una opción: “PIEDRA”, “PAPEL” o “TIJERAS”`);


// const trampaJugador1 = (jugador1 !== “PIEDRA”, “PAPEL”, “TIJERAS”) + alert(`El jugador 1 ha hecho trampa`);
// const trampaJugador1 = (jugador2 !== “PIEDRA”, “PAPEL”, “TIJERAS”) + alert(`El jugador 2 ha hecho trampa`);

// const piedra = 1; 
// const papel = 2;
// const tijera = 3; 

// if (jugador1 == piedra){
//     if (jugador2 == piedra){
//         alert(`empate`);
//     }
//     else if (jugador2 == papel){
//         alert(`El Jugador 2 ha ganado la partida`);
//     }else if (jugador2 == tijera){
//         alert(`El Jugador 1 ha ganado la partida`);
//     }
// } 

// else if (jugador1 == papel){
//     if (jugador2 == piedra){ 
//         alert(`El jugador 1 ha ganado la partida`);
//     }
//     else if (jugador2 == papel){
//         alert(`empate`);
//     }else if (jugador2 == tijera){
//         alert(`El jugador 2 ha ganado la partida`);
//     }
// }

// else if (jugador1 == tijera){
//     if (jugador2 == piedra){ 
//         alert(`El jugador 2 ha ganado la partida`);
//     }
//     else if (jugador2 == papel){
//         alert(`El jugador 1 ha ganado la partida`);
//     }else if (jugador2 == tijera)
//         alert(`empate`);
//     }






// 11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
// por pantalla los siguientes mensajes según las opciones:
// ● Blanco o Negro: Falta de color.
// ● Verde: El color de la naturaleza.
// ● Azul: El color del agua.
// ● Amarillo: El color del sol.
// ● Rojo: El color del fuego.
// ● Marrón: el color de la tierra.
// ● y para cualquier otro valor: Excelente elección, no lo teníamos pensado.

// let color = prompt("Ingrese un color:");

// switch (color) {
//     case "blanco", "negro": 
//         console.log("Falta de color.")
//         break;
//     case "verde": 
//         console.log("El color de la naturaleza.")
//         break; 
//     case "azul": 
//         console.log("El color del agua.")
//         break; 
//     case "rojo": 
//         console.log("El color del fuego.")
//         break; 
//     case "marrón": 
//         console.log("el color de la tierra.")
//         break; 
//     default:
//         console.log("Excelente elección, no lo teníamos pensado.")
//         break;
// }


// 12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
// Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
// deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
// elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
// ERROR si el divisor ingresado fue 0.




// 13. Crear un programa que permita ingresar todos los datos de tu documento nacional de
// identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
// pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni
// con todos los datos ingresados y mostrarlos por consola con console.table() más un
// mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
// mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

let apellido = prompt (`Ingresa tu apellido: `); 
let nombre = prompt (`Ingresa tu nombre: `);
let numeroDeDocumento = prompt (`Ingresa tu número de documento: `);
let sexo = prompt (`Ingresa tu sexo: `);
let nacionalidad = prompt (`Ingresa tu nacionalidad: `);
let fechaDeExpedicion = prompt (`Ingresa tu fecha de expedicion: `);
let fechaDeVencimiento = prompt (`Ingresa tu fecha de vencimiento: `);

console.log(`Datos ingresados: `); 
console.log(`apellido ingresados: ${apellido}`); 
console.log(`nombre ingresados: ${nombre}`); 
console.log(`número de documento ingresados: ${numeroDeDocumento}`); 
console.log(`sexo ingresados: ${sexo}`); 
console.log(`nacionalidad ingresados: ${}`); 
console.log(`fecha de expedicion ingresados: ${}`); 
console.log(`fecha de vencimiento ingresados: ${}`); 