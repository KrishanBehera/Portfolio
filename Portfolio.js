const DayNight = document.querySelector(".dayNight");
const Banner = document.querySelector(".banner");

DayNight.addEventListener("click", () => {
  Banner.classList.toggle("Night");
});

var typed = new Typed(".text", {
  strings: ["Front-End-Developer", "Drop X Out"],
  loop: true,
  typespeed: 100,
  backspeed: 50,
  backDelay: 1000,
});
