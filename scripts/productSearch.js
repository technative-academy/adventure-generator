import drawRating from './rating.js'
import hideContent from './hideContent.js'

const searchButton = document.querySelector('.products__card__form__button')
searchButton.addEventListener('click', productSearch)

function productSearch(e) {
    e.preventDefault()
    const term = document.querySelector('.products__card__form__input').value
    const productsContainer = document.querySelector(
        '.products__card__container'
    )
    const resultsNumber = document.querySelector('.products__card__results__number')
    productsContainer.innerHTML = ''
    console.log(term)
    fetch('./data/products.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status)
            }
            return response.json()
        })
        .then((products) => {
            const results = products.filter(
                (product) =>
                    product.product_title.toLowerCase().includes(term) ||
                    product.description.toLowerCase().includes(term)
            )
            return results
        }) 
        .then((result) => {
            if(result.length === 0) {
                resultsNumber.innerHTML = 'There are no results for your search'
            } if(result.length === 1) {
                resultsNumber.innerHTML = `There is 1 result for your search`
            } else {
                resultsNumber.innerHTML = `There are ${result.length} results for your search` 
            }
            result.forEach((result) => {
                const prImage = document.createElement('img')
                const prTitle = document.createElement('h3')
                const prEmDescription = document.createElement('em')
                const prDescription = document.createElement('p')
                const prStrongPrice = document.createElement('strong')
                const prPrice = document.createElement('p')
                const prDiv = document.createElement('div')
                const prRating = document.createElement('div')

                prImage.classList.add('products__card__result__image')
                prTitle.classList.add('products__card__result__heading')
                prDescription.classList.add(
                    'products__card__result__description'
                )
                prPrice.classList.add('products__card__result__cost')
                prDiv.classList.add('products__card__result')

                prImage.src = result.image_url
                prTitle.textContent = result.product_title
                prEmDescription.textContent = result.description
                prStrongPrice.textContent = result.cost + '£'

                prDescription.appendChild(prEmDescription)
                prPrice.appendChild(prStrongPrice)
                drawRating(result.rating, prRating)

                prDiv.appendChild(prImage)
                prDiv.appendChild(prTitle)
                prDiv.appendChild(prDescription)
                prDiv.appendChild(prRating)
                prDiv.appendChild(prPrice)

                productsContainer.appendChild(prDiv)
                
            })
            hideContent(productsContainer)
        })
        .catch((error) => {
            this.dataError = true
            console.error(error)
        })
         
}

export default productSearch
