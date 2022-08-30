import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    const [unit, setUnit] = useState("fahrenheit");

    function convertToF(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToC(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    //When coordinates change, set the variable loaded to false. In order to allow for a new API call to update the forecast. State will now be re-rendered.
    useEffect(() => {
        setLoaded(false);
    }, [props.coords]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
     if (loaded) {
         if (unit === "fahrenheit") {
            return (
                <div className="fahrenheitReturn">
                    <div className="forecastTempUnits">
                        <hr />
                        <a href="/" className="fahrenheit active" onClick={convertToF}>
                            °F
                        </a>
                        <span> | </span>
                        <a href="/" className="celcius" onClick={convertToC}>
                            °C
                        </a>
                    </div>
                    <div className="WeatherForecast">
                    <div className="row">
                        {forecast.map(function(dailyForecast, index) {
                            if (index<5) {
                                return(
                                    <div className="col" key={index}>
                                        <WeatherForecastDay data={dailyForecast} unit={"imperial"} />
                                    </div>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
            );
        } else {
            return (
                <div className="celciusReturn">
                    <div className="forecastTempUnits">
                        <hr />
                        <a href="/" className="fahrenheit" onClick={convertToF}>
                            °F
                        </a>
                        <span> | </span>
                        <a href="/" className="celcius active" onClick={convertToC}>
                            °C
                        </a>
                    </div>
                    <div className="WeatherForecast">
                        <div className="row">
                            {forecast.map(function(dailyForecast, index) {
                                if (index<5) {
                                    return(
                                        <div className="col" key={index}>
                                            <WeatherForecastDay data={dailyForecast} unit={"metric"} />
                                        </div>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </div>
                </div>
            )
        }  
    } else {
        let apiKey = "c6f246d160dbacfbf41c2c13d3cb1b49";
        let longitude = props.coords.lon;
        let latitude = props.coords.lat;
        let units = "imperial";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }

}