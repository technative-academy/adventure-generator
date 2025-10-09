class JsonParser {
    constructor() {
        this.productsContainer = document.querySelector(
            '.products__card__container'
        )
    }

    getProducts(searchQuery) {
        fetch('../data/products.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status)
                }
                return response.json()
            })
            .then((json) => {
                this.products = json
                json.forEach((product) => {
                    const prImage = document.createElement('img')
                    const prTitle = document.createElement('h3')
                    const prEmDescription = document.createElement('em')
                    const prDescription = document.createElement('p')
                    const prStrongPrice = document.createElement('strong')
                    const prPrice = document.createElement('p')
                    const prDiv = document.createElement('div')

                    prImage.classList.add('products__card__result__image')
                    prTitle.classList.add('products__card__result__heading')
                    prDescription.classList.add(
                        'products__card__result__description'
                    )
                    prPrice.classList.add('products__card__result__cost')
                    prDiv.classList.add('products__card__result')

                    prImage.src = product.image_url
                    prTitle.textContent = product.product_title
                    prEmDescription.textContent = product.description
                    prStrongPrice.textContent = product.cost + '£'

                    prDescription.appendChild(prEmDescription)
                    prPrice.appendChild(prStrongPrice)

                    prDiv.appendChild(prImage)
                    prDiv.appendChild(prTitle)
                    prDiv.appendChild(prDescription)
                    prDiv.appendChild(prPrice)

                    this.productsContainer.appendChild(prDiv)
                })
            })
            .catch((error) => {
                this.dataError = true
                console.error(error)
            })
    }
}

export default JsonParser
