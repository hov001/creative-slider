const btnUp = document.querySelector('.up-button')
const btnDown = document.querySelector('.down-button')
const container = document.querySelector('.container')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('.main-slide__item').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

btnUp.addEventListener('click', () => {
  sliderListener('up')
})
btnDown.addEventListener('click', () => {
  sliderListener('down')
})

function sliderListener(button) {
  if (button === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }
  } else if (button === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  }

  const containerHeight = container.clientHeight

  mainSlide.style.transform = `translateY(-${
    containerHeight * activeSlideIndex
  }px)`
  sidebar.style.transform = `translateY(${
    containerHeight * activeSlideIndex
  }px)`
}
