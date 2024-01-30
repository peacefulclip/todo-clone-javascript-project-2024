const quotes = [
    {line: "Do you guys ever think about dying?", cast: "Stereotypical Barbie",},
    {line: "That's life. It's all change.", cast: "Gloria",},
    {line: "Did you bring your rollerblades?", cast: "Stereotypical Barbie",},
    {line: "Hi, Barbie!", cast: "Barbie",},
    {line: "Hi, Ken!", cast: "Barbie",},
    {line: "You're Ken.", cast: "Stereotypical Barbie",},
    {line: "I'll see you on the Malibu Beach!", cast: "Ken",},
    {line: "You're beautiful.", cast: "Stereotypical Barbie",},
    {line: "Humans only have one ending. Ideas live forever.", cast: "Ruth Handler",},
    {line: "What would a Smart Barbie do?", cast: "Ruth Handler",},
];

// randomness
// Math.random() - random number between 0~1 ... multiply by 10
// Math.round(), Math.ceil(), Math.floor()

const line =  document.querySelector("#quote span:first-child");
const cast = document.querySelector("#quote span:last-child");
const quoteRefresh = document.querySelector("#quote-refresh");

function clickQuoteRefresh(){
    const quoteToday = quotes[Math.floor(Math.random() * quotes.length)];
    line.innerText = quoteToday.line;
    cast.innerText = quoteToday.cast;
};

clickQuoteRefresh();
quoteRefresh.addEventListener("click", clickQuoteRefresh);