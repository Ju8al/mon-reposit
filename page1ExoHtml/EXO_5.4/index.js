const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");
const img = document.getElementById("image");
const img2 = document.getElementById("image2");

window.onload = function() {
    ctx.drawImage(img, 10, 10);
    ctx.drawImage(img2, 490, 150, 100, 110);
    ctx.beginPath();
    ctx.arc(130, 235, 55, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.stroke();
};