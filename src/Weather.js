import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import WeatherInfo from "./WeatherInfo";
import FavoriteCities from "./FavoriteCities";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function getWeather(response) {
    setWeatherData({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed)
    });
  }

  function search() {
    let apiKey = "c6f246d160dbacfbf41c2c13d3cb1b49";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    axios.get(apiUrl).then(getWeather);
  }

  function submission(event) {
    event.preventDefault();
    search(city);
  }

  function cityChange (event) {
    setCity(event.target.value);
  }
  
  if (weatherData.ready) {
     return (
      <div className="Weather">
        <div className="card-body">
            <h5 className="card-title">Weather Search</h5>
            <div className="search-container">
              <form className="city-search" onSubmit={submission}>
                <input
                  type="search"
                  placeholder="Enter City"
                  className="cityName"
                  autoFocus="on"
                  onChange={cityChange}
                />
                <button className="search">Search</button>
              </form>
              <button className="refresh">Refresh Current City</button>
            </div>
            <br />
            <p className="favorites">Favorites</p>
            <FavoriteCities />
            <hr />
            <WeatherInfo data={weatherData}/>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading results...";
  }

}