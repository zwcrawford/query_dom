const sectElement = document.querySelector(".article__header");
sectElement.textContent = ("Welcome to the Zac blog");

const sectClass = document.querySelector(".article__header");
sectClass.classList.remove("article__header");
sectClass.classList.add("important");

let classRemove = document.querySelector(".dashed");
classRemove.classList.remove("dashed");

let classAdd = document.querySelector(".article__footer");
classAdd.classList.add("goldenrod");

