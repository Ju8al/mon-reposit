const tab = [-2, 1, 4];
const div = document.querySelectorAll("div");

function additionne() {
    for (let x = 0; x < tab.length; x++) {
        tab[x] = tab[x] * 2;

    }
    console.log(tab);
}

console.log(div);



function affiche() {
    additionne()
    for (let i = 0; i < div.length; i++) {
        div[i].innerHTML = tab[i];

    }
    console.log(tab[0]);
}