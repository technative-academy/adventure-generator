function statsTabs() {
    document
        .querySelectorAll('.stats__card__tabs__button')
        .forEach((button) => {
            button.addEventListener('click', () => {
                const sideBar = document.querySelector('.stats__card__tabs')
                const tabsContainer = document.querySelector(
                    '.stats__card__quote__container'
                )
                const tabsNumber = button.dataset.forTab
                const tabToActivate = tabsContainer.querySelector(
                    `.stats__card__quote[data-tab="${tabsNumber}"]`
                )

                sideBar
                    .querySelectorAll('.stats__card__tabs__button')
                    .forEach((btn) => {
                        btn.classList.remove(
                            'stats__card__tabs__button--active'
                        )
                    })

                tabsContainer
                    .querySelectorAll('.stats__card__quote')
                    .forEach((tab) => {
                        tab.classList.remove('stats__card__quote--active')
                    })

                button.classList.add('stats__card__tabs__button--active')
                tabToActivate.classList.add('stats__card__quote--active')
            })
        })
    document.addEventListener('DOMContentLoaded', () => {
        statsTabs()
        document
            .querySelectorAll('.stats__card__tabs__button')
            .forEach((tabsContainer) => {
                tabsContainer
                    .querySelector(
                        '.stats__card__tabs__button .stats__card__tabs'
                    )
                    .click()
            })
    })
}

export default statsTabs
