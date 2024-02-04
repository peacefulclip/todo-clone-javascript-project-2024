// variables
const HIDDEN_KEY = "hidden";
const BARBIEUSERNAME_KEY = "barbieUsername";

const characterImage = document.querySelector("#character-image");
const character = document.querySelector("#character");
const characterBarbie = character.querySelector("div:first-child");
const characterKen = character.querySelector("div:last-child");

const barbieLoginForm = document.querySelector("#barbie-login-form");
const barbieLoginFormInput = barbieLoginForm.querySelector("input")

const barbieGreeting = document.querySelector("#barbie-greeting");

const initiateScreen = document.querySelector("#initiate-screen");
const mainScreen = document.querySelector("#main-screen");
const mainScreenLeft = document.querySelector("#main-screen-left");
const mainScreenCenter = document.querySelector("#main-screen-center");

const splashScreen = document.querySelector("#splash")


// initiate screen - are you Barbie or Ken?
characterKen.addEventListener("click", function() {
    window.open("https://www.youtube.com/watch?v=Y1IgAEejvqM");
});


// login screen
const barbieSavedUsername = localStorage.getItem(BARBIEUSERNAME_KEY);

if (barbieSavedUsername === null) {
    character.classList.remove(HIDDEN_KEY);
    characterImage.classList.remove(HIDDEN_KEY);
    characterBarbie.addEventListener("click", function() {
        barbieLoginForm.classList.remove(HIDDEN_KEY);
        character.classList.add(HIDDEN_KEY);
        characterImage.classList.add(HIDDEN_KEY);
    });
    barbieLoginForm.addEventListener("submit", submitBarbieLogin);
} else {
    paintBarbieGreeting(barbieSavedUsername);
};

function paintBarbieGreeting(barbieUsername){
    barbieGreeting.innerText = `Hi Barbie ${barbieUsername}!`;
    barbieGreeting.classList.remove(HIDDEN_KEY);
    splashScreen.classList.remove(HIDDEN_KEY);
    mainScreen.classList.remove(HIDDEN_KEY);
    mainScreenLeft.classList.remove(HIDDEN_KEY);
    mainScreenCenter.classList.remove(HIDDEN_KEY);
};

function submitBarbieLogin(event) {
    event.preventDefault();
    barbieLoginForm.classList.add(HIDDEN_KEY);
    const barbieUsername = barbieLoginFormInput.value;
    localStorage.setItem(BARBIEUSERNAME_KEY, barbieUsername);
    paintBarbieGreeting(barbieUsername);
};
