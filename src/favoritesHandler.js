function toggleFavoriteIcon(isFavorite, el) {
  el.classList.toggle('fa-solid', isFavorite)
  el.classList.toggle('fa-regular', !isFavorite)
}

function showFavoriteCard(quote, author, image, container) {
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.innerHTML = `
  <img class ="author-card-avatar" src = "${image}"</img>
  <p>${quote}</p>
   <p class ="favorite-card-author">${author}</p>
  `
  container.appendChild(favoriteCard)
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll('.favorite-card')
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) card.remove()
  })
}

export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard }
