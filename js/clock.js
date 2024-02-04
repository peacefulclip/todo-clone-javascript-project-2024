// setInterval(__, milli seconds) - repeatedly
// setTimeout - once
// new Date() & getHours, getMinutes, getSeconds
// padStart, padEnd, String()
// as soon as the brower opens, the clock executed and creating new date object every 1000ms with setInterval

const clockTime = document.querySelector("#clock-time");
const clockPeriod = document.querySelector("#clock-period");
let clock24 = document.querySelector("#clock-24 button");

function get24Clock(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    if (hour >= 12){
        clockPeriod.innerText = "PM";
    } else {
        clockPeriod.innerText = "AM";
    };
    clockTime.innerText = `⏰ ${hour}:${minute}:${second}`;
};

get24Clock();
setInterval(get24Clock, 1000);
