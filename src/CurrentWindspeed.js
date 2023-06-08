import React from "react";

export default function CurrentWindspeed(props) {
  return (
    <div className="CurrentWindspeed">
      <p>Windspeed: {props.wind}km/h</p>
    </div>
  );
}
