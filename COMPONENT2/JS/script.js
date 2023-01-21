let searchform=document.querySelector('.search-form');
let cart=document.querySelector('.shopping-cart');
let loginform=document.querySelector('.login-form');
let navbar= document.querySelector('.navbar');

document.querySelector('#search-btn').onclick= () => {
    searchform.classList.toggle('active');
}
document.querySelector('#cart-btn').onclick=()=>{
    cart.classList.toggle('active');
}
document.querySelector('#user-btn').onclick=()=>{
    loginform.classList.toggle('active');
}
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
}

