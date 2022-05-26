let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
    carItem.classList.remove('active');
}

let carItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    carItem.classList.toggle('active');
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navBar.classList.remove('active');
    searchForm.classList.remove('active');
    carItem.classList.remove('active');
} 