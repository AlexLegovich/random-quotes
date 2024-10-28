const quotes = [
  {
    quote: 'In the middle of difficulty lies opportunity',
    author: 'Albert Einstein',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg',
  },
  {
    quote:
      'Do not go where the path may lead, go instead where there is no path and leave a trail',
    author: 'Ralph Waldo Emerson',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/ralph-waldo-emerson-9287153-1-402.jpg',
  },
  {
    quote:
      'Success is not final, failure is not fatal: It is the courage to continue that counts',
    author: 'Winston Churchill',
    image:
      'https://cdn.britannica.com/35/7535-050-06374DF8/Winston-Churchill-Yousuf-Karsh-1941.jpg?w=400&h=300&c=crop',
  },
  {
    quote:
      'The only limit to our realization of tomorrow is our doubts of today',
    author: 'Franklin D. Roosevelt',
    image:
      'https://cdn.britannica.com/06/3806-050-7952A19D/Franklin-D-Roosevelt-1937.jpg',
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt',
    image:
      'https://www.womenshistory.org/sites/default/files/styles/main_image/public/Eleanor-Roosevelt-Square.png',
  },
  {
    quote: 'Life is what happens when you’re busy making other plans',
    author: 'John Lennon',
    image: 'https://www.songhall.org/images/uploads/exhibits/John_Lennon.jpg',
  },
  {
    quote: 'It is never too late to be what you might have been',
    author: 'George Eliot',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/George_Eliot%2C_por_Fran%C3%A7ois_D%27Albert_Durade.jpg/800px-George_Eliot%2C_por_Fran%C3%A7ois_D%27Albert_Durade.jpg',
  },
  {
    quote:
      'Not everything that is faced can be changed, but nothing can be changed until it is faced',
    author: 'James Baldwin',
    image:
      'https://cdn.britannica.com/07/254207-050-A30BAFA8/James-Baldwin-author-1975.jpg',
  },
  {
    quote: 'The best way to predict the future is to create it',
    author: 'Peter Drucker',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0en9C_O8OSR3YdfUIvRshcktVFZIGWzwTdA&s',
  },
  {
    quote: 'You miss 100% of the shots you don’t take',
    author: 'Wayne Gretzky',
    image:
      'https://hips.hearstapps.com/hmg-prod/images/gettyimages-51390778.jpg',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall',
    author: 'Nelson Mandela',
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTiUJLR57NJM64fbXum1dZC5n71l-VbKBAf6Oq3Yw-p4hC6u-Co',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
    image:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQmaDWxfdaTr2kPWc8kExygAvkH0xJT5nMnuA0yePVPNFC2zSDg',
  },
  {
    quote:
      'If you look at what you have in life, you will always have more. If you look at what you dont have in life, you will never have enough.',
    author: 'Oprah Winfrey',
    image:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDcHfkycVzgp1yAY12LFDWp4XIXPw8hd6_jSnoAmgOVIBjv6Qx',
  },
]

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