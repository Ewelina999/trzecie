let formularz = document.querySelector('.js-section1__formDolar');
let inputKwota = document.querySelector('.js-section1__value');
let inputDolar = document.querySelector('.js-section1__checkDolar');
let inputZlotowka = document.querySelector('.js-section1__checkZlotowka');
let buttonPrzelicz = document.querySelector('.js-section1__convert');
let buttonWyczysc = document.querySelector('.js-section1__reset')
let divWynik = document.querySelector('.js-section1__wynik')

let kwota = inputKwota.value;


function zlotowkaDolarChecked() {
    //console.log('Działa zlotowkaChecked');
    if (inputZlotowka.checked === true) {
        console.log('ZAZNACZONY zl, pusty $')
        inputDolar.checked = false;

        divWynik.textContent = (inputKwota.value / 4.25).toFixed(2) + "$";

    } else if (inputZlotowka.checked === false) {
        console.log('PUSTY zl, zaznaczony $');
        inputDolar.checked = true;

        divWynik.textContent = (inputKwota.value * 4.25).toFixed(2) + "zł";
    }

}



function kalkulatorWalutowy(e) {
    e.preventDefault();
    console.log('działa formularz');
    zlotowkaDolarChecked()
}

function wyczysc() {
    divWynik.textContent = "";
    console.log('formularz został zresetowany');
}


formularz.addEventListener('submit', kalkulatorWalutowy)

buttonWyczysc.addEventListener('click', wyczysc)