import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import './App.css'

function Search() {
  const [city, setCity] = useState("");
  const [dataWeather, setDataWeather] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [errorMsg, setErrorMsg] = useState("");

  // Define your apiKey using the environment variable
  const apiKey = process.env.REACT_APP_API_KEY;
  const baseUrl = process.env.REACT_APP_BASE_URL;


  // Create a function to handle the API request
  const searchWeather = () => {
    const inputField = document.querySelector(".inputField");
    const inputValue = inputField.value;

    if (!inputValue) {
      alert("Please enter a city name.");
      return;
    }

    setIsLoading(true); // Set loading state to true

    axios
      .get(`${baseUrl}/v1/current.json?key=${apiKey}&q=${inputValue}&aqi=no`)
      .then((response) => {
        setDataWeather(response.data);
        setErrorMsg("");
        console.log(response);
        setIsLoading(false); // Set loading state to false when data is received
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error.code);
        setErrorMsg(`Error: ${error.code}`);
        setIsLoading(false); // Set loading state to false in case of an error
      });
  };

  return (
    <div>
      {/* Use the 'value' attribute and 'onChange' event handler for input fields */}
      <input style={{marginRight: '5px', height: '25px', width: '200px'}}
        className="inputField"
        placeholder="Enter city name"
      />
      {/* Call the 'searchWeather' function on button click */}
      <button style={{color: 'black', backgroundColor: 'skyblue', height: '30px'}} onClick={searchWeather}>Search</button>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div><br></br><br></br>
          {errorMsg === "" ? <WeatherCard dataWeather={dataWeather}/> : (<h3 style={{color: 'red'}}>{errorMsg}</h3>)}
        </div>
      )}
    </div>
  );
}

export default Search;
