/* document.getElementById("divColor").style.backgroundColor = "red";
document.getElementById("color").value = "#000fff"; */

function myFunction() {
    const x = document.getElementById("color").value;
    const height = document.getElementById("height").value;
    const width = document.getElementById("width").value;
    const posX = document.getElementById("posX").value;
    const posY = document.getElementById("posY").value;
    const divColor = document.getElementById("divColor");

    divColor.style.backgroundColor = x;
    divColor.style.height = height + "px";
    divColor.style.width = width + "px";
    divColor.style.marginLeft = posX + "px";
    divColor.style.marginTop = posY + "px";

}