import quotes from './src/quotes.js'
import {
  hideFavoriteCard,
  showFavoriteCard,
  toggleFavoriteIcon,
} from './src/favoritesHandler.js'

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
  quoteElement.textContent = `"${randomQuote.quote}"`
  quoteAuthor.textContent = randomQuote.author
  authorAvatar.classList.add('visible')
  authorAvatar.src = randomQuote.image
  toggleFavoriteBtn.style.display = 'inline-block'

  toggleFavoriteIcon(randomQuote.isFavorite, toggleFavoriteBtn)
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  currentQuote.isFavorite = !currentQuote.isFavorite
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn)
  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      currentQuote.image,
      favoritesContainer
    )
  } else {
    hideFavoriteCard(currentQuote.quote)
  }
}

generateBtn.addEventListener('click', generateRandomQuote)
toggleFavoriteBtn.addEventListener('click', toggleFavorite)

generateRandomQuote()
