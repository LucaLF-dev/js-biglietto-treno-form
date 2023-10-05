// Scrivere un programma che chieda all’utente:

// - inserisco le costanti fisse


console.log('==', "2" == 2);
console.log('===', "2" === '2');

const PREZZO_PER_KM = 0.21

document.getElementById('btn-submit').addEventListener('click', function () {
    // - recupero dal dom il numero di chilometri da percorrere
    //   - seleziono l'elemento input tramite id
    const inputDOMElement = document.getElementById('km');
    console.log(inputDOMElement);
    //   - recupero il valore presente nell'input e lo salvo in una variabile
    const km = inputDOMElement.value;
    console.log(km);

    // - recupero dal dom l' Età del passeggero 
    //   - seleziono l'elemento input tramite id
    const selDOMElement = document.getElementById ('discount');
    console.log(selDOMElement)

    // - il prezzo del biglietto è definito in base ai km (0.21 € al km)
    //    - calcolo il prezzo base dei km da percorrere
    const prezzoBase= parseFloat(PREZZO_PER_KM * km);
    console.log(prezzoBase)

    // - prezzo finale sottraendo lo sconto
    let finalPrice;

    if (selDOMElement.value === '0') {
    // - calcolo lo sconto del 20%
        const discountUnder = prezzoBase * ( 20 / 100);
        console.log('DISCOUNT UNDER', discountUnder)

    // - va applicato uno sconto del 20% per i minorenni
        finalPrice = prezzoBase - discountUnder;
        console.log(finalPrice);

    } else if (selDOMElement.value === '2') {
    // - calcolo lo sconto del 40%
        const discountOver = prezzoBase * ( 40 / 100);
        console.log(discountOver);


    // - va applicato uno sconto del 40% per gli over 65.
        finalPrice = prezzoBase - discountOver;
        console.log(finalPrice);
    } else {

        finalPrice = prezzoBase;
        console.log(finalPrice);
    }

    const finalPriceDOMElement = document.querySelector('.price');
    finalPriceDOMElement.innerHTML = finalPrice.toFixed(2) + '&euro;';

});

// - stampare nell inner HTml il prezzo finale


