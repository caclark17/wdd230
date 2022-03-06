
let cards = document.getElementsByClassName('.cards');

function view(cards) {
    document.querySelector('.cards').classList.remove(gridView);
}

function gridView(cards) {
    document.querySelector('.cards').classList.add(gridView);
}