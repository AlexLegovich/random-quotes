import { handleFavorite } from './favorites.js'
import { generateRandomInt } from '../utils/utils.js'

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes)
  setCurrentQuote(randomQuote)
  displayQuote(randomQuote)
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

export { handleQuote }
