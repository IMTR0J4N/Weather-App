const cardContainer = document.getElementById('card-container');

let articlesTrash = [];

const newMeteoCard = (location, iLocation, temperature, weather, weatherImg) => {
    const meteoCard = document.createElement('article');
    meteoCard.classList.add('meteo-card');
    meteoCard.innerHTML = `
        <img src='/trash-can-regular.svg' class='card-trash'>
        <p class="card-location">${location}<span class="card-location-span">${iLocation}</span></p>
        <h2 class="card-temperature">${temperature} °<span class="card-temperature-span">C</span></h2>
        <img class="card-weather-image" src="http://openweathermap.org/img/wn/${weatherImg}@2x.png">
        <p class="card-weather">${weather.toUpperCase()}</p>
    `

    meteoCard.style

    return meteoCard
}

const setupCard = (location, iLocation, temperature, weather, weatherImg) => {
    const meteoCard = newMeteoCard(location, iLocation, temperature, weather, weatherImg);
    
    cardContainer.appendChild(meteoCard);

    articlesTrash.push(meteoCard.children[0]);

    listenTrashButton(articlesTrash);
}

const listenTrashButton = arr => {
    for (const t of arr) {
        t.addEventListener('click', () => {
            dlCard(t)
        })
    }
}

const dlCard = card => {
    card.parentElement.remove()
}

export { setupCard };