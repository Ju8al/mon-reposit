const input = document.querySelectorAll("input");
const tabView = document.getElementsByClassName("item");
let homme = document.getElementById("Homme")
let femme = document.getElementById("Femme")
let autre = document.getElementById("Autre")
let envoi = document.getElementById("envoi");
console.log(input);
console.log(tabView);
const tab = [];

envoi.addEventListener("click", function() {
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
    for (let i = 0; i < tab.length; i++) {
        tabView[i].innerHTML = tab[i];

    }
});