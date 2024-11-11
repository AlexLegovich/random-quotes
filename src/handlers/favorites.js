import { currentQuote } from '../../index.js'

const favoritesContainer = document.getElementById('favorites-container')
const favoriteBtn = document.getElementById('favorite-btn')
favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
)

hideBtn(favoriteBtn)

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite
  const { text, author, image, isFavorite } = quote
  toggleFavoriteBtnIcon(isFavorite, btn)

  if (currentQuote.isFavorite) {
    showFavoriteCard(text, author, image, container)
  } else {
    hideFavoriteCard(text)
  }
}

function handleFavorite(isFavorite) {
  showBtn(favoriteBtn)
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn)
}

function toggleFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle('fa-solid', isFavorite)
  el.classList.toggle('fa-regular', !isFavorite)
}

function showBtn(btn) {
  btn.style.display = 'inline-block'
}

function hideBtn(btn) {
  btn.style.display = 'none'
}

function showFavoriteCard(text, author, image, container) {
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.innerHTML = `
  <img class ="author-card-avatar" src = "${image}"</img>
  <p>${text}</p>
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

export { handleFavorite }
