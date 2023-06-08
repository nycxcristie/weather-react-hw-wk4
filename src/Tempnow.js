import React from "react";
import "./Tempnow.css";

export default function Tempnow() {
  let weatherData = {
    degree: "72",
    tempscale: "°F",
    description: "Clear Sky",
  };
  return (
    <div className="Tempnow">
      <span className="DegreeValue">{weatherData.degree}</span>
      <span className="Tempscale">{weatherData.tempscale}</span>
      <div className="Description">{weatherData.description}</div>
    </div>
  );
}
