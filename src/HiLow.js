import React from "react";

export default function HiLow(props) {
  let hiLow = {
    hi: "85",
    low: "65",
  };
  return (
    <div className="HiLow">
      <span>
        <strong> hi: {hiLow.hi}°</strong>
      </span>
      <span> low: {hiLow.low}°</span>
    </div>
  );
}
