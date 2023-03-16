function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.getElementById("hour-tens").src = "images/" + Math.floor(hours / 10) + ".png";
    document.getElementById("hour-ones").src = "images/" + hours % 10 + ".png";
    document.getElementById("minute-tens").src = "images/" + Math.floor(minutes / 10) + ".png";
    document.getElementById("minute-ones").src = "images/" + minutes % 10 + ".png";
    document.getElementById("second-tens").src = "images/" + Math.floor(seconds / 10) + ".png";
    document.getElementById("second-ones").src = "images/" + seconds % 10 + ".png";
}

updateClock();

setInterval(updateClock, 1000);