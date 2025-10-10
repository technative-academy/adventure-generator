class Tabs {
    constructor(selector, tabSelecteor) {
        this.buttonsContainer = document.querySelector(selector)
        this.tabButtons =
            this.buttonsContainer.querySelectorAll('.tab__button')
        this.tabsContainer = document.querySelector(tabSelecteor)
        this.tabContents = this.tabsContainer.querySelectorAll('.tab')

        this.tabButtons.forEach((tabButton) => {
            tabButton.addEventListener('click', (event) =>
                this.tabClicked(event)
            )
        })
        console.log('constructed instance of Tabs class')
    }

    tabClicked(event) {
        const clickedButton = event.currentTarget
        const tabId = clickedButton.dataset.tab
        const detailsElement = this.tabsContainer.querySelector(
            `.tab[data-tab="${tabId}"]`
        )

        console.log(`The ${tabId} button has been pressed`)

        this.tabButtons.forEach((button) => {
            button.classList.remove('selected__button')
        })
        this.tabContents.forEach((content) => {
            content.classList.remove('selected__tab')
        })

        clickedButton.classList.add('selected__button')
        detailsElement.classList.add('selected__tab')
        console.log('button ' + tabId + ' has been pressed')

        this.chooseContent(tabId)
    }

    chooseContent(tab) {
        const heading = document.querySelector('.header__heading')
        const footnote = document.querySelector('.header__footnote')
        const image = document.querySelector('.header__image')

        if (tab == 'home') {
            heading.textContent = 'Something profound about our company'
            footnote.textContent = "Tagline eg. 'We do talking, you do walking'"
            image.style.display = 'initial'
        } else if (tab == 'products') {
            heading.textContent = 'Our products'
            footnote.textContent = 'experience is not free'
            image.style.display = 'none'
        } else {
            heading.textContent = 'About us'
            footnote.textContent = "that's why we are important"
            image.style.display = 'none'
        }
    }
}

// Expose the 'Tabs' class so that it can be imported by other files
export default Tabs
