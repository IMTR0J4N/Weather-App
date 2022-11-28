const config = import.meta.env;
import { setupCard } from "./functions";

const cityInput = document.getElementById('city-input');

let query;

document.addEventListener('submit', (e) => {
    e.preventDefault()

    query = cityInput.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${config.VITE_API_KEY}&units=metric`)
        .then(res => res.json())
        .then(res => {
            console.log(res);

            setupCard(res.name, res.sys.country, parseInt(res.main.temp), res.weather[0].main, res.weather[0].icon)

        })
        .catch(err => { console.error(err) });
})