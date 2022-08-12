const clock = document.querySelector(".clock");
const tradClock = document.querySelector(".tradClock");
const clockSwitch = document.querySelector(".switch");
const alarm  = document.querySelector(".alarm");
const trad = document.querySelector(".trad");
const ind = document.querySelector(".Ind")

const secInd = document.querySelector(".secondInd");
const minInd = document.querySelector(".minuteInd");
const hourInd = document.querySelector(".hourInd")

function setTime()
{
    const time = new Date();

    let hour = time.getHours();
    hour = hour<10? "0"+hour: hour;
    let minutes = time.getMinutes();
    minutes = minutes<10? "0"+minutes: minutes;
    let seconds = time.getSeconds();
    seconds = seconds<10? "0"+seconds: seconds;

    //setting analog clock
    clock.innerHTML = `${hour}<span class = "blink">:</span>${minutes}<span class="blink">:</span>${seconds}`;
    

    // setting traditional clock
    if(time.getSeconds()==0){
        secInd.style.transition = 'none';
        minInd.style.transition = 'none';
        hourInd.style.transition = 'none';
       } 
    else if(time.getSeconds()>0)
       {
        secInd.style.transition = 'all 0.5s';
        minInd.style.transition = 'all 0.5s';
        hourInd.style.transition = 'all 0.5s';
       }
  
    let secDeg = ((seconds/60)*360)+90;
    secInd.style.transform = `rotate(${secDeg}deg)`
    let minDeg = ((minutes/60)*360)+90;
    minInd.style.transform = `rotate(${minDeg}deg)`
    let hourDeg = ((hour/12)*360)+90;
    hourInd.style.transform = `rotate(${hourDeg}deg)`

}

function changeTime()
{
    setTime();
}

function changeClock()
{

        alarm.classList.toggle("active");
        trad.classList.toggle("inactive");

        clock.classList.toggle("clockInactive");
        tradClock.classList.toggle("clockActive");

}

setTime();
setInterval(changeTime, 1000);
clockSwitch.addEventListener("click", changeClock)
