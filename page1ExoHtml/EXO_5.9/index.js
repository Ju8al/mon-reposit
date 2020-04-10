function button() {
    const reponse = document.querySelector("h2");
    const ladate = new Date()
    const tab_jour = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    reponse.innerHTML = ("Nous sommes un " + tab_jour[ladate.getDay()])
}