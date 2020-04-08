let revenu = document.getElementById("revenu");
let cp = document.getElementById("cp");
let retour = document.getElementById("reponse");
const valid = document.getElementById("valid");
let impots = 0;
valid.addEventListener("click", impot)

function calcul() {
    impots = revenu.value / 2;

}

function impot() {

    if ([...cp.value][0] == "5" && [...cp.value][1] == "9") {
        retour.innerHTML = "Vous ne payez pas d'impots ;)";
    } else {
        calcul()
        retour.innerHTML = " veuillez nous verser " + impots + " € sous un délai de 5 minutes :D";
    }

}