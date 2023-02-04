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
let countDate = new Date('March 29, 2023 00:00:00').getTime();

function CountDown(){
    
    let now = new Date().getTime();
    gap = countDate - now;
    
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d= Math.floor(gap / (day));
    let h= Math.floor((gap % (day)) / (hour));
    let m= Math.floor((gap % (hour)) / (minute));
    let s= Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('second').innerText = s;

    
}
    setInterval(function(){
        CountDown();
    },1000)


