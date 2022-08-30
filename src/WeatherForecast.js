import React, { useEffect, useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  //When coordinates change, set the variable loaded to false. In order to allow for a new API call to update the forecast. State will now be re-rendered.
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index) {
                if (index<5) {
                    return(
                        <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                        </div>
                    );
                }
            })}
        </div>
      </div>
    );
  } else {
    let apiKey = "c6f246d160dbacfbf41c2c13d3cb1b49";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}