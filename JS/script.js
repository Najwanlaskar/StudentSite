const start = document.getElementById("start");
const pause = document.getElementById("stop");
const restart = document.getElementById("restart");
const timer = document.getElementById("timer");
//25x60=1500 seconds
let timeLeft = 1500;
let intervals;

const updateTimer = () => {
    let minutes= Math.floor(timeLeft/60);
    let seconds= timeLeft % 60;
    timer.innerHTML = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    //displays minutes and seconds and adds a 0 if it goes below 10
}

const startTimer = () => {
if (intervals) {
            clearInterval(interval); // Clear any existing interval
      }
    intervals = setInterval(()=>{
        timeLeft= timeLeft - 1;
        updateTimer();
    },1000) //every second we decrement by 1

    if(timeLeft==0){
        clearInterval(intervals);
        alert("Your time is finished!");
        timeLeft= 1500;
        updateTimer();
}
}

const RestartTimer = () =>{
    clearInterval(intervals);
    timeLeft=1500;
    updateTimer();
}

const StopTimer = () =>{
        clearInterval(intervals);
}

start.addEventListener("click",startTimer);
pause.addEventListener("click",StopTimer);
restart.addEventListener("click",RestartTimer);