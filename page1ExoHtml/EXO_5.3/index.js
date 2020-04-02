function rectangle1() {
    const c = document.getElementById("canvas");
    const ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = "2";
    ctx.rect(10, 10, 200, 800);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
}
rectangle1()