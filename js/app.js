// Scrivere un programma che chieda all’utente:

// - inserisco le costanti fisse

const PREZZO_PER_KM = 0.21
const SCONTO_OVER_65 = 40
const SCONTO_MINORENNI = 20

// - prendo dal dom il numero di chilometri da percorrere
const inputDOMElement = document.getElementById('km')
console.log(inputDOMElement)
// - Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
const
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - La differenza è che i dati dell’utente li prenderemo da degli input, e calcoleremo il prezzo quando l’utente clicca su un pulsante ‘calcola’

