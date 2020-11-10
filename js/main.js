//  Frequently Asked Questions open & close 
// tego nie uzywaliśmy przez name shadowing, korzystaliśmy ze zmiennej z blizszego zakresu
const questions = document.querySelectorAll(".accordion__item");
// zwróć uwagę czy pobierasz element uzywajac document czy chcesz wyszukac go w konkretnym elemencie

questions.forEach((item) => {
  const answer = item.querySelector(".accordion__answer");
  item.addEventListener("click", () => {
    answer.classList.toggle("show-accordion");
    const arrowRemove = item.querySelector(".arrow-remove");
    const arrowAdd = item.querySelector(".arrow-add");
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
  navBarSocials.classList.toggle("hide");
  navLogoMobile.classList.toggle("hide");
  navLogoDesktop.classList.toggle("hide");
  loginBtn.classList.toggle("showBtnLogin");
}




