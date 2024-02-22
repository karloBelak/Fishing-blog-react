import './Weather.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const initialCity = 'Samobor';
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // const apiKey = '92e52a69fcd41467850b8d5e768bda60'
  const apiKey = '12345678'

  useEffect(() => {
    const getInitialWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${initialCity}&appid=${apiKey}`
        );
        setWeatherData(response.data);
      } catch (error) {
        setWeatherData(null);
      }
    };

    getInitialWeatherData();
  }, [apiKey, initialCity]);

  const getWeatherData = async () => {
    if (!city) return;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      setCity('');
    } catch (error) {
      setWeatherData(null);
    }
  };

  function convertKelvinToCelsius(kelvin){
    return kelvin - 273.15;
  };

  return (
    <div className='weater-box'>
      <h3 className='weather-title'>Vrijeme</h3>
      <div className='weather'>
        <div className='input-btn'>
          <input 
            className='input-city'
            type="text"
            placeholder="Unesi ime grada"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeatherData} className='btn-city'>Traži</button>
        </div>

      {weatherData && (
        <div>
          <h2 className='city-name'>{weatherData.name}, {weatherData.sys.country}</h2>
          <p className='weather-desc'>{weatherData.weather[0].description}</p>
          <p className='we weather-temp'>Temp: {convertKelvinToCelsius(weatherData.main.temp).toFixed(1)} °C</p>
          <p className='we weather-hum'>Hum: {weatherData.main.humidity}%</p>
          <p className='we weather-wind'>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      )}

      </div>
    </div>
  );
};

export default Weather