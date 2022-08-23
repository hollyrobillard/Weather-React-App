import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">
            <div className="city">{props.data.city}</div>
            <p className="subheading">Currently</p>
            <div className="weatherDesc">{props.data.description}</div>
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <div className="currentWeather">
                      <div className="float-left">
                        <WeatherIcon code={props.data.icon}/>
                      </div>
                      <div className="float-left">
                        <Temperature fahrenheit={props.data.temperature} />
                      </div>
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
                      <span>Humidity: {props.data.humidity}%</span>
                      <br />
                      <span>Wind: {props.data.wind} mi/hr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lastUpdated">
              Last Updated:
              <div className="dateTime">
                <FormattedDate date={props.data.date} />
              </div>
            </div>
            <div className="forecast"></div>
        </div>
    )
}