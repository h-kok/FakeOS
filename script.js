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

//apps
const desktopIcons = document.querySelectorAll(".desktop-icons__wrapper");
const wordpadIcon = desktopIcons[0];
const solitaireIcon = desktopIcons[1];
const networkIcon = desktopIcons[2];

const app = document.querySelectorAll(".app");
const wordpad = app[0];
const solitaire = app[1];
const network = app[2];

const wordpadApp = document.querySelector(".app__wordpad");
const titleBar = document.querySelectorAll(".app__title-bar");
const titleBarWordpad = titleBar[0];
const subtitleBar = document.querySelectorAll(".app__subtitle-bar");
const subtitleBarWordpad = subtitleBar[0];
const appContent = document.querySelectorAll(".app__content");
const appContentWordpad = appContent[0];
const closeWindow = document.querySelectorAll(".app__close-window");
const closeWindowWordpad = closeWindow[0];

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

//wordpad
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

    const closeWindow = document.querySelectorAll("app__close-window");
    closeWindow.addEventListener("click", () => {
        console.log("its working");
    });
});

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

// Network

networkIcon.addEventListener("click", () => {
    network.className = "app__network";

    const appTitleBar = document.createElement("div");
    appTitleBar.className = "app__title-bar";
    network.appendChild(appTitleBar);

    createElement("p", "app__name", "Enter Network Password", appTitleBar);
    createCross(appTitleBar);
    network.classList.add("app");

    const appContent = document.createElement("div");
    appContent.className = "app__content";
    network.appendChild(appContent);

    createImg(
        "./assets/icon-network.png",
        "app__network-img",
        appContent,
        "app__network-img"
    );

    const formWrapper = document.createElement("div");
    formWrapper.className = "form-wrapper";
    appContent.appendChild(formWrapper);

    createElement(
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

    const labelUsername = document.createElement("label");
    labelUsername.setAttribute("for", "form__username");
    inputWrapper.appendChild(labelUsername);
    labelUsername.appendChild(document.createTextNode("User name: "));

    const username = document.createElement("input");
    username.id = "form__username";
    username.setAttribute("type", "text");
    inputWrapper.appendChild(username);

    const inputWrapper2 = document.createElement("div");
    inputWrapper2.className = "form__input-wrapper";
    form.appendChild(inputWrapper2);

    const labelPassword = document.createElement("label");
    labelPassword.setAttribute("for", "form__password");
    inputWrapper2.appendChild(labelPassword);
    labelPassword.appendChild(document.createTextNode("Password: "));

    const password = document.createElement("input");
    password.id = "form__password";
    password.setAttribute("type", "text");
    inputWrapper2.appendChild(password);

    const inputWrapper3 = document.createElement("div");
    inputWrapper3.className = "form__input-wrapper";
    form.appendChild(inputWrapper3);

    const labelDomain = document.createElement("label");
    labelDomain.setAttribute("for", "form__domain");
    inputWrapper3.appendChild(labelDomain);
    labelDomain.appendChild(document.createTextNode("Domain: "));

    const domain = document.createElement("input");
    domain.id = "form__domain";
    domain.setAttribute("type", "text");
    inputWrapper3.appendChild(domain);

    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "button-wrapper";
    appContent.appendChild(buttonWrapper);

    createElement("button", "button", "OK", buttonWrapper, "button");
    createElement("button", "button", "Cancel", buttonWrapper, "button");
});
