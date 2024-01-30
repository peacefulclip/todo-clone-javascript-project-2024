// navigator.geolocation.getCurrentPosition(success Function, fail Function)
// coords -> latitude, longitude
// API - openweatherproject, API key: 77de41b9b86ebf005c13b4d4fe7085a5
// call API with latitude, longitude, and API key
// fetch, response => response.json()


const API_KEY = "77de41b9b86ebf005c13b4d4fe7085a5";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
    };
    
function onGeoError(){
    console.log("can't find your location");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);


