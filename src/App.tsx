import React, {useState} from 'react';
import WeatherBanner from "./Components/WeatherBanner";
import {MainContainer} from "./globalStyles";
import SearchBar from "./SearchBar";
import './App.css';

const App = () => {
    const [forecast, setForecast] = useState<Record<string, any>>();
    const [city, setCity] = useState<string>();

    return (
        <MainContainer>
            <SearchBar setForecast={setForecast} setCity={setCity}/>
            {!!forecast && !!city && <WeatherBanner forecast={forecast} city={city}/>}
        </MainContainer>
    );
}

export default App;
