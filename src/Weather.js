import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] =useState ({ready: false});

  function getWeather(response) {
    console.log(response.data);
    setWeatherData({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        wind: Math.round(response.data.wind.speed)
    });
    setReady(true);
  }
  
  if (weatherData.ready) {
     return (
      <div className="Weather">
          <div className="card-body">
            <h5 className="card-title">Weather Search</h5>
            <div className="search-container">
              <form className="city-search">
                <input
                  type="search"
                  placeholder="Enter City"
                  className="cityName"
                  autoFocus="on"
                />
                <button className="search">Search</button>
              </form>
              <button className="refresh">Refresh Current City</button>
            </div>
            <br />
            <p className="favorites">Favorites</p>
            <div className="row">
              <div className="col-2">
                <a href="/" className="favorite1">
                  London
                </a>
              </div>
              <div className="col-2">
                <a href="/" className="favorite2">
                  Tokyo
                </a>
              </div>
              <div className="col-3">
                <a href="/" className="favorite3">
                  New York
                </a>
              </div>
            </div>
            <hr />
            <div className="city">{weatherData.city}</div>
            <p className="subheading">Currently</p>
            <div className="weatherDesc">{weatherData.description}</div>
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <div className="currentWeather">
                      <img
                        className="weatherIcon"
                        src={weatherData.imgUrl}
                        alt={weatherData.description}
                      ></img>
                      <span className="currentTemp">
                        {weatherData.temperature}
                      </span>
                      <span className="tempUnits">
                        <a href="/" className="fahrenheit">
                          °F
                        </a>
                        <span> | </span>
                        <a href="/" className="celcius">
                          °C
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="row">
                  <div className="col-12">
                    <div className="suggestion">
                      Suggestion: Don't forget your umbrella!
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="precipWind">
                      <span>Humidity: {weatherData.humidity}%</span>
                      <br />
                      <span>Wind: {weatherData.wind} mi/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lastUpdated">
              Last Updated:
              <div className="dateTime">
                <FormattedDate date={weatherData.date} />
              </div>
            </div>
            <div className="forecast"></div>
          </div>
        </div>
    );
  } else {
    let city = "New York";
    let apiKey = "c6f246d160dbacfbf41c2c13d3cb1b49";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    axios.get(apiUrl).then(getWeather);
    return "Loading...";
  }

}