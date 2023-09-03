import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API_URL = "https://restcountries.com/v3.1/all";
    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const renderLanguages = (languagesData) => {
    if (languagesData && typeof languagesData === "object") {
      const languageCodes = Object.keys(languagesData);
      return languageCodes.map((code) => languagesData[code]).join(", ");
    } else {
      return "No languages available";
    }
  };
  const renderCurrency = (currencyData) => {
    if (currencyData && typeof currencyData === "object") {
      const currencyCode = Object.keys(currencyData)[0];
      const currencyName = currencyData[currencyCode].name;
      return currencyName;
    } else {
      return "No currency data available";
    }
  };

  const renderCountries = () => {
    return data.map((country, index) => {
      return (
        <div key={index} className="countries-wrapper">
          <div className="flag-div">
            <img
              className="flag"
              src={country.flags.png}
              alt={country.name.common}
            />
            <h1>{country.name.common}</h1>
          </div>
          <div>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Languages: {renderLanguages(country.languages)}</p>
            <p>Currency: {renderCurrency(country.currencies)}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="header">
        <h1>World Countries Data</h1>
        <p>Currently, we have {data.length} countries</p>
      </div>
      <input type="text" className="input" />
      <div className="country-container">{renderCountries()}</div>
    </div>
  );
}

export default App;
