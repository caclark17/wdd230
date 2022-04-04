const likeButton = document.querySelector(".likeButton");
let likeIcon = document.querySelector("#icon");


let clicked = false;

likeButton.addEventListener("click", () => {
    if(!clicked) {
        clicked = true;
        likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    }
    else {
        clicked = false;
        likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    }
})