//  Frequently Asked Questions open & close 
const arrowRemove = document.querySelector(".arrow-remove");
const arrowAdd = document.querySelector(".arrow-add");
const answer = document.querySelector(".accordion__answer");
const questions = document.querySelectorAll(".accordion__item");


questions.forEach((item) => {
  const answer = item.querySelector(".accordion__answer");
  item.addEventListener("click", () => {
    answer.classList.toggle("show-accordion");
    
    if (answer.classList.contains('show-accordion')) {
    arrowRemove.style.display = "block"
    arrowAdd.style.display = "none"
  } else {
     arrowRemove.style.display = "none"
     arrowAdd.style.display = "block"
  }
  });

});



//Hambuger menu

const menuBtn = document.querySelector(".menu-btn");
const navBarLinks = document.querySelector(".nav-top");
const navBarSocials = document.querySelector(".navbar-socials");
const navLogoMobile = document.querySelector(".nav-main__logo-linkWhite");
const navLogoDesktop = document.querySelector(".nav-main__logo-link");
const loginBtn = document.querySelector(".btn__login");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle("close");
  navBarLinks.classList.toggle("show");
  navBarSocials.classList.toggle("show");
  navLogoMobile.classList.toggle("hide");
  navLogoDesktop.classList.toggle("hide");
  loginBtn.classList.toggle("show");
}


//  Białe Logo 
// napisać funkcje która będzie po kliknięciu w hamburger będzie pojawiało sie logo białe 
