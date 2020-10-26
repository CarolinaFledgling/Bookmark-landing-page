//  Co trzeba zrobić kroki 
// napisać funkcjonaloność, która po kliknięciu w pytanie czyli nasze ramkę z pytaniem (accordion__item),
// otrzyma ona klase (.show-accordion) która pokazuje odpowiedz na pytanie oraz
// w tym samym kliknięciu musimy zamienić strzałki (.arrow-remove) musi dostac display:block , a arrow-add display none . 


//Próba z wszystkimi pytaniami 

const questions = document.querySelectorAll('.accordion__item')
//  zwraca nam kolekcje elementów 
const arrowRemove = document.querySelector('.arrow-remove')
const arrowAdd = document.querySelector('.arrow-add')
const answer = document.querySelector('.accordion__answer')


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

const question1 = document.getElementById('question1');


question1.addEventListener('click', openAccordion)

function openAccordion(event) {
    let isClicking = question1.contains(event.target)
    if (isClicking) {
        answer.classList.toggle('show-accordion')
    }

    if (answer.classList.contains('show-accordion')) {
        arrowRemove.style.display = "block"
        arrowAdd.style.display = "none"
    } else {
        arrowRemove.style.display = "none"
        arrowAdd.style.display = "block"
    }



}




// Hambuger menu 

const menuBtn = document.querySelector('.menu-btn')
const navList = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item')
const nav = document.querySelector('.nav')

// Set the ovelay state of menu, true = open menu , false = close menu 

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    // musimy sprawidzić stan menu ,nie jest właczony overlay
    if (!showMenu) {
        menuBtn.classList.add('close')
        navList.classList.add('close')
        nav.classList.add('close')
        navItems.forEach(item => item.classList.add('show'))

        showMenu = true;
    } else {
        menuBtn.classList.remove('close')
        navList.classList.remove('close')
        nav.classList.remove('close')
        navItems.forEach(item => item.classList.remove('show'))

        showMenu = false;
    }
}