let euro = document.querySelector("#euro");
let dollar = document.querySelector("#dollar");
const input = document.querySelectorAll("input");
const taux = 1.24;
let result = 0;
let secResult = 0;
euro.addEventListener("input", euroDollar);
dollar.addEventListener("input", dollarEuro);

function euroDollar() {

    result = euro.value * taux;
    dollar.value = Math.round(result * 100) / 100;

}

function dollarEuro() {

    secResult = dollar.value / taux;
    euro.value = Math.round(secResult * 100) / 100;

}