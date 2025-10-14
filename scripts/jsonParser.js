import hideContent from './hideContent.js'
import drawRating from './rating.js'
import PopUp from './popUpPurchase.js'

class JsonParser {
    constructor() {
        this.productsContainer = document.querySelector(
            '.products__card__container'
        )
    }

    getProducts() {
        return fetch('data/products.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status)
                }
                return response.json()
            })
            .catch((error) => {
                this.dataError = true
                console.error(error)
            })
    }

    createProductsHtml(jsonData) {
        const popUp = new PopUp()
        const dataById = {}
        jsonData.forEach((item) => {
            dataById[item.id] = item
        })
        jsonData.forEach((product) => {
            const prImage = document.createElement('img')
            const prTitle = document.createElement('h3')
            const prEmDescription = document.createElement('em')
            const prDescription = document.createElement('p')
            const prStrongPrice = document.createElement('strong')
            const prPrice = document.createElement('p')
            const prDiv = document.createElement('div')
            const prRating = document.createElement('div')

            prDiv.addEventListener('click', (event) =>
                popUp.createPopUp(event, dataById)
            )
            prRating.addEventListener('click', (event) =>
                popUp.createPopUp(event, dataById)
            )

            prImage.classList.add('products__card__result__image')
            prTitle.classList.add('products__card__result__heading')
            prDescription.classList.add('products__card__result__description')
            prPrice.classList.add('products__card__result__cost')
            prDiv.classList.add('products__card__result')

            prImage.src = product.image_url
            prTitle.textContent = product.product_title
            prEmDescription.textContent = product.description
            prStrongPrice.textContent = product.cost + '£'

            prDescription.appendChild(prEmDescription)
            prPrice.appendChild(prStrongPrice)
            drawRating(product.rating, prRating)

            prDiv.appendChild(prImage)
            prDiv.appendChild(prTitle)
            prDiv.appendChild(prDescription)
            prDiv.appendChild(prRating)
            prDiv.appendChild(prPrice)
            prDiv.id = product.id

            this.productsContainer.appendChild(prDiv)
        })
        hideContent(this.productsContainer)
    }
}

export default JsonParser
