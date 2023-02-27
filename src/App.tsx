import React, {useState} from 'react';
import WeatherBanner from "./WeatherBanner";
import {Container} from "./globalStyles";
import SearchBar from "./SearchBar";
import './App.css';

const App = () => {
    const [forecast, setForecast] = useState<Record<string, any>>();
    const [city, setCity] = useState<string>();

    return (
        <Container>
            <SearchBar setForecast={setForecast} setCity={setCity}/>
            {!!forecast && !!city && <WeatherBanner forecast={forecast} city={city}/>}
        </Container>
    );
}

export default App;
