//  Frequently Asked Questions open & close 

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

//Hiding the guestions  when user clicks outside 
const question1 = document.querySelector(".accordion__item")
const header = document.querySelector('.question-header__title')
const answer = document.querySelector(".accordion__answer");

document.addEventListener('click', (event) =>{
  let isClicing = question1.contains(event.target)
 console.log(isClicing)
 if(isClicing === false){
   answer.classList.remove("show-accordion")
 }
})

const questions2 = document.querySelectorAll(".accordion__item");

// questions2.forEach((question) => {
//   question.addEventListener('click', (event) => {
//     let isClick = question.contains(event.target);
//     console.log(isClick)
//     if (isClick === false) {
//       answer.classList.remove("show-accordion")
//     }
//   })
// })






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






// Zapytac 

// Co to jest e.preventDefault(): 