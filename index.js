//Getting current day of the week
const dayOfWeek = document.getElementById('day-of-week');
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

days.forEach((day, index)=>{
    if(index == new Date().getDay()){
       dayOfWeek.textContent = `Today is ${day}`;
    }
})


//Getting current UTC time

const currentUtcTime = document.getElementById('utc-time');
const time = new Date();
const hour = time.getUTCHours();
const minutes = time.getUTCMinutes();
const seconds = time.getUTCMinutes();
const milliSeconds = time.getUTCMilliseconds();

currentUtcTime.textContent = `Current UTC Time is ${hour}:${minutes}:${seconds}.${milliSeconds}`