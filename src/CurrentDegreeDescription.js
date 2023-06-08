import React from "react";
import "./CurrentDegreeDescription.css";

export default function CurrentDegreeDescription() {
  let weatherData = {
    weekday: "Sat",
    imgUrl: "https://openweathermap.org/img//wn/01d@2x.png",
    description: "Clear Sky",
    degree: "79",
    tempscale: "°F",
    hivalue: "79",
    lowvalue: "79",
  };
  return (
    <div className="CurrentDegreeDescription">
      <div className="WeatherIcon">
        {<img src={weatherData.imgUrl} alt="weather icon" />}
      </div>
      <div className="Description">{weatherData.description}</div>
      <span className="DegreeValue">{weatherData.degree}</span>
      <span className="Tempscale">{weatherData.tempscale}</span>
    </div>
  );
}
