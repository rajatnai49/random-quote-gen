//get the element from the Dom
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("New-quote");
const tweetQuoteButton = document.getElementById("tweet-quote");

//API
function displayQuote() {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => {
      if (quote.quote.length > 100) {
        displayQuote();
        return;
      }
      quoteText.innerHTML = quote.quote;
      quoteAuthor.innerHTML = quote.character + " (" + quote.anime + ")";
    });
}

//tweet the current quote
function tweetQuote() {
  const tweetText = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`;
  window.open(tweetUrl);
}

//Event Listner
newQuoteButton.addEventListener("click", displayQuote);
tweetQuoteButton.addEventListener("click", tweetQuote);

//Inital Quote display
displayQuote();
