import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineLoading } from "react-icons/ai";
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './index.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`https://weather-backend-8ldr.onrender.com/weather?city=${city}`);
      setWeather({ ...res.data});
    } catch (err) {
      setError('City not found or network error.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07C8F9] text-gray-800">
      <h1 className="text-4xl font-bold mb-6">🌤️ Weather Dashboard</h1>
      <SearchBar onSearch={fetchWeather} />
      {loading && <p className="mt-4"><AiOutlineLoading className='animate-spin'/> </p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
