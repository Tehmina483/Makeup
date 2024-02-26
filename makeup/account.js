let menubar = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let introBtn = document.querySelector(".introbtn");
let workbBn = document.querySelector(".workbtn");
let capabtn = document.querySelector(".capabtn");
let getStarted = document.querySelector(".get-started");
let forgetPassword = document.querySelector(".password");
let accountSection = document.querySelector(".account-section");
let createAccount = document.querySelector(".createNow");
let cancelAccount = document.querySelector(".cancel");
let Cancel = document.querySelector(".cancel-1");
menubar.addEventListener("click" ,()=>{
    navbar.classList.toggle("active-menu")
});
forgetPassword.addEventListener("click",()=>{
    accountSection.classList.add("show-reset-page");
    accountSection.classList.remove("show-login-page");
    accountSection.classList.remove("show-logout-page");
})
createAccount.addEventListener("click",()=>{
    accountSection.classList.add("show-logout-page");
    accountSection.classList.remove("show-reset-page");
    accountSection.classList.remove("show-login-page");
});
cancelAccount.addEventListener("click",()=>{
    accountSection.classList.add("show-login-page");
    accountSection.classList.remove("show-logout-page");
    accountSection.classList.remove("show-reset-page");
})
Cancel.addEventListener("click",()=>{
    accountSection.classList.add("show-login-page");
    accountSection.classList.remove("show-logout-page");
    accountSection.classList.remove("show-reset-page");
});


const navLinksEls = document.querySelectorAll(".nav_link")
const windowPathname = window.location.pathname;
navLinksEls.forEach(navlinkEl=>{
    if(navlinkEl.href.includes(windowPathname)){
        navlinkEl.classList.add("activeLink")
    }
})

