const likeButton = document.querySelector(".likeButton");
let likeIcon = document.querySelector("#icon");


let clicked = false;

likeButton.addEventListener("click", () => {
    if(!clicked) {
        clicked = true;
        likeButton.style.color = "gray";
    }
    else {
        clicked = false;
        likeButton.style.color = "blue";
    }
})