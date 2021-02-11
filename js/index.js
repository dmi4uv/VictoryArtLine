const burger = document.querySelector('.burger');
const menu = document.querySelector(".menu");
const label = document.querySelector(".label");
const li = document.querySelectorAll("li");
// const animation = document.querySelector(".animation");

let menustatus = false;

burger.addEventListener('click', () => {

    // burger.classList.toggle('burger-active')
    menustatus ? closeNav() : openNav()
    // return menustatus = !menustatus
    // openNav()


})

console.log(menustatus);

const tl = new TimelineMax();

const openNav = () => {
    console.log('open');
    burger.classList.toggle('burger-active')
    tl
        .fromTo(menu, 0, { x: "100vw", }, { x: "0", ease: Power2.easeInOut })
        .fromTo(menu, 1, { opacity: 0, }, { opacity: 1, ease: Power2.easeInOut })
        // .fromTo(label, 1, { opacity: 0,  /*  x: "25vh" */ }, { opacity: 1,  /*  x: "0", */  ease: Power2.easeInOut }, '-=0.6')
        .fromTo(li[0], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=0.5')
        .fromTo(li[1], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[2], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[3], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[4], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
    // .fromTo(li[5], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
    // .fromTo(li[6], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
    // .fromTo(li[7], .6, { opacity: 0, x: "10vh" }, { opacity: 1, x: "0", ease: Power2.easeInOut }, '-=.5')
    return menustatus = !menustatus
    // .fromTo(menu, 1.2, {  opacity: 0, x: "0",   }, { opacity: 1, x: "0", ease: Power2.easeInOut })
}
const closeNav = () => {
    console.log('close');

    tl
        // .fromTo(li[7], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        // .fromTo(li[6], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        // .fromTo(li[5], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[4], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut })
        .fromTo(li[3], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[2], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[1], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')
        .fromTo(li[0], .6, { opacity: 1, x: "0" }, { opacity: 0, x: "10vh", ease: Power2.easeInOut }, '-=.5')


        // .fromTo(label, 1.2, {  opacity: 1,  }, { opacity: 0,    ease: Power2.easeInOut }, '-=1.2')

        .fromTo(menu, 1, { opacity: 1, /* zIndex: 20 */ /* x: "0" */ }, { opacity: 0, /* zIndex: -1, */ /*  x: "100vw", */  ease: Power2.easeInOut })
        .fromTo(menu, 0, { x: "0" }, { x: "100vw", ease: Power2.easeInOut })

    burger.classList.toggle('burger-active')
    return menustatus = !menustatus
    // .fromTo(menu, 1.2, {  opacity: 1, x: "0",  }, { opacity: 0, x: "0",   ease: Power2.easeInOut })
}






// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 'auto',
//     spaceBetween: 30,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
// });

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: { enabled: true },
    breakpoints: { 769: { slidesPerView: 2, slidesPerGroup: 2 } },
    scrollbar: { el: '.swiper-scrollbar' },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true }
  });

window.addEventListener('scroll', () => {
    const body = document.querySelector("body");
    const sectionMain = document.querySelector(".section-main");
    var rect = body.getBoundingClientRect();
    // console.log(sectionMain.offsetHeight);
    // console.log('rect', Math.abs(rect.y));
    
    if(Math.abs(rect.y) > sectionMain.offsetHeight){
        burger.classList.add('burger-black')
    }else{
        burger.classList.remove('burger-black')
    }

})