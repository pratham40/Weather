import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city);
    setCity('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-2 items-center"
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded-md border border-gray-300 "
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition flex items-center gap-1"
      >
        <FaSearch /> Search
      </button>
    </form>
  );
};

export default SearchBar;
