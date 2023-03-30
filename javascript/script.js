import {
    createTextElement,
    createImg,
    createCross,
    createLabel,
    createInput,
    createDivDetails,
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

//wordpad
wordpadIcon.addEventListener("click", () => {
    const wordpad = app[0];
    wordpad.className = "app__wordpad";
    wordpad.classList.add("app");

    const appWrapper = document.createElement("div");
    createDivDetails(appWrapper, "app__wrapper1", wordpad);

    const appTitleBar = document.createElement("div");
    createDivDetails(appTitleBar, "app__title-bar", appWrapper);

    createImg(
        "./assets/icon-wordpad.png",
        "app__title-bar-img",
        appTitleBar,
        "app__title-bar-img"
    );
    createTextElement("p", "app__name", "Untitled - WordPad", appTitleBar);
    createCross(appTitleBar, "app__close-wordpad");

    const subtitleBar = document.createElement("div");
    createDivDetails(subtitleBar, "app__subtitle-bar", appWrapper);

    createTextElement("p", "app__menu", "File", subtitleBar, "app__menu");
    createTextElement("p", "app__menu", "Edit", subtitleBar, "app__menu");
    createTextElement("p", "app__menu", "View", subtitleBar, "app__menu");

    const appContent = document.createElement("div");
    createDivDetails(appContent, "app__content", appWrapper);

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
    const solitaire = app[1];
    solitaire.className = "app__solitaire";
    solitaire.classList.add("app");

    const appWrapper = document.createElement("div");
    createDivDetails(appWrapper, "app__wrapper2", solitaire);

    const appTitleBar = document.createElement("div");
    createDivDetails(appTitleBar, "app__title-bar", appWrapper);

    createImg(
        "./assets/icon-solitaire.png",
        "app__title-bar-img",
        appTitleBar,
        "app__title-bar-img"
    );

    createTextElement("p", ".app__name", "Solitaire", appTitleBar);
    createCross(appTitleBar, "app__close-solitaire");

    const appSubtitleBar = document.createElement("div");
    createDivDetails(appSubtitleBar, "app__subtitle-bar", appWrapper);

    createTextElement("p", "app__menu", "Game", appSubtitleBar, "app__menu");
    createTextElement("p", "app__menu", "Help", appSubtitleBar, "app__menu");

    const appContent = document.createElement("div");
    createDivDetails(appContent, "app__content", appWrapper);

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
    const network = app[2];
    network.className = "app__network";
    network.classList.add("app");

    const appWrapper = document.createElement("div");
    createDivDetails(appWrapper, "app__wrapper3", network);

    const appTitleBar = document.createElement("div");
    createDivDetails(appTitleBar, "app__title-bar", appWrapper);

    createTextElement("p", "app__name", "Enter Network Password", appTitleBar);
    createCross(appTitleBar, "app__close-network");

    const appContent = document.createElement("div");
    createDivDetails(appContent, "app__content", appWrapper);

    createImg(
        "./assets/icon-network.png",
        "app__network-img",
        appContent,
        "app__network-img"
    );

    const formWrapper = document.createElement("div");
    createDivDetails(formWrapper, "form-wrapper", appContent);

    createTextElement(
        "p",
        "form-instructions",
        "Enter your network password for Microsoft Networking.",
        formWrapper
    );

    const form = document.createElement("form");
    createDivDetails(form, "form", formWrapper);

    const inputWrapper = document.createElement("div");
    createDivDetails(inputWrapper, "form__input-wrapper", form);

    createLabel("form__username", inputWrapper, "User name: ");
    createInput("form__username", inputWrapper);

    const inputWrapper2 = document.createElement("div");
    createDivDetails(inputWrapper2, "form__input-wrapper", form);

    createLabel("form__password", inputWrapper2, "Password: ");
    createInput("form__password", inputWrapper2);

    const inputWrapper3 = document.createElement("div");
    createDivDetails(inputWrapper3, "form__input-wrapper", form);

    createLabel("form__domain", inputWrapper3, "Domain: ");
    createInput("form__domain", inputWrapper3);

    const buttonWrapper = document.createElement("div");
    createDivDetails(buttonWrapper, "button-wrapper", appContent);

    createTextElement("button", "button", "OK", buttonWrapper, "button");
    createTextElement("button", "button", "Cancel", buttonWrapper, "button");

    document
        .querySelector(".app__close-network")
        .addEventListener("click", () => {
            network.removeChild(document.querySelector(".app__wrapper3"));
        });
});
