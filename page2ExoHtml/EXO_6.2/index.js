const texte = document.querySelector("span");
const entree = document.querySelector("input");
const alert = document.getElementById("alert");

function compare() {
    console.log(texte.innerHTML);
    console.log(entree.value);
    console.log(alert.innerHTML);
    if (entree.value != texte.innerHTML) {
        alert.innerHTML = "Incorrect :" + entree.value;
    } else
        alert.innerHTML = "CGV Acceptée"
}