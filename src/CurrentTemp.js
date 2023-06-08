import React from "react";

export default function CurrentTemp(props) {
  return (
    <div className="CurrentTemp">
      <p>Feels like: {props.temp}°F</p>
    </div>
  );
}
