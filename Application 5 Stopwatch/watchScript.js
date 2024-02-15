let [seconds, minutes, hours] = [0,0,0];
let timeDisplay = document.getElementById("timeIndicator");
const lapBox = document.getElementById("lapBox");
let timer = null; let lapCount = 1;

function stopwatch(){
    seconds++;
    if (seconds == 60){
        seconds = 0;
        minutes++;
        if (minutes == 60){
             minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours: hours;
    let m = minutes < 10 ? "0" + minutes: minutes;
    let s = seconds < 10 ? "0" + seconds: seconds;
    timeDisplay.innerHTML = h+":"+m+":"+s;
    localStorage.setItem("currentTime", timeDisplay.innerHTML);
}

function startTime(){
    if (timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);
}

function stopTime(){
    clearInterval(timer);
}

function resetTime(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    timeDisplay.innerHTML = "00:00:00"
}

function addLap(){
    let lapDisplay = document.createElement("div");
    let timeRecord = localStorage.getItem("currentTime");

    lapDisplay.style.backgroundColor = "white";
    lapDisplay.style.width = "60%";
    lapDisplay.style.border = "#C00F0F 10px solid";
    lapDisplay.style.borderRadius = "30px";
    lapDisplay.style.height = "100px";
    lapDisplay.style.margin = "auto";
    lapDisplay.style.marginTop = "15px";
    lapDisplay.style.fontSize = "50px";
    lapDisplay.style.fontFamily = "Kanit";
    lapDisplay.style.color = "#C00F0F";
    lapDisplay.style.padding = "20px";
    lapDisplay.innerHTML = "Lap " + lapCount + " Elapsed Time: "+ timeDisplay.innerHTML;
    lapBox.appendChild(lapDisplay);
    lapCount++;
}

function clearLaps(){
    while (lapBox.firstChild) {
        lapBox.removeChild(lapBox.firstChild);
      }
}
