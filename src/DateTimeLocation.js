import React from "react";
import "./DateTimeLocation.css";

export default function DateTimeLocation() {
  let weatherData = {
    day: "Monday",
    month: "May",
    date: "15",
    year: "2023",
    time: "2:14",
    amPm: "PM",
    city: "Virginia",
  };
  return (
    <div className="DateTimeLocation">
      <span>
        {weatherData.day} {weatherData.month} {weatherData.date},{" "}
        {weatherData.year} {weatherData.time}
        {weatherData.amPm}
      </span>
      <h1>{weatherData.city}</h1>
    </div>
  );
}
