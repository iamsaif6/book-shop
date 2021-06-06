
// Owl Carousel

$('.header__slider').owlCarousel({
    items:1,
    loop: true,
    nav:false,
    dots:true
});


// Fixed Nav

let navList = document.querySelector('.nav__list')
let navLink = document.querySelectorAll('.nav__link')

window.addEventListener('scroll' , function(){
    let position = Math.floor(pageYOffset)
     
    if(position > 200){
        navList.classList.add('active')
    }else{
        navList.classList.remove('active')
    }
})

navLink.forEach(navEach => {
    navEach.addEventListener('click' , function(){
        navLink.forEach(link => link.classList.remove('active'))
        this.classList.add('active')
    })
})


// Offcanvas Menu

let trigger = document.querySelector('.nav__trigger-wrap')
let overlay = document.querySelector('.offset__overlay')
let menu = document.querySelector('.offset__menu')
let offsetclose = document.querySelector('.offset__close')
let offsetlink = document.querySelectorAll('.offset__link')

trigger.addEventListener('click' , function(){
    this.classList.toggle('active')
    menu.classList.toggle('active')
    overlay.classList.toggle('active')
})
overlay.addEventListener('click' , function(){
    this.classList.remove('active')
    menu.classList.remove('active')
    trigger.classList.remove('active')
})

offsetclose.addEventListener('click' , function(){
    menu.classList.remove('active')
    trigger.classList.remove('active')
    overlay.classList.remove('active')

    return false;
})


offsetlink.forEach(offseteach => {
    offseteach.addEventListener('click' , function(){
        offsetlink.forEach(offset => overlay.classList.remove('active'))
        offsetlink.forEach(offset => menu.classList.remove('active'))
        offsetlink.forEach(offset => trigger.classList.remove('active'))
    })
})


