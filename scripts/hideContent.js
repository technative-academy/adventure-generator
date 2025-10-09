function hideContent(element, event = null) {
    if (element.childElementCount > 6) {
        Array.from(element.children).forEach((child, index) => {
            if (index >= 6) {
                child.classList.add('hidden__content')
            }
        })

        if (event == null) {
            const showMoreButton = document.createElement('button')
            showMoreButton.textContent = 'Show more'
            showMoreButton.classList.add('show__more__button')
            showMoreButton.addEventListener('click', (event) =>
                showContent(event)
            )
            element.appendChild(showMoreButton)
        } else {
            event.currentTarget.classList.remove('hidden__content')
            event.currentTarget.textContent = 'Show more'
            event.currentTarget.addEventListener('click', (event) =>
                showContent(event)
            )
        }
    }
}

function showContent(event) {
    const showMoreButton = event.currentTarget
    const parent = showMoreButton.parentNode
    console.log(parent.children)
    Array.from(parent.children).forEach((element) => {
        element.classList.remove('hidden__content')
    })
    showMoreButton.textContent = 'Show less'
    showMoreButton.addEventListener('click', (event) =>
        hideContent(parent, event)
    )
}

export default hideContent
