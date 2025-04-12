import React from 'react';
import {
  WiHumidity,
  WiStrongWind,
} from 'react-icons/wi';
import { FaTemperatureHigh, FaCity } from 'react-icons/fa';

const WeatherCard = ({ weather }) => {
  return (
    <div className="flex justify-center mt-8">
      {weather ? (
        <div className="p-6 bg-white rounded-xl shadow-md w-80 text-center">
          <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
            <FaCity /> {weather.city}
          </h2>
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.condition}
            className="mx-auto"
          />
          <p className="text-xl mb-2">{weather.condition}</p>

          <div className="text-left space-y-2 mt-4">
            <p className="flex items-center gap-2">
              <FaTemperatureHigh className="text-orange-500" /> Temperature: {weather.temperature}°C
            </p>
            <p className="flex items-center gap-2">
              <WiHumidity className="text-blue-400" /> Humidity: {weather.humidity}%
            </p>
            <p className="flex items-center gap-2">
              <WiStrongWind className="text-sky-600" /> Wind Speed: {weather.wind_speed} m/s
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No weather data yet...</p>
      )}
    </div>
  );
};

export default WeatherCard;
