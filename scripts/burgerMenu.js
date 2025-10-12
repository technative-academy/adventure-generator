function burgerMenu () {

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active');
})

document.querySelectorAll('.nav .tab__button').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navBar.classList.remove('active')
}))

}

export default burgerMenu;