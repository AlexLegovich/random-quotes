import { handleQuote } from './src/handlers/quote.js'

const generateBtn = document.getElementById('random-quote-btn')
generateBtn.addEventListener('click', handleQuote)
