import React from "react";

export default function Suggestions(props) {
    if (props.description === "snow") {
        return("Wear your coat and gloves!")
    } else if (props.description === "rain" || props.description === "shower rain" || props.description === "thunderstorm") {
        return ( "Bring your umbrella and rain boots!")
    } else {
        return("Enjoy the weather today!")
    }
}