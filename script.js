const startBtn = document.querySelector(".start-btn");
const startMenu = document.querySelector(".start-menu");
startBtn.addEventListener("click", () => {
    startMenu.classList.toggle("start-menu-show");
});

const today = new Date();
let time = `${today.getHours()}:${today.getMinutes()}`;
let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
const currentDateTime = `${time} ${date}`;
document.querySelector(".current-date").innerHTML = currentDateTime;
