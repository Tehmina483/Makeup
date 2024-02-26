let menubar = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let introBtn = document.querySelector(".introbtn");
let workbBn = document.querySelector(".workbtn");
let capabtn = document.querySelector(".capabtn");
let getStarted = document.querySelector(".get-started");
const navLinksEls = document.querySelectorAll(".nav_link")
const windowPathname = window.location.pathname;
menubar.addEventListener("click" ,()=>{
    navbar.classList.toggle("active-menu")
});
navLinksEls.forEach(navlinkEl=>{
    if(navlinkEl.href.includes(windowPathname)){
        navlinkEl.classList.add("activeLink")
    }
})


introBtn.addEventListener("click" ,()=>{
    getStarted.classList.add("show-intro")
    getStarted.classList.remove("show-work")
    getStarted.classList.remove("show-capa")
});
workbBn.addEventListener("click" ,()=>{
    getStarted.classList.remove("show-intro")
    getStarted.classList.add("show-work")
    getStarted.classList.remove("show-capa")
});
capabtn.addEventListener("click" ,()=>{
    getStarted.classList.remove("show-intro")
    getStarted.classList.remove("show-work")
    getStarted.classList.add("show-capa")
});
// const slides = document.querySelectorAll(".slide");
// var counter = 0;
// slides.forEach(
//     (slide,index) => {
//                slide.style.left = `${index * 100}%`
// });
// const slideImage = ()=>{
//     slides.forEach(
//    (slide)=>{
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//    })
// }
//     const btnNext = () => {
//         if (counter < slides.length - 1) {
//         counter++;
//         slideImage();
//         }
//         };
        // const btnPrev = () => {
        // if (counter != 0) {
        // counter--;
        // slideImage();
        // }
        // };

        // popup show on load window
        window.addEventListener("load",function(){
            this.setTimeout(function open(event){
         document.querySelector(".popup-section").style.display="flex"
            },10000)
         })
         document.querySelector("#close").addEventListener("click",function(){
            document.querySelector(".popup-section").style.display="none"
         })



         
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 3 seconds