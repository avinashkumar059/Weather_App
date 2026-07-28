import React from 'react'

const WeatherCard = ({weather}) => {
  return (
    <div className='mt-6'>
      <h2 className='text-2xl font-semibold text-center mt-4'>
        {weather.name}
      </h2>
      <div className='flex items-center justify-center mt-4'>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className='w-16 h-16' />

        <p className='text-4xl font-bold'>
            {Math.round(weather.main.temp)}°C
        </p>
      </div>
      <p className='text-center text-gray-600 capitalize'>
        {weather.weather[0].description}
      </p>
      <div className='grid grid-cols-2 gap-4 mt-6'>
        <div className='text-center'>
            <p className='text-gray-600'>Humidity</p>
            <p>{weather.main.humidity}%</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-600'>Wind</p>
            <p>{weather.wind.speed} </p>
        </div>
        <div className='text-center'>
            <p className='text-gray-600'>Pressure</p>
            <p>{weather.main.pressure} hPa</p>
        </div>
        <div className='text-center'>
            <p className='text-gray-600'>Feels like</p>
            <p>{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard
