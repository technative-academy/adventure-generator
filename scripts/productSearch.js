import drawRating from './rating.js'
import hideContent from './hideContent.js'

const searchButton = document.querySelector('.products__card__form__button')
searchButton.addEventListener('click', productSearch)

function productSearch(e) {
    e.preventDefault()
    const term = document
        .querySelector('.products__card__form__input')
        .value.toLowerCase()
    const productsContainer = document.querySelector(
        '.products__card__container'
    )
    document.querySelector('.products__card__form__input').value = ''
    const resultsNumber = document.querySelector(
        '.products__card__results__number'
    )
    Array.from(productsContainer.children).forEach((product) => {
        product.classList.add('hidden__content')
    })
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
            if (result.length === 0) {
                resultsNumber.innerHTML = `There are no results for ${term}`
            }
            if (result.length === 1) {
                resultsNumber.innerHTML = `There is 1 result for ${term}`
            } else {
                resultsNumber.innerHTML = `There are ${result.length} results for ${term}`
            }
            result.forEach((result) => {
                const resultingElement = document.getElementById(result.id)
                resultingElement.classList.remove('hidden__content')
            })
        })
        .catch((error) => {
            console.error(error)
        })
}

export default productSearch
