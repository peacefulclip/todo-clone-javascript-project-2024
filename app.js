
function submitBarbieLogin(event){
    event.preventDefault();
    const barbieUsername = barbieLoginFormInput.value;
    barbieLoginForm.classList.add(HIDDEN_KEY);
    localStorage.setItem(BARBIEUSERNAME_KEY, barbieUsername);
    paintBarbieGreeting(barbieUsername);
    mainScreenLeft.classList.remove(HIDDEN_KEY);
    mainScreenCenter.classList.remove(HIDDEN_KEY);
    mainScreenRight.classList.remove(HIDDEN_KEY);
};

const barbieSavedUsername = localStorage.getItem(BARBIEUSERNAME_KEY);

if (barbieSavedUsername === null){
    character.classList.remove(HIDDEN_KEY);
    characterBarbie.addEventListener("click", clickBarbie);
    barbieLoginForm.addEventListener("submit", submitBarbieLogin);
} else {
    initiateScreen.classList.add(HIDDEN_KEY);
    paintBarbieGreeting(barbieSavedUsername);
};

function paintBarbieGreeting(barbieUsername){
    barbieGreeting.innerText = `Hi Barbie ${barbieUsername}`;
    barbieGreeting.classList.remove(HIDDEN_KEY);
};







// below inputted

characterKen.addEventListener("click", clickKen);
function clickKen(){
    window.open("https://www.youtube.com/watch?v=Y1IgAEejvqM");
};


function clickBarbie(){
    barbieLoginForm.classList.remove(HIDDEN_KEY);
    character.classList.add(HIDDEN_KEY);
};

const character = document.querySelector("#character");
const characterBarbie = character.querySelector("button:first-child");
const characterKen = character.querySelector("button:last-child");

const barbieLoginForm = document.querySelector("#barbie-login-form");
const barbieLoginFormInput = barbieLoginForm.querySelector("input")

const barbieGreeting = document.querySelector("#barbie-greeting");

const HIDDEN_KEY = "hidden";
const BARBIEUSERNAME_KEY = "barbieUsername";

const initiateScreen = document.querySelector("#initiate-screen");
const mainScreenLeft = document.querySelector("#main-screen-left");
const mainScreenCenter = document.querySelector("#main-screen-center");
const mainScreenRight = document.querySelector("#main-screen-right");
