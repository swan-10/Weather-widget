import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp () {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Dwarka",
        country: "IN",
        feelsLike: 8.52,
        humidity: 23,
        temp: 29.05,
        tempMax: 29.05,
        tempMin: 29.05,
        weather: "fog",
    });

    let updateInfo = (newinfo)=>{
        setWeatherInfo(newinfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}