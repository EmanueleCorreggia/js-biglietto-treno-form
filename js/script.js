var kmDaPercorrere = parseInt(prompt('inserisci i km da percorrere'));
console.log(kmDaPercorrere);
var etaUtente = parseInt(prompt('inserisci l\ età del passeggero'));
console.log(etaUtente);
var prezzoKm = 0.21;
var costoBiglietto = prezzoKm *kmDaPercorrere;
console.log(costoBiglietto);
var messaggio;
// se minore di 18
if (etaUtente < 18) {
  costoBiglietto -= ((costoBiglietto * 20) / 100);
  costoBiglietto += ((costoBiglietto * 20) / 100);
  messaggio = 'Puoi usufruire di uno sconto del 20%. Il costo del tuo biglietto è:' + costoBiglietto.tofixed(2) + '€';
// se over65
} else if (etaUtente > 65) {
  costoBiglietto -= ((costoBiglietto * 40) / 100);
  messaggio = 'Puoi usufruire di uno sconto del 40%. Il costo del tuo biglietto è:' + costoBiglietto.tofixed(2) + '€';
}else {
  messaggio = 'Il costo del tuo biglietto é:' + costoBiglietto.tofixed(2) + '€';
}
document.getElementById('messaggio').innerHTML = messaggio;
