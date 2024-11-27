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