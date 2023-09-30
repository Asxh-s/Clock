// Variables:
let timeLabel = document.getElementById("time");
let am = "am", pm = "pm";

setInterval(setTimeFunc);

// Functions: 
function setTimeFunc() {
    let dateObj = new Date(); 

    let hours = dateObj.getHours();
    let hoursLessThanTenCheck = hours < 10 ? hours = "0" + hours : "";

    let minutes = dateObj.getMinutes(); 
    let minutesLessThanTenCheck = minutes < 10 ? minutes = "0" + minutes : "";

    let seconds = dateObj.getSeconds();
    let secondsLessThanTenCheck = seconds < 10 ? seconds += "0" : "";

    let currentTime = `${hours}:${minutes}:${seconds}`

    if (hours >= 12) {
        timeLabel.innerHTML = currentTime + pm;
    }
    else {
        timeLabel.innerHTML = currentTime + am;
    }
}
