// API key for weather data
// const apiKey = "54ef0320088b0cd1dd4567d28ed390b4"
const apiKey = "843fa40ad68a96668befb0da86d9b44b"

// get DOM elemnts
const searchForm = document.getElementById('search-form');
const cityInput = document.getElementById('city-input');
const weatherInfo = document.getElementById('weather-info');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');
const historyList = document.getElementById('history-list');

// function to fetch weather data
async function getWeatherData(city) {
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric'
    
}

function submitForm(event) {
    event.preventDefault();

    var cityH1 = document.getElementById("city-name")
    var dateSpan = document.getElementById("date")
    var tempP = document.getElementById("current-temp")
    var windP = document.getElementById("current-wind")
    var humidityP = document.getElementById("current-humidity");


    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value +"&units=imperial&appid=843fa40ad68a96668befb0da86d9b44b";

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)

    cityH1.textContent = data.name
    dateSpan.textContent = "09/14/23"
    tempP.textContent = "Temp: " + data.main.temp
    windP.textContent = "Wind: " + data.wind.speed
    humidityP.textContent = "Humidity: " + data.main.humidity

    })



    var url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput.value +"&units=imperial&appid=843fa40ad68a96668befb0da86d9b44b";


    fetch(url2)
    .then(res => res.json())
    .then(data => {
        console.log(data)

    })

    
}

const para = document.createElement('p')
para.innerText = "Temp";
forecast.appendChild(para);


searchForm.addEventListener("submit", submitForm)