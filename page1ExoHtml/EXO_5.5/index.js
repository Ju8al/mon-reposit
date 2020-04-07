let checked = 0;
let somme = 0;
let termesArr = [];
const nbInput = document.getElementById("nbInput");
const nbListen = document.getElementById("nbListen");
const nbSum = document.getElementById("nbSum");
nbInput.addEventListener("keydown", ins);
nbInput.addEventListener("keydown", sum);

function ins(a) {

    if (a.keyCode == 107) { //permet de remplir le tableau de valeurs puis de vider le champs à chaques nouvel ajout 
        termesArr.push(nbInput.value);
        nbListen.innerHTML = termesArr;
        nbInput.value = "";
        console.log(termesArr);
    } else if (a.keyCode == 46) { //permet la remise à zéro
        termesArr = [];
        nbListen.innerHTML = "";
        nbSum.innerHTML = "";
        somme = 0;
        console.clear();
    }
}

function sum(b) {
    if (b.keyCode == 13) { //permet de calculer la totalité et l'afficher
        checked++
        console.log(checked);

        for (let i = 0; i < termesArr.length; i++) {
            somme += parseInt(termesArr[i]);
        }
        nbSum.innerHTML = somme;
    }
}