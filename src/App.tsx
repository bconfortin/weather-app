import React, {useState} from 'react';
import WeatherBanner from "./Components/WeatherBanner";
import SearchBar from "./Components/SearchBar";
import './App.css';
import {BackgroundContainer, ContentContainer} from "./globalStyles";
import {library} from '@fortawesome/fontawesome-svg-core';
import {
    faArrowsRotate,
    faCloud,
    faCloudBolt,
    faCloudShowersHeavy,
    faCloudSun,
    faMagnifyingGlass,
    faSnowflake,
    faSpinner,
    faSun
} from '@fortawesome/free-solid-svg-icons';
import {getWeatherBgImage} from "./utils";
import styled from "styled-components";

library.add(faSun, faCloudBolt, faCloudShowersHeavy, faSnowflake, faCloud, faCloudSun, faArrowsRotate, faSpinner, faMagnifyingGlass);

const ImageAttributions = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #000;
  background-color: #fff;
  padding: 4px;
`;

const App = () => {
    const [forecast, setForecast] = useState<Record<string, any> | null>();
    const [city, setCity] = useState<string | null>();
    const {shortForecast} = forecast?.properties?.periods?.[0] || {};
    const bgImage = getWeatherBgImage(shortForecast);

    return (
        <BackgroundContainer bgImage={bgImage} data-testid="bg-container">
            <ContentContainer>
                <SearchBar setForecast={setForecast} setCity={setCity}/>
                {!!forecast && !!city && <WeatherBanner forecast={forecast} city={city}/>}
            </ContentContainer>
            <ImageAttributions>
                <p>
                    Sunny background image by <a
                    href="https://www.freepik.com/free-photo/sun-rays-cloudy-sky_12108626.htm#query=weather%20background%20sunny&position=15&from_view=search&track=ais">Freepik</a> on
                    Freepik. Cloudy background image by <a
                    href="https://www.freepik.com/free-photo/storm-clouds_1172981.htm#query=weather%20background&position=4&from_view=keyword&track=ais">freestockcenter</a> on
                    Freepik.
                </p>
            </ImageAttributions>
        </BackgroundContainer>
    );
}

export default App;
