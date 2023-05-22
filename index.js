//get the element from the Dom
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteButton = document.getElementById("New-quote");
const tweetQuoteButton = document.getElementById("tweet-quote");


//Array of the quotes

const quote = [
    {
        Text:"The only way to do great work is to love what you do",
        author:"Steve Jobs"
    },
    {
        Text:"The future belongs to those who believe in the beauty of their dreams.",
        author:"Shoyo Hinata"
    },
    {
        Text:"Human strength lies in the ability to change yourself",
        author:"Saitama"
    },
    {
        Text:"A dropout will beat a genius through hard work.”",
        author:"Rock Lee"
    },
    {
        Text:"Forgetting is like a wound. The wound may heal, but it has already left a scar.",
        author:"Monkey D. Luffy"
    },
    {
        Text:"When you lose sight of your path, listen for the destination in your heart.",
        author:"Allen Walker"
    },
    {
        Text:" Enjoy your life today. Yesterday is gone, and tomorrow might never come. ",
        author:"Takeshi Yamamoto"
    },
    {
        Text:"Never trust anyone too much remember, the devil was once an angel",
        author:"Kaneki"
    },
    {
        Text:"You focus on the trivial and lose sight of what is most important; change is impossible in this fog of ignorance. ",
        author:"Itachi Uchiha"
    },
    {
        Text:"It's painful when you get disappointed by the person you look up to.",
        author:"Misaki Ayuzawa"
    },
    {
        Text:"It's painful when you get disappointed by the person you look up to.",
        author:"Misaki Ayuzawa"
    },
    {
        Text:"Be yourself, everyone else is already taken.",
        author:"― Oscar Wilde"
    },
    {
        Text:"Be the change that you wish to see in the world.",
        author:"― Mahatma Gandhi"
    },
    {
        Text:"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        author:"― Martin Luther King Jr"
    },
    {
        Text:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author:"― Mahatma Gandhi"
    },
    {
        Text:"We accept the love we think we deserve",
        author:"― Stephen Chbosky"
    },
    {
        Text:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author:"- Albert Einstein"
    },
    {
        Text:"We are all in the gutter, but some of us are looking at the stars.",
        author:"― Oscar Wilde"
    },
    {
        Text:"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        author:"― Bill Keane"
    },
     {
        Text:"I have not failed I've just found 10,000 ways that won't work.",
        author:"― Thomas A. Edison"
    },
    {
        Text:"I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world. ",
        author:"― Albert Einstein "
    },
    {
        Text:"It is never too late to be what you might have been. ",
        author:"― George Eliot "
    },
    {
        Text:"Everything you can imagine is real. ",
        author:"― Pablo Picasso "
    },
    {
        Text:"Life isn't about finding yourself. Life is about creating yourself.",
        author:"― George Bernard Shaw "
    },  
];

//generate the random quote

function getRandomQuote() {
    return quote[Math.floor(Math.random() * quote.length)]
}

//Update and display quote andd author
function displayQuote() {
    const {Text, author} = getRandomQuote();
    quoteText.textContent = Text;
    quoteAuthor.textContent = author;
};

//tweet the current quote
function tweetQuote() {
    const tweetText = `${quoteText.textContent} - ${quoteAuthor.textContent}`;
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(tweetUrl);
}

//Event Listner
newQuoteButton.addEventListener("click",displayQuote);
tweetQuoteButton.addEventListener("click",tweetQuote);

//Inital Quote display
displayQuote();