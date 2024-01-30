const images = [
    "1.png", "2.png", "3.png"
];

// randomness -- same as quote
// createElement() -- choose img from randomness and create img element and add to HTML from Javascript
// document.body.appendChild(), insertBefore()

const chosenBackgroundImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.createElement("img");
backgroundImage.setAttribute("class", "background-image");
backgroundImage.src = `background/${chosenBackgroundImage}`;

const quote = document.querySelector("#quote");
document.body.insertBefore(backgroundImage, quote);
