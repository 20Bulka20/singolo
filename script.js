//__________ Header_____________________________________________
const MENU = document.getElementById('menu');
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

document.addEventListener('scroll', onScroll);
function onScroll() {
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
//___________________BurgerMenu_________________________________
//function BurgerMenu(selector){
    let burgmenu = document.getElementById('burger-menu');
    let burgbtn = document.getElementById('burg-btn');
    let burglinks = document.getElementById('burg-nav');
    // let burg_overlay = document.getElementsByClassName('burger-menu-overlay');

    burgbtn.addEventListener('click', (event)=>{
        event.preventDefault();
        switchMenu();
        
    });
    burglinks.addEventListener('click', ()=>{
        burglinks.querySelectorAll('a').forEach(el =>  switchMenu());
       
    });
    // burg_overlay.addEventListener('click', ()=> switchMenu());

    function switchMenu(){
        if(burgmenu.classList.contains('burger-menu-active')){
            burgmenu.classList.remove('burger-menu-active');
            document.body.style.overflow = '';
            }
            else {
                burgmenu.classList.add('burger-menu-active');
                document.body.style.overflow = 'hidden';
            }
    }

//}
// BurgerMenu('.burger-menu');

// _____________Slider__________________________________________
const SLIDER = document.getElementById('SliderID');
const HORPHONE = document.getElementById('hor-phone');
const VERPHONE = document.getElementById('ver-phone');
const SLIDESList = document.getElementById('slider-content');

let items = document.querySelectorAll('.slider-item');
let CurrentItem = 0;
let isInabled = true;

function changeCurrentItem(n) {
    CurrentItem = (n + items.length) % items.length;
}
function hideItem(direction) {
    isInabled = false;
    items[CurrentItem].classList.add(direction);
    items[CurrentItem].addEventListener('animationend', function () {
        this.classList.remove('slactive', direction);
    })
}
function showItem(direction) {
    items[CurrentItem].classList.add('next', direction);
    items[CurrentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction);
        this.classList.add('slactive');
        isInabled = true;
    })
}
function previousItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}
function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.control.left').addEventListener('click', function () {

    if (isInabled) {
        previousItem(CurrentItem);
    }
});
document.querySelector('.control.right').addEventListener('click', function () {

    if (isInabled) {
        nextItem(CurrentItem);
    }
});

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

form.addEventListener('submit', (event) => {
    event.preventDefault();
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