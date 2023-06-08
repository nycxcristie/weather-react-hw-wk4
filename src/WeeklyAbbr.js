import React from "react";

export default function WeeklyAbbr() {
  let weatherData = {
    weekabbr: "Sun",
  };
  return (
    <div className="WeeklyAbbr">
      <span>{weatherData.weekabbr}</span>
    </div>
  );
}
