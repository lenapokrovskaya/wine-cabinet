//Мобильное меню
const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        navMain.classList.add("main-nav--opened");
    } else {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
    }
});

const scrollSectionVideo = document.querySelector('.video');
const scrollSectionVideoHeight = scrollSectionVideo.offsetHeight;
const scrollVideo = document.querySelector('.video__file');
const scrollVideoTop = scrollVideo.getBoundingClientRect().top;
const scrollSectionForm = document.querySelector('.contact');
const scrollSectionVideoTop = scrollSectionVideo.getBoundingClientRect().top;
const scrollSectionVideoFromBegin = scrollSectionVideoTop + pageYOffset;
const scrollSectionVideoBottom = scrollSectionVideo.getBoundingClientRect().bottom;
const scrollSectionFormTop = scrollSectionForm.getBoundingClientRect().top;
const scrollProductForm = document.querySelector('.product');
const pageBody = document.querySelector('.page-body');
const headerStatic = pageBody.querySelector('.page-header');
const siteItem = pageBody.querySelectorAll('.site-list__item');
const siteLink = pageBody.querySelectorAll('.site-list__link');
const headerLogo = pageBody.querySelector('.page-header__logo-img');
const runningTextRight = document.querySelector('.infinite-text-right');
const runningTextLeft = document.querySelector('.infinite-text-left');
const runStart = 4;
const runningTextPoint = scrollSectionVideoHeight / runStart;

const flyingVideo = document.querySelector('.video__file-container');

//Бегущая строка при скролле


const activateRunText = () => {
    runningTextRight.classList.add('infinite-text-right--active');
    runningTextLeft.classList.add('infinite-text-left--active');
};


//Вылетающее видео

const activateFlyingDownVideo = () => {
    flyingVideo.classList.add('video__file-container--active-down');
};


//Активация меняющего цвет липкого хедера
const activateStickyHeader = () => {
    headerStatic.classList.remove('page-header');
    headerStatic.classList.add('page-header--sticky');
}

const getWhiteStickyHeader = () => {
    siteItem.forEach((el) => {
        el.classList.remove('site-list__item');
        el.classList.add('site-list__item--sticky');
    })

    siteLink.forEach((el) => {
        el.classList.remove('site-list__link');
        el.classList.add('site-list__link--sticky');
    })

    // headerLogo.classList.add('page-header__logo-img--sticky');
};

const removeWhiteStickyHeader = () => {
    siteItem.forEach((el) => {
        el.classList.remove('site-list__item--sticky');
        el.classList.add('site-list__item');
    })

    siteLink.forEach((el) => {
        el.classList.remove('site-list__link--sticky');
        el.classList.add('site-list__link');
    })

    // headerLogo.classList.remove('page-header__logo-img--sticky');
};

//Запуск видео

const activateVideo = () => {
    window.addEventListener('scroll', function() {
        if (pageYOffset > scrollSectionVideoTop) {
            scrollVideo.classList.remove('video__file');
            scrollVideo.classList.add('video__file--active')
        }
    })
};


const activateStickyHeaderOnScroll = () => {

    window.addEventListener('scroll', function() {
        if (pageYOffset > scrollSectionVideoTop && pageYOffset < scrollSectionFormTop) {
            activateStickyHeader();
            getWhiteStickyHeader();

        } else {
            removeWhiteStickyHeader();
        }
        if (pageYOffset > 100) {
            activateRunText();
            activateFlyingDownVideo();
        }
    })
};
activateStickyHeaderOnScroll();


window.addEventListener('load', function() {
    video = document.getElementById('video-play');
    console.log(video)
    playbutton = document.getElementById('play');
    console.log(playbutton)
    playbutton.addEventListener('click', playOrPause, false);
}, false);

function playOrPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}