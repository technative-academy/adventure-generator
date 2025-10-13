function footerMenu() {
    const buttonLeft = document.querySelector('.footer__list__left__header')
    const buttonRight = document.querySelector('.footer__list__right__header')
    const menuLeft = document.querySelector('.footer__list__left__menu')
    const menuRight = document.querySelector('.footer__list__right__menu')

    buttonLeft.addEventListener('click', () => {
        buttonLeft.classList.toggle('active')
        menuLeft.classList.toggle('active')
        console.log(menuLeft)
    })

    buttonRight.addEventListener('click', () => {
        buttonRight.classList.toggle('active')
        menuRight.classList.toggle('active')
    })

    
}

export default footerMenu
