import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form id="update-city">
        <div class="enterLocation">
          <input
            type="text"
            placeholder="Enter City to get Weather"
            id="update-city-input"
          />
          <input type="submit" value="Go" id="go-button" />
          <span> or </span>
          <button id="current-loc-temp-button">
            Temperature of your current location
          </button>
        </div>
      </form>
    </div>
  );
}
