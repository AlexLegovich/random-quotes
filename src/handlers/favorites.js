import { favoriteBtn } from '../../index.js'

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite
  toggleFavoriteBtnIcon(quote.isFavorite, btn)

  if (quote.isFavorite) {
    showFavoriteCard(quote, container)
  } else {
    hideFavoriteCard(quote.id)
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn(favoriteBtn)
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn)
}

function toggleFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle('fa-solid', isFavorite)
  el.classList.toggle('fa-regular', !isFavorite)
}

function showFavoriteBtn(btn) {
  btn.style.display = 'inline-block'
}

function hideFavoriteBtn(btn) {
  btn.style.display = 'none'
}

function showFavoriteCard(quote, container) {
  const { id, text, author, image } = quote
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.dataset.quoteId = id
  favoriteCard.innerHTML = `
  <img class ="author-card-avatar" src = "${image}"</img>
  <p>${text}</p>
   <p class ="favorite-card-author">${author}</p>
  `
  container.appendChild(favoriteCard)
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`)
  // card && card.remove() alternative method
  if (card) {
    card.remove()
  }
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn }
