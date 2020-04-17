// appel a l'API
fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => {

        //creation variable de stockage de mes div
        const divBox = document.getElementById("divBox");
        for (let i = 0; i < json.length; i++) {
            //creation d'un lien hyperText que je mettrais dans ma div pour y stocker mes username cliquable
            const linkUsername = document.createElement("a");
            // ajout d'une class afin de modifier son style
            linkUsername.className = "link";
            //récuperation des username
            const username = document.createTextNode(json[i].username);
            //rattachement du lien hyperText avec l' attribut href afin de remplacer la page par la nouvelle avec l'id correspondant 
            linkUsername.setAttribute("href", "/posts.html?id=" + json[i].id);
            //ajout de name dans mes h3
            linkUsername.appendChild(username);
            //ajout du contenant à la div de mon html
            divBox.appendChild(linkUsername);
        }
    });