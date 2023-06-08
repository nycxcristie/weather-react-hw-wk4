import React from "react";
import WeeklyAbbr from "./WeeklyAbbr";
import CurrentDegreeDescription from "./CurrentDegreeDescription";
import "./Weekly.css";
import "./WeeklyAbbr";
import HiLow from "./HiLow";

export default function Weekly() {
  return (
    <div className="Weekly">
      <WeeklyAbbr />
      <CurrentDegreeDescription />
      <HiLow />
    </div>
  );
}
