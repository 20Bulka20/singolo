//__________ Header_____________________________________________
const MENU = document.getElementById('menu');
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

document.addEventListener('scroll', onScroll);
function onScroll(event) {
    const curpos = window.scrollY;
    const menulinks = document.querySelectorAll('#menu a');

    document.querySelectorAll('section, header').forEach(el => {
        if (el.offsetTop <= curpos && (el.offsetTop + el.offsetHeight) > curpos) {

            menulinks.forEach(a => {
                a.classList.remove('active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }

            });
        }
    });
}
// _____________Slider__________________________________________
const SLIDER = document.getElementById('SliderID');
const HORPHONE = document.getElementById('hor-phone');
const VERPHONE = document.getElementById('ver-phone');
const SLIDESList = document.getElementById('slider-content');
let slideIndex = 1;

showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider-item");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    SLIDESList.querySelectorAll('li').forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";

    //Slider background switch
    if (slideIndex === 1) {
        SLIDER.classList.remove('slide2-style');
    }
    else {
        SLIDER.classList.add('slide2-style');
    }
}
//_________________Slider. Активация экранов телефонов______________
HORPHONE.addEventListener('click', (event) => {
    HORPHONE.querySelectorAll('img').forEach(el => el.classList.remove('screen-off'));
    event.target.classList.add('screen-off');
});
VERPHONE.addEventListener('click', (event) => {
    VERPHONE.querySelectorAll('img').forEach(el => el.classList.remove('screen-off'));
    event.target.classList.add('screen-off');
});

//________________________Portfolio_____________________________

const PORTFOLIO_BTN = document.getElementById('PortfolioBtn');
const IMG_Container = document.getElementById('Album');
PORTFOLIO_BTN.addEventListener('click', (event) => {
    PORTFOLIO_BTN.querySelectorAll('button').forEach(el => el.classList.remove('active-btn'));
    event.target.classList.add('active-btn');
    shuffle(IMG_Container);
});

function shuffle(container) {
    [...container.children].sort(() => Math.random() > 0.5 ? 1 : -1).forEach(f => container.appendChild(f));
}

//___________ Portfolio. Взаимодействие с картинками____________________________

IMG_Container.addEventListener('click', (event) => {
    IMG_Container.querySelectorAll('div').forEach(el => el.classList.remove('chosen'));
    event.target.closest('div').classList.add('chosen');
});
// _______________________Form___________________________

const SUB_BUTTON = document.getElementById('btn');
const CLOSE_BUTTON = document.getElementById('close-btn');
const form = document.getElementById('myForm');
form.onsubmit = submit;

function submit(event) {

    SUB_BUTTON.addEventListener('click', () => {
        const SUBJECT = document.getElementById('subject').value;
        const DETAILS = document.getElementById('details').value;

        if (SUBJECT == "") document.getElementById('Theme').innerText = "Без темы";
        else document.getElementById('Theme').innerText = "Тема: " + SUBJECT;

        if (DETAILS == "") document.getElementById('Description').innerText = "Без описания";
        else document.getElementById('Description').innerText = "Описание: " + DETAILS;

        document.getElementById('message-block').classList.remove('hidden');
    });

    CLOSE_BUTTON.addEventListener('click', () => {
        document.getElementById('Theme').innerText = "";
        document.getElementById('Description').innerText = "";
        document.getElementById('message-block').classList.add('hidden');
        form.reset();

    });
    event.preventDefault();
}