import quotes from './quotes.js'

const quoteElement = document.getElementById('quote-text')
const generateBtn = document.getElementById('random-quote-btn')
const quoteAuthor = document.getElementById('quote-author')
const authorAvatar = document.querySelector('.author-avatar')
const toggleFavoriteBtn = document.getElementById('quote-favorite-btn')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[currentQuoteIndex]
  console.log(currentQuoteIndex)
  quoteElement.textContent = `"${randomQuote.quote}"`
  quoteAuthor.textContent = randomQuote.author
  authorAvatar.classList.add('visible')
  authorAvatar.src = randomQuote.image

  toggleFavoriteBtn.style.display = 'inline-block'
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  currentQuote.isFavorite = !currentQuote.isFavorite

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div')
    favoriteCard.classList.add('favorite-card')
    favoriteCard.innerHTML = `
    <img class ="author-card-avatar" src = "${currentQuote.image}"</img>
    <p>${currentQuote.quote}</p>
     <p class ="favorite-card-author">${currentQuote.author}</p>
    `
    favoritesContainer.appendChild(favoriteCard)
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card')
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) card.remove()
    })
  }
}

generateBtn.addEventListener('click', generateRandomQuote)
toggleFavoriteBtn.addEventListener('click', toggleFavorite)

generateRandomQuote()
