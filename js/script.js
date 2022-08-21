let hoursEl= document.getElementById("hours");
let minutesEl= document.getElementById("minutes");
let secondsEl= document.getElementById("seconds");
let ampmEl= document.getElementById("ampm");

function updteClock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = h > 12? "PM":"AM";
    
    m <10?m=`0${m}`:m;
    s <10?s=`0${s}`:s;
    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText= ampm;
    setTimeout(()=>{
        updteClock();
    },1000)
}
updteClock();