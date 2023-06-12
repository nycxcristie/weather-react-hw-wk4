import "./App.css";
import React from "react";
import Form from "./Form";
import Tempnow from "./Tempnow.js";
import Current from "./Current";
import DateTimeLocation from "./DateTimeLocation";
import Weekly from "./Weekly";
import Footer from "./Footer";

export default function App() {
  let weatherData = {
    city: "Virginia",
    wind: "Windspeed: 5 km/h",
    humidity: "Humidity: 26%",
    feelslike: "Feels like: 70°F",
    description: "Clear Sky",
    tempnow: "72",
    tempscale: "°F",
    imgUrl: "https://openweathermap.org/img//wn/01d@2x.png",
  };
  return (
    <div className="App">
      <div className="card">
        <div className="card-body">
          <Form />
          <div className="row">
            <div className="col-2 weatherIcon">
              {<img src={weatherData.imgUrl} alt="weather icon" />}
            </div>
            <div className="col-3 degreesNow">
              <Tempnow />
            </div>
            <div className="col-4">
              <Current />
            </div>
          </div>
          <div className="col-12 current-location">
            <DateTimeLocation city={weatherData.city} />
          </div>

          <div className="box">
            <div className="one">
              <Weekly />
            </div>
            <div className="two">
              <Weekly />
            </div>
            <div className="three">
              <Weekly />
            </div>
            <div className="four">
              <Weekly />
            </div>
            <div className="five">
              <Weekly />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
