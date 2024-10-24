const quotes = [
  'In the middle of difficulty lies opportunity. – Albert Einstein',
  'Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill',
]

const quoteElement = document.getElementById('quote-text')
const generateBtn = document.getElementById('random-quote-btn')


function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  quoteElement.textContent = randomQuote
}
generateBtn.addEventListener('click', generateRandomQuote)

//random quote on pageload
//generateRandomQuote()
