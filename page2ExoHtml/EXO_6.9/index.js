const text = document.getElementById("text");
text.addEventListener("input", scan);
let mots = document.getElementById("mots");
let caract = document.getElementById("caract");
let alerte = document.getElementById("alerte");
let cptMots = 0;
let cptCaract = 0;


function scan() {
    let tabCaract = text.value.split('');
    caract.innerHTML = tabCaract.length;
    let tabMots = text.value.split(' ');
    mots.innerHTML = tabMots.length;

    if (tabCaract.length >= 100 || tabMots.length >= 10) {
        alerte.innerHTML = "Dépassement";
    } else {
        alerte.innerHTML = "";
    }
}