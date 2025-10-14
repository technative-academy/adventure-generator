class PopUp {
    constructor() {}

    getProductElement(event) {
        const currentElement = event.currentTarget
        console.log(currentElement.classList)
        console.log(Array.from(currentElement.classList))
        if (currentElement.classList.contains('products__card__result')) {
            return currentElement.id
        }
    }

    createPopUp(event, jsonDataById) {
        const id = this.getProductElement(event)
        console.log(id)
        const jsonEntry = jsonDataById[id]
        console.log(jsonEntry)

        const popUpContainer = document.createElement('div')
        const popUpDiv = document.createElement('div')
        const popUpImage = document.createElement('img')
        const popUpTitle = document.createElement('h1')
        const popUpDescription = document.createElement('p')
        const popUpDetails = document.createElement('div')
        const popUpDifficulty = document.createElement('p')
        const popUpRating = document.createElement('p')
        const popUpPrice = document.createElement('strong')
        const popUpButtonContainer = document.createElement('div')
        const popUpPurchase = document.createElement('button')
        const popUpAddToCart = document.createElement('button')
        const popUpClose = document.createElement('button')

        popUpImage.src = jsonEntry.image_url
        popUpTitle.textContent = jsonEntry.product_title
        popUpDescription.textContent = jsonEntry.description
        popUpDifficulty.textContent = 'Difficulty: ' + jsonEntry.difficulty
        popUpRating.textContent = 'Rating: ' + jsonEntry.rating
        popUpPrice.textContent = jsonEntry.cost + '£'
        popUpPurchase.textContent = 'Purchase Now'
        popUpAddToCart.textContent = 'Add to Cart'
        popUpClose.textContent = 'Close'

        popUpContainer.classList.add('popup__container')
        popUpContainer.classList.add('hidden__content')
        popUpDiv.classList.add('popup__main')
        popUpImage.classList.add('popup__image')
        popUpTitle.classList.add('popup__title')
        popUpDescription.classList.add('popup__description')
        popUpDetails.classList.add('popup__details')
        popUpDifficulty.classList.add('popup__short__paragraph')
        popUpRating.classList.add('popup__short__paragraph')
        popUpPrice.classList.add('popup__price')
        popUpButtonContainer.classList.add('popup__button__container')
        popUpPurchase.classList.add('popup__button')
        popUpAddToCart.classList.add('popup__button')
        popUpClose.classList.add('popup__button')

        popUpClose.addEventListener('click', this.destroyPopUp.bind(this))

        popUpButtonContainer.appendChild(popUpPurchase)
        popUpButtonContainer.appendChild(popUpAddToCart)
        popUpButtonContainer.appendChild(popUpClose)

        popUpDetails.appendChild(popUpDifficulty)
        popUpDetails.appendChild(popUpRating)
        popUpDetails.appendChild(popUpPrice)

        popUpDiv.appendChild(popUpImage)
        popUpDiv.appendChild(popUpTitle)
        popUpDiv.appendChild(popUpDescription)
        popUpDiv.appendChild(popUpDetails)
        popUpDiv.appendChild(popUpButtonContainer)

        popUpContainer.appendChild(popUpDiv)

        popUpContainer.classList.remove('hidden__content')

        document.querySelector('main').parentElement.appendChild(popUpContainer)
    }

    destroyPopUp() {
        document.querySelector('.popup__container').remove()
    }
}

export default PopUp
