//EJERCICIOS
// 1. Generar una función que reciba como parámetro un array de cervezas y devuelva un
// nuevo array con las 10 cervezas más alcohólicas.

// console.log(beers);

// const gradosCervezas = beers.filter(elElementoActual => elElementoActual.abv === "")
// console.log(gradosCervezas.abv)

// beers.sort((cerveza1, cerveza2) => cerveza2.abv - cerveza1.abv);
// const top10Cervezas = beers.slice(0, 25);
// console.log("Las 10 cervezas con mayor abv:");
// top10Cervezas.forEach((cerveza) => {
// console.log(`Nombre: ${cerveza.nombre}, abv: ${cerveza.abv}`);
// });




//2. Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo
// array con las 10 cervezas menos amargas.

// function cervezasMenosAmargas(beers) {
//   beers.sort((cerveza1, cerveza2) => cerveza1.ibu - cerveza2.ibu);
//   const cervezasMenosAmargas = beers.slice(0, 10);
//   return cervezasMenosAmargas;
// }

// const arrayDeCervezaservezasMenosAmargas = cervezasMenosAmargas(beers);
// arrayDeCervezaservezasMenosAmargas.forEach((cerveza) => {
//   console.log(`Nombre: ${cerveza.name}, ibu: ${cerveza.ibu}`);
// });



// 3. Generar una función que reciba como parámetro el array de cervezas y un valor de
// alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el
// nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la
// propiedades nombre, alcohol (abv) y "amargor" (ibu).

// function cervezasNivelEtilicoOk(arrayDeCervezas, valorAlcohol) {
//   const cervezasFiltradas = arrayDeCervezas.filter(cerveza => cerveza.abv <= valorAlcohol);
//   const cervezasNivelEtilicoOk = cervezasFiltradas.map(cerveza => ({
//     nombre: cerveza.name,
//     alcohol: cerveza.abv,
//     amargor: cerveza.ibu
//   }));
//   return cervezasNivelEtilicoOk;
// }

// const cervezasFiltradas = cervezasNivelEtilicoOk(beers, 5);
// console.log(cervezasFiltradas);


// 4. Generar una función que reciba como parámetro un array de cervezas, un nombre de
// propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas
// ordenadas por la propiedad ingresada como segundo argumento, de manera
// ascendente si el tercero es true o descendente si es false.

  function ordenarCervezas(beers, propiedad, ascendente) {
    const sortedBeers = beers.slice().sort((cerveza1, cerveza2) => {
        if (ascendente === true) {
            return cerveza1[propiedad] - cerveza2[propiedad];
        } else if (ascendente === false){ 
            return cerveza2[propiedad] - cerveza1[propiedad];
        }
    });

    return sortedBeers.slice(0, 10);
  }



// 5. Generar una función que reciba como parámetro un array de cervezas y un id. La
// función debe renderizar (renderizar, dibujar, pintar, llenar, etc) en un archivo html una
// tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del
// array. Cada fila debe tener los datos que se piden de cada una de las cervezas.

//    const beers2 = [
//      { name: "Beer 1", abv: 5.0, ibu: 20 },
//      { name: "Beer 2", abv: 6.2, ibu: 35 },
//      { name: "Beer 3", abv: 4.8, ibu: 25 }
//  ];

//  console.log(beers2);

//  function renderBeerTable(beerArray) {
//      const tableBody = document.querySelector("#beerTable tbody");

//      beerArray.forEach(beer => {
//          const row = tableBody.insertRow();

//          const nameCell = row.insertCell();
//          const abvCell = row.insertCell();
//          const ibuCell = row.insertCell();

//          nameCell.textContent = beer.name;
//          abvCell.textContent = beer.abv;
//          ibuCell.textContent = beer.ibu;
//      });
//  }

//  renderBeerTable(beers2);
