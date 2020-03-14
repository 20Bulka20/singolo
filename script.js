// Header
const MENU = document.getElementById('menu');
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});
// _____________Slider__________________________________________
const SLIDER = document.getElementById('SliderID');
let slideIndex = 1;   /* Индекс слайда по умолчанию */

showSlides(slideIndex);

function plusSlide() {     
    showSlides(slideIndex += 1);
}

function minusSlide() { 
    showSlides(slideIndex -= 1);
}

function currentSlide(n) { /* Устанавливает текущий слайд */
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider-item");
    const SLIDESList = document.getElementById('slider-content');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    SLIDESList.querySelectorAll('li').forEach(slide=> slide.style.display = "none");    
    slides[slideIndex - 1].style.display = "block";

    //Slider background switch
    if (slideIndex === 1) {
        SLIDER.classList.remove('slide2-style');
    }
    else {
        SLIDER.classList.add('slide2-style');
    }
}

const HORPHONE = document.getElementById('hor-phone');
const VERPHONE = document.getElementById('ver-phone');

HORPHONE.addEventListener('click', (event) => {
    HORPHONE.querySelectorAll('img').forEach(el => el.classList.remove('screen-off'));
    event.target.classList.add('screen-off');
});
VERPHONE.addEventListener('click', (event) => {
    VERPHONE.querySelectorAll('img').forEach(el => el.classList.remove('screen-off'));
    event.target.classList.add('screen-off');
});

//_________________Portfolio______________________
// Portfolio. Переключение табов
// При пеерключении табов в верхней части блока, новый таб должен становиться активным. +
//Страница может не переключаться, оставаясь на своем месте. +
//Картинки снизу, должны менять свои позиции, сдвигаясь на одинаковую величину. Либо они должны перемещаться в случайном порядке. 
//Главное, чтобы те же картинки не оставались на своем месте.
const PORTFOLIO_BTN = document.getElementById('PortfolioBtn');
PORTFOLIO_BTN.addEventListener('click', (event) => {
    PORTFOLIO_BTN.querySelectorAll('button').forEach(el => el.classList.remove('active-btn'));
    event.target.classList.add('active-btn');
    let IMG = document.getElementsByClassName("Album_img");
    for(let i = 0; i<IMG.length; i++)
    { 
        IMG[i]=IMG[i+1];
    }
});

// function ImgShift(){
//     let IMG = document.getElementsByClassName("Album_img");
//     for(let i = 0; i<IMG.length; i++)
//     { 
//         IMG[i]=IMG[i+1];
//     }

// }




// Portfolio. Взаимодействие с картинками
// При нажатии на картинку вокруг нее должна появиться рамка цвета #F06C64 величиной 5px. 
//При нажатии на другую картинку, предыдущая должна потерять рамку, а новая ее получить.




// Form
// function stopDefAction(evt) {
//     evt.preventDefault();
// }
// document.getElementById('btn').addEventListener(
//     'click', stopDefAction, false
// );

