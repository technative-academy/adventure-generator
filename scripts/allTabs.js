class Tabs {
    constructor(selector, tabSelector) {
        this.buttonsContainer = document.querySelector(selector)
        this.tabButtons = this.buttonsContainer.querySelectorAll('.tab__button')
        this.tabsContainer = document.querySelector(tabSelector)
        this.tabContents = this.tabsContainer.querySelectorAll('.tab')

        this.tabButtons.forEach((tabButton) => {
            tabButton.addEventListener('click', (event) =>
                this.tabClicked(event)
            )
        })
       
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
        

        this.chooseContent(tabId)
    }

    chooseContent(tab) {
        const heading = document.querySelector('.header__heading')
        const footnote = document.querySelector('.header__footnote')
        const image = document.querySelector('.header__image')

        if (tab == 'home') {
            heading.textContent = 'Book with us and embark on the adventure of your life'
            footnote.textContent = "Or... take a hike!"
            image.style.display = 'initial'
            document.querySelector('.tabs__card .tab__button').click()
            document.querySelector('.stats__card .tab__button').click()
        } else if (tab == 'products') {
            heading.textContent = 'Our products'
            footnote.textContent = 'Adventure has never happened with a closed wallet...'
            image.style.display = 'none'
        } else if (tab == 'about') {
            heading.textContent = 'About us'
            footnote.textContent = "It's not all about you"
            image.style.display = 'none'
        } 
    }
}

// Expose the 'Tabs' class so that it can be imported by other files
export default Tabs
