// start menu
const startBtn = document.querySelector(".start-btn");
const startMenu = document.querySelector(".start-menu");
startBtn.addEventListener("click", () => {
    startMenu.classList.toggle("start-menu-show");
});

// date time
const today = new Date();
let time = `${today.getHours()}:${today.getMinutes()}`;
let date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
const currentDateTime = `${time} ${date}`;
document.querySelector(".current-date").innerHTML = currentDateTime;

// wordpad
const desktopIcons = document.querySelectorAll(".desktop-icons__wrapper");
const wordpadIcon = desktopIcons[0];
const app = document.querySelectorAll(".app");
const wordpadApp = document.querySelector(".app__wordpad");
const titleBar = document.querySelectorAll(".app__title-bar");
const titleBarWordpad = titleBar[0];
const subtitleBar = document.querySelectorAll(".app__subtitle-bar");
const subtitleBarWordpad = subtitleBar[0];
const appContent = document.querySelectorAll(".app__content");
const appContentWordpad = appContent[0];
// const appBorder = document.querySelector(".border");
// const closeWindow = document.querySelectorAll(".app__close-window");
// const appMenu = document.querySelectorAll(".app__menu");

const createElement = (
    elementType,
    newClassName,
    textToCreate,
    parentNode,
    css
) => {
    const newTag = document.createElement(elementType);
    newTag.classList.add(newClassName);
    const newText = document.createTextNode(textToCreate);
    newTag.appendChild(newText);
    parentNode.appendChild(newTag);
    newTag.classList.add(css);
};

const createImg = (imgSrc, newClassName, parentNode) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.classList.add(newClassName);
    parentNode.appendChild(img);
    img.classList.add("app__title-bar-img");
};

const createCross = (parentNode) => {
    const img = document.createElement("img");
    img.src = "./assets/icon-close.png";
    img.classList.add("app__close-window");
    parentNode.appendChild(img);
};

wordpadIcon.addEventListener("click", () => {
    createElement("div", ".app__title-bar", "", wordpadApp);
    createImg(
        "./assets/icon-wordpad.png",
        ".app__title-bar-img",
        titleBarWordpad
    );
    createElement("p", ".app__name", "Untitled - WordPad", titleBarWordpad);
    createCross(titleBarWordpad);
    createElement("p", ".app__menu", "File", subtitleBarWordpad, "app__menu");
    createElement("p", ".app__menu", "Edit", subtitleBarWordpad, "app__menu");
    createElement("p", ".app__menu", "View", subtitleBarWordpad, "app__menu");
    createElement(
        "textarea",
        ".app__textarea",
        "",
        appContentWordpad,
        "app__textarea"
    );
    // app.classList.add("app__border"); //not working
    // appMenu.classList.add("app__menu", "app__menu:hover");
});
// appBorder.addEventListener("click");

// solitaire
const solitaireIcon = desktopIcons[1];

solitaireIcon.addEventListener("click", () => {});
// app 3
const app3Icon = desktopIcons[2];
