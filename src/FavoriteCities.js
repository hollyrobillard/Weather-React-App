import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function FavoriteCities() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("");
    
    function getWeather(response) {
        setWeatherData({
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            temperature: Math.round(response.data.main.temp),
            humidity: response.data.main.humidity,
            wind: Math.round(response.data.wind.speed)
        });
        console.log(weatherData);
    }

    function search() {
        let apiKey = "c6f246d160dbacfbf41c2c13d3cb1b49";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
        axios.get(apiUrl).then(getWeather);
    }

    function changeToLondon(event) {
        event.preventDefault();
        setCity("London");
        search();
    }

    function changeToTokyo(event) {
        event.preventDefault();
        setCity("Tokyo");
        search();
    }

    function changeToBerlin(event) {
        event.preventDefault();
        setCity("Berlin");
        search();
    }
    
    if (city === "London") {
        return(
            <div className="favoriteDisplay">
                <div className="row">
                    <div className="col-2">
                        <a href="/" className="favorite active" onClick={changeToLondon}>
                        London
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="/" className="favorite" onClick={changeToTokyo}>
                        Tokyo
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/" className="favorite" onClick={changeToBerlin}>
                        Berlin
                        </a>
                    </div>
                </div>
                <WeatherInfo data={weatherData} />
            </div>
        )
    } else if (city === "Tokyo") {
        return(
            <div className="favoriteDisplay">
                <div className="row">
                    <div className="col-2">
                        <a href="/" className="favorite" onClick={changeToLondon}>
                        London
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="/" className="favorite active" onClick={changeToTokyo}>
                        Tokyo
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/" className="favorite" onClick={changeToBerlin}>
                        Berlin
                        </a>
                    </div>
                </div>
                <WeatherInfo data={weatherData} />
            </div>
        )
    } else if (city === "Berlin") {
        return(
           <div className="favoriteDisplay">
                <div className="row">
                    <div className="col-2">
                        <a href="/" className="favorite" onClick={changeToLondon}>
                        London
                        </a>
                    </div>
                    <div className="col-2">
                        <a href="/" className="favorite" onClick={changeToTokyo}>
                        Tokyo
                        </a>
                    </div>
                    <div className="col-3">
                        <a href="/" className="favorite active" onClick={changeToBerlin}>
                        Berlin
                        </a>
                    </div>
                </div>
                <WeatherInfo data={weatherData} />
            </div> 
        )
    } else {
        return(
            <div className="row">
                <div className="col-2">
                    <a href="/" className="favorite" onClick={changeToLondon}>
                    London
                    </a>
                </div>
                <div className="col-2">
                    <a href="/" className="favorite" onClick={changeToTokyo}>
                    Tokyo
                    </a>
                </div>
                <div className="col-3">
                    <a href="/" className="favorite" onClick={changeToBerlin}>
                    Berlin
                    </a>
                </div>
            </div>
        )
    }

}