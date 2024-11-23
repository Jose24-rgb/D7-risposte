// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}
let creditcard= 60 /*60+41-18=83 quindi paga la spedizione non ha superato i 100*/
let sconto = 18 
let spedizione = 50
let spesa = 41 /*34+5+2=41*/

if( creditcard > 60 ) {
  sconto = 18
  console.log(18) }

else if ( spedizione > 50 ) {
  console.log(50) }

else { spesa = 41
  console.log(41) }
  let checkout = creditcard - sconto + spedizione + spesa
  console.log( creditcard - sconto + spedizione + spesa  )




const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}
let creditcard= 60 /*60+41=101 quindi non paga la spedizione ha superato i 100*/
let sconto = 0 
let spedizione = 0
let spesa = 41 /*34+5+2=41*/

if( creditcard > 60 ) {
  sconto = 0
  console.log(0) }

else if ( spedizione > 0 ) {
  console.log(0) }

else { spesa = 41
  console.log(41) }
  let checkout = creditcard - sconto + spedizione + spesa
  console.log( creditcard - sconto + spedizione + spesa  )




const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}
let creditcard= 60 /*60+41=101 quindi non paga la spedizione ha superato i 100*/
let sconto = 0 
let spedizione = 0
let spesa = 41 /*34+5+2=41*/

if( creditcard > 60 ) {
  sconto = 0
  console.log(0) }

else if ( spedizione > 0 ) {
  console.log(0) }

else { spesa = 41
  console.log(41) }
  let checkout = creditcard - sconto + spedizione + spesa
  console.log( creditcard - sconto + spedizione + spesa  )




const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = Marco 



/* chi è un ambassador*/
let autenti = ['Marco Rossi', 'Paul Flynn', 'Amy Reed']
console.log(autenti)
console.log(autenti.length)
autenti.push("Marco Rossi e' un ambassador")
autenti.push("Paul Flynn non è un ambassador")
autenti.push("Amy Reed non è un ambassador")



/*nomi ambassador:*/
let autenti = ['Marco Rossi', 'Paul Flynn', 'Amy Reed']
console.log(autenti)
console.log(autenti.length)
/*altri esempi
let autente = ['Marco Rossi']
for (let i = 0; i < autente.length; i++) {
console.log("ambassador" + autente[i]);}     /* + (i+1) se fossero stati tutti e dovessi elencarli per numero*/