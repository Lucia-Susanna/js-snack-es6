/* Snack 1
  - creo array oggetti ognuno con le sue proprietà: nome e peso
  - creo una variabile 'bicileggera' a cui di default assegno l'oggetto all'indice 0 dell'array
  - creo un ciclo in cui confronto uno per uno i valori della chiave 'peso' con la variabile 'bicileggera'
  - se il peso della bici confrontata è minore vado a sovrascrivere l'oggetto in 'bicileggera' altrimenti passo al prossimo confronto.
  - stampo in pagina il nome della bici selezionata con il peso minore
*/  

const bike = [
  {
    name: 'mountainBike',
    weight: 17
  },
  {
    name: 'cityBike',
    weight: 15
  },
  {
    name: 'foldingBike',
    weight: 12
  },
  {
    name: 'eBike',
    weight: 25
  },
  {
    name: 'tandem',
    weight: 20
  },
  {
    name: 'trialBike',
    weight: 8
  },
  {
    name: 'bmx',
    weight: 18
  },
]
let lighterBike = bike[0];

for (let i = 0; i<bike.length; i++){

  if (bike[i].weight < lighterBike.weight){
    lighterBike = bike[i]
  }
}

document.getElementById('bike').innerHTML = `La bici più leggera è la ${lighterBike.name} `


/* Snack 2
  - creo il mio array di oggetti con le proprietà indicate
  - creo una funzione che genera numeri random e vado a inserire questi numeri come valore delle proprietà non compilate
  - stampo in console un nuovo aarray che abbia come proprietà solo nome e falli subiti
*/ 

//creo l'array iniziale

const teams = [
  {
    name: 'juventus',
    points: 0,
    fowl: 0

  },
  {
    name: 'milan',
    points: 0,
    fowl: 0

  },
  {
    name: 'napoli',
    points: 0,
    fowl: 0

  },
  {
    name: 'inter',
    points: 0,
    fowl: 0

  },
  {
    name: 'atalanta',
    points: 0,
    fowl: 0

  }
]



// creo una funzione che genera numeri random dato un range

function randomNumbers(min,max){
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
  return randomNumber
}

// ciclo gli elementi dell'array e vado a sovrascrivere i valori di points e fowl con un numero random

for (let team of teams){
  team.points = randomNumbers(0,30);
  team.fowl = randomNumbers(0,8);
}

// creo il secondo array

let teamsArray = [];

// ciclo gli elementi di teams e inserisco a ogni ciclo le proprietà richieste nell'ggetto vuoto che a sua volta pusho a ogni ciclo nell'array vuoto

for(let i = 0; i < teams.length; i++){
  let teamsObject = {}
  teamsObject.name = teams[i].name
  teamsObject.fowl = teams[i].fowl
  teamsArray.push(teamsObject)
}

//stampo in console entrambi gli array

console.log(teams)
console.log(teamsArray)



/* Snack 3
 Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
 La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due nu
*/

function arraySelection (array, min, max){
   selectedArray = array.slice(min,max)
   return selectedArray
}


selectedBike = arraySelection(bike, 2, 5)
console.log(selectedBike)

