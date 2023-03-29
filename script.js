import {
    createTextElement,
    createImg,
    createCross,
    createLabel,
    createInput,
    // createDivElement,
} from "./dom-utils.js";

// start menu
const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", () => {
    const startMenu = document.querySelector(".start-menu");
    const startMenuSidebar = document.querySelector(".start-menu-sidebar");
    startMenu.classList.toggle("start-menu-show");
    startMenuSidebar.classList.toggle("start-menu-sidebar-show");
});

// date time
const getDateTime = () => {
    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}`;
    const date = `${today.getDate()}/${
        today.getMonth() + 1
    }/${today.getFullYear()}`;
    const currentDateTime = `${time} ${date}`;
    document.querySelector(".current-date").innerHTML = currentDateTime;
    setInterval(getDateTime, 60000);
};
getDateTime();

//apps
const desktopIcons = document.querySelectorAll(".desktop-icons__wrapper");
const wordpadIcon = desktopIcons[0];
const solitaireIcon = desktopIcons[1];
const networkIcon = desktopIcons[2];

const app = document.querySelectorAll(".app");
const wordpad = app[0];
const solitaire = app[1];
const network = app[2];

//wordpad
wordpadIcon.addEventListener("click", () => {
    wordpad.className = "app__wordpad";
    wordpad.classList.add("app");

    const appWrapper = document.createElement("div");
    appWrapper.className = "app__wrapper1";
    wordpad.appendChild(appWrapper);

    const appTitleBar = document.createElement("div");
    appTitleBar.className = "app__title-bar";
    appWrapper.appendChild(appTitleBar);

    createImg(
        "./assets/icon-wordpad.png",
        "app__title-bar-img",
        appTitleBar,
        "app__title-bar-img"
    );
    createTextElement("p", "app__name", "Untitled - WordPad", appTitleBar);
    createCross(appTitleBar, "app__close-wordpad");

    const subtitleBar = document.createElement("div");
    subtitleBar.className = "app__subtitle-bar";
    appWrapper.appendChild(subtitleBar);

    createTextElement("p", "app__menu", "File", subtitleBar, "app__menu");
    createTextElement("p", "app__menu", "Edit", subtitleBar, "app__menu");
    createTextElement("p", "app__menu", "View", subtitleBar, "app__menu");

    const appContent = document.createElement("div");
    appContent.className = "app__content";
    appWrapper.appendChild(appContent);

    createTextElement(
        "textarea",
        "app__textarea",
        "",
        appContent,
        "app__textarea"
    );

    document
        .querySelector(".app__close-wordpad")
        .addEventListener("click", () => {
            wordpad.removeChild(document.querySelector(".app__wrapper1"));
        });
});

// solitaire

solitaireIcon.addEventListener("click", () => {
    solitaire.className = "app__solitaire";
    solitaire.classList.add("app");

    const appWrapper = document.createElement("div");
    appWrapper.className = "app__wrapper2";
    solitaire.appendChild(appWrapper);

    const appTitleBar = document.createElement("div");
    appTitleBar.className = "app__title-bar";
    appWrapper.appendChild(appTitleBar);

    createImg(
        "./assets/icon-solitaire.png",
        "app__title-bar-img",
        appTitleBar,
        "app__title-bar-img"
    );

    createTextElement("p", ".app__name", "Solitaire", appTitleBar);
    createCross(appTitleBar, "app__close-solitaire");

    const appSubtitleBar = document.createElement("div");
    appSubtitleBar.className = "app__subtitle-bar";
    appWrapper.appendChild(appSubtitleBar);

    createTextElement("p", "app__menu", "Game", appSubtitleBar, "app__menu");
    createTextElement("p", "app__menu", "Help", appSubtitleBar, "app__menu");

    const appContent = document.createElement("div");
    appContent.className = "app__content";
    appWrapper.appendChild(appContent);

    createImg(
        "./assets/solitaire-img.jpg",
        "app__solitaire-img",
        appContent,
        "app__solitaire-img"
    );

    document
        .querySelector(".app__close-solitaire")
        .addEventListener("click", () => {
            solitaire.removeChild(document.querySelector(".app__wrapper2"));
        });
});

// Network

networkIcon.addEventListener("click", () => {
    network.className = "app__network";
    network.classList.add("app");

    const appWrapper = document.createElement("div");
    appWrapper.className = "app__wrapper3";
    network.appendChild(appWrapper);

    const appTitleBar = document.createElement("div");
    appTitleBar.className = "app__title-bar";
    appWrapper.appendChild(appTitleBar);

    createTextElement("p", "app__name", "Enter Network Password", appTitleBar);
    createCross(appTitleBar, "app__close-network");

    const appContent = document.createElement("div");
    appContent.className = "app__content";
    appWrapper.appendChild(appContent);

    createImg(
        "./assets/icon-network.png",
        "app__network-img",
        appContent,
        "app__network-img"
    );

    const formWrapper = document.createElement("div");
    formWrapper.className = "form-wrapper";
    appContent.appendChild(formWrapper);

    createTextElement(
        "p",
        "form-instructions",
        "Enter your network password for Microsoft Networking.",
        formWrapper
    );

    const form = document.createElement("form");
    form.className = "form";
    formWrapper.appendChild(form);

    const inputWrapper = document.createElement("div");
    inputWrapper.className = "form__input-wrapper";
    form.appendChild(inputWrapper);

    createLabel("form__username", inputWrapper, "User name: ");
    createInput("form__username", inputWrapper);

    const inputWrapper2 = document.createElement("div");
    inputWrapper2.className = "form__input-wrapper";
    form.appendChild(inputWrapper2);

    createLabel("form__password", inputWrapper2, "Password: ");
    createInput("form__password", inputWrapper2);

    const inputWrapper3 = document.createElement("div");
    inputWrapper3.className = "form__input-wrapper";
    form.appendChild(inputWrapper3);

    createLabel("form__domain", inputWrapper3, "Domain: ");
    createInput("form__domain", inputWrapper3);

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "button-wrapper";
    appContent.appendChild(buttonWrapper);

    createTextElement("button", "button", "OK", buttonWrapper, "button");
    createTextElement("button", "button", "Cancel", buttonWrapper, "button");

    document
        .querySelector(".app__close-network")
        .addEventListener("click", () => {
            network.removeChild(document.querySelector(".app__wrapper3"));
        });
});
