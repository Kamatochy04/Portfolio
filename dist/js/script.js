AOS.init();

const hamburg = document.querySelector('.hamburger__lines'),
      items = document.querySelector('.hamburger__items')

hamburg.addEventListener('click', () => {
    hamburg.classList.toggle('hamburger__active')
    items.classList.toggle('hamburger__items-active')
})
