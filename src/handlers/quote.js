import { handleFavorite } from './favorites.js'
import { generateRandomInt } from '../utils/utils.js'

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes)
  setCurrentQuote(randomQuote)
  displayQuote(randomQuote)
}

function displayQuote(quote) {
  const {id, text, author, image, isFavorite } = quote
  const quoteElement = document.getElementById('quote')
  const quoteTextElement = document.getElementById('quote-text')
  const quoteAuthorElement = document.getElementById('quote-author')
  const authorAvatar = document.querySelector('.author-avatar')
  // Current quote will have data-current-quote-id HTML attribute
  quoteElement.dataset.currentQuoteId = id 
  quoteTextElement.textContent = `"${text}"`
  quoteAuthorElement.textContent = author
  authorAvatar.classList.add('visible')
  authorAvatar.src = image
  handleFavorite(isFavorite)
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length)
  return quotes[randomIndex]
}

export { handleQuote }
