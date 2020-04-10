/*------ impots----- */
let impots = 655.2;
let impotsStep2 = 0;
/*----- salaire ----- */
const salaireBase = 3640;
let reducFemme = 0;
let reducFamille = 0;
let assu = 0;
let rpc = 0;
let bonus = 0;
let alloc = 0;

const genre = document.getElementById("female");
const nbPers = document.getElementById("nbPers");
const handic = document.getElementById("true");
const assur = document.getElementById("oui");
const local = document.getElementById("pos");
const result = document.getElementById("result");

/*------------------------------ calcul impots ------------------------------*/
function impot1() { //réduction d'impot pour les familles nombreuses

    if (nbPers.value == 3) {
        reducFamille = -36.4;
    }
    if (nbPers.value >= 4) {
        reducFamille = -72.8;
    }
    return reducFamille
}

function impot2() { //réduction d'impot pour les femmes

    if (genre.checked == true) {
        reducFemme = -72.8;
    }
    return reducFemme
}

function send() {
    console.log("(" + impots)
    console.log(impot1() + ")");
    console.log(impot2());
    console.log(salaireBase)

    if (handic.checked == true) { // calcul allocation handicapé
        alloc = 150
        console.log("+" + alloc);

    }
    if (nbPers.value >= 4) { // calcul bonus 4 personnes à charge
        bonus = 100;
        console.log("+" + bonus);
    }
    if (assur.checked == true) { // calcul assurance
        assu = 254.8;
        console.log("-" + assu);
    }
    if (local.checked == true) { // calcul resident canadien
        rpc = 182; //Régime Pension Canada
        console.log("-" + rpc);
    }

    salaireFinal = (salaireBase - impots - impot1() - impot2() - assu - rpc) + (alloc + bonus);
    console.log(salaireFinal);

    result.innerHTML = Math.round(salaireFinal * 100) / 100;
}