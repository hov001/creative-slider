data.forEach((item) => {
  const sidebarItem = `
    <div
      style="
        background: ${item.background};
      "
    >
      <h1>${item.title}</h1>
      <p>${item.description}</p>
    </div>
  `

  const mainSliderItem = `
    <div
      class="main-slide__item"
      style="
        background-image: url(${item.image});
      "
    ></div>
  `
  sidebar.insertAdjacentHTML('afterbegin', sidebarItem)
  mainSlide.insertAdjacentHTML('beforeend', mainSliderItem)
})
