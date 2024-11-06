import quotes from '../data/quotes.js'
import { handleFavorite } from './favorites.js'
import { generateRandomInt } from '../utils.js'

let currentQuote = null

function handleQuote() {
  const randomQuote = chooseRandomQuote(quotes)
  displayQuote(randomQuote)
  currentQuote = randomQuote
}

function displayQuote(quote) {
  const { text, author, image, isFavorite } = quote
  const quoteElement = document.getElementById('quote-text')
  const quoteAuthor = document.getElementById('quote-author')
  const authorAvatar = document.querySelector('.author-avatar')
  quoteElement.textContent = `"${text}"`
  quoteAuthor.textContent = author
  authorAvatar.classList.add('visible')
  authorAvatar.src = image
  handleFavorite(isFavorite)
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length)
  return quotes[randomIndex]
}

export { handleQuote, currentQuote }
