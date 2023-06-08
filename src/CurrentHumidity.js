import React from "react";

export default function CurrentHumidity(props) {
  return (
    <div className="CurrentHumidity">
      <p>Humidity {props.humidity}%</p>
    </div>
  );
}
