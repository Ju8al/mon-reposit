// recupère les parametres de l'url 
const queryString = window.location.search;
// on utilise la fonction URLSearchParams pour pouvoir exploiter la queryString
const searchParams = new URLSearchParams(queryString);
// recuperation de l'attribut id
const userId = searchParams.get("id");

// appel a l'API avec une queryString variabilisée
fetch('http://localhost:3000/posts?id=' + userId)
    .then(response => response.json())
    .then(json => {

        //selection du span présent dans mon h3
        const spanPost = document.getElementById("post");
        //récuperation de title
        const title = document.createTextNode(json["0"].title);
        // ajout de Title dans le span
        spanPost.appendChild(title);
    });

// appel a l'API avec une queryString variabilisée 
fetch("http://localhost:3000/comments?postId=" + userId)
    .then(response => response.json())
    .then(json => {

        //creation variable de stockage de mes name, body et email
        const divBox = document.getElementById("divBox")
        for (let i = 0; i < json.length; i++) {
            //creation d'une div pour chaques commentaires
            const div = document.createElement("div");
            div.className = "divComments";
            //ceation des h3 que je mettrais dans mes div pour y stocker mes name
            const nameContent = document.createElement("h3");
            //creation d'un p que je mettrais dans mes div pour y stocker mes body
            const bodyContent = document.createElement("p");
            //ceation des a que je mettrais dans mes div pour y stocker mes email cliquable
            const emailContent = document.createElement("a");
            //récuperation des name
            const name = document.createTextNode(json[i].name);
            //récuperation des body 
            const body = document.createTextNode(json[i].body);
            //récuperation des email
            const email = document.createTextNode(json[i].email);
            // permet au lien de renvoyer vers notre boite mail afin d'envoyer un mail a l'auteur du commentaire
            emailContent.setAttribute("href", "mailto:" + json[i].email);
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