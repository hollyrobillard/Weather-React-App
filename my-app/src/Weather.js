import React from "react";
import axios from "axios";
import { Audio } from  'react-loader-spinner';

export default function Weather(props) {
    function handleResponse (response) {
        alert(`The weather in ${props.city} is ${response.data.main.temp}°C`)
    }

    let apiKey = "c6f246d160dbacfbf41c2c13d3cb1b49";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
    return (
        <Audio
            height = "80"
            width = "80"
            radius = "9"
            color = 'green'
            ariaLabel = 'three-dots-loading'
        />
    )
}