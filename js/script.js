var buttonGenera = document.getElementById('genera');
buttonGenera.addEventListener('click',
  function() {
    var nome = document.getElementById('nome').value;
    document.getElementById('nome-passeggero').innerHTML= nome;

    var inputKm = document.getElementById('km');
    console.log(inputKm);
    var kmDaPercorrere = parseInt(inputKm.value);
    console.log(kmDaPercorrere);

    var fasciaEtaSelect = document.getElementById('fascia-eta');
    var fascia = fasciaEtaSelect.value;
    console.log(fascia)

    var prezzoKm = 0.21;
    var costoBiglietto = prezzoKm * kmDaPercorrere;
    document.getElementById('costo').innerHTML=costoBiglietto.toFixed(2);
    console.log(costoBiglietto);

    var offerta = 'Tariffa Standard';
    // se minore di 18
    if (fascia == 'minorenne') {
      costoBiglietto -= ((costoBiglietto * 20) / 100);
      document.getElementById('offerta').innerHTML= ('Sconto Young');
      offerta = 'Sconto Minorenne';
      document.getElementById('costo').innerHTML= costoBiglietto.toFixed(2);
    // se over65
  } else if (fascia == 'over65') {
      document.getElementById('offerta').innerHTML= ('Sconto Silver');
      costoBiglietto -= ((costoBiglietto * 40) / 100);
      offerta = 'Sconto Silver';
      document.getElementById('print_costo').innerHTML= costoBiglietto.toFixed(2);
    }
    else {
      document.getElementById('offerta').innerHTML= ('Tariffa Standard');
      document.getElementById('costo').innerHTML= costoBiglietto.toFixed(2);
    }
    var carrozza = Math.floor(Math.random() * 9) + 1;
    var codiceCp = Math.floor(Math.random() * (9999 - 9000) ) + 9000;
    document.getElementById('nome-passeggero').inneHTML = nome;
    document.getElementById('offerta').inneHTML = offerta;
    document.getElementById('costo').inneHTML = costoBiglietto.toFixed(2);
    document.getElementById('carrozza').innerHTML= carrozza;
    document.getElementById('codice-cp').innerHTML= codiceCp;

    // comparsa del biglietto
    var bigliettoDiv = document.getElementById("biglietto");
    bigliettoDiv.classList.add("show");
    bigliettoDiv.classList.remove("hidden");
  }
);

var annulla = document.getElementById('annulla');
annulla.addEventListener('click',
 function() {
   var bigliettoDiv = document.getElementById("biglietto");
   bigliettoDiv.classList.remove("show");
   bigliettoDiv.classList.add("hidden");
   document.getElementById('nome-passeggero').inneHTML = '';
   document.getElementById('offerta').inneHTML = '';
   document.getElementById('costo').inneHTML = '';
   document.getElementById('carrozza').innerHTML= '';
   document.getElementById('codice-cp').innerHTML= '';

   document.getElementById('nome-utente').value = '';
   document.getElementById('km').value = '';
   document.getElementById('fascia-eta').value = '';




 }
);
