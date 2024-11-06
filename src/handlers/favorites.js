import { currentQuote } from './quote.js'

const favoritesContainer = document.getElementById('favorites-container')
const toggleBtn = document.getElementById('quote-favorite-btn')
toggleBtn.addEventListener('click', toggleFavorite)

hideBtn(toggleBtn)

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite
  toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn)

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.text,
      currentQuote.author,
      currentQuote.image,
      favoritesContainer
    )
  } else {
    hideFavoriteCard(currentQuote.text)
  }
}

function handleFavorite(isFavorite) {
  showBtn(toggleBtn)
  toggleFavoriteIcon(isFavorite, toggleBtn)
}

function toggleFavoriteIcon(isFavorite, el) {
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
