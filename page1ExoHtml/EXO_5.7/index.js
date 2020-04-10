let nbAl = 0;
const nbUser = document.getElementById("nbUser");
const cQuoi = document.getElementById("cQuoi")

function tirage(min, max) {
    nbAl = Math.round(Math.random() * (max - min) + min);
}
tirage(0, 1000);
console.log(Math.round(nbAl));

function clic() { // trouver le chiffre
    if (nbUser.value > nbAl) {
        cQuoi.innerHTML = "c'est plus petit";
        console.log(nbUser.value);
    } else if (nbUser.value < nbAl) {
        cQuoi.innerHTML = "c'est plus grand";
        console.log(nbUser.value);
    } else
        cQuoi.innerHTML = "Felicitation vous avez gagne";
    console.log(nbUser.value);
}