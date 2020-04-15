var searchParams = new URLSearchParams(window.location.search);
var userId = searchParams.get("userId");
fetch('http://localhost:3000/posts?userId=' + searchParams.get("userId"))
    .then(response => response.json())
    .then(json => {
        console.log(json)

        let divBox = document.getElementById("divBox") //creation variable de stockage de mes paragraphes
        let paragraph = document.createElement("p"); //creation d'un p que je mettrais dans ma div pour y stocker mes body
        let body = document.createTextNode(json.body); //récuperation des body
        paragraph.appendChild(body); // ajoute body dans mes paragraphes
        divBox.appendChild(paragraph); // ajoute le contenant à la div de mon html
    })