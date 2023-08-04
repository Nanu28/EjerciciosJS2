//1. Crear una variable llamada miNombre y guardar en ella su primer nombre.

// let miNombre = "Nadia"


//2. Crear una variable llamada miApellido y guardar en ella su apellido.

// let miApellido = "Aliste"


//3. Crear una variable llamada miEdad y guardar en ella su edad.

// let miEdad = 33


//4. Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.

// let miMascota = "Berlin"


//5. Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.

// let edadMascota = 5


// 6. Visualizar todas las variables dentro de la consola del navegador escribiendo el
// nombre de cada una de ellas.


// 7. Crear una variable llamada nombreCompleto y guardar en ella la concatenación de
// miNombre y miApellido.

// let nombreCompleto= miNombre + " " + miApellido


// 8. Crear una variable llamada textoPresentacion y guardar en ella un texto comprendido
// con todas las variables creadas hasta el momento.

// let textoPresentacion = miNombre + " " + miApellido + " " + miEdad + " " + miMascota + " " + edadMascota


// 9. Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades y
// calcular sus respectivas operaciones con las variables miEdad y edadMascota.

// let sumaEdades = miEdad + edadMascota
// let restarEdades = miEdad - edadMascota
// let productoEdades = miEdad * edadMascota
// let divisionEdades = miEdad / edadMascota


// 10. Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho
// objeto utilizando console.table() y también mostrar cada una de las propiedades del
// objeto por separado.

// let alumno = {
//     nombre: "Andres",
//     edad: 41,
//     nacionalidad: "chileno",
//     cohort: "51",
//     especialidad: "Java"
// }


// 11. Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho
// objeto utilizando console.table() y también mostrar cada una de las propiedades del
// objeto por separado.

// let mascota = {
//     nombre: "Idoia",
//     edad: 8,
//     color: "castaño",
//     raza: "Yorkshire",
//     peso: "2 kilos"
// }


// 12. Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el
// array completo y cada uno de los elementos por separado.

// let frutas = ["manzana", "banana", "anana", "naranja", "sandia"]


// 13. Compare su edad ingresada por pantalla con prompt() con el número 18 y guardarlo
// en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga:
// Soy mayor de edad y el valor de la variable.


// 14. Crear un array llamado numeros con un mínimo de 5 elementos y mostrar por consola
// el array completo y cada uno de los elementos por separado.

// let numeros = [1, 2, 3, 4, 5]


// 15. Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el
// array completo y cada uno de los elementos por separado.

// let familia = ["papá", "mamá", "hijo", "hija", "perro", "gato"]


// 16. Crear una variable llamada textoAleatorio formando una frase con el segundo
// elemento del array del punto 12, el cuarto elemento del punto 14 y el quinto objeto del
// array del punto 15.

// let textoAleatorio= [(frutas[2]) + (numeros[4]) + (familia[5])]
// console.log (textoAleatorio)

// 17. Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar
// por consola los resultados de comparar los valores y guardarlos en variables llamadas
// por ejemplo: edadesIguales, soyMayor, soyMenor, etc. y mostrar mensajes en consola
// como los siguientes:
// a. Mi edad es igual a la de mi compañero: false
// b. Mi edad es mayor a la de mi compañero: true
// c. Mi edad es menor a la de mi compañero: false

// let miEdad = 33
// let edadCompañero = prompt(`ingrese su edad: `)

// let edadesIguales = miEdad === edadCompañero
// let soyMayor = miEdad > edadCompañero
// let soyMenor = miEdad < edadCompañero

// console.log("Mi edad es igual a la de mi compañero: " + edadesIguales)
// console.log("Mi edad es mayor a la de mi compañero: " + soyMayor)
// console.log("Mi edad es menor a la de mi compañero: " + soyMenor)   

// 18. Introducir por pantalla la edad y la altura de una persona y guardarlas en variables
// separadas y en una variable llamada puedeSubir el resultado de la operación
// resultante de si la persona es mayor de 6 años y además tiene una altura mínima de
// 120 cm y mostrar por consola un mensaje como el siguiente: Puede subir a la
// atracción y el valor de la variable resultante.

// let edadPersona = prompt(`ingrese su edad: `)
// let alturaPersona = prompt(`ingrese su altura: `)

// let puedeSubir = edadPersona > 6 && alturaPersona > 120

// console.log(`Puede subir a la atracción. Edad: ${edadPersona} Altura: ${alturaPersona}`)