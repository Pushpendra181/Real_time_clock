const [hour, minute] = document.querySelectorAll(".main > h1");
let day = document.querySelector(".day");

const [hr, min, sec] = document.querySelectorAll(".clock > div");

setInterval(() => {
  const date = new Date();
  hour.innerHTML = date.getHours();
  minute.innerHTML = date.getMinutes();

  hourTime = date.getHours();
  minuteTime = date.getMinutes();
  secoundTime = date.getSeconds();

  const hourRotation = 3* hourTime + minuteTime / 2;
  const secRotation = secoundTime * 6;
  const minRotation = minuteTime * 6;

  hr.style.transform = `rotateZ(${hourRotation}deg)`;
  min.style.transform = `rotateZ(${minRotation}deg)`;
  sec.style.transform = `rotateZ(${secRotation}deg)`;

  // day = Date.getDay;

  // let week = ['SUNDAY','MONDAY','TUESDAT','WEDNESDAY','THURSDAY','FRIDA','SATURDAY']
  // const dayName = `week[day]`
  // day.innerHTML = date.day();


  
}, 1000);
