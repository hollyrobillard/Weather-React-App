import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [forecastReady, setForecastReady] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function getForecast(response) {
        setForecast(response.data.daily);
        setForecastReady(true);
    }
    
    if (forecastReady) {
        return(
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]}/>
                    </div>
                </div>
            </div>
        );
    } else {
        let apiKey = "c6f246d160dbacfbf41c2c13d3cb1b49";
        let longitude = props.coords.lon;
        let latitude = props.coords.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(getForecast);
        return null;
    }

}