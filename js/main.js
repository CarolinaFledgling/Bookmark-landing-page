//  Frequently Asked Questions open & close 

const questions = document.querySelectorAll(".accordion__item");
// When downloading an element, pay attention to whether you are looking for it in a specific element or in the entire document

questions.forEach((item) => {
  const answer = item.querySelector(".accordion__answer");
  item.addEventListener("click", () => {
    answer.classList.toggle("show-accordion");
    const arrowRemove = item.querySelector(".arrow-remove");
    const arrowAdd = item.querySelector(".arrow-add");
    if (answer.classList.contains('show-accordion')) {
      arrowRemove.style.display = "block"
      arrowAdd.style.display = "none"
      console.log(arrowAdd)
      console.log(arrowRemove)
    } else {
      arrowRemove.style.display = "none"
      arrowAdd.style.display = "block"
    }
  });

});

//Hiding the guestions  when user clicks outside 

document.addEventListener('click', (event) => {
  event.preventDefault(); 
 
  questions.forEach((question) => {
    
    let isClickInsideQuestion = question.contains(event.target);
    // console.log(isClickInsideQuestion, question, event.target)
    if (isClickInsideQuestion === false) {
      
      const answer = question.querySelector('.accordion__answer')
      // console.log("Answer", question, answer)
      answer.classList.remove("show-accordion")
      const arrowRemove = question.querySelector('.arrow-remove')
      const arrowAdd = question.querySelector('.arrow-add')
      arrowRemove.style.display = "none"
      arrowAdd.style.display = "block"
      
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
