let ms = document.getElementById("milli");
let sec = document.getElementById("secondes");
let min = document.getElementById("minutes");
let hr = document.getElementById("heures");
let begin = document.getElementById("begin");
begin.addEventListener("click", startChrono);
let millis = 0;
let seconde = 1;
let minute = 1;
let heure = 1;
let time = 0;
let cpt = 0;



function startChrono() {
    cpt++;
    console.log(cpt);

    time = setInterval(start, 10)

    function start() {

        ms.innerHTML = millis++

            if (millis == 100) {
                millis = 0;
                sec.innerHTML = seconde++
            }
        if (seconde == 60) {
            seconde = 0;
            min.innerHTML = minute++
        }
        if (minute == 60) {
            minute = 0;
            hr.innerHTML = heure++
        }
        if (cpt === 1) {
            begin.removeEventListener("click", startChrono);
        }
    }
}

function stop() {
    clearInterval(time);
    begin.addEventListener("click", startChrono);
    cpt = 0;
}

function reset() {
    ms.innerHTML = millis = 0;
    sec.innerHTML = seconde = 0;
    min.innerHTML = minute = 0;
    hr.innerHTML = heure = 0;

}