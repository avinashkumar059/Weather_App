import React, { useState} from 'react'

const SearchBar = ({fetchWeather}) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if(city.trim()){
        fetchWeather(city);
        setCity("");
      }
    }

  return (
    <form className='flex' onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter City Name" value={city} onChange={(e) =>
          setCity(e.target.value)}
          className="flex-1 border border-gray-300 rounded-l-lg p-2 outline-none " />

      <button type="submit" className="bg-blue-500 text-white rounded-r-lg p-2 cursor-pointer hover:bg-blue-700 ">Search</button>
    </form>
  )
}


export default SearchBar
