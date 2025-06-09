const apiKey = '4ef103ce2c4bd771a5f8f7ebee1873b5';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric`;

let searchInput = document.getElementById('search');
let searchButton = document.getElementById('searchbtn');
searchButton.addEventListener('click', () => {
    let cityname = searchInput.value;
    if (cityname) {
        fetchWeather(cityname);
        searchInput.value = '';
    }
});
searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        let cityname = searchInput.value;
        if (cityname) {
            fetchWeather(cityname);
            searchInput.value = '';
        }
    }})
    //default city
fetchWeather('islamabad');
async function fetchWeather(cityname) {
    const responce = await fetch(`${apiUrl}&q=${cityname}&appid=${apiKey}`);
    let city = document.getElementById('cityname');
    let humidity = document.getElementById('humidity');
    let temperature = document.getElementById('temperature');
    let wind = document.getElementById('wind');
    let weatherIcon = document.getElementById('image0');
    let pressure = document.getElementById('pressure');
    let feelsLike = document.getElementById('feels');
    
    var data = await responce.json();
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    temperature.innerHTML = `${Math.floor(data.main.temp)}°C`;
    humidity.innerHTML = `Humidity<br>${data.main.humidity}%`;
    wind.innerHTML = `Wind<br>${data.wind.speed} m/s`;
    pressure.innerHTML = `Pressure<br>${data.main.pressure} mbar`;
    feelsLike.innerHTML = `Feels Like<br>${Math.floor(data.main.feels_like)}°C`;

    if (data.weather[0].main === 'Clouds') {
        weatherIcon.src = 'assets/icons/clouds.png';
    }
    else if (data.weather[0].main === 'Clear') {
        weatherIcon.src = 'assets/icons/clear.png';
    }
    else if (data.weather[0].main === 'Rain') {
        weatherIcon.src = 'assets/icons/rain.png';
    }
    else if (data.weather[0].main === 'Drizzle') {
        weatherIcon.src = 'assets/icons/drizzle.png';
    }
    else if (data.weather[0].main === 'Mist') {
        weatherIcon.src = 'assets/icons/mist.png';
    }
    else if (data.weather[0].main === 'Smoke') {
        weatherIcon.src = 'assets/icons/smoke.png';
    }
    else if (data.weather[0].main === 'Haze') {
        weatherIcon.src = 'assets/icons/haze.png';
    }
    else if (data.weather[0].main === 'Dust') {
        weatherIcon.src = 'assets/icons/dust.png';
    }
    else if (data.weather[0].main === 'Fog') {
        weatherIcon.src = 'assets/icons/fog.png';
    }
    else if (data.weather[0].main === 'Thunderstorm') {
        weatherIcon.src = 'assets/icons/thunder.png';
    }
    else if (data.weather[0].main === 'Snow') {
        weatherIcon.src = 'assets/icons/snow.png';
    }


    console.log(data);
}
fetchWeather();





