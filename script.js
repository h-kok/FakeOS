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
const solitaireIcon = desktopIcons[1];

const app = document.querySelectorAll(".app");
const wordpad = app[0];
const solitaire = app[1];

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
    newTag.className = newClassName;
    const newText = document.createTextNode(textToCreate);
    newTag.appendChild(newText);
    parentNode.appendChild(newTag);
    newTag.classList.add(css);
};

const createImg = (imgSrc, newClassName, parentNode, styling) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.className = newClassName;
    parentNode.appendChild(img);
    img.classList.add(styling);
};

const createCross = (parentNode) => {
    const img = document.createElement("img");
    img.src = "./assets/icon-close.png";
    img.className = "app__close-window";
    parentNode.appendChild(img);
};

wordpadIcon.addEventListener("click", () => {
    wordpad.className = "app__wordpad";

    const appTitleBar = document.createElement("div");
    appTitleBar.className = "app__title-bar";
    wordpad.appendChild(appTitleBar);

    createImg(
        "./assets/icon-wordpad.png",
        "app__title-bar-img",
        appTitleBar,
        "app__title-bar-img"
    );
    createElement("p", "app__name", "Untitled - WordPad", appTitleBar);
    createCross(appTitleBar);
    wordpad.classList.add("app");

    const subtitleBar = document.createElement("div");
    subtitleBar.className = "app__subtitle-bar";
    wordpad.appendChild(subtitleBar);

    createElement("p", "app__menu", "File", subtitleBar, "app__menu");
    createElement("p", "app__menu", "Edit", subtitleBar, "app__menu");
    createElement("p", "app__menu", "View", subtitleBar, "app__menu");

    const appContent = document.createElement("div");
    appContent.className = "app__content";
    wordpad.appendChild(appContent);

    createElement("textarea", "app__textarea", "", appContent, "app__textarea");
    // app.classList.add("app__border"); //not working
    // appMenu.classList.add("app__menu", "app__menu:hover");
});
// appBorder.addEventListener("click");

// solitaire

solitaireIcon.addEventListener("click", () => {
    solitaire.className = "app__solitaire";

    const appTitleBar = document.createElement("div");
    appTitleBar.className = "app__title-bar";
    solitaire.appendChild(appTitleBar);

    createImg(
        "./assets/icon-solitaire.png",
        "app__title-bar-img",
        appTitleBar,
        "app__title-bar-img"
    );

    createElement("p", ".app__name", "Solitaire", appTitleBar);
    createCross(appTitleBar);
    solitaire.classList.add("app");

    const appSubtitleBar = document.createElement("div");
    appSubtitleBar.className = "app__subtitle-bar";
    solitaire.appendChild(appSubtitleBar);

    createElement("p", "app__menu", "Game", appSubtitleBar, "app__menu");
    createElement("p", "app__menu", "Help", appSubtitleBar, "app__menu");

    const appContent = document.createElement("div");
    appContent.className = "app__content";
    solitaire.appendChild(appContent);

    createImg(
        "./assets/solitaire-img.jpg",
        "app__solitaire-img",
        appContent,
        "app__solitaire-img"
    );
});

// app 3
const app3Icon = desktopIcons[2];
