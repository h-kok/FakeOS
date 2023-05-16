export const getDateTime = () => {
    const date = new Date().toLocaleTimeString("en-AU", {
        timeZone: "Australia/Sydney",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
    });
    return date;
};

export const createTextElement = (
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

export const createImg = (imgSrc, newClassName, parentNode, styling) => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.className = newClassName;
    parentNode.appendChild(img);
    img.classList.add(styling);
};

export const createCross = (parentNode, className) => {
    const img = document.createElement("img");
    img.src = "./assets/icon-close.png";
    img.className = className;
    parentNode.appendChild(img);
};

export const createLabel = (input, parentNode, labelName) => {
    const label = document.createElement("label");
    label.setAttribute("for", input);
    parentNode.appendChild(label);
    label.appendChild(document.createTextNode(labelName));
};

export const createInput = (id, parentNode) => {
    const input = document.createElement("input");
    input.id = id;
    input.setAttribute("type", "text");
    parentNode.appendChild(input);
};

export const createDivDetails = (constName, className, parentNode) => {
    constName.className = className;
    parentNode.appendChild(constName);
};
