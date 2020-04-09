let monTableau = document.querySelectorAll("tr")
console.log(monTableau);



let storage = sessionStorage.getItem("C");
let toto = JSON.parse(storage);
console.log(JSON.parse(storage));

for (let i = 0; i < monTableau.length; i++) {
    monTableau[i].innerHTML = toto[i];

    console.log(monTableau[i].innerHTML);

}