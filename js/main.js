//  Co trzeba zrobić kroki
// napisać funkcjonaloność, która po kliknięciu w pytanie czyli nasze ramkę z pytaniem (accordion__item),
// otrzyma ona klase (.show-accordion) która pokazuje odpowiedz na pytanie oraz
// w tym samym kliknięciu musimy zamienić strzałki (.arrow-remove) musi dostac display:block , a arrow-add display none .

//Próba z wszystkimi pytaniami

// const questions = document.querySelectorAll('.accordion__item')
//  zwraca nam kolekcje elementów
const arrowRemove = document.querySelector(".arrow-remove");
const arrowAdd = document.querySelector(".arrow-add");
const answer = document.querySelector(".accordion__answer");

// PRÓBA Z WSZYTKIMI PYTANIAMI

// questions.forEach(item => {
//             item.addEventListener('click', openAccordion);

//             function openAccordion(event) {
//                 let isClicking = item.contains(event.target)
//                 if (isClicking) {
//                     answer.classList.add('show-accordion')
//                     arrowRemove.style.display = "block"
//                     arrowAdd.style.display = "none"

//                 }
//             }
//      })

//  próba z jednym pytaniem

// const question1 = document.getElementById('question1');

// question1.addEventListener('click', openAccordion)

// function openAccordion(event) {
//     let isClicking = question1.contains(event.target)
//     if (isClicking) {
//         answer.classList.toggle('show-accordion')
//     }

//     if (answer.classList.contains('show-accordion')) {
//         arrowRemove.style.display = "block"
//         arrowAdd.style.display = "none"
//     } else {
//         arrowRemove.style.display = "none"
//         arrowAdd.style.display = "block"
//     }

// }

const questions = document.querySelectorAll(".accordion__item");

questions.forEach((item) => {
  const answer = item.querySelector(".accordion__answer");
  item.addEventListener("click", () => {
    answer.classList.toggle("show-accordion");
  });
});

//Hambuger menu

const menuBtn = document.querySelector(".menu-btn");
const navBarLinks = document.querySelector(".nav-top");
const navBarSocials = document.querySelector(".navbar-socials");
const navLogoMobile = document.querySelector(".nav-main__logo-white");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menuBtn.classList.toggle("close");
  navBarLinks.classList.toggle("show");
  navBarSocials.classList.toggle("show");
  navLogoMobile.classList.toggle("show");
}


//  Rozwiazanie dla białego Loga 
// napisać funkcje która będzie po kliknięciu w hamburger będzie pojawiało sie logo białe 
