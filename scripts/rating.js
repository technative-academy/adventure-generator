function drawRating(rating, div) {
    rating = Math.round(rating)
    for (let i = 0; i < rating; i += 1) {
        const star = document.createElement('img')
        star.src = 'assets/star.svg'
        star.classList.add('lit__star')
        star.classList.add('star')
        div.appendChild(star)
    }
    for (let i = 0; i < 5 - rating; i += 1) {
        const star = document.createElement('img')
        star.src = 'assets/star.svg'
        star.classList.add('star')
        div.appendChild(star)
    }
}

export default drawRating
