const navbar = document.querySelector('.navbar')
const bottom = document.querySelector('.bottom-container')
const btn = document.querySelector('.Login')

btn.addEventListener('click', () => {
    btn.classList.toggle('clicked')
})
window.addEventListener('scroll', () => {
    if (window.scrollY > bottom.offsetTop - navbar.offsetHeight - 2) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})