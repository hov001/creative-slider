const btnUp = document.querySelector('.up-button')
const btnDown = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const slidesCount = mainSlide.querySelectorAll('.main-slide__item').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
