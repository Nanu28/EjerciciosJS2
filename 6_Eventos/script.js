// 1° - Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
// haber un botón que diga “Cambiar”, al hacer click sobre el botón, el color de relleno
// del cuadrado deberá cambiar a celeste.
// Extras:
// ● Al hacer nuevamente click el color del cuadrado deberá cambiar a rojo.
// ● Lograr que cada vez que haya un cambio de color aparezca el nombre del color
// dentro del cuadrado.


// const square = document.getElementById("square");
// const changeButton = document.getElementById("changeButton");

// let isGray = true;

// changeButton.addEventListener("click", () => {
//     if (isGray) {
//         square.style.backgroundColor = "lightblue";
//         square.textContent = "Celeste";
//         isGray = false;
//     } else {
//         square.style.backgroundColor = "red";
//         square.textContent = "Rojo";
//         isGray = true;
//     }
// });


// 2° - Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
// haber un input de texto, al escribir en el input de texto, los que se esté escribiendo
// deberá aparecer impreso dentro del cuadrado.
// Extras:
// ● Crea un botón para borrar el contenido del cuadrado.

// const cuadradoEjercicio3 = document.getElementById("cuadradoEjercicio3");
// const textInput = document.getElementById("textInput");

// textInput.addEventListener("input", (event) => {
//     const text = event.target.value;
//     cuadradoEjercicio3.textContent = text;
// });



// 3° - Crear una aplicación que calcule el índice de masa corporal, al presionar el
// botón “calcular” deberá mostrar el resultado en el input correspondiente.
// const weightInput = document.getElementById("weight");
// const heightInput = document.getElementById("height");
// const calculateButton = document.getElementById("calculateButton");
// // const resultInput = document.getElementById("result");

//  calculateButton.addEventListener("click", () => {
//      const weight = parseFloat(weightInput.value);
//      const height = parseFloat(heightInput.value);
    
//      if (!isNaN(weight) && !isNaN(height) && height > 0) {
//          const bmi = calculateBMI(weight, height);
//          resultInput.value = bmi.toFixed(2);
//      } else {
//          resultInput.value = "";
//      }
//  });

//  function calculateBMI(weight, height) {
//      return weight / (height * height);
//  }


// 4° - Crear una aplicación de conversión de divisa. Deberá tener los valores por
// defecto, por ejemplo 1 dólar = 500 pesos ( valor de ejemplo ), y al hacer algún cambio
// en alguno de los inputs se deberá ver reflejado su correspondiente valor en la
// moneda a convertir.
// const dollarsInput = document.getElementById("dollars");
// const pesosInput = document.getElementById("pesos");
// const pesosToDollarsInput = document.getElementById("pesosToDollars");
// const dollarsToPesosInput = document.getElementById("dollarsToPesos");

// const exchangeRate = 500; // Valor de ejemplo: 1 dólar = 500 pesos

// dollarsInput.addEventListener("input", () => {
//     const dollars = parseFloat(dollarsInput.value);
//     const convertedPesos = dollars * exchangeRate;
//     pesosInput.value = convertedPesos.toFixed(2);
// });

// pesosToDollarsInput.addEventListener("input", () => {
//     const pesosToDollars = parseFloat(pesosToDollarsInput.value);
//     const convertedDollars = pesosToDollars / exchangeRate;
//     dollarsToPesosInput.value = convertedDollars.toFixed(2);
// });
