const containerHeight = container.clientHeight
const slidesCount = mainSlide.querySelectorAll('.main-slide__item').length
// Active Index
let activeSlideIndex = 0

// Last sidebar item
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

// Event listeners
btnUp.addEventListener('click', () => {
  sliderListener('up')
})
btnDown.addEventListener('click', () => {
  sliderListener('down')
})

// Slider listener function
function sliderListener(button) {
  // Detect button's direction
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

  mainSlide.style.transform = `translateY(-${
    containerHeight * activeSlideIndex
  }px)`
  sidebar.style.transform = `translateY(${
    containerHeight * activeSlideIndex
  }px)`
}
