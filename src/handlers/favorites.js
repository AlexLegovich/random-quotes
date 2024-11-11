import { favoriteBtn } from '../../index.js'



function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite
  const { text, author, image, isFavorite } = quote
  toggleFavoriteBtnIcon(isFavorite, btn)

  if (quote.isFavorite) {
    showFavoriteCard(text, author, image, container)
  } else {
    hideFavoriteCard(text)
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

export { handleFavorite, toggleFavorite, hideFavoriteBtn }
