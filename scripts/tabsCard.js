function cardTabs() {
    document.querySelectorAll('.tabs__card__list__button').forEach((button) => {
        button.addEventListener('click', () => {
            const sideBar = document.querySelector('.tabs__card__list')
            const tabsContainer = document.querySelector('.tabs__card')
            const tabsNumber = button.dataset.forTab
            const tabToActivate = tabsContainer.querySelector(
                `.tabs__card__img[data-tab="${tabsNumber}"]`
            )

            sideBar
                .querySelectorAll('.tabs__card__list__button')
                .forEach((btn) => {
                    btn.classList.remove('tabs__card__list__button--active')
                })

            tabsContainer
                .querySelectorAll('.tabs__card__img')
                .forEach((tab) => {
                    tab.classList.remove('tabs__card__img--active')
                })

            button.classList.add('tabs__card__list__button--active')
            tabToActivate.classList.add('tabs__card__img--active')
        })
    })
}

export default cardTabs
