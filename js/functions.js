const cardContainer = document.getElementById('card-container');

const newMeteoCard = (location, iLocation, temperature, weather, weatherImg) => {
    const meteoCard = document.createElement('article');
    meteoCard.classList.add('meteo-card');
    meteoCard.innerHTML = `
        <p class="card-location">${location}<span class="card-location-span">${iLocation}</span></p>
        <h2 class="card-temperature">${temperature} °<span class="card-temperature-span">C</span></h2>
        <img class="card-weather-image" src="http://openweathermap.org/img/wn/${weatherImg}@2x.png">
        <p class="card-weather">${weather}</p>
    `

    meteoCard.style

    return meteoCard
}

const setupCard = (location, iLocation, temperature, weather, weatherImg) => {
    cardContainer.appendChild(newMeteoCard(location, iLocation, temperature, weather, weatherImg));
}

export { setupCard };