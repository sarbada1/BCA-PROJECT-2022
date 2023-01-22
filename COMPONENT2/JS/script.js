let searchform=document.querySelector('.search-form');
let cart=document.querySelector('.shopping-cart');
let loginform=document.querySelector('.login-form');
let navbar= document.querySelector('.navbar');

document.querySelector('#search-btn').onclick= () => {
    searchform.classList.toggle('active');
    cart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
document.querySelector('#cart-btn').onclick=()=>{
    cart.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
document.querySelector('#user-btn').onclick=()=>{
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    cart.classList.remove('active');
    loginform.classList.remove('active');
}
window.onscroll = () => {
    searchform.classList.remove('active');
    cart.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');

}


