import React from "react";
import "./Current.css";
import CurrentHumidity from "./CurrentHumidity";
import CurrentTemp from "./CurrentTemp";
import CurrentWindspeed from "./CurrentWindspeed";

export default function Current() {
  let weatherData = {
    temp: "77",
    humidity: "28",
    wind: "12",
  };
  return (
    <div className="Current">
      <div className="Container">
        <CurrentTemp temp={weatherData.temp} />
        <CurrentHumidity humidity={weatherData.humidity} />
        <CurrentWindspeed wind={weatherData.wind} />
      </div>
    </div>
  );
}
