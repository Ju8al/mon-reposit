let objets = document.querySelectorAll("span");
let pays = document.getElementById("pays")
console.log(objets);
console.log(objets[0]);
console.log(objets[1]);



for (let i = 0; i < objets.length; i++) {
    objets[i].addEventListener("click", function() {
        if (objets[i] === objets[0]) {
            objets[0].innerHTML = "Paris"
        }
        if (objets[i] === objets[1]) {
            objets[1].innerHTML = "Rome"
        }
        if (objets[i] === objets[2]) {
            objets[2].innerHTML = "Washinton"
        }
        if (objets[i] === objets[3]) {
            objets[3].innerHTML = "Berlin"
        }
        if (objets[i] === objets[4]) {
            objets[4].innerHTML = "Séoul"
        }
    })
}