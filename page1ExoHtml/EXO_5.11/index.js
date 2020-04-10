let td = document.querySelectorAll("td");
let n;

function multiply() {
    n = prompt("entrez votre nombre");
    if (Math.trunc(n) == n) {
        for (let i = 0; i < td.length; i++)
            td[i].innerHTML = parseInt(n) * (i + 1);
    } else {
        return multiply();
    }
}
multiply()