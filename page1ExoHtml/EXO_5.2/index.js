let carre = document.getElementById("carre");

function right() {
    const left = carre.offsetLeft + 50;
    carre.style.left = left + "px";
}

function bottom() {
    const top = carre.offsetTop + 50;
    carre.style.top = top + "px";
}

function left() {
    const left = carre.offsetLeft - 50;
    carre.style.left = left + "px";
}

function hop() {
    const tops = carre.offsetTop - 50;
    carre.style.top = tops + "px";
}