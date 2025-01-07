import { quoteFavoriteBtn } from '../../index.js'

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite
  toggleFavoriteBtnIcon(quote.isFavorite, btn)

  if (quote.isFavorite) {
    showFavoriteCard(quote, container)
  } else {
    removeFavoriteCard(quote.id)
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn()
  toggleFavoriteBtnIcon(isFavorite)
}

function toggleFavoriteBtnIcon(isFavorite) {
  quoteFavoriteBtn.classList.toggle('fa-solid', isFavorite)
  quoteFavoriteBtn.classList.toggle('fa-regular', !isFavorite)
}

function showFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'inline-block'
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'none'
}

function removeFavoriteQuote(quote) {
  quote.isFavorite = false
  removeFavoriteCard(quote.id)
  const currentQuote = document.querySelector('[data-current-quote-id]')
  // Each favorite quote will have data-favorite-quote-id HTML attribute
  const currentQuoteId = currentQuote.dataset.currentQuoteId
  if (quote.id === currentQuoteId) {
    toggleFavoriteBtnIcon(quote.isFavorite)
  }
}

function showFavoriteCard(quote, container) {
  const { id, text, author, image } = quote
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.dataset.favoriteQuoteId = id
  favoriteCard.innerHTML = `
  <img class ="author-card-avatar" src = "${image}"</img>
  <p>${text}</p>
   <p class ="favorite-card-author">${author}</p>
   <button class ="btn btn-danger"><i class="fa-regular fa-trash-can" style="margin-right: 10px;"></i>Remove from favorites</button>
  `
  container.appendChild(favoriteCard)

  const removeButton = favoriteCard.querySelector('.btn-danger')
  removeButton.addEventListener('click', () => removeFavoriteQuote(quote))
}

function removeFavoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`)
  // card && card.remove() alternative method
  if (card) {
    card.remove()
  }
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn }
