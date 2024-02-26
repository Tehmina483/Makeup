let menubar = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
menubar.addEventListener("click" ,()=>{
    navbar.classList.toggle("active-menu")
});
const navLinksEls = document.querySelectorAll(".nav_link")
const windowPathname = window.location.pathname;
navLinksEls.forEach(navlinkEl=>{
    if(navlinkEl.href.includes(windowPathname)){
        navlinkEl.classList.add("activeLink")
    }
})
const reviewSlide = document.querySelectorAll(".slide");
var counter = 0;
console.log(reviewSlide)
reviewSlide.forEach(
    (slide, index)=>{
     slide.style.left = `${index * 100}%`
    }
)
const slideImage = ()=>{
    reviewSlide.forEach(
   (slide)=>{
    slide.style.transform = `translateX(-${counter * 100}%)`;
   })
}
 const reviewBtnNext = () => {
     if (counter < reviewSlide.length - 1) {
        counter++;
        slideImage();
        }
        };
        const reviewBtnPrev = () => {
        if (counter != 0) {
        counter--;
        slideImage();
    }
};  