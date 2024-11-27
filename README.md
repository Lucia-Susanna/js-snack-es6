SNACKS-JS
===
Repo: js-snack-es6

## Istruzioni:

- Snack 1
  Creare un array di oggetti:
  Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
  Stampare a schermo la bici con peso minore.

- Snack2
  Creare un array di oggetti di squadre di calcio.
  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
  Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
  Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
  Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

- Snack 3 (Bonus)
  Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

## Svolgimento:

- Snack 1
  - creo array oggetti ognuno con le sue proprietà
  - creo una variabile 'bicileggera' a cui di default assegno l'oggetto all'indice 0 dell'array
  - creo un ciclo in cui confronto uno per uno i valori della chiave 'peso' con la variabile 'bicileggera'
  - se il peso della bici confrontata è minore vado a sovrascrivere l'oggetto in 'bicileggera' altrimenti passo al prossimo confronto.
  - stampo in pagina il nome della bici selezionata con il peso minore

- Snack 2
  - creo il mio array di oggetti con le proprietà indicate
  - creo una funzione che genera random e vado a inserire questi numeri come valore delle proprietà non compilate
  - stampo in console un nuovo aarray che abbia come proprietà solo nome e falli subiti

- Snack 3
- inizializzo un array vuoto
- creo una funzione al cui interno metto un ciclo for che parte da i=numA fino i<=numb
- pusho gli elementi uno per uno nell'array vuoto
