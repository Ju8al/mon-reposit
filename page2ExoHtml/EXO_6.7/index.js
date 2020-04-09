const input = document.querySelectorAll("input");
let homme = document.getElementById("Homme")
let femme = document.getElementById("Femme")
let autre = document.getElementById("Autre")
let envoi = document.getElementById("envoi");
console.log(input);
const tab = [];
let vert = "julien";

envoi.addEventListener("click", function send() {
    for (let i = 3; i < input.length; i++) {
        tab.push(input[i].value);
    }
    if (homme.checked == true) {
        tab.unshift(homme.value)
    }
    if (femme.checked == true) {
        tab.unshift(femme.value)
    }
    if (autre.checked == true) {
        tab.unshift(autre.value)
    }
    console.log(tab);

    sessionStorage.setItem("C", JSON.stringify(tab));
    window.open("EXO_6.7(2).html")

});