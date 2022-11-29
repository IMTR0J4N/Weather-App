const config = import.meta.env;
import { setupCard, success, error } from "./functions";

document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city-input');

    let options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };
    let query;

    navigator.geolocation.getCurrentPosition(success, error, options);


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
})