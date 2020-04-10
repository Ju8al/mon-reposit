function getTime() {
    const myHour = document.getElementById("heure");
    const date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = ((hr < 10) ? " 0" : " ") + hr;
    min = ((min < 10) ? ":0" : ":") + min;
    sec = ((sec < 10) ? ":0" : ":") + sec;

    myHour.innerHTML = hr + min + sec;
    setTimeout("getTime()", 1000);

}
getTime();