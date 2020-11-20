//  Frequently Asked Questions open & close 

const questions = document.querySelectorAll(".accordion__item");
// pobierając element zwrócić uwagę czy szukasz go w konkretnym elemencie , czy w calym dokumencie 

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

document.addEventListener('click', (event) => {
  event.preventDefault(); 
  // hamuje natywne zachowanie przeglądarki 
  questions.forEach((question) => {
    
    let isClickInsideQuestion = question.contains(event.target);
    //sprawdza to miejsce które jest kliknięte 

    console.log(isClickInsideQuestion, question, event.target)

    if (isClickInsideQuestion === false) {
      
      const answer = question.querySelector('.accordion__answer')
      console.log("Answer", question, answer)
      answer.classList.remove("show-accordion")
      
    }
  })

})

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
