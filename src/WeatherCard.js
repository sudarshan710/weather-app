import React from "react";
import "./Card.css";

function WeatherCard({ dataWeather }) {
  // Destructure the prop correctly
  return (
    <div>
      {dataWeather && ( // Check if dataWeather is not null before accessing its properties
        <div className="card">
          <div className="card-details">
            <div className="card-row">
              <p>City : </p>
              <p>{dataWeather.location.name}</p>
            </div>
            <div className="card-row">
              <p>Country : </p>
              <p>{dataWeather.location.country}</p>
            </div>
            <div className="card-row">
              <p>Last Updated : </p>
              <p>{dataWeather.current.last_updated}</p>
            </div>
            <div className="card-row">
              <p>
                <img src={dataWeather.current.condition.icon}></img>{" "}
              </p>
              <p>{dataWeather.current.condition.text}</p>
            </div>
            <div className="card-row">
              <p>Temperature (in C) : </p>
              <p>{dataWeather.current.temp_c}</p>
            </div>
            <div className="card-row">
              <p>Temperature (in F) : </p>
              <p>{dataWeather.current.temp_f}</p>
            </div>
            <div className="card-row">
              <p>Wind (in kph) : </p>
              <p>{dataWeather.current.wind_kph}</p>
            </div>
            <div className="card-row">
              <p> Precipitation (in mm) : </p>
              <p>{dataWeather.current.precip_mm}</p>
            </div>
            <div className="card-row">
              <p> Cloud : </p>
              <p>{dataWeather.current.cloud}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
