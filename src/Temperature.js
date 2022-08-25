import React, { useState } from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("fahrenheit");

    function convertToF(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToC(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    function celciusMath() {
        return Math.round(props.fahrenheit - 32 *(5/9));
    }

    if (unit === "fahrenheit") {
        return (
            <span className="tempDisplay">
                <span className="currentTemp">
                    {props.fahrenheit}
                </span>
                <span className="tempUnits">
                    <a href="/" className="fahrenheit active" onClick={convertToF}>
                        °F
                    </a>
                    <span> | </span>
                    <a href="/" className="celcius" onClick={convertToC}>
                        °C
                    </a>
                </span>
            </span>
        )
    } else {
        return (
            <span className="tempDisplay">
                <span className="currentTemp">
                    {celciusMath()}
                </span>
                <span className="tempUnits">
                    <a href="/" className="fahrenheit" onClick={convertToF}>
                        °F
                    </a>
                    <span> | </span>
                    <a href="/" className="celcius active" onClick={convertToC}>
                        °C
                    </a>
                </span>
            </span>
        )
    }
}