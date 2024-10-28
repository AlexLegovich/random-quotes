import quotes from "./quotes.js"

const quoteElement = document.getElementById('quote-text')
const generateBtn = document.getElementById('random-quote-btn')
const quoteAuthor = document.getElementById('quote-author')
const authorAvatar = document.querySelector('.author-avatar')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  quoteElement.textContent = `"${randomQuote.quote}"`
  quoteAuthor.textContent = randomQuote.author
  authorAvatar.classList.add('visible')
  authorAvatar.src = randomQuote.image
}
generateBtn.addEventListener('click', generateRandomQuote)
