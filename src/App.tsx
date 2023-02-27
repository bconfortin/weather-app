import React, {useState} from 'react';
import WeatherBanner from "./Components/WeatherBanner";
import SearchBar from "./Components/SearchBar";
import './App.css';
import {BackgroundContainer, ContentContainer} from "./globalStyles";

// <a href="https://www.freepik.com/free-photo/storm-clouds_1172981.htm#query=weather%20background&position=4&from_view=keyword&track=ais">Image by freestockcenter</a> on Freepik

const pickBgImage = (shortForecast: string): string => {
    const isSunny = shortForecast?.toLowerCase().includes("sunny");
    return `${process.env.PUBLIC_URL}/${isSunny ? "bg-sunny.png" : "bg-cloudy.png"}`;
}

const App = () => {
    const [forecast, setForecast] = useState<Record<string, any>>();
    const [city, setCity] = useState<string>();
    const {shortForecast} = forecast?.properties?.periods?.[0] || {};
    const bgImage = !!shortForecast ? pickBgImage(shortForecast) : "";

    return (
        <BackgroundContainer bgImage={bgImage}>
            <ContentContainer>
                <SearchBar setForecast={setForecast} setCity={setCity}/>
                {!!forecast && !!city && <WeatherBanner forecast={forecast} city={city}/>}
            </ContentContainer>
        </BackgroundContainer>
    );
}

export default App;
