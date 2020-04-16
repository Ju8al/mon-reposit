// recupère les parametres de l'url 
let queryString = window.location.search;
// on utilise la fonction URLSearchParams pour pouvoir exploiter la queryString
let searchParams = new URLSearchParams(queryString);
// recuperation de l'attribut id
let userId = searchParams.get("id");

// appel a l'API avec une queryString variabilisée
fetch('http://localhost:3000/posts?id=' + userId)
    .then(response => response.json())
    .then(json => {

        //selection du span présent dans mon h3
        let spanPost = document.getElementById("post");
        //récuperation de title
        let title = document.createTextNode(json["0"].title);
        // ajout de Title dans le span
        spanPost.appendChild(title);
    });

// appel a l'API avec une queryString variabilisée 
fetch("http://localhost:3000/comments?postId=" + userId)
    .then(response => response.json())
    .then(json => {

        //creation variable de stockage de mes name, body et email
        let divBox = document.getElementById("divBox")
        for (let i = 0; i < json.length; i++) {
            //creation d'une div pour chaques commentaires
            let div = document.createElement("div");
            //ceation des h3 que je mettrais dans mes div pour y stocker mes name
            let nameContent = document.createElement("h3");
            //creation d'un p que je mettrais dans mes div pour y stocker mes body
            let bodyContent = document.createElement("p");
            //ceation des h3 que je mettrais dans mes div pour y stocker mes email
            let emailContent = document.createElement("h3");
            //récuperation des name
            let name = document.createTextNode(json[i].name);
            //récuperation des body 
            let body = document.createTextNode(json[i].body);
            //récuperation des email
            let email = document.createTextNode(json[i].email);
            // ajout de mes div dans ma divBox
            divBox.appendChild(div);
            // ajout de mes name dans mes nameContent
            nameContent.appendChild(name);
            // ajout de mes body dans mes bodyContent
            bodyContent.appendChild(body);
            // ajout de mes email dans mes emailContent
            emailContent.appendChild(email);
            // ajout des nameContent à mes div
            div.appendChild(nameContent);
            // ajout des bodyContent à mes div
            div.appendChild(bodyContent);
            // ajout des emailContent à mes div
            div.appendChild(emailContent);


        }
    })