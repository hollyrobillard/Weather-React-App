import React from "react";
//import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Sunday, August 7 10:12pm",
    description: "Cloudy",
    imgUrl: "https://openweathermap.org/img/wn/10n.png",
    suggestion: "Don't forget your umbrella!",
    temperature: 80,
    humidity: 80,
    wind: 10
  };

  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Weather Search</h5>
          <div className="search-container">
            <form className="city-search">
              <input
                type="text"
                placeholder="Enter City"
                className="cityName"
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
                    Suggestion: {weatherData.suggestion}
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
            <div className="dateTime">{weatherData.date}</div>
          </div>
          <div className="forecast"></div>
          <br />
          <div className="subtext">
            <a
              href="https://jazzy-dragon-89cbdc.netlify.app/"
              className="footerLink"
            >
              <span>Site </span>
            </a>
            <span>Created and Maintained by </span>
            <a
              href="https://www.linkedin.com/in/hollyrobillard/"
              className="footerLink"
            >
              <span>Holly Robillard</span>
            </a>
            <br />
            <span>Open Source Code on </span>
            <a
              href="https://github.com/hollyrobillard/Weather-React-App"
              className="footerLink"
            >
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}