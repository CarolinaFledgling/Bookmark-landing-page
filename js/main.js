//  Co trzeba zrobić kroki 
// napisać funkcjonaloność, która po kliknięciu w pytanie czyli nasze ramkę z pytaniem (accordion__item),
// otrzyma ona klase (.show-accordion) która pokazuje odpowiedz na pytanie oraz
// w tym samym kliknięciu musimy zamienić strzałki (.arrow-remove) musi dostac display:block , a arrow-add display none . 


//Próba z wszystkimi pytaniami 

// const questions = document.querySelectorAll('.accordion__item')
// //  zwraca nam kolekcje elementów 

// questions.forEach(item =>{
//     item.addEventListener('click', openAccordion);
// })

// function openAccordion(e){
    
// }


//  próba z jednym pytaniem 

const question1 = document.getElementById('question1');
const arrowRemove = document.querySelector('.arrow-remove')
const answer =document.querySelector('.accordion__answer')

question1.addEventListener('click', openAccordion)

function openAccordion(event){
    let isClicking = question1.contains(event.target)
    if(isClicking){
        answer.classList.toggle('show-accordion')
    }

}

openAccordion()