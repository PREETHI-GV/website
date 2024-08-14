let searchForm = document.querySelector(".search-form");

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    Voice.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector(".login-form");

document.querySelector('#login-btn').onclick = () =>{
    searchForm.classList.remove('active');
    loginForm.classList.toggle('active');
    Voice.classList.remove('active');
    navbar.classList.remove('active');
}
let Voice = document.querySelector(".voice");

document.querySelector('#micro-btn').onclick = () =>{
    Voice.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let navbar = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    Voice.classList.remove('active');
    
}
