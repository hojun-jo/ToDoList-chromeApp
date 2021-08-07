const quotes = [
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote: "When you focus on the good, the good gets better.",
    author: "jademarie.co.uk",
  },
  {
    quote: "Life has no limitations, except the ones you make.",
    author: "Les Brown",
  },
  {
    quote: "Where there is love there is life.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "You are never too old to set another goal or to dream a NEW DREAM.",
    author: "C.S. Lewis",
  },
  {
    quote: "The two most powerful warriors are patience and time.",
    author: "Leo Tolstoy",
  },
  {
    quote: "In a gentle way, you can shake the world",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Why join the navy if you can be a pirate?",
    author: "Steve Jobs",
  },
  {
    quote: "You have to keep breaking your heart until it opens",
    author: "Rumi",
  },
  {
    quote: "Your life only gets better when you get better.",
    author: "Brian Tracy",
  },
  {
    quote:
      "A smart person knows what to say. A wise person knows whether or not to say it.",
    author: "Author",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;
