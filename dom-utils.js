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

// export const createDivElement = (className, parentNode) => {
//     const div = document.createElement("div");
//     div.className = className;
//     document.querySelector(parentNode).appendChild(div);
// };
