// recupère les parametres de l'url 
const queryString = window.location.search;
// on utilise la fonction URLSearchParams pour pouvoir exploiter la queryString
const searchParams = new URLSearchParams(queryString);
// recuperation de l'attribut id
const userId = searchParams.get("id");
// appel a l'API avec une queryString variabilisée 
fetch('http://localhost:3000/users?id=' + userId)
    .then(response => response.json())
    .then(json => {

        //selection du span présent dans mon h3
        const spanUsername = document.querySelector("span");
        //récuperation de l'username
        const username = document.createTextNode(json["0"].username);
        // ajout de l'username dans le span
        spanUsername.appendChild(username);
    });

// appel a l'API avec une queryString variabilisée 
fetch("http://localhost:3000/posts?userId=" + userId)
    .then(response => response.json())
    .then(json => {

        //creation variable de stockage de mes bodyContent, title et le lien
        const divBox = document.getElementById("divBox")
        for (let i = 0; i < json.length; i++) {
            //creation d'une div pour chaques posts
            const div = document.createElement("div");
            div.className = "divPosts";
            //ceation des h3 que je mettrais dans mes div pour y stocker mes title
            const titleContent = document.createElement("h3");
            //creation d'un p que je mettrais dans mes div pour y stocker mes body
            const bodyContent = document.createElement("p");
            // création d'un lien hypertext qui nous enverra vers la page commentaires
            const comment = document.createElement("a");
            //insertion du text 
            comment.innerHTML = "Commentaires";
            //récuperation des title
            const title = document.createTextNode(json[i].title);
            //récuperation des body 
            const body = document.createTextNode(json[i].body);
            // créer un attribut href afin de remplacer la page par la nouvelle avec l'id correspondant
            comment.setAttribute("href", "/comments.html?id=" + json[i].id);
            // ajout de mes div dans ma divBox
            divBox.appendChild(div);
            // ajout de mes title dans mes titleContent
            titleContent.appendChild(title);
            // ajout de mes body dans mes bodyContent
            bodyContent.appendChild(body);
            // ajout des titleContent à mes div
            div.appendChild(titleContent);
            // ajout des bodyContent à mes div
            div.appendChild(bodyContent);
            // ajout des lien hyperText à mes div
            div.appendChild(comment);

        }
    })