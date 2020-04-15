fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => {
        console.log(json)

        let divBox = document.getElementById("divBox") //creation variable de stockage de mes div
        for (let i = 0; i < json.length; i++) {
            let linkUsername = document.createElement("a"); //creation d'un h3 que je mettrais dans ma div pour y stocker mes username
            let username = document.createTextNode(json[i].username); //récuperation des username
            linkUsername.setAttribute("href", "/posts.html?userId=" + json.users("userId"))
            linkUsername.appendChild(username); // ajoute name dans mes h3
            divBox.appendChild(linkUsername); // ajoute le contenant à la div de mon html
        }
    });