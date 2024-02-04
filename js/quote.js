const quotes = [
    {line: "Do you guys ever think about dying?", cast: "Stereotypical Barbie",},
    {line: "Every night is girls' night.", cast: "Stereotypical Barbie",},
    {line: "That's life. It's all change.", cast: "Gloria",},
    {line: "Did you bring your rollerblades?", cast: "Stereotypical Barbie",},
    {line: "And what a good job you do at beach.", cast: "Barbie",},
    {line: "I'm a man with no power, does that make me a woman?", cast: "Aaron",},
    {line: "Barbie is all these women. And all these women are Barbie", cast: "Narrator",},
    {line: "I worked very hard, so I deserve it.", cast: "Barbie",},
    {line: "Hi, Barbie!", cast: "Barbie",},
    {line: "I want to be a part of the people that make meaning, not the thing that is made.", cast: "Stereotypical Barbie",},
    {line: "Basically, everything that men do in your world, women do in ours.", cast: "Stereotypical Barbie",},
    {line: "The real world is forever and irrevocably messed up.", cast: "Stereotypical Barbie",},
    {line: "When I found out the patriarchy wasn't about horses, I lost interest anyway.", cast: "Ken",},
    {line: "You're Ken.", cast: "Stereotypical Barbie",},
    {line: "I'll see you on the Malibu Beach!", cast: "Ken",},
    {line: "Here I'm just a dude and that's enough.", cast: "Ken",},
    {line: "You guys are not doing patriarchy very well.", cast: "Ken",},
    {line: "Barbie has a great day every day, but Ken only has a great day if Barbie looks at him.", cast: "Narrator",},
    {line: "Why didn't Barbie tell me about patriarchy?", cast: "Ken",},
    {line: "I'm a liberated man. I know crying's not weak.", cast: "Ken",},
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
