const notificationElement = document.querySelector(".notification");
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");

displayWeather() {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png">`;
    tempElement.innerHTML = 29° C `${weather.temperature.value} ° <span>C</span>`;
    descElement.innerHTML = Clear sky
    weather.description;
    locationElement.innerHTML = london, GB `${weather.city}, ${weather.country}`;
}

function celsiusToFahrenheit(temperature) {
    return (temperature * 9 / 5) + 32;

}
tempElement.addEventListener("click", function() {
    if (weather.temperature.value === undefined) return;
    if (weather.temperature.value === "celsius") {
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        tempElement.innerHTML = `${farenheit} °<span>F</span>`;
        weather.temperature.value = "farenheit";
    } else {
        tempElement.innerHTML = `${weather.temperature.value}  °<span>C</span>`;
        weather.temperature.value = "celsius";
    }
});